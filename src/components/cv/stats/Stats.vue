<template>
  <div class="my-12">
    <span class="hidden animate-count-up" aria-hidden="true" />
    <SimpleTitle :title="$t('titles.stats')" color="primary" />

    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.id" class="mb-4">
        <article
          class="group flex h-full flex-col rounded-xl border border-[rgb(var(--v-theme-outline))]/30 bg-[rgb(var(--v-theme-surface))]/80 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-xl"
          :class="stat.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          :data-stat-id="stat.id"
        >
          <div class="mb-3 inline-flex justify-center">
            <Icon
              :icon="mdiToIconify(stat.icon)"
              class="size-12 transition duration-300 ease-in-out group-hover:scale-110"
              :class="statIconClass(stat.color)"
            />
          </div>

          <div class="flex items-baseline justify-center gap-1">
            <span
              class="text-4xl font-bold text-[rgb(var(--v-theme-primary))] max-md:text-[2rem]"
              :class="stat.isVisible ? 'motion-safe:animate-count-up' : ''"
            >
              {{ stat.isVisible ? stat.value : 0 }}
            </span>
            <span
              class="text-2xl font-semibold text-[rgb(var(--v-theme-primary))] max-md:text-xl"
            >{{ stat.symbol }}</span>
          </div>

          <p
            class="mt-2 text-sm font-medium text-[rgb(var(--v-theme-on-surface))] max-md:text-xs"
          >
            {{ stat.label }}
          </p>

          <div
            class="mx-auto mt-3 h-1 max-w-[80px] w-full overflow-hidden rounded-full bg-[rgb(var(--v-theme-outline))]/40"
          >
            <div
              class="h-full rounded-full transition-all duration-700"
              :class="statBarClass(stat.color)"
              :style="{ width: stat.isVisible ? `${stat.percentage}%` : '0%' }"
            />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
import { mdiToIconify } from '@/utils/mdiToIconify.js'

const stats = ref([
  {
    id: 1,
    value: 4,
    symbol: '+',
    label: 'Años de Experiencia',
    icon: 'mdi-briefcase',
    color: 'primary',
    percentage: 80,
    isVisible: false,
  },
  {
    id: 2,
    value: 25,
    symbol: '+',
    label: 'Proyectos Completados',
    icon: 'mdi-rocket-launch',
    color: 'success',
    percentage: 90,
    isVisible: false,
  },
  {
    id: 3,
    value: 8,
    symbol: '+',
    label: 'Tecnologías Dominadas',
    icon: 'mdi-code-braces',
    color: 'warning',
    percentage: 85,
    isVisible: false,
  },
  {
    id: 4,
    value: 100,
    symbol: '%',
    label: 'Satisfacción del Cliente',
    icon: 'mdi-heart',
    color: 'error',
    percentage: 95,
    isVisible: false,
  },
])

function statIconClass(color) {
  const m = {
    primary: 'text-blue-600 dark:text-blue-400',
    success: 'text-emerald-600 dark:text-emerald-400',
    warning: 'text-amber-500',
    error: 'text-red-500',
  }
  return m[color] || m.primary
}

function statBarClass(color) {
  const m = {
    primary: 'bg-blue-600 dark:bg-blue-400',
    success: 'bg-emerald-600 dark:bg-emerald-400',
    warning: 'bg-amber-500',
    error: 'bg-red-500',
  }
  return m[color] || m.primary
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statId = parseInt(entry.target.dataset.statId, 10)
          const stat = stats.value.find((s) => s.id === statId)
          if (stat) {
            stat.isVisible = true
          }
        }
      })
    },
    { threshold: 0.5 },
  )

  document.querySelectorAll('[data-stat-id]').forEach((card) => {
    observer.observe(card)
  })
})
</script>
