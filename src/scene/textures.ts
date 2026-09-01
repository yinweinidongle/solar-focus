import * as THREE from 'three'

function noise2(x: number, y: number) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453
  return s - Math.floor(s)
}

function fbm(x: number, y: number, oct = 5) {
  let v = 0
  let a = 0.5
  let f = 1
  for (let i = 0; i < oct; i++) {
    v += a * noise2(x * f, y * f)
    f *= 2.02
    a *= 0.5
  }
  return v
}

/** High-quality procedural wood albedo + roughness + normal (from height). */
export function makeWoodMaps(size = 1024) {
  const albedo = document.createElement('canvas')
  const rough = document.createElement('canvas')
  const height = document.createElement('canvas')
  albedo.width = albedo.height = size
  rough.width = rough.height = size
  height.width = height.height = size
  const ga = albedo.getContext('2d')!
  const gr = rough.getContext('2d')!
  const gh = height.getContext('2d')!
  const ia = ga.createImageData(size, size)
  const ir = gr.createImageData(size, size)
  const ih = gh.createImageData(size, size)

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size
      const v = y / size
      // Distorted grain rings / streaks along X
      const warp = fbm(u * 3.5, v * 0.8, 4) * 0.35
      const grain = fbm(u * 0.6 + warp, v * 14.0 + warp * 2.0, 5)
      const pore = fbm(u * 28.0, v * 40.0, 3)
      const ring = Math.sin((v * 18.0 + warp * 6.0 + grain * 2.0) * Math.PI) * 0.5 + 0.5

      const baseR = 118 + grain * 42 + ring * 18
      const baseG = 72 + grain * 28 + ring * 10
      const baseB = 38 + grain * 14 + pore * 8
      const shade = 0.82 + pore * 0.12 + ring * 0.08
      const o = (y * size + x) * 4
      ia.data[o] = Math.min(255, baseR * shade)
      ia.data[o + 1] = Math.min(255, baseG * shade)
      ia.data[o + 2] = Math.min(255, baseB * shade)
      ia.data[o + 3] = 255

      const rgh = 0.55 + grain * 0.28 + pore * 0.18
      const rv = Math.floor(THREE.MathUtils.clamp(rgh, 0.35, 0.95) * 255)
      ir.data[o] = rv
      ir.data[o + 1] = rv
      ir.data[o + 2] = rv
      ir.data[o + 3] = 255

      const h = Math.floor((grain * 0.65 + ring * 0.25 + pore * 0.1) * 255)
      ih.data[o] = h
      ih.data[o + 1] = h
      ih.data[o + 2] = h
      ih.data[o + 3] = 255
    }
  }
  ga.putImageData(ia, 0, 0)
  gr.putImageData(ir, 0, 0)
  gh.putImageData(ih, 0, 0)

  const albedoTex = new THREE.CanvasTexture(albedo)
  albedoTex.wrapS = albedoTex.wrapT = THREE.RepeatWrapping
  albedoTex.repeat.set(2.2, 2.2)
  albedoTex.colorSpace = THREE.SRGBColorSpace
  albedoTex.anisotropy = 8

  const roughTex = new THREE.CanvasTexture(rough)
  roughTex.wrapS = roughTex.wrapT = THREE.RepeatWrapping
  roughTex.repeat.copy(albedoTex.repeat)
  roughTex.anisotropy = 4

  const normalTex = heightToNormal(height, 2.4)
  normalTex.wrapS = normalTex.wrapT = THREE.RepeatWrapping
  normalTex.repeat.copy(albedoTex.repeat)
  normalTex.anisotropy = 4

  return { albedo: albedoTex, roughness: roughTex, normal: normalTex }
}

function heightToNormal(heightCanvas: HTMLCanvasElement, strength = 2.0) {
  const size = heightCanvas.width
  const g = heightCanvas.getContext('2d')!
  const src = g.getImageData(0, 0, size, size).data
  const out = document.createElement('canvas')
  out.width = out.height = size
  const og = out.getContext('2d')!
  const img = og.createImageData(size, size)
  const at = (x: number, y: number) => {
    const xx = (x + size) % size
    const yy = (y + size) % size
    return src[(yy * size + xx) * 4] / 255
  }
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength
      const nx = -dx
      const ny = -dy
      const nz = 1
      const len = Math.hypot(nx, ny, nz) || 1
      const o = (y * size + x) * 4
      img.data[o] = Math.floor((nx / len * 0.5 + 0.5) * 255)
      img.data[o + 1] = Math.floor((ny / len * 0.5 + 0.5) * 255)
      img.data[o + 2] = Math.floor((nz / len * 0.5 + 0.5) * 255)
      img.data[o + 3] = 255
    }
  }
  og.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(out)
  return tex
}

