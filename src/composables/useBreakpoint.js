import { ref, computed, onMounted, onUnmounted } from 'vue'

const MOBILE_MAX_PX = 960

export function useBreakpoint() {
  const width = ref(
    typeof window !== 'undefined' ? window.innerWidth : 1024,
  )

  const mobile = computed(() => width.value < MOBILE_MAX_PX)

  function update() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    update()
    window.addEventListener('resize', update, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { width, mobile }
}
