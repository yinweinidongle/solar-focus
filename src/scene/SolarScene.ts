import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import lensVert from '../shaders/lens.vert?raw'
import lensFrag from '../shaders/lens.frag?raw'
import paperVert from '../shaders/paper.vert?raw'
import paperFrag from '../shaders/paper.frag?raw'
import causticVert from '../shaders/caustic.vert?raw'
import causticFrag from '../shaders/caustic.frag?raw'
import coneVert from '../shaders/cone.vert?raw'
import coneFrag from '../shaders/cone.frag?raw'
import { HeatMap } from './HeatMap'
import { FireSmokeSystem } from './Particles'
import {
  makeWoodMaps,
  makePaperMaps,
  makeHandleWoodMap,
  makeContactShadowTexture,
  makeSkyEnvTexture,
} from './textures'

export type SceneCallbacks = {
  onHeat: (heat: number, stage: string, ignited: boolean) => void
}

const PAPER_W = 1.6
const PAPER_H = 1.1
const PAPER_Y = 0.025
const LENS_Y = 0.42
const SUN_DIR = new THREE.Vector3(0.35, 0.88, 0.25).normalize()

const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    darkness: { value: 0.42 },
    offset: { value: 1.25 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float darkness;
    uniform float offset;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float d = distance(vUv, vec2(0.5));
      float v = smoothstep(0.45, offset, d);
      c.rgb = mix(c.rgb, c.rgb * (1.0 - darkness), v);
      // Warm grade
      c.rgb = mix(c.rgb, c.rgb * vec3(1.04, 1.0, 0.94), 0.25);
      gl_FragColor = c;
    }
  `,
}

function stageFromHeat(h: number, ignited: boolean): string {
  if (ignited) return '点燃'
  if (h < 0.08) return '等待对焦'
  if (h < 0.28) return '微温'
  if (h < 0.55) return '焦黄'
  if (h < 0.78) return '炭化'
  if (h < 0.95) return '余烬'
  return '即将点燃'
}

export class SolarScene {
  private renderer: THREE.WebGLRenderer
  private scene = new THREE.Scene()
  private camera: THREE.PerspectiveCamera
  private controls: OrbitControls
  private composer: EffectComposer
  private clock = new THREE.Clock()
  private host: HTMLElement
  private callbacks: SceneCallbacks
  private raf = 0
  private disposed = false

  private lensGroup = new THREE.Group()
  private lensMesh!: THREE.Mesh
  private lensGlassParts: THREE.Object3D[] = []
  private paperMesh!: THREE.Mesh
  private paperMat!: THREE.ShaderMaterial
  private lensMat!: THREE.ShaderMaterial
  private causticMat!: THREE.ShaderMaterial
  private coneMat!: THREE.ShaderMaterial
  private causticMesh!: THREE.Mesh
  private coneMesh!: THREE.Mesh
  private heatMap: HeatMap
  private heatTex!: THREE.CanvasTexture
  private fire: FireSmokeSystem

  private refractionRT!: THREE.WebGLRenderTarget
  private sunLight!: THREE.DirectionalLight

  private raycaster = new THREE.Raycaster()
  private pointer = new THREE.Vector2()
  private dragPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -LENS_Y)
  private dragging = false
  private lastLensPos = new THREE.Vector3()
  private focusWorld = new THREE.Vector3()
  private focusUV = new THREE.Vector2(0.5, 0.5)
  private ignited = false
  private heat = 0
  private orbitEnabledDefault = true
  private alignment = 0

  private sunDir = SUN_DIR.clone()
  private tmp = new THREE.Vector3()
  private tmp2 = new THREE.Vector3()

  constructor(host: HTMLElement, callbacks: SceneCallbacks) {
    this.host = host
    this.callbacks = callbacks
    this.heatMap = new HeatMap(256)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(host.clientWidth, host.clientHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.12
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    host.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(38, host.clientWidth / Math.max(host.clientHeight, 1), 0.05, 80)
    this.camera.position.set(1.85, 1.45, 2.35)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.055
    this.controls.maxPolarAngle = Math.PI * 0.47
    this.controls.minDistance = 1.35
    this.controls.maxDistance = 5.5
    this.controls.target.set(0, 0.18, 0)

    this.buildEnvironment()
    this.buildLights()
    this.buildDesk()
    this.buildProps()
    this.buildPaper()
    this.buildLens()
    this.buildCaustics()
    this.buildSunDisc()

    this.fire = new FireSmokeSystem()
    this.scene.add(this.fire.group)

    const w = host.clientWidth
    const h = host.clientHeight
    this.refractionRT = new THREE.WebGLRenderTarget(Math.floor(w * 0.6), Math.floor(h * 0.6), {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.UnsignedByteType,
    })
    this.refractionRT.texture.colorSpace = THREE.SRGBColorSpace

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    const bloom = new UnrealBloomPass(new THREE.Vector2(w, h), 0.28, 0.55, 0.82)
    this.composer.addPass(bloom)
    this.composer.addPass(new ShaderPass(VignetteShader))

    this.bindEvents()
    this.lastLensPos.copy(this.lensGroup.position)
  }

  private buildEnvironment() {
    const skyCanvas = document.createElement('canvas')
    skyCanvas.width = 8
    skyCanvas.height = 512
    const g = skyCanvas.getContext('2d')!
    const grd = g.createLinearGradient(0, 0, 0, 512)
    grd.addColorStop(0.0, '#5b8fb8')
    grd.addColorStop(0.28, '#a8c4d8')
    grd.addColorStop(0.48, '#e8c090')
    grd.addColorStop(0.62, '#c9a078')
    grd.addColorStop(1.0, '#2a1c12')
    g.fillStyle = grd
    g.fillRect(0, 0, 8, 512)
    const bg = new THREE.CanvasTexture(skyCanvas)
    bg.colorSpace = THREE.SRGBColorSpace
    this.scene.background = bg

    // Soft atmospheric haze (not muddy black fog)
    this.scene.fog = new THREE.FogExp2(0xb08a68, 0.008)

    try {
      const env = makeSkyEnvTexture(this.renderer)
      this.scene.environment = env
    } catch {
      // PMREM optional fallback
    }
  }

  private buildLights() {
    const hemi = new THREE.HemisphereLight(0xffe2c0, 0x3d2a1a, 0.45)
    this.scene.add(hemi)

    const sun = new THREE.DirectionalLight(0xffe0a8, 3.4)
    sun.position.copy(this.sunDir.clone().multiplyScalar(8))
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far = 24
    sun.shadow.camera.left = -3.5
    sun.shadow.camera.right = 3.5
    sun.shadow.camera.top = 3.5
    sun.shadow.camera.bottom = -3.5
    sun.shadow.bias = -0.00015
    sun.shadow.normalBias = 0.02
    sun.shadow.radius = 2.5
    this.scene.add(sun)
    this.sunLight = sun

    // Cool sky fill / bounce
    const fill = new THREE.DirectionalLight(0x9bb8d8, 0.42)
    fill.position.set(-3, 2.5, -1.5)
    this.scene.add(fill)

    const bounce = new THREE.DirectionalLight(0xd4a574, 0.28)
    bounce.position.set(0.5, -0.2, 1.5)
    this.scene.add(bounce)

    const ambient = new THREE.AmbientLight(0xfff0dd, 0.12)
    this.scene.add(ambient)
  }

  private buildDesk() {
    const wood = makeWoodMaps(768)
    const mat = new THREE.MeshStandardMaterial({
      map: wood.albedo,
      roughnessMap: wood.roughness,
      normalMap: wood.normal,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughness: 0.85,
      metalness: 0.04,
      envMapIntensity: 0.55,
    })

    // Beveled thick desktop
    const desk = new THREE.Mesh(new RoundedBoxGeometry(4.6, 0.16, 3.3, 4, 0.04), mat)
    desk.position.y = -0.08
    desk.receiveShadow = true
    desk.castShadow = true
    this.scene.add(desk)

    // Legs
    const legMat = new THREE.MeshStandardMaterial({
      map: wood.albedo,
      roughnessMap: wood.roughness,
      normalMap: wood.normal,
      roughness: 0.9,
      metalness: 0.03,
      color: 0xd8c0a0,
    })
    const legGeo = new RoundedBoxGeometry(0.14, 0.72, 0.14, 2, 0.02)
    const legOffsets: [number, number][] = [
      [-2.0, -1.35],
      [2.0, -1.35],
      [-2.0, 1.35],
      [2.0, 1.35],
    ]
    for (const [x, z] of legOffsets) {
      const leg = new THREE.Mesh(legGeo, legMat)
      leg.position.set(x, -0.52, z)
      leg.castShadow = true
      leg.receiveShadow = true
      this.scene.add(leg)
    }

    // Floor / room ground plane for bounce feel
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(18, 18),
      new THREE.MeshStandardMaterial({ color: 0x2a1e16, roughness: 0.92, metalness: 0 }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.88
    floor.receiveShadow = true
    this.scene.add(floor)
  }

  private buildProps() {
    // Contact shadow under paper
    const shadowTex = makeContactShadowTexture(256)
    const contact = new THREE.Mesh(
      new THREE.PlaneGeometry(PAPER_W * 1.15, PAPER_H * 1.2),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.7, depthWrite: false }),
    )
    contact.rotation.x = -Math.PI / 2
    contact.position.set(0.02, 0.002, 0.02)
    this.scene.add(contact)

    // Pencil
    const pencilGroup = new THREE.Group()
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.012, 0.55, 12),
      new THREE.MeshStandardMaterial({ color: 0xd4a017, roughness: 0.55, metalness: 0.05 }),
    )
    body.rotation.z = Math.PI / 2
    body.castShadow = true
    pencilGroup.add(body)
    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.012, 0.05, 12),
      new THREE.MeshStandardMaterial({ color: 0xe8d4a8, roughness: 0.7 }),
    )
    tip.rotation.z = -Math.PI / 2
    tip.position.x = 0.3
    pencilGroup.add(tip)
    const graphite = new THREE.Mesh(
      new THREE.ConeGeometry(0.004, 0.018, 8),
      new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.4 }),
    )
    graphite.rotation.z = -Math.PI / 2
    graphite.position.x = 0.328
    pencilGroup.add(graphite)
    const eraser = new THREE.Mesh(
      new THREE.CylinderGeometry(0.013, 0.013, 0.03, 12),
      new THREE.MeshStandardMaterial({ color: 0xe8a0a0, roughness: 0.8 }),
    )
    eraser.rotation.z = Math.PI / 2
    eraser.position.x = -0.29
    pencilGroup.add(eraser)
    pencilGroup.position.set(-0.95, 0.02, 0.55)
    pencilGroup.rotation.y = 0.4
    this.scene.add(pencilGroup)

    // Coffee cup (simple lathe silhouette)
    const cupPoints = [
      new THREE.Vector2(0.0, 0),
      new THREE.Vector2(0.07, 0),
      new THREE.Vector2(0.075, 0.02),
      new THREE.Vector2(0.068, 0.14),
      new THREE.Vector2(0.072, 0.15),
      new THREE.Vector2(0.055, 0.15),
      new THREE.Vector2(0.05, 0.02),
      new THREE.Vector2(0.0, 0.02),
    ]
    const cup = new THREE.Mesh(
      new THREE.LatheGeometry(cupPoints, 32),
      new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.45, metalness: 0.05, envMapIntensity: 0.6 }),
    )
    cup.position.set(1.05, 0.0, 0.55)
    cup.castShadow = true
    cup.receiveShadow = true
    this.scene.add(cup)
    // Coffee liquid
    const coffee = new THREE.Mesh(
      new THREE.CircleGeometry(0.052, 24),
      new THREE.MeshStandardMaterial({ color: 0x2a1810, roughness: 0.35, metalness: 0.1 }),
    )
    coffee.rotation.x = -Math.PI / 2
    coffee.position.set(1.05, 0.138, 0.55)
    this.scene.add(coffee)
    // Handle
    const handle = new THREE.Mesh(
      new THREE.TorusGeometry(0.045, 0.01, 8, 16, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0xf2efe8, roughness: 0.45 }),
    )
    handle.position.set(1.13, 0.08, 0.55)
    handle.rotation.y = Math.PI / 2
    handle.castShadow = true
    this.scene.add(handle)

    // Small paper stack corner
    const stackMat = new THREE.MeshStandardMaterial({ color: 0xefe6d4, roughness: 0.85 })
    for (let i = 0; i < 4; i++) {
      const sheet = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.006, 0.58), stackMat)
      sheet.position.set(-1.15, 0.01 + i * 0.007, -0.55)
      sheet.rotation.y = -0.15 + i * 0.02
      sheet.castShadow = true
      sheet.receiveShadow = true
      this.scene.add(sheet)
    }
  }

  private buildPaper() {
    this.heatTex = new THREE.CanvasTexture(this.heatMap.canvas)
    this.heatTex.flipY = false
    this.heatTex.needsUpdate = true
    this.heatMap.attachTexture(this.heatTex)

    const maps = makePaperMaps(768)
    this.paperMat = new THREE.ShaderMaterial({
      uniforms: {
        uHeatMap: { value: this.heatTex },
        uFiber: { value: maps.albedo },
        uNormalMap: { value: maps.normal },
        uRoughMap: { value: maps.roughness },
        uTime: { value: 0 },
        uSunDir: { value: this.sunDir.clone() },
        uFocusUV: { value: new THREE.Vector2(0.5, 0.5) },
        uFocusIntensity: { value: 0 },
        uIgnited: { value: 0 },
      },
      vertexShader: paperVert,
      fragmentShader: paperFrag,
      transparent: true,
      side: THREE.DoubleSide,
    })
    // Higher-res plane for curl displacement
    this.paperMesh = new THREE.Mesh(new THREE.PlaneGeometry(PAPER_W, PAPER_H, 48, 32), this.paperMat)
    this.paperMesh.rotation.x = -Math.PI / 2
    this.paperMesh.position.y = PAPER_Y
    this.paperMesh.receiveShadow = true
    this.scene.add(this.paperMesh)
  }

  private buildLens() {
    this.lensGroup.position.set(0.05, LENS_Y, 0.05)
    // Slight tilt toward sun for cinematic silhouette
    this.lensGroup.rotation.x = -0.12
    this.lensGroup.rotation.z = 0.08

    const brass = new THREE.MeshStandardMaterial({
      color: 0xc4a06a,
      metalness: 0.92,
      roughness: 0.28,
      envMapIntensity: 1.2,
    })
    const brassDark = new THREE.MeshStandardMaterial({
      color: 0x8a6a3c,
      metalness: 0.88,
      roughness: 0.38,
      envMapIntensity: 1.0,
    })

    // Thicker rim
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.022, 20, 72), brass)
    rim.rotation.x = Math.PI / 2
    rim.castShadow = true
    this.lensGroup.add(rim)

    const rimInner = new THREE.Mesh(new THREE.TorusGeometry(0.205, 0.008, 12, 64), brassDark)
    rimInner.rotation.x = Math.PI / 2
    this.lensGroup.add(rimInner)

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.238, 0.007, 12, 64), brass)
    ring.rotation.x = Math.PI / 2
    this.lensGroup.add(ring)

    // Turned wooden handle with grain
    const handleTex = makeHandleWoodMap(256)
    const handleMat = new THREE.MeshStandardMaterial({
      map: handleTex,
      roughness: 0.62,
      metalness: 0.05,
      envMapIntensity: 0.4,
    })
    // Slight taper via lathe
    const handlePts = [
      new THREE.Vector2(0.02, -0.22),
      new THREE.Vector2(0.026, -0.18),
      new THREE.Vector2(0.028, -0.05),
      new THREE.Vector2(0.024, 0.08),
      new THREE.Vector2(0.02, 0.18),
      new THREE.Vector2(0.016, 0.22),
    ]
    const handle = new THREE.Mesh(new THREE.LatheGeometry(handlePts, 24), handleMat)
    handle.rotation.z = Math.PI / 2.35
    handle.position.set(0.4, -0.05, 0)
    handle.castShadow = true
    this.lensGroup.add(handle)

    const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.03, 0.05, 20), brass)
    ferrule.rotation.z = Math.PI / 2.35
    ferrule.position.set(0.205, -0.015, 0)
    ferrule.castShadow = true
    this.lensGroup.add(ferrule)

    // Biconvex glass — two flattened spheres
    this.lensMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: this.sunDir.clone() },
        uSceneTex: { value: null as THREE.Texture | null },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uIOR: { value: 1.52 },
        uAberration: { value: 0.018 },
        uFresnelPower: { value: 4.0 },
        uMagnify: { value: 1.0 },
      },
      vertexShader: lensVert,
      fragmentShader: lensFrag,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })

    const glassGeo = new THREE.SphereGeometry(0.2, 64, 40)
    const top = new THREE.Mesh(glassGeo, this.lensMat)
    top.scale.set(1, 0.32, 1)
    top.position.y = 0.012
    this.lensGroup.add(top)
    this.lensGlassParts.push(top)
    this.lensMesh = top

    const bottom = new THREE.Mesh(glassGeo, this.lensMat)
    bottom.scale.set(1, 0.32, 1)
    bottom.position.y = -0.012
    this.lensGroup.add(bottom)
    this.lensGlassParts.push(bottom)

    // Soft caustic blob under glass (not hard black disc) — exclude glass from casting shadow
    // Rim alone casts crisp shadow; glass does not
    rim.castShadow = true
    ring.castShadow = true

    this.scene.add(this.lensGroup)
  }

  private buildCaustics() {
    this.causticMat = new THREE.ShaderMaterial({
      uniforms: {
        uIntensity: { value: 0 },
        uTime: { value: 0 },
        uRadius: { value: 0.55 },
      },
      vertexShader: causticVert,
      fragmentShader: causticFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.causticMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.42, 0.42), this.causticMat)
    this.causticMesh.rotation.x = -Math.PI / 2
    this.causticMesh.position.y = PAPER_Y + 0.006
    this.scene.add(this.causticMesh)

    this.coneMat = new THREE.ShaderMaterial({
      uniforms: { uIntensity: { value: 0 }, uTime: { value: 0 } },
      vertexShader: coneVert,
      fragmentShader: coneFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    })
    this.coneMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.2, 1, 32, 1, true), this.coneMat)
    this.scene.add(this.coneMesh)
  }

  private buildSunDisc() {
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffe8b0, transparent: true, opacity: 0.98 })
    const sun = new THREE.Mesh(new THREE.CircleGeometry(0.7, 48), sunMat)
    sun.position.copy(this.sunDir.clone().multiplyScalar(14))
    sun.lookAt(0, 0, 0)
    this.scene.add(sun)

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffc878,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const glow = new THREE.Mesh(new THREE.CircleGeometry(1.8, 48), glowMat)
    glow.position.copy(sun.position)
    glow.lookAt(0, 0, 0)
    this.scene.add(glow)

    // Window light suggestion — soft bright quad
    const windowGlow = new THREE.Mesh(
      new THREE.PlaneGeometry(3.5, 2.2),
      new THREE.MeshBasicMaterial({
        color: 0xffd8a0,
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      }),
    )
    windowGlow.position.copy(this.sunDir.clone().multiplyScalar(6))
    windowGlow.lookAt(0, 0.2, 0)
    this.scene.add(windowGlow)
  }

  private bindEvents() {
    const el = this.renderer.domElement
    el.addEventListener('pointerdown', this.onPointerDown)
    window.addEventListener('pointermove', this.onPointerMove)
    window.addEventListener('pointerup', this.onPointerUp)
    window.addEventListener('resize', this.onResize)
  }

  private unbindEvents() {
    const el = this.renderer.domElement
    el.removeEventListener('pointerdown', this.onPointerDown)
    window.removeEventListener('pointermove', this.onPointerMove)
    window.removeEventListener('pointerup', this.onPointerUp)
    window.removeEventListener('resize', this.onResize)
  }

  private onPointerDown = (e: PointerEvent) => {
    this.updatePointer(e)
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hits = this.raycaster.intersectObject(this.lensGroup, true)
    if (hits.length) {
      this.dragging = true
      this.controls.enabled = false
      this.renderer.domElement.setPointerCapture(e.pointerId)
      this.moveLensToPointer()
    }
  }

  private onPointerMove = (e: PointerEvent) => {
    this.updatePointer(e)
    if (this.dragging) this.moveLensToPointer()
  }

  private onPointerUp = () => {
    if (!this.dragging) return
    this.dragging = false
    this.controls.enabled = this.orbitEnabledDefault
  }

  private updatePointer(e: PointerEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect()
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  private moveLensToPointer() {
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hit = new THREE.Vector3()
    if (this.raycaster.ray.intersectPlane(this.dragPlane, hit)) {
      hit.x = THREE.MathUtils.clamp(hit.x, -1.1, 1.1)
      hit.z = THREE.MathUtils.clamp(hit.z, -0.75, 0.75)
      hit.y = LENS_Y
      this.lensGroup.position.copy(hit)
    }
  }

  private computeFocus() {
    const lensPos = this.lensGroup.position
    const dir = this.sunDir.clone().negate().normalize()
    const t = (PAPER_Y - lensPos.y) / dir.y
    this.focusWorld.set(lensPos.x + dir.x * t, PAPER_Y, lensPos.z + dir.z * t)

    const u = (this.focusWorld.x + PAPER_W * 0.5) / PAPER_W
    const v = 1 - (this.focusWorld.z + PAPER_H * 0.5) / PAPER_H
    this.focusUV.set(u, v)

    const onPaper = u >= 0 && u <= 1 && v >= 0 && v <= 1
    return onPaper
  }

  private updateOptics(dt: number) {
    const onPaper = this.computeFocus()
    const moved = this.lensGroup.position.distanceTo(this.lastLensPos)
    const speed = moved / Math.max(dt, 1e-4)
    const speedFactor = THREE.MathUtils.clamp(1 - speed / 1.8, 0, 1)
    this.lastLensPos.copy(this.lensGroup.position)

    // Alignment quality: on paper + stillness (height fixed at optimal)
    const alignTarget = onPaper ? 0.55 + speedFactor * 0.45 : 0.05
    this.alignment = THREE.MathUtils.damp(this.alignment, alignTarget, 4.5, dt)
    const intensity = this.alignment

    this.causticMat.uniforms.uIntensity.value = intensity
    this.causticMat.uniforms.uTime.value = this.clock.elapsedTime
    this.causticMesh.position.x = this.focusWorld.x
    this.causticMesh.position.z = this.focusWorld.z
    const scale = 0.65 + (1 - speedFactor) * 0.85
    this.causticMesh.scale.setScalar(scale)

    const mid = this.tmp.copy(this.lensGroup.position).add(this.focusWorld).multiplyScalar(0.5)
    const len = this.lensGroup.position.distanceTo(this.focusWorld)
    this.coneMesh.position.copy(mid)
    this.coneMesh.scale.set(1, len, 1)
    this.coneMesh.lookAt(this.focusWorld)
    this.coneMesh.rotateX(Math.PI / 2)
    // God-ray only when reasonably aligned
    const coneVis = Math.pow(Math.max(intensity - 0.25, 0) / 0.75, 1.4)
    this.coneMat.uniforms.uIntensity.value = coneVis
    this.coneMat.uniforms.uTime.value = this.clock.elapsedTime
    this.coneMesh.visible = coneVis > 0.02

    this.paperMat.uniforms.uFocusUV.value.copy(this.focusUV)
    this.paperMat.uniforms.uFocusIntensity.value = onPaper ? intensity : 0
    this.paperMat.uniforms.uTime.value = this.clock.elapsedTime
    this.lensMat.uniforms.uTime.value = this.clock.elapsedTime
    this.lensMat.uniforms.uMagnify.value = 0.85 + intensity * 0.35

    if (!this.ignited) {
      this.heat = this.heatMap.accumulate(this.focusUV.x, this.focusUV.y, dt, speedFactor, onPaper)
      if (this.heat >= 0.98) {
        this.ignited = true
        this.heatMap.setIgnited(true)
        this.paperMat.uniforms.uIgnited.value = 1
        this.fire.setBurning(true)
      }
    } else {
      this.heatMap.accumulate(this.focusUV.x, this.focusUV.y, dt * 0.35, 1, onPaper)
      this.heat = Math.max(this.heat, this.heatMap.maxHeat())
    }

    this.fire.setOrigin(this.focusWorld.clone().setY(PAPER_Y + 0.02))
    this.fire.update(dt)

    this.callbacks.onHeat(this.heat, stageFromHeat(this.heat, this.ignited), this.ignited)
  }

  private renderRefraction() {
    // Capture scene without glass for screen-space refraction / magnification
    for (const p of this.lensGlassParts) p.visible = false
    this.coneMesh.visible = false
    this.causticMesh.visible = false
    this.fire.group.visible = false

    this.renderer.setRenderTarget(this.refractionRT)
    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
    this.renderer.setRenderTarget(null)

    for (const p of this.lensGlassParts) p.visible = true
    this.causticMesh.visible = true
    this.fire.group.visible = true
    // cone visibility restored in updateOptics next frame; keep current
    this.lensMat.uniforms.uSceneTex.value = this.refractionRT.texture
    this.lensMat.uniforms.uResolution.value.set(this.refractionRT.width, this.refractionRT.height)
  }

  private onResize = () => {
    const w = this.host.clientWidth
    const h = Math.max(this.host.clientHeight, 1)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
    this.refractionRT.setSize(Math.floor(w * 0.6), Math.floor(h * 0.6))
  }

  start() {
    const loop = () => {
      if (this.disposed) return
      this.raf = requestAnimationFrame(loop)
      const dt = Math.min(this.clock.getDelta(), 0.05)
      this.controls.update()
      this.updateOptics(dt)
      this.renderRefraction()
      this.composer.render()
    }
    loop()
  }

  reset() {
    this.ignited = false
    this.heat = 0
    this.alignment = 0
    this.heatMap.reset()
    this.paperMat.uniforms.uIgnited.value = 0
    this.fire.setBurning(false)
    this.lensGroup.position.set(0.05, LENS_Y, 0.05)
    this.lastLensPos.copy(this.lensGroup.position)
    this.callbacks.onHeat(0, '等待对焦', false)
  }

  dispose() {
    this.disposed = true
    cancelAnimationFrame(this.raf)
    this.unbindEvents()
    this.controls.dispose()
    this.fire.dispose()
    this.composer.dispose()
    this.refractionRT.dispose()
    this.renderer.dispose()
    this.host.removeChild(this.renderer.domElement)
  }
}