/** Paper fiber albedo + height/normal + roughness variation. */
export function makePaperMaps(size = 1024) {
  const albedo = document.createElement('canvas')
  const height = document.createElement('canvas')
  const rough = document.createElement('canvas')
  albedo.width = albedo.height = size
  height.width = height.height = size
  rough.width = rough.height = size
  const ga = albedo.getContext('2d')!
  const gh = height.getContext('2d')!
  const gr = rough.getContext('2d')!
  const ia = ga.createImageData(size, size)
  const ih = gh.createImageData(size, size)
  const ir = gr.createImageData(size, size)

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size
      const v = y / size
      const fiberA = fbm(u * 40.0, v * 55.0, 4)
      const fiberB = fbm(u * 90.0 + 10.0, v * 20.0, 3)
      const speck = noise2(u * 200.0, v * 200.0)
      const pulp = fbm(u * 6.0, v * 6.0, 3)

      const cream = 0.90 + pulp * 0.06 + fiberA * 0.04
      const r = cream * 242 + fiberB * 8 - speck * 6
      const g = cream * 230 + fiberA * 6 - speck * 4
      const b = cream * 205 + fiberB * 4

      const o = (y * size + x) * 4
      ia.data[o] = Math.min(255, Math.max(0, r))
      ia.data[o + 1] = Math.min(255, Math.max(0, g))
      ia.data[o + 2] = Math.min(255, Math.max(0, b))
      ia.data[o + 3] = 255

      const h = Math.floor((fiberA * 0.55 + fiberB * 0.3 + pulp * 0.15) * 255)
      ih.data[o] = h
      ih.data[o + 1] = h
      ih.data[o + 2] = h
      ih.data[o + 3] = 255

      const rv = Math.floor((0.72 + fiberA * 0.18 + speck * 0.08) * 255)
      ir.data[o] = rv
      ir.data[o + 1] = rv
      ir.data[o + 2] = rv
      ir.data[o + 3] = 255
    }
  }
  ga.putImageData(ia, 0, 0)
  gh.putImageData(ih, 0, 0)
  gr.putImageData(ir, 0, 0)

  // Soft ruled lines / watermark hint
  ga.strokeStyle = 'rgba(160,140,110,0.06)'
  ga.lineWidth = 1
  for (let i = 0; i < 18; i++) {
    const yy = ((i + 1) / 19) * size
    ga.beginPath()
    ga.moveTo(size * 0.06, yy)
    ga.lineTo(size * 0.94, yy)
    ga.stroke()
  }

  const albedoTex = new THREE.CanvasTexture(albedo)
  albedoTex.colorSpace = THREE.SRGBColorSpace
  albedoTex.anisotropy = 8
  const normalTex = heightToNormal(height, 1.6)
  const roughTex = new THREE.CanvasTexture(rough)
  return { albedo: albedoTex, normal: normalTex, roughness: roughTex }
}

/** Turned-wood handle grain. */
export function makeHandleWoodMap(size = 256) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')!
  const img = g.createImageData(size, size)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / size
      const v = y / size
      const grain = fbm(u * 2.0, v * 18.0, 4)
      const r = 92 + grain * 50
      const gg = 54 + grain * 30
      const b = 28 + grain * 14
      const o = (y * size + x) * 4
      img.data[o] = r
      img.data[o + 1] = gg
      img.data[o + 2] = b
      img.data[o + 3] = 255
    }
  }
  g.putImageData(img, 0, 0)
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

/** Soft contact-shadow / AO disc under paper. */
export function makeContactShadowTexture(size = 256) {
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')!
  const grd = g.createRadialGradient(size / 2, size / 2, size * 0.15, size / 2, size / 2, size * 0.48)
  grd.addColorStop(0, 'rgba(0,0,0,0.35)')
  grd.addColorStop(0.45, 'rgba(0,0,0,0.14)')
  grd.addColorStop(1, 'rgba(0,0,0,0)')
  g.fillStyle = grd
  g.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(c)
  return tex
}

/** Procedural sky cube faces for PMREM-ish IBL. */
export function makeSkyEnvTexture(renderer: THREE.WebGLRenderer) {
  const size = 256
  const faces = ['px', 'nx', 'py', 'ny', 'pz', 'nz'] as const
  const canvases: HTMLCanvasElement[] = []

  for (const face of faces) {
    const c = document.createElement('canvas')
    c.width = c.height = size
    const g = c.getContext('2d')!
    const img = g.createImageData(size, size)
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const u = (x / (size - 1)) * 2 - 1
        const v = (y / (size - 1)) * 2 - 1
        let dir: THREE.Vector3
        if (face === 'px') dir = new THREE.Vector3(1, -v, -u)
        else if (face === 'nx') dir = new THREE.Vector3(-1, -v, u)
        else if (face === 'py') dir = new THREE.Vector3(u, 1, v)
        else if (face === 'ny') dir = new THREE.Vector3(u, -1, -v)
        else if (face === 'pz') dir = new THREE.Vector3(u, -v, 1)
        else dir = new THREE.Vector3(-u, -v, -1)
        dir.normalize()

        const elev = dir.y
        const warmHorizon = new THREE.Color(0xffc07a)
        const skyZenith = new THREE.Color(0x6ea8d8)
        const ground = new THREE.Color(0x3a2a1c)
        let col: THREE.Color
        if (elev > 0) {
          col = warmHorizon.clone().lerp(skyZenith, Math.pow(elev, 0.55))
        } else {
          col = warmHorizon.clone().lerp(ground, Math.pow(-elev, 0.7))
        }
        // Soft sun
        const sunDir = new THREE.Vector3(0.35, 0.88, 0.25).normalize()
        const sun = Math.pow(Math.max(dir.dot(sunDir), 0), 60)
        col.r = Math.min(1, col.r + sun * 1.2)
        col.g = Math.min(1, col.g + sun * 0.9)
        col.b = Math.min(1, col.b + sun * 0.45)

        const o = (y * size + x) * 4
        img.data[o] = Math.floor(col.r * 255)
        img.data[o + 1] = Math.floor(col.g * 255)
        img.data[o + 2] = Math.floor(col.b * 255)
        img.data[o + 3] = 255
      }
    }
    g.putImageData(img, 0, 0)
    canvases.push(c)
  }

  const cube = new THREE.CubeTexture(canvases)
  cube.colorSpace = THREE.SRGBColorSpace
  cube.needsUpdate = true

  const pmrem = new THREE.PMREMGenerator(renderer)
  pmrem.compileCubemapShader()
  const env = pmrem.fromCubemap(cube)
  pmrem.dispose()
  cube.dispose()
  return env.texture
}
