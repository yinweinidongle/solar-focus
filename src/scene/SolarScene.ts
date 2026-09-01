import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
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

export type SceneCallbacks = {
  onHeat: (heat: number, stage: string, ignited: boolean) => void
}

const PAPER_W = 1.6
const PAPER_H = 1.1
const PAPER_Y = 0.02
const LENS_Y = 0.42
const SUN_DIR = new THREE.Vector3(0.35, 0.88, 0.25).normalize()

const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    darkness: { value: 0.55 },
    offset: { value: 1.15 },
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
      float v = smoothstep(0.4, offset, d);
      c.rgb = mix(c.rgb, c.rgb * (1.0 - darkness), v);
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

function makeWoodTexture() {
  const c = document.createElement('canvas')
  c.width = 512
  c.height = 512
  const g = c.getContext('2d')!
  g.fillStyle = '#6b4226'
  g.fillRect(0, 0, 512, 512)
  for (let i = 0; i < 80; i++) {
    const y = (i / 80) * 512 + Math.sin(i * 1.7) * 6
    g.strokeStyle = `rgba(${80 + (i % 20)}, ${45 + (i % 15)}, ${20}, ${0.15 + (i % 5) * 0.04})`
    g.lineWidth = 2 + (i % 3)
    g.beginPath()
    g.moveTo(0, y)
    for (let x = 0; x <= 512; x += 16) {
      g.lineTo(x, y + Math.sin(x * 0.04 + i) * 4)
    }
    g.stroke()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(3, 3)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

function makeFiberTexture() {
  const c = document.createElement('canvas')
  c.width = 256
  c.height = 256
  const g = c.getContext('2d')!
  g.fillStyle = '#ebe0cc'
  g.fillRect(0, 0, 256, 256)
  for (let i = 0; i < 1200; i++) {
    const x = Math.random() * 256
    const y = Math.random() * 256
    const a = 0.04 + Math.random() * 0.08
    g.strokeStyle = `rgba(120,100,70,${a})`
    g.beginPath()
    g.moveTo(x, y)
    g.lineTo(x + (Math.random() - 0.5) * 18, y + (Math.random() - 0.5) * 18)
    g.stroke()
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
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

  private sunDir = SUN_DIR.clone()
  private tmp = new THREE.Vector3()
  private tmp2 = new THREE.Vector3()

  constructor(host: HTMLElement, callbacks: SceneCallbacks) {
    this.host = host
    this.callbacks = callbacks
    this.heatMap = new HeatMap(256)

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.setSize(host.clientWidth, host.clientHeight)
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.05
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    host.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(42, host.clientWidth / Math.max(host.clientHeight, 1), 0.05, 50)
    this.camera.position.set(1.6, 1.55, 2.15)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.06
    this.controls.maxPolarAngle = Math.PI * 0.48
    this.controls.minDistance = 1.2
    this.controls.maxDistance = 5
    this.controls.target.set(0, 0.15, 0)

    this.scene.background = new THREE.Color(0x1a120c)
    this.scene.fog = new THREE.FogExp2(0x1a120c, 0.035)

    this.buildLights()
    this.buildDesk()
    this.buildPaper()
    this.buildLens()
    this.buildCaustics()
    this.buildSunDisc()

    this.fire = new FireSmokeSystem()
    this.scene.add(this.fire.group)

    this.composer = new EffectComposer(this.renderer)
    this.composer.addPass(new RenderPass(this.scene, this.camera))
    const bloom = new UnrealBloomPass(new THREE.Vector2(host.clientWidth, host.clientHeight), 0.35, 0.6, 0.85)
    this.composer.addPass(bloom)
    this.composer.addPass(new ShaderPass(VignetteShader))

    this.bindEvents()
    this.lastLensPos.copy(this.lensGroup.position)
  }

  private buildLights() {
    const hemi = new THREE.HemisphereLight(0xffd6a0, 0x3a2818, 0.55)
    this.scene.add(hemi)
    const sun = new THREE.DirectionalLight(0xffe2b0, 2.2)
    sun.position.copy(this.sunDir.clone().multiplyScalar(6))
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 0.5
    sun.shadow.camera.far = 20
    sun.shadow.camera.left = -3
    sun.shadow.camera.right = 3
    sun.shadow.camera.top = 3
    sun.shadow.camera.bottom = -3
    sun.shadow.bias = -0.0002
    this.scene.add(sun)
    const fill = new THREE.DirectionalLight(0x88aacc, 0.25)
    fill.position.set(-2, 2, -1)
    this.scene.add(fill)
  }

  private buildDesk() {
    const wood = makeWoodTexture()
    const desk = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 0.12, 3.2),
      new THREE.MeshStandardMaterial({ map: wood, roughness: 0.72, metalness: 0.05 }),
    )
    desk.position.y = -0.06
    desk.receiveShadow = true
    desk.castShadow = true
    this.scene.add(desk)

    const edge = new THREE.Mesh(
      new THREE.BoxGeometry(4.6, 0.04, 3.3),
      new THREE.MeshStandardMaterial({ color: 0x4a2f1a, roughness: 0.8 }),
    )
    edge.position.y = -0.13
    this.scene.add(edge)
  }

  private buildPaper() {
    this.heatTex = new THREE.CanvasTexture(this.heatMap.canvas)
    this.heatTex.flipY = false
    this.heatTex.needsUpdate = true
    this.heatMap.attachTexture(this.heatTex)

    const fiber = makeFiberTexture()
    this.paperMat = new THREE.ShaderMaterial({
      uniforms: {
        uHeatMap: { value: this.heatTex },
        uFiber: { value: fiber },
        uTime: { value: 0 },
        uSunDir: { value: this.sunDir.clone() },
        uFocusUV: { value: new THREE.Vector2(0.5, 0.5) },
        uFocusIntensity: { value: 0 },
        uIgnited: { value: 0 },
      },
      vertexShader: paperVert,
      fragmentShader: paperFrag,
      transparent: true,
    })
    this.paperMesh = new THREE.Mesh(new THREE.PlaneGeometry(PAPER_W, PAPER_H), this.paperMat)
    this.paperMesh.rotation.x = -Math.PI / 2
    this.paperMesh.position.y = PAPER_Y
    this.paperMesh.receiveShadow = true
    this.scene.add(this.paperMesh)
  }

  private buildLens() {
    this.lensGroup.position.set(0.05, LENS_Y, 0.05)

    // Brass rim
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xb08d57,
      metalness: 0.85,
      roughness: 0.28,
    })
    const rim = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.018, 16, 64), rimMat)
    rim.rotation.x = Math.PI / 2
    rim.castShadow = true
    this.lensGroup.add(rim)

    // Outer ring plate
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.235, 0.008, 12, 64), rimMat)
    ring.rotation.x = Math.PI / 2
    this.lensGroup.add(ring)

    // Handle
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.022, 0.028, 0.45, 16),
      new THREE.MeshStandardMaterial({ color: 0x5a3a22, roughness: 0.65, metalness: 0.1 }),
    )
    handle.rotation.z = Math.PI / 2.4
    handle.position.set(0.38, -0.04, 0)
    handle.castShadow = true
    this.lensGroup.add(handle)

    const ferrule = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.04, 16), rimMat)
    ferrule.rotation.z = Math.PI / 2.4
    ferrule.position.set(0.2, -0.01, 0)
    this.lensGroup.add(ferrule)

    this.lensMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSunDir: { value: this.sunDir.clone() },
        uIOR: { value: 1.45 },
        uAberration: { value: 0.025 },
        uFresnelPower: { value: 3.5 },
      },
      vertexShader: lensVert,
      fragmentShader: lensFrag,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })
    this.lensMesh = new THREE.Mesh(new THREE.SphereGeometry(0.2, 48, 32, 0, Math.PI * 2, 0, Math.PI * 0.55), this.lensMat)
    this.lensMesh.scale.set(1, 0.28, 1)
    this.lensMesh.rotation.x = Math.PI
    this.lensGroup.add(this.lensMesh)

    // Bottom convex for double-sided look
    const lensBottom = this.lensMesh.clone()
    lensBottom.rotation.x = 0
    lensBottom.position.y = -0.01
    this.lensGroup.add(lensBottom)

    this.scene.add(this.lensGroup)
  }

  private buildCaustics() {
    this.causticMat = new THREE.ShaderMaterial({
      uniforms: {
        uIntensity: { value: 0 },
        uTime: { value: 0 },
        uRadius: { value: 0.5 },
      },
      vertexShader: causticVert,
      fragmentShader: causticFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.causticMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.35, 0.35), this.causticMat)
    this.causticMesh.rotation.x = -Math.PI / 2
    this.causticMesh.position.y = PAPER_Y + 0.005
    this.scene.add(this.causticMesh)

    this.coneMat = new THREE.ShaderMaterial({
      uniforms: { uIntensity: { value: 0 } },
      vertexShader: coneVert,
      fragmentShader: coneFrag,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    })
    this.coneMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.18, 1, 24, 1, true), this.coneMat)
    this.scene.add(this.coneMesh)
  }

  private buildSunDisc() {
    const sunMat = new THREE.MeshBasicMaterial({ color: 0xffe6a8, transparent: true, opacity: 0.95 })
    const sun = new THREE.Mesh(new THREE.CircleGeometry(0.55, 32), sunMat)
    sun.position.copy(this.sunDir.clone().multiplyScalar(12))
    sun.lookAt(0, 0, 0)
    this.scene.add(sun)

    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffc878,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const glow = new THREE.Mesh(new THREE.CircleGeometry(1.4, 32), glowMat)
    glow.position.copy(sun.position)
    glow.lookAt(0, 0, 0)
    this.scene.add(glow)
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
    // Ray from sun through lens center onto paper plane y = PAPER_Y
    const lensPos = this.lensGroup.position
    const dir = this.sunDir.clone().negate().normalize()
    // Focus roughly under the lens along sun direction onto paper
    const t = (PAPER_Y - lensPos.y) / dir.y
    this.focusWorld.set(lensPos.x + dir.x * t, PAPER_Y, lensPos.z + dir.z * t)

    // UV on paper
    const u = (this.focusWorld.x + PAPER_W * 0.5) / PAPER_W
    // PlaneGeometry rotated -90deg X: local +Y -> world -Z, so v flips with z
    const v = 1 - (this.focusWorld.z + PAPER_H * 0.5) / PAPER_H
    this.focusUV.set(u, v)

    const onPaper = u >= 0 && u <= 1 && v >= 0 && v <= 1
    return onPaper
  }

  private updateOptics(dt: number) {
    const onPaper = this.computeFocus()
    const moved = this.lensGroup.position.distanceTo(this.lastLensPos)
    const speed = moved / Math.max(dt, 1e-4)
    // Still => 1, fast move => ~0
    const speedFactor = THREE.MathUtils.clamp(1 - speed / 1.8, 0, 1)
    this.lastLensPos.copy(this.lensGroup.position)

    const intensity = onPaper ? 0.55 + speedFactor * 0.45 : 0.1
    this.causticMat.uniforms.uIntensity.value = intensity
    this.causticMat.uniforms.uTime.value = this.clock.elapsedTime
    this.causticMesh.position.x = this.focusWorld.x
    this.causticMesh.position.z = this.focusWorld.z
    const scale = 0.7 + (1 - speedFactor) * 0.8
    this.causticMesh.scale.setScalar(scale)

    // Light cone from lens to focus
    const mid = this.tmp.copy(this.lensGroup.position).add(this.focusWorld).multiplyScalar(0.5)
    const len = this.lensGroup.position.distanceTo(this.focusWorld)
    this.coneMesh.position.copy(mid)
    this.coneMesh.scale.set(1, len, 1)
    this.coneMesh.lookAt(this.focusWorld)
    this.coneMesh.rotateX(Math.PI / 2)
    this.coneMat.uniforms.uIntensity.value = intensity

    this.paperMat.uniforms.uFocusUV.value.copy(this.focusUV)
    this.paperMat.uniforms.uFocusIntensity.value = onPaper ? intensity : 0
    this.paperMat.uniforms.uTime.value = this.clock.elapsedTime
    this.lensMat.uniforms.uTime.value = this.clock.elapsedTime

    if (!this.ignited) {
      this.heat = this.heatMap.accumulate(this.focusUV.x, this.focusUV.y, dt, speedFactor, onPaper)
      if (this.heat >= 0.98) {
        this.ignited = true
        this.heatMap.setIgnited(true)
        this.paperMat.uniforms.uIgnited.value = 1
        this.fire.setBurning(true)
      }
    } else {
      // Keep feeding a bit so hole grows
      this.heatMap.accumulate(this.focusUV.x, this.focusUV.y, dt * 0.35, 1, onPaper)
      this.heat = Math.max(this.heat, this.heatMap.maxHeat())
    }

    this.fire.setOrigin(this.focusWorld.clone().setY(PAPER_Y + 0.02))
    this.fire.update(dt)

    this.callbacks.onHeat(this.heat, stageFromHeat(this.heat, this.ignited), this.ignited)
  }

  private onResize = () => {
    const w = this.host.clientWidth
    const h = Math.max(this.host.clientHeight, 1)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(w, h)
    this.composer.setSize(w, h)
  }

  start() {
    const loop = () => {
      if (this.disposed) return
      this.raf = requestAnimationFrame(loop)
      const dt = Math.min(this.clock.getDelta(), 0.05)
      this.controls.update()
      this.updateOptics(dt)
      this.composer.render()
    }
    loop()
  }

  reset() {
    this.ignited = false
    this.heat = 0
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
    this.renderer.dispose()
    this.host.removeChild(this.renderer.domElement)
  }
}
