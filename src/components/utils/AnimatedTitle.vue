<template>
  <div class="my-8 mb-6 mt-8">
    <span class="hidden animate-title-shine" aria-hidden="true" />
    <div class="relative inline-block">
      <h2
        class="group relative m-0 overflow-hidden text-2xl font-bold md:text-3xl"
        :style="titleStyle"
      >
        <span
          class="inline-block transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          :class="[
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0',
            'text-[var(--title-color)]',
          ]"
        >
          {{ title }}
        </span>
        <span
          class="absolute -bottom-1 left-0 h-0.5 rounded-sm bg-[linear-gradient(90deg,var(--title-color),rgb(var(--v-theme-secondary)))] bg-[length:200%_100%] transition-[width] duration-700 delay-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:animate-title-shine"
          :class="isVisible ? 'w-full' : 'w-0'"
        />
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'primary',
  },
})

const rgbKeys = new Set(['primary', 'secondary'])

const titleStyle = computed(() => {
  if (rgbKeys.has(props.color)) {
    return {
      '--title-color': `rgb(var(--v-theme-${props.color}))`,
    }
  }
  return {
    '--title-color': props.color,
  }
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>
