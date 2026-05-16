<template>
  <div class="my-12">
    <SimpleTitle :title="$t('titles.workExperience')" color="primary" />

    <div class="relative py-8">
      <div
        class="pointer-events-none absolute top-0 h-full w-1 max-md:left-8 md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      >
        <div
          class="h-full w-full rounded-sm bg-linear-to-b from-[rgb(var(--v-theme-primary))] to-[rgb(var(--v-theme-secondary))]"
        />
      </div>

      <div
        v-for="(experience, index) in experiences"
        :key="experience.id"
        class="relative mb-12 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] max-md:w-full max-md:pl-16 md:w-[45%]"
        :class="[
          index % 2 === 0 ? 'md:mr-[55%]' : 'md:ml-[55%]',
          experience.isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0',
        ]"
        :style="{ transitionDelay: `${index * 300}ms` }"
        :data-experience-id="experience.id"
      >
        <div
          class="rounded-xl border border-[rgb(var(--v-theme-outline))]/10 bg-[rgb(var(--v-theme-surface))]/80 p-6 shadow-md backdrop-blur-md transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
        >
          <div class="mb-4">
            <div class="timeline-date text-sky-600 dark:text-sky-400">
              <span
                class="mb-2 inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                :class="chipInfoClass(experience.color)"
              >
                {{ experience.fecha }}
              </span>
            </div>
            <h3
              class="my-2 text-xl font-bold text-sky-600 md:text-[1.3rem] dark:text-sky-400"
            >
              {{ experience.cargo }}
            </h3>
            <p class="my-1 text-lg font-semibold text-[rgb(var(--v-theme-on-surface))] opacity-80">
              {{ experience.empresa }}
            </p>
          </div>

          <div>
            <p
              class="mb-4 text-justify text-sm font-normal leading-relaxed text-[rgb(var(--v-theme-on-surface))]"
            >
              {{ experience.descripcion }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in experience.sKill"
                :key="skill.text"
                class="m-0.5 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium"
                :class="skillOutlinedClass(skill)"
                :style="skillOutlinedStyle(skill)"
              >
                <Icon v-if="skill.icon" :icon="mdiToIconify(skill.icon)" class="size-4 shrink-0" aria-hidden="true" />
                <img
                  v-if="skill.image"
                  :src="skill.image"
                  :alt="skill.text"
                  width="16"
                  height="16"
                  class="mr-1 inline-block"
                />
                {{ skill.text }}
              </span>
            </div>
          </div>
        </div>

        <div
          class="absolute top-6 z-[2] flex size-6 items-center justify-center rounded-full shadow-md max-md:left-8 max-md:-translate-x-1/2 md:top-6"
          :class="index % 2 === 0 ? 'md:-right-3 md:left-auto' : 'md:-left-3 md:right-auto'"
          :style="{ backgroundColor: experience.backgroundIcon }"
        >
          <Icon icon="mdi:xml" class="size-[15px] text-white" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@iconify/vue'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
import { createExperienceList } from '@/components/cv/experience/Experience.js'
import { mdiToIconify } from '@/utils/mdiToIconify.js'

const { t, locale } = useI18n()

const experiences = ref(createExperienceList(t))

watch(locale, () => {
  const visibleById = new Map(
    experiences.value.map((e) => [e.id, e.isVisible]),
  )
  experiences.value = createExperienceList(t).map((e) => ({
    ...e,
    isVisible: visibleById.get(e.id) ?? true,
  }))
})

function chipInfoClass() {
  return 'bg-sky-600 dark:bg-sky-500'
}

function skillOutlinedClass(skill) {
  const c = skill.color || 'primary'
  if (typeof c === 'string' && c.startsWith('#')) {
    return 'border-current bg-white/5 text-[rgb(var(--v-theme-on-surface))]'
  }
  const m = {
    primary: 'border-blue-600 text-blue-700 dark:border-blue-400 dark:text-blue-300',
    success: 'border-emerald-600 text-emerald-700 dark:border-emerald-400 dark:text-emerald-300',
    grey: 'border-slate-400 text-slate-700 dark:text-slate-300',
    info: 'border-sky-600 text-sky-700 dark:border-sky-400 dark:text-sky-300',
    warning: 'border-amber-500 text-amber-800 dark:text-amber-300',
    blue: 'border-blue-600 text-blue-700',
    teal: 'border-teal-600 text-teal-700',
  }
  return m[c] || m.primary
}

function skillOutlinedStyle(skill) {
  const c = skill.color
  if (typeof c === 'string' && c.startsWith('#')) {
    return { borderColor: c, color: c }
  }
  if (!c && skill.image) {
    return {}
  }
  return {}
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const experienceId = parseInt(entry.target.dataset.experienceId, 10)
          const row = experiences.value.find((e) => e.id === experienceId)
          if (row) {
            row.isVisible = true
          }
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px 8% 0px' },
  )

  document.querySelectorAll('[data-experience-id]').forEach((item) => {
    observer.observe(item)
  })
})
</script>
