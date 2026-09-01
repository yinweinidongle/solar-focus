<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { SolarScene } from './scene/SolarScene'

const canvasHost = ref<HTMLDivElement | null>(null)
const heatPct = ref(0)
const stageLabel = ref('等待对焦')
const ignited = ref(false)
let scene: SolarScene | null = null

function onReset() {
  scene?.reset()
  heatPct.value = 0
  stageLabel.value = '等待对焦'
  ignited.value = false
}

onMounted(() => {
  if (!canvasHost.value) return
  scene = new SolarScene(canvasHost.value, {
    onHeat: (h, stage, fire) => {
      heatPct.value = Math.round(h * 100)
      stageLabel.value = stage
      ignited.value = fire
    },
  })
  scene.start()
})

onUnmounted(() => {
  scene?.dispose()
  scene = null
})
</script>

<template>
  <div class="app">
    <div ref="canvasHost" class="canvas-host" />
    <div class="ui">
      <header class="title-block">
        <p class="eyebrow">SOLAR FOCUS</p>
        <h1>透镜 · 聚光</h1>
        <p class="help">拖动放大镜，对准阳光，静止片刻直至纸张点燃</p>
      </header>
      <div class="hud">
        <div class="panel">
          <div class="heat-row">
            <span class="label">热量</span>
            <span class="pct">{{ heatPct }}%</span>
          </div>
          <div class="heat-bar">
            <div class="heat-fill" :class="{ hot: heatPct > 70 }" :style="{ width: heatPct + '%' }" />
          </div>
          <div class="meta">
            <span class="stage">{{ stageLabel }}</span>
          </div>
          <p v-if="ignited" class="ignite">点燃</p>
          <button class="reset" type="button" @click="onReset">再来一次</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  position: relative;
  width: 100%;
  height: 100%;
}
.canvas-host {
  position: absolute;
  inset: 0;
}
.ui {
  position: absolute;
  inset: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 28px 32px;
  color: rgba(255, 244, 220, 0.92);
}
.title-block .eyebrow {
  font-size: 0.68rem;
  letter-spacing: 0.42em;
  opacity: 0.55;
  margin-bottom: 8px;
  font-weight: 400;
}
.title-block h1 {
  font-weight: 400;
  letter-spacing: 0.32em;
  font-size: clamp(1.35rem, 2.8vw, 2rem);
  text-shadow: 0 2px 18px rgba(0, 0, 0, 0.35);
}
.help {
  margin-top: 12px;
  opacity: 0.72;
  font-size: 0.88rem;
  letter-spacing: 0.1em;
  max-width: 26rem;
  line-height: 1.7;
  font-weight: 300;
}
.hud {
  width: min(300px, 88vw);
  pointer-events: auto;
}
.panel {
  padding: 16px 18px 18px;
  border-radius: 18px;
  background: rgba(18, 12, 8, 0.38);
  border: 1px solid rgba(255, 230, 190, 0.14);
  backdrop-filter: blur(16px) saturate(1.2);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.28);
}
.heat-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  opacity: 0.8;
}
.pct {
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.08em;
}
.heat-bar {
  height: 3px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  margin-bottom: 12px;
}
.heat-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #b8894a, #ff7a28, #ffd27a);
  box-shadow: 0 0 12px rgba(255, 140, 50, 0.35);
  transition: width 0.12s linear;
}
.heat-fill.hot {
  box-shadow: 0 0 16px rgba(255, 100, 30, 0.55);
}
.meta {
  font-size: 0.82rem;
  letter-spacing: 0.16em;
  opacity: 0.85;
  margin-bottom: 12px;
}
.ignite {
  color: #ffb45c;
  font-size: 0.95rem;
  letter-spacing: 0.45em;
  margin-bottom: 12px;
  text-indent: 0.45em;
}
.reset {
  pointer-events: auto;
  width: 100%;
  border: 1px solid rgba(246, 231, 200, 0.22);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(246, 231, 200, 0.92);
  padding: 10px 18px;
  border-radius: 999px;
  letter-spacing: 0.28em;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  font: inherit;
}
.reset:hover {
  background: rgba(255, 180, 90, 0.12);
  border-color: rgba(255, 180, 90, 0.55);
  color: #ffe6c0;
}
</style>
