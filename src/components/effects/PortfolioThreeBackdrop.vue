<template>
  <div
    class="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    aria-hidden="true"
  >
    <div
      class="absolute inset-0 bg-linear-to-b from-slate-100/70 via-slate-50/40 to-slate-100/65 dark:from-slate-950/95 dark:via-slate-950/88 dark:to-slate-950/92"
    />
    <div
      v-if="!staticFallback && mdUp"
      class="pointer-events-none absolute inset-y-0 left-0 h-full w-[min(22vw,13rem)]"
    >
      <canvas
        ref="canvasRef"
        class="h-full w-full opacity-[0.36] dark:opacity-[0.38]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useDark, useMediaQuery, usePreferredReducedMotion } from '@vueuse/core'

const canvasRef = ref(null)
const mdUp = useMediaQuery('(min-width: 768px)')
const prefersReducedMotion = usePreferredReducedMotion()
const isDark = useDark({
  storageKey: 'portfolio-theme',
  valueDark: 'dark',
  valueLight: '',
})

const staticFallback = ref(false)

let api = null

const glowState = { x: 0.5, y: 0.5, linkActive: false }

function onPointerMove(e) {
  if (typeof window === 'undefined') return
  glowState.x = e.clientX / window.innerWidth
  glowState.y = e.clientY / window.innerHeight
  const el = document.elementFromPoint(e.clientX, e.clientY)
  glowState.linkActive = !!(el?.closest?.('a[href]'))
}

function getScrollY() {
  return typeof window !== 'undefined' ? window.scrollY : 0
}

function getGlow() {
  return glowState
}

async function mountScene() {
  if (prefersReducedMotion.value === true) {
    staticFallback.value = true
    return
  }
  staticFallback.value = false
  await nextTick()
  if (!mdUp.value || !canvasRef.value) return
  if (api) return
  const { createPortfolioBackdrop } = await import(
    '@/utils/three/createPortfolioBackdrop.js'
  )
  api = createPortfolioBackdrop(canvasRef.value, {
    getScrollY,
    getGlow,
    getIsDark: () =>
      typeof document !== 'undefined' &&
      document.documentElement.classList.contains('dark'),
  })
  api.start()
}

function teardownScene() {
  api?.dispose()
  api = null
}

onMounted(() => {
  window.addEventListener('pointermove', onPointerMove, { passive: true })
  mountScene()
})

onUnmounted(() => {
  window.removeEventListener('pointermove', onPointerMove)
  teardownScene()
})

watch(isDark, () => {
  api?.syncTheme()
})

watch(mdUp, async (up) => {
  if (!up) {
    teardownScene()
    return
  }
  if (prefersReducedMotion.value === true) return
  await nextTick()
  await mountScene()
})

watch(prefersReducedMotion, async (v) => {
  teardownScene()
  if (v === true) {
    staticFallback.value = true
    return
  }
  staticFallback.value = false
  await nextTick()
  await mountScene()
})
</script>
