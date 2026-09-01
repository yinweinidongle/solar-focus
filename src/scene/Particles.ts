import * as THREE from 'three'

type Flame = {
  active: boolean
  life: number
  maxLife: number
  pos: THREE.Vector3
  vel: THREE.Vector3
  size: number
  kind: 'flame' | 'smoke' | 'spark'
  phase: number
}

export class FireSmokeSystem {
  readonly group = new THREE.Group()
  private pool: Flame[] = []
  private meshes: THREE.Sprite[] = []
  private flameMat: THREE.SpriteMaterial
  private smokeMat: THREE.SpriteMaterial
  private sparkMat: THREE.SpriteMaterial
  private spawnAcc = 0
  private origin = new THREE.Vector3()
  private burning = false
  private audioCtx: AudioContext | null = null
  private crackleNode: AudioBufferSourceNode | null = null
  private crackleGain: GainNode | null = null

  constructor() {
    const flameTex = FireSmokeSystem.makeFlameTexture()
    const smokeTex = FireSmokeSystem.makeSmokeTexture()
    const sparkTex = FireSmokeSystem.makeSparkTexture()

    this.flameMat = new THREE.SpriteMaterial({
      map: flameTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xff9944,
    })
    this.smokeMat = new THREE.SpriteMaterial({
      map: smokeTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.4,
      color: 0x9a9a9a,
    })
    this.sparkMat = new THREE.SpriteMaterial({
      map: sparkTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffcc66,
    })

    for (let i = 0; i < 96; i++) {
      const kind: Flame['kind'] = i < 40 ? 'flame' : i < 78 ? 'smoke' : 'spark'
      const base =
        kind === 'flame' ? this.flameMat : kind === 'smoke' ? this.smokeMat : this.sparkMat
      const spr = new THREE.Sprite(base.clone())
      spr.visible = false
      spr.scale.setScalar(0.05)
      this.group.add(spr)
      this.meshes.push(spr)
      this.pool.push({
        active: false,
        life: 0,
        maxLife: 1,
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        size: 0.05,
        kind,
        phase: Math.random() * Math.PI * 2,
      })
    }
  }

  static makeFlameTexture() {
    const c = document.createElement('canvas')
    c.width = c.height = 128
    const g = c.getContext('2d')!
    g.clearRect(0, 0, 128, 128)
    // Soft teardrop flame shape
    for (let i = 0; i < 5; i++) {
      const yy = 90 - i * 12
      const rx = 28 - i * 4
      const ry = 36 - i * 5
      const grd = g.createRadialGradient(64, yy, 2, 64, yy, rx)
      const a = 0.55 - i * 0.08
      grd.addColorStop(0, `rgba(255, 250, 200, ${a})`)
      grd.addColorStop(0.35, `rgba(255, 160, 40, ${a * 0.85})`)
      grd.addColorStop(0.7, `rgba(255, 60, 10, ${a * 0.4})`)
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      g.fillStyle = grd
      g.beginPath()
      g.ellipse(64, yy, rx, ry, 0, 0, Math.PI * 2)
      g.fill()
    }
    const tex = new THREE.CanvasTexture(c)
    tex.needsUpdate = true
    return tex
  }

  static makeSmokeTexture() {
    const c = document.createElement('canvas')
    c.width = c.height = 128
    const g = c.getContext('2d')!
    // Soft volumetric-ish billow
    for (let i = 0; i < 6; i++) {
      const cx = 50 + (i % 3) * 14
      const cy = 50 + Math.floor(i / 3) * 18
      const grd = g.createRadialGradient(cx, cy, 4, cx, cy, 36)
      grd.addColorStop(0, 'rgba(120,120,120,0.35)')
      grd.addColorStop(0.5, 'rgba(80,80,80,0.14)')
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      g.fillStyle = grd
      g.fillRect(0, 0, 128, 128)
    }
    const tex = new THREE.CanvasTexture(c)
    return tex
  }

  static makeSparkTexture() {
    const c = document.createElement('canvas')
    c.width = c.height = 32
    const g = c.getContext('2d')!
    const grd = g.createRadialGradient(16, 16, 0.5, 16, 16, 14)
    grd.addColorStop(0, 'rgba(255,240,180,1)')
    grd.addColorStop(0.3, 'rgba(255,160,40,0.8)')
    grd.addColorStop(1, 'rgba(0,0,0,0)')
    g.fillStyle = grd
    g.fillRect(0, 0, 32, 32)
    return new THREE.CanvasTexture(c)
  }

  setOrigin(p: THREE.Vector3) {
    this.origin.copy(p)
  }

  setBurning(v: boolean) {
    this.burning = v
    if (!v) {
      for (let i = 0; i < this.pool.length; i++) {
        this.pool[i].active = false
        this.meshes[i].visible = false
      }
      this.stopCrackle()
    } else {
      this.startCrackle()
    }
  }

