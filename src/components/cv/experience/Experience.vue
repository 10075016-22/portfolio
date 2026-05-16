<template>
  <Title :title="$t('titles.workExperience')" />
  <div
    v-for="(item, index) in Listado"
    :key="index"
    class="mb-6 flex flex-col gap-4 md:flex-row md:items-stretch"
  >
    <div class="shrink-0 md:w-1/4">
      <p class="text-sm text-[rgb(var(--v-theme-on-surface-variant))]">
        {{ item.fecha }}
      </p>
    </div>
    <div
      class="mx-1 hidden w-px shrink-0 self-stretch bg-[rgb(var(--v-theme-outline))] md:block"
      aria-hidden="true"
    />
    <div class="min-w-0 flex-1 md:ml-1">
      <p class="mb-2 font-bold text-[rgb(var(--v-theme-on-surface))]">{{ item?.cargo }}</p>
      <p class="text-[rgb(var(--v-theme-on-surface))]">{{ item.empresa }}</p>
      <p class="mt-1 text-justify text-[rgb(var(--v-theme-on-surface-variant))]">
        {{ item.descripcion }}
      </p>
      <div class="mt-2 flex flex-wrap gap-2">
        <span
          v-for="(sk, skIndex) in item.sKill"
          :key="skIndex"
          class="inline-flex items-center gap-1 rounded-full border border-transparent px-2.5 py-1 text-xs font-medium"
          :class="chipFlatClass(sk.color)"
          :style="chipFlatStyle(sk.color)"
        >
          <Icon
            v-if="sk.icon"
            :icon="mdiToIconify(sk.icon)"
            class="size-4 shrink-0"
            :style="sk.color && sk.color.startsWith('#') ? { color: '#fff' } : {}"
            aria-hidden="true"
          />
          <img v-if="sk.image" width="20" height="20" class="mr-1" :src="sk.image" :alt="sk.text" />
          <span>{{ sk.text }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import Title from '@/components/utils/Title.vue'
import { Experience } from '@/components/cv/experience/Experience.js'
import { mdiToIconify } from '@/utils/mdiToIconify.js'

const { Listado } = Experience()

function chipFlatClass(color) {
  if (!color) return 'bg-slate-500 text-white'
  if (String(color).startsWith('#')) {
    return 'text-white'
  }
  const m = {
    primary: 'bg-blue-600 text-white dark:bg-blue-500',
    success: 'bg-emerald-600 text-white dark:bg-emerald-500',
    grey: 'bg-slate-500 text-white',
    info: 'bg-sky-600 text-white dark:bg-sky-500',
    warning: 'bg-amber-500 text-slate-900',
    error: 'bg-red-600 text-white',
    blue: 'bg-blue-600 text-white',
  }
  return m[color] || 'bg-slate-600 text-white'
}

function chipFlatStyle(color) {
  if (color && String(color).startsWith('#')) {
    return { backgroundColor: color, borderColor: color }
  }
  return {}
}
</script>
