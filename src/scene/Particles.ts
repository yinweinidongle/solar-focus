import * as THREE from 'three'

type Flame = {
  active: boolean
  life: number
  maxLife: number
  pos: THREE.Vector3
  vel: THREE.Vector3
  size: number
  kind: 'flame' | 'smoke'
}

export class FireSmokeSystem {
  readonly group = new THREE.Group()
  private pool: Flame[] = []
  private meshes: THREE.Sprite[] = []
  private flameMat: THREE.SpriteMaterial
  private smokeMat: THREE.SpriteMaterial
  private spawnAcc = 0
  private origin = new THREE.Vector3()
  private burning = false

  constructor() {
    const flameTex = FireSmokeSystem.makeRadialTexture('#ffb347', '#ff4500', true)
    const smokeTex = FireSmokeSystem.makeRadialTexture('#666666', '#111111', false)
    this.flameMat = new THREE.SpriteMaterial({
      map: flameTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffaa55,
    })
    this.smokeMat = new THREE.SpriteMaterial({
      map: smokeTex,
      transparent: true,
      depthWrite: false,
      opacity: 0.45,
      color: 0x888888,
    })

    for (let i = 0; i < 64; i++) {
      const kind = i < 36 ? 'flame' : 'smoke'
      const spr = new THREE.Sprite(kind === 'flame' ? this.flameMat.clone() : this.smokeMat.clone())
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
      })
    }
  }

  static makeRadialTexture(inner: string, outer: string, additiveLook: boolean) {
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const g = c.getContext('2d')!
    const grd = g.createRadialGradient(32, 32, 2, 32, 32, 30)
    grd.addColorStop(0, inner)
    grd.addColorStop(0.45, outer)
    grd.addColorStop(1, additiveLook ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0)')
    g.fillStyle = grd
    g.fillRect(0, 0, 64, 64)
    const tex = new THREE.CanvasTexture(c)
    tex.needsUpdate = true
    return tex
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
    }
  }

  private spawn(kind: 'flame' | 'smoke') {
    for (let i = 0; i < this.pool.length; i++) {
      const p = this.pool[i]
      if (p.active || p.kind !== kind) continue
      p.active = true
      p.life = 0
      p.maxLife = kind === 'flame' ? 0.45 + Math.random() * 0.35 : 1.2 + Math.random() * 0.8
      p.pos.set(
        this.origin.x + (Math.random() - 0.5) * 0.06,
        this.origin.y + 0.01,
        this.origin.z + (Math.random() - 0.5) * 0.06,
      )
      p.vel.set(
        (Math.random() - 0.5) * (kind === 'flame' ? 0.08 : 0.05),
        kind === 'flame' ? 0.35 + Math.random() * 0.45 : 0.18 + Math.random() * 0.25,
        (Math.random() - 0.5) * (kind === 'flame' ? 0.08 : 0.05),
      )
      p.size = kind === 'flame' ? 0.04 + Math.random() * 0.05 : 0.07 + Math.random() * 0.08
      this.meshes[i].visible = true
      return
    }
  }

  update(dt: number) {
    if (this.burning) {
      this.spawnAcc += dt
      while (this.spawnAcc > 0.03) {
        this.spawnAcc -= 0.03
        this.spawn('flame')
        if (Math.random() > 0.4) this.spawn('smoke')
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
      p.pos.addScaledVector(p.vel, dt)
      p.vel.y += dt * (p.kind === 'flame' ? 0.4 : 0.15)
      const spr = this.meshes[i]
      spr.position.copy(p.pos)
      const s = p.size * (p.kind === 'flame' ? 1 + t * 0.8 : 1 + t * 1.6)
      spr.scale.setScalar(s)
      const mat = spr.material as THREE.SpriteMaterial
      mat.opacity = p.kind === 'flame' ? (1 - t) * 0.95 : (1 - t) * 0.4
    }
  }

  dispose() {
    this.flameMat.map?.dispose()
    this.smokeMat.map?.dispose()
    this.flameMat.dispose()
    this.smokeMat.dispose()
    for (const m of this.meshes) {
      ;(m.material as THREE.Material).dispose()
    }
  }
}