  private startCrackle() {
    try {
      if (!this.audioCtx) this.audioCtx = new AudioContext()
      const ctx = this.audioCtx
      if (ctx.state === 'suspended') void ctx.resume()
      this.stopCrackle()

      // Filtered noise crackle
      const duration = 2
      const sampleRate = ctx.sampleRate
      const buffer = ctx.createBuffer(1, sampleRate * duration, sampleRate)
      const data = buffer.getChannelData(0)
      for (let i = 0; i < data.length; i++) {
        const t = i / sampleRate
        const burst = Math.random() > 0.97 ? 1 : 0
        const hiss = (Math.random() * 2 - 1) * 0.15
        data[i] = hiss + burst * (Math.random() * 2 - 1) * Math.exp(-((t % 0.2) * 18))
      }
      const src = ctx.createBufferSource()
      src.buffer = buffer
      src.loop = true
      const filter = ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.value = 1800
      filter.Q.value = 0.8
      const gain = ctx.createGain()
      gain.gain.value = 0.045
      src.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)
      src.start()
      this.crackleNode = src
      this.crackleGain = gain
    } catch {
      // Audio optional — ignore failures
    }
  }

  private stopCrackle() {
    try {
      this.crackleNode?.stop()
    } catch {
      /* ignore */
    }
    this.crackleNode = null
    this.crackleGain = null
  }

  private spawn(kind: Flame['kind']) {
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]
      if (p.active || p.kind !== kind) continue
      p.active = true
      p.life = 0
      p.phase = Math.random() * Math.PI * 2
      if (kind === 'flame') {
        p.maxLife = 0.5 + Math.random() * 0.45
        p.pos.set(
          this.origin.x + (Math.random() - 0.5) * 0.05,
          this.origin.y + 0.01,
          this.origin.z + (Math.random() - 0.5) * 0.05,
        )
        p.vel.set((Math.random() - 0.5) * 0.1, 0.4 + Math.random() * 0.55, (Math.random() - 0.5) * 0.1)
        p.size = 0.045 + Math.random() * 0.055
      } else if (kind === 'smoke') {
        p.maxLife = 1.4 + Math.random() * 1.1
        p.pos.set(
          this.origin.x + (Math.random() - 0.5) * 0.07,
          this.origin.y + 0.04,
          this.origin.z + (Math.random() - 0.5) * 0.07,
        )
        p.vel.set((Math.random() - 0.5) * 0.06, 0.16 + Math.random() * 0.22, (Math.random() - 0.5) * 0.06)
        p.size = 0.08 + Math.random() * 0.1
      } else {
        p.maxLife = 0.35 + Math.random() * 0.4
        p.pos.set(
          this.origin.x + (Math.random() - 0.5) * 0.04,
          this.origin.y + 0.02,
          this.origin.z + (Math.random() - 0.5) * 0.04,
        )
        p.vel.set((Math.random() - 0.5) * 0.35, 0.5 + Math.random() * 0.7, (Math.random() - 0.5) * 0.35)
        p.size = 0.012 + Math.random() * 0.016
      }
      this.meshes[i].visible = true
      return
    }
  }

  update(dt: number) {
    if (this.burning) {
      this.spawnAcc += dt
      while (this.spawnAcc > 0.025) {
        this.spawnAcc -= 0.025
        this.spawn('flame')
        if (Math.random() > 0.35) this.spawn('smoke')
        if (Math.random() > 0.55) this.spawn('spark')
      }
    }

    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]
      if (!p.active) continue
      p.life += dt
      if (p.life >= p.maxLife) {
        p.active = false
        this.meshes[i].visible = false
        continue
      }
      const t = p.life / p.maxLife
      // Turbulence
      const turb = Math.sin(p.life * 12.0 + p.phase) * (p.kind === 'flame' ? 0.12 : 0.06)
      p.vel.x += turb * dt
      p.vel.z += Math.cos(p.life * 9.0 + p.phase) * dt * (p.kind === 'smoke' ? 0.08 : 0.05)
      p.pos.addScaledVector(p.vel, dt)
      p.vel.y += dt * (p.kind === 'flame' ? 0.45 : p.kind === 'smoke' ? 0.12 : -0.3)

      const spr = this.meshes[i]
      spr.position.copy(p.pos)
      let s: number
      if (p.kind === 'flame') s = p.size * (1 + t * 1.1) * (1 + Math.sin(p.life * 20 + p.phase) * 0.08)
      else if (p.kind === 'smoke') s = p.size * (1 + t * 2.2)
      else s = p.size * (1 - t * 0.5)
      spr.scale.set(s * (p.kind === 'flame' ? 0.75 : 1), s * (p.kind === 'flame' ? 1.25 : 1), 1)

      const mat = spr.material as THREE.SpriteMaterial
      if (p.kind === 'flame') {
        mat.opacity = (1 - t) * 0.95
        mat.color.setHSL(0.08 - t * 0.05, 0.95, 0.55 + (1 - t) * 0.15)
      } else if (p.kind === 'smoke') {
        mat.opacity = (1 - t) * 0.38
      } else {
        mat.opacity = (1 - t) * 0.9
      }
    }
  }

  dispose() {
    this.stopCrackle()
    void this.audioCtx?.close()
    this.flameMat.map?.dispose()
    this.smokeMat.map?.dispose()
    this.sparkMat.map?.dispose()
    this.flameMat.dispose()
    this.smokeMat.dispose()
    this.sparkMat.dispose()
    for (const m of this.meshes) {
      ;(m.material as THREE.Material).dispose()
    }
  }
}
