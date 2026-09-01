export class HeatMap {
  readonly size: number
  readonly canvas: HTMLCanvasElement
  readonly ctx: CanvasRenderingContext2D
  readonly texture: import('three').CanvasTexture
  private data: Float32Array
  private ignited = false

  constructor(size = 256) {
    this.size = size
    this.canvas = document.createElement('canvas')
    this.canvas.width = size
    this.canvas.height = size
    const ctx = this.canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) throw new Error('2d context unavailable')
    this.ctx = ctx
    this.data = new Float32Array(size * size)
    this.texture = null as unknown as import('three').CanvasTexture
  }

  attachTexture(tex: import('three').CanvasTexture) {
    ;(this as { texture: import('three').CanvasTexture }).texture = tex
  }

  reset() {
    this.data.fill(0)
    this.ignited = false
    this.ctx.clearRect(0, 0, this.size, this.size)
    if (this.texture) this.texture.needsUpdate = true
  }

  setIgnited(v: boolean) {
    this.ignited = v
  }

  /**
   * Soft heat accumulation: sharp core when still, slow outer ring,
   * gradual rise then sudden flare near ignition.
   */
  accumulate(u: number, v: number, dt: number, speedFactor: number, onPaper: boolean) {
    if (!onPaper) return this.maxHeat()
    const x = Math.floor(u * (this.size - 1))
    const y = Math.floor(v * (this.size - 1))
    if (x < 3 || y < 3 || x >= this.size - 3 || y >= this.size - 3) return this.maxHeat()

    const still = speedFactor * speedFactor
    // Softer overall rate — ~3–4s hold when perfectly still
    const baseRate = 0.28 * still
    const cool = 0.012 * dt
    const radius = 11

    const peak = this.maxHeat()
    // Non-linear: slow early, accelerate near ignition (sudden flare feel)
    const ramp = 0.65 + Math.pow(peak, 1.6) * 0.9

    for (let j = -radius; j <= radius; j++) {
      for (let i = -radius; i <= radius; i++) {
        const px = x + i
        const py = y + j
        if (px < 0 || py < 0 || px >= this.size || py >= this.size) continue
        const dist = Math.sqrt(i * i + j * j) / radius
        if (dist > 1) continue
        // Soft gaussian core + slower outer ring
        const core = Math.exp(-dist * dist * 4.5)
        const outer = Math.exp(-dist * dist * 1.4) * 0.22
        const w = core + outer
        const idx = py * this.size + px
        let h = this.data[idx]
        h += baseRate * ramp * w * dt
        // Outer cools a bit faster so ring stays soft
        h = Math.max(0, h - cool * (1 - core * 0.7))
        this.data[idx] = Math.min(1, h)
      }
    }

    // Mild global cool when moving so trails fade
    if (speedFactor < 0.35) {
      const fade = dt * 0.012
      for (let i = 0; i < this.data.length; i++) {
        this.data[i] = Math.max(0, this.data[i] - fade)
      }
    }

    // After ignition, slowly expand char
    if (this.ignited) {
      this.expandChar(dt)
    }

    this.flush()
    return this.maxHeat()
  }

  private expandChar(dt: number) {
    const next = new Float32Array(this.data)
    const s = this.size
    for (let y = 1; y < s - 1; y++) {
      for (let x = 1; x < s - 1; x++) {
        const i = y * s + x
        if (this.data[i] < 0.7) continue
        // Bleed heat slightly into neighbors for organic hole growth
        const bleed = 0.08 * dt
        next[i - 1] = Math.min(1, Math.max(next[i - 1], this.data[i] * 0.15) + bleed * this.data[i])
        next[i + 1] = Math.min(1, Math.max(next[i + 1], this.data[i] * 0.15) + bleed * this.data[i])
        next[i - s] = Math.min(1, Math.max(next[i - s], this.data[i] * 0.15) + bleed * this.data[i])
        next[i + s] = Math.min(1, Math.max(next[i + s], this.data[i] * 0.15) + bleed * this.data[i])
      }
    }
    this.data = next
  }

  maxHeat() {
    let m = 0
    for (let i = 0; i < this.data.length; i++) m = Math.max(m, this.data[i])
    return m
  }

  private flush() {
    const img = this.ctx.createImageData(this.size, this.size)
    for (let i = 0; i < this.data.length; i++) {
      const h = Math.min(255, Math.floor(this.data[i] * 255))
      const o = i * 4
      img.data[o] = h
      img.data[o + 1] = h
      img.data[o + 2] = h
      img.data[o + 3] = 255
    }
    this.ctx.putImageData(img, 0, 0)
    if (this.texture) this.texture.needsUpdate = true
  }
}
