export class HeatMap {
  readonly size: number
  readonly canvas: HTMLCanvasElement
  readonly ctx: CanvasRenderingContext2D
  readonly texture: import("three").CanvasTexture
  private data: Float32Array
  private ignited = false

  constructor(size = 256) {
    this.size = size
    this.canvas = document.createElement("canvas")
    this.canvas.width = size
    this.canvas.height = size
    const ctx = this.canvas.getContext("2d", { willReadFrequently: true })
    if (!ctx) throw new Error("2d context unavailable")
    this.ctx = ctx
    this.data = new Float32Array(size * size)
    // dynamic import avoided — texture created externally via three
    // placeholder; SolarScene wires CanvasTexture
    this.texture = null as unknown as import("three").CanvasTexture
  }

  attachTexture(tex: import("three").CanvasTexture) {
    ;(this as { texture: import("three").CanvasTexture }).texture = tex
  }

  reset() {
    this.data.fill(0)
    this.ignited = false
    this.ctx.clearRect(0, 0, this.size, this.size)
    this.texture.needsUpdate = true
  }

  setIgnited(v: boolean) {
    this.ignited = v
  }

  /** Accumulate heat at UV [0,1]. speedFactor in [0,1] (1 = still). */
  accumulate(u: number, v: number, dt: number, speedFactor: number, onPaper: boolean) {
    if (!onPaper) return this.maxHeat()
    const x = Math.floor(u * (this.size - 1))
    const y = Math.floor((1 - v) * (this.size - 1))
    if (x < 2 || y < 2 || x >= this.size - 2 || y >= this.size - 2) return this.maxHeat()

    // ~2.5–3.5s hold when still
    const rate = 0.38 * speedFactor * speedFactor
    const cool = 0.02 * dt
    const radius = 7

    for (let j = -radius; j <= radius; j++) {
      for (let i = -radius; i <= radius; i++) {
        const px = x + i
        const py = y + j
        if (px < 0 || py < 0 || px >= this.size || py >= this.size) continue
        const dist = Math.sqrt(i * i + j * j) / radius
        if (dist > 1) continue
        const w = Math.exp(-dist * dist * 3.2)
        const idx = py * this.size + px
        let h = this.data[idx]
        h += rate * w * dt
        h = Math.max(0, h - cool * (1 - w * 0.5))
        this.data[idx] = Math.min(1, h)
      }
    }

    // Mild global cool so trails fade if you leave
    if (speedFactor < 0.3) {
      for (let i = 0; i < this.data.length; i++) {
        this.data[i] = Math.max(0, this.data[i] - dt * 0.015)
      }
    }

    this.flush()
    return this.maxHeat()
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
    this.texture.needsUpdate = true
  }
}
