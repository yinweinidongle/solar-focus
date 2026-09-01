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
        <h1>透镜 · 聚光</h1>
        <p class="help">拖动放大镜，对准阳光，按住不动直到纸张点燃</p>
      </header>
      <div class="hud">
        <div class="heat-bar">
          <div class="heat-fill" :style="{ width: heatPct + '%' }" />
        </div>
        <div class="meta">
          <span>{{ stageLabel }}</span>
          <span>{{ heatPct }}%</span>
        </div>
        <p v-if="ignited" class="ignite">点燃！</p>
        <button class="reset" type="button" @click="onReset">再来一次</button>
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
  color: #f6e7c8;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.55);
}
.title-block h1 {
  font-weight: 500;
  letter-spacing: 0.28em;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
}
.help {
  margin-top: 10px;
  opacity: 0.82;
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  max-width: 28rem;
  line-height: 1.6;
}
.hud {
  width: min(320px, 90vw);
  pointer-events: auto;
}
.heat-bar {
  height: 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
  margin-bottom: 8px;
}
.heat-fill {
  height: 100%;
  background: linear-gradient(90deg, #c48a3a, #ff6a1a, #ffd27a);
  transition: width 0.12s linear;
}
.meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  opacity: 0.9;
  margin-bottom: 14px;
}
.ignite {
  color: #ffb45c;
  font-size: 1.1rem;
  letter-spacing: 0.3em;
  margin-bottom: 12px;
}
.reset {
  pointer-events: auto;
  border: 1px solid rgba(246, 231, 200, 0.35);
  background: rgba(20, 12, 6, 0.45);
  color: #f6e7c8;
  padding: 10px 18px;
  border-radius: 999px;
  letter-spacing: 0.2em;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.2s, border-color 0.2s;
}
.reset:hover {
  background: rgba(60, 30, 10, 0.65);
  border-color: rgba(255, 180, 90, 0.7);
}
</style>
