<template>
  <section class="relative">
    <div class="will-change-transform" :style="parallaxOuterStyle">
      <div
        ref="revealRef"
        class="transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:opacity-100"
        :class="
          revealDone || skipReveal
            ? 'translate-y-0 opacity-100'
            : 'translate-y-8 opacity-0'
        "
      >
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { usePreferredReducedMotion } from '@vueuse/core'

const props = defineProps({
  intensity: {
    type: Number,
    default: 32,
  },
  reveal: {
    type: Boolean,
    default: true,
  },
})

const revealRef = ref(null)
const revealDone = ref(false)
const offsetY = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const skipReveal = computed(
  () => prefersReducedMotion.value === true || props.reveal === false,
)

const parallaxOuterStyle = computed(() => {
  if (prefersReducedMotion.value === true) {
    return {}
  }
  return {
    transform: `translate3d(0, ${offsetY.value}px, 0)`,
  }
})

function updateParallax() {
  if (prefersReducedMotion.value === true || !revealRef.value) return
  const el = revealRef.value
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const center = rect.top + rect.height / 2
  const norm = (vh / 2 - center) / Math.max(vh + rect.height, 1)
  offsetY.value = norm * props.intensity
}

let observer = null

onMounted(async () => {
  updateParallax()
  window.addEventListener('scroll', updateParallax, { passive: true })
  window.addEventListener('resize', updateParallax, { passive: true })

  await nextTick()

  if (skipReveal.value) {
    revealDone.value = true
    return
  }

  function tryRevealIfInView() {
    const el = revealRef.value
    if (!el || revealDone.value) return
    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight || 0
    const visible = rect.bottom > 0 && rect.top < vh
    if (visible) {
      revealDone.value = true
      observer?.disconnect()
      observer = null
    }
  }

  if (revealRef.value && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealDone.value = true
            observer?.disconnect()
            observer = null
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px 12% 0px' },
    )
    observer.observe(revealRef.value)
    requestAnimationFrame(() => {
      tryRevealIfInView()
      requestAnimationFrame(tryRevealIfInView)
    })
  } else {
    revealDone.value = true
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateParallax)
  window.removeEventListener('resize', updateParallax)
  observer?.disconnect()
})
</script>
