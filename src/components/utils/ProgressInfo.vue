<template>
  <div
    class="group min-w-0 flex h-full flex-col rounded-lg border border-[rgb(var(--v-theme-outline))]/20 bg-[rgb(var(--v-theme-surface))]/50 p-4 backdrop-blur-sm transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:translate-x-0 motion-reduce:opacity-100 hover:bg-[rgb(var(--v-theme-surface))]/85 hover:-translate-y-0.5 hover:shadow-lg"
    :class="isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'"
    :style="{ transitionDelay: `${delay}ms` }"
  >
      <div class="flex justify-between gap-2">
        <div class="flex min-w-0 items-start gap-2">
          <Icon
            v-if="iconLabel"
            :icon="iconLabel"
            class="skill-icon mt-1 size-11 shrink-0 transition duration-300 ease-in-out group-hover:scale-110"
            :class="iconToneClass"
            :style="iconInlineStyle"
            aria-hidden="true"
          />
          <img
            v-if="props.image !== ''"
            :src="props.image"
            :alt="props.text"
            width="45"
            height="45"
            class="skill-image mt-1 size-11 shrink-0 object-contain transition duration-300 ease-in-out group-hover:scale-110"
          />
          <p class="mt-3 font-semibold text-[rgb(var(--v-theme-on-surface))] transition-colors duration-300 group-hover:text-[rgb(var(--v-theme-primary))]">{{ props.text }}</p>
        </div>
        <div class="mr-1 shrink-0 text-right text-sm text-[rgb(var(--v-theme-on-surface-variant))]">
          <p class="mt-2">{{ props.label }}</p>
        </div>
      </div>
      <div
        class="skill-progress mt-2 h-2 w-full overflow-hidden rounded-full bg-[rgb(var(--v-theme-outline))]/30"
        role="progressbar"
        :aria-valuenow="displayValue"
        :aria-valuemax="props.max"
      >
        <div
          class="h-full rounded-full bg-linear-to-r from-blue-600 to-purple-600 transition-all duration-700 dark:from-blue-400 dark:to-violet-400"
          :style="{ width: `${percent}%` }"
          :class="{ 'animate-pulse': props.progress === 0 }"
        />
      </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { mdiToIconify } from '@/utils/mdiToIconify.js'

const props = defineProps({
  color: {
    type: String,
    default: () => '',
  },
  icon: {
    type: String,
    default: () => '',
  },
  image: {
    type: String,
    default: () => '',
  },
  text: {
    type: String,
    default: () => '',
  },
  label: {
    type: String,
    default: () => '',
  },
  progress: {
    type: Number,
    default: () => 0,
  },
  max: {
    type: Number,
    default: () => 100,
  },
  delay: {
    type: Number,
    default: () => 0,
  },
})

const iconLabel = computed(() => mdiToIconify(props.icon))

const displayValue = computed(() =>
  props.progress === 0 ? 0 : props.progress,
)

const percent = computed(() => {
  if (!props.max) return 0
  const raw = isVisible.value ? props.progress : 0
  return Math.min(100, Math.round((raw / props.max) * 100))
})

const iconInlineStyle = computed(() => {
  const c = props.color
  if (c && c.startsWith('#')) {
    return { color: c }
  }
  return {}
})

const iconToneClass = computed(() => {
  const c = props.color
  if (c && c.startsWith('#')) {
    return ''
  }
  const map = {
    warning: 'text-amber-500',
    success: 'text-emerald-500',
    blue: 'text-blue-500',
    teal: 'text-teal-500',
  }
  return map[c] || 'text-[rgb(var(--v-theme-primary))]'
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, props.delay)
})
</script>

