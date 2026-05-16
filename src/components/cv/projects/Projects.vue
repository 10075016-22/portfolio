<template>
  <div class="mt-8">
    <span class="hidden animate-fade-in-up" aria-hidden="true" />
    <SimpleTitle :title="$t('titles.projects')" color="primary" />

    <div class="mb-6 flex flex-wrap justify-center gap-2">
      <button
        v-for="f in filters"
        :key="f.value"
        type="button"
        class="filter-chip inline-flex cursor-pointer items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md"
        :class="
          activeFilter === f.value
            ? 'border-blue-600 bg-blue-600 text-white dark:border-blue-500 dark:bg-blue-500'
            : 'border-[rgb(var(--v-theme-outline))] bg-[rgb(var(--v-theme-surface))] text-[rgb(var(--v-theme-on-surface))] hover:border-slate-400'
        "
        @click="activeFilter = f.value"
      >
        <Icon :icon="mdiToIconify(f.icon)" class="size-5 shrink-0" />
        {{ f.label }}
      </button>
    </div>

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="project-card group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-[rgb(var(--v-theme-outline))]/40 bg-[rgb(var(--v-theme-surface))] shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl dark:border-slate-600/50"
        @click="openProject(project)"
      >
        <div class="project-image relative h-[200px] overflow-hidden">
          <img :src="project.image" :alt="project.title" class="h-full w-full object-cover" height="200" width="400" />
          <div
            class="pointer-events-none absolute inset-0 bg-linear-to-br from-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>
        <div class="flex flex-1 flex-col p-4">
          <div class="mb-3 flex flex-wrap items-start justify-between gap-2">
            <h3 class="text-lg font-bold text-[rgb(var(--v-theme-primary))]">
              {{ project.title }}
            </h3>
            <span
              class="inline-flex shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
              :class="statusChipClass(project.status)"
            >
              {{ project.status }}
            </span>
          </div>
          <p class="mb-4 text-sm text-[rgb(var(--v-theme-on-surface-variant))]">
            {{ project.description }}
          </p>
          <div class="mb-4 flex flex-wrap gap-1">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-chip inline-flex rounded-full border-2 px-2 py-0.5 text-xs font-medium transition-transform duration-300 ease-out hover:scale-105"
              :class="techChipClasses(tech)"
              :style="techChipStyle(tech)"
            >
              {{ tech }}
            </span>
          </div>
          <div class="mt-auto flex flex-wrap gap-2">
            <a
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-40"
              :class="{ 'pointer-events-none opacity-40': project.demo === '' }"
              @click.stop="project.demo === '' && $event.preventDefault()"
            >
              <Icon icon="mdi:play-circle" class="size-4" />
              {{ $t('projects.demo') }}
            </a>
            <a
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-slate-800 bg-transparent px-3 py-1.5 text-sm font-medium text-slate-800 transition hover:bg-slate-100 dark:border-slate-300 dark:text-slate-100 dark:hover:bg-slate-800"
              :class="{ 'pointer-events-none opacity-40': project.github === '' }"
              @click.stop="project.github === '' && $event.preventDefault()"
            >
              <Icon icon="mdi:github" class="size-4" />
              {{ $t('projects.code') }}
            </a>
          </div>
        </div>
      </article>
    </div>

    <Dialog :open="showProjectModal" class="relative z-50" @close="closeModal">
      <div class="fixed inset-0 bg-black/50 backdrop-blur-[1px]" aria-hidden="true" />

      <div class="fixed inset-0 flex w-screen items-start justify-center overflow-y-auto p-4 sm:items-center">
        <DialogPanel
          v-if="selectedProject"
          class="my-8 w-full max-w-[650px] overflow-hidden rounded-2xl border border-[rgb(var(--v-theme-outline))]/50 bg-[rgb(var(--v-theme-surface))] shadow-2xl dark:border-slate-600/60"
        >
          <img
            :src="selectedProject.image"
            alt=""
            class="h-[250px] w-full object-cover"
            height="250"
            width="650"
          />
          <DialogTitle class="px-4 pb-2 pt-4 text-xl font-bold text-[rgb(var(--v-theme-on-surface))]">
            {{ selectedProject.title }}
          </DialogTitle>
          <div class="max-h-[60vh] overflow-y-auto px-4 pb-4">
            <p class="mb-4 text-justify text-[rgb(var(--v-theme-on-surface-variant))]">
              {{ selectedProject.fullDescription }}
            </p>
            <h4 class="mb-2 font-semibold text-[rgb(var(--v-theme-on-surface))]">
              {{ $t('projects.features') }}:
            </h4>
            <ul class="mb-4 space-y-2">
              <li
                v-for="feature in selectedProject.features"
                :key="feature"
                class="flex items-start gap-2 text-sm text-[rgb(var(--v-theme-on-surface))]"
              >
                <Icon icon="mdi:check" class="mt-0.5 size-5 shrink-0 text-emerald-500" />
                {{ feature }}
              </li>
            </ul>
            <h4 class="mb-2 font-semibold text-[rgb(var(--v-theme-on-surface))]">
              {{ $t('projects.technologies') }}:
            </h4>
            <div class="mb-4 flex flex-wrap gap-1">
              <span
                v-for="tech in selectedProject.technologies"
                :key="tech"
                class="inline-flex rounded-full border-2 px-2.5 py-0.5 text-xs font-medium"
                :class="techChipClasses(tech)"
                :style="techChipStyle(tech)"
              >
                {{ tech }}
              </span>
            </div>
            <div class="flex flex-wrap gap-2">
              <a
                v-if="selectedProject.demo"
                :href="selectedProject.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex cursor-pointer items-center gap-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Icon icon="mdi:play-circle" class="size-4" />
                {{ $t('projects.demo') }}
              </a>
              <a
                v-if="selectedProject.github"
                :href="selectedProject.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex cursor-pointer items-center gap-1 rounded-lg border-2 border-slate-800 px-4 py-2 text-sm font-medium text-slate-800 dark:border-slate-300 dark:text-slate-100"
              >
                <Icon icon="mdi:github" class="size-4" />
                {{ $t('projects.code') }}
              </a>
            </div>
          </div>
          <div class="flex justify-end gap-2 border-t border-[rgb(var(--v-theme-outline))]/40 px-4 py-3">
            <button
              type="button"
              class="rounded-lg bg-slate-500 px-4 py-2 text-sm font-medium text-white hover:bg-slate-600"
              @click="closeModal"
            >
              {{ $t('common.close') }}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'
import { Icon } from '@iconify/vue'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
import { mdiToIconify } from '@/utils/mdiToIconify.js'

const { t } = useI18n()

const activeFilter = ref('all')
const showProjectModal = ref(false)
const selectedProject = ref(null)

const filters = ref([
  { label: t('projects.all'), value: 'all', icon: 'mdi-apps' },
  { label: 'Vue.js', value: 'vue', icon: 'mdi-vuejs' },
  { label: 'Laravel', value: 'Laravel', icon: 'mdi-laravel' },
  { label: 'JavaScript', value: 'javascript', icon: 'mdi-language-javascript' },
  { label: 'React', value: 'react', icon: 'mdi-react' },
])

const projects = computed(() => [
  {
    id: 1,
    title: t('regisst.title'),
    description: t('regisst.description'),
    fullDescription: t('regisst.fullDescription'),
    image: '/projects/regisst.png',
    status: t('projects.inProduction'),
    technologies: ['Vue 3', 'Typescript', 'Pinia', 'Laravel', 'MySQL', 'AWS'],
    category: ['vue', 'laravel'],
    demo: '',
    github: '',
    features: [
      t('projectsfeatures.gestionDocumentos'),
      t('projectsfeatures.gestionUsuarios'),
      t('projectsfeatures.gestionRoles'),
      t('projectsfeatures.gestionPermisos'),
    ],
  },
  {
    id: 2,
    title: t('naafar.title'),
    description: t('naafar.description'),
    fullDescription: t('naafar.fullDescription'),
    image: '/projects/naafar.png',
    status: t('projects.finished'),
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Wompi'],
    category: ['vue', 'laravel', 'javascript'],
    demo: '',
    github: '',
    features: [
      t('projectsfeatures.gestionSorteos'),
      t('projectsfeatures.gestionPremios'),
      t('projectsfeatures.gestionUsuarios'),
      t('projectsfeatures.gestionGanadores'),
      t('projectsfeatures.gestionEnvioCorreos'),
      t('projectsfeatures.integracionWompi'),
    ],
  },
  {
    id: 3,
    title: t('millersDesigns.title'),
    description: t('millersDesigns.description'),
    fullDescription: t('millersDesigns.fullDescription'),
    image: '/projects/miller-designs.png',
    status: t('projects.inProduction'),
    technologies: ['React', 'Typescript', 'Tailwind', 'Laravel'],
    category: ['react', 'laravel', 'typescript'],
    demo: 'https://millers-designs.com/',
    github: '',
    features: [t('projectsfeatures.diseñoResponsive')],
  },
])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter((project) =>
    project.category.includes(activeFilter.value.toLowerCase()),
  )
})

function getStatusColor(status) {
  const colorsMap = {
    [t('projects.inProduction')]: 'success',
    [t('projects.inDevelopment')]: 'warning',
    [t('projects.paused')]: 'error',
    [t('projects.finished')]: 'info',
  }
  return colorsMap[status] || 'grey'
}

function statusChipClass(status) {
  const c = getStatusColor(status)
  const m = {
    success: 'bg-emerald-600 dark:bg-emerald-500',
    warning: 'bg-amber-500 text-slate-900',
    error: 'bg-red-600',
    info: 'bg-sky-600 dark:bg-sky-500',
    grey: 'bg-slate-500',
  }
  return m[c] || m.grey
}

function getTechColor(tech) {
  const colorsMap = {
    'Vue.js': 'success',
    PHP: 'primary',
    Laravel: '#F05340',
    Typescript: '#3178C6',
    Pinia: '#FFD43B',
    JavaScript: 'warning',
    Python: 'info',
    Java: 'error',
    MySQL: 'secondary',
    MongoDB: 'success',
    AWS: 'warning',
    Docker: 'info',
    'Node.js': 'success',
    WebRTC: 'primary',
    Wompi: '#B0F2AE',
    'Vue 3': 'success',
    React: 'info',
    Tailwind: 'primary',
  }
  return colorsMap[tech] || 'primary'
}

function techChipClasses(tech) {
  const raw = getTechColor(tech)
  if (typeof raw === 'string' && raw.startsWith('#')) {
    return 'border-transparent text-white'
  }
  const m = {
    primary: 'border-blue-600 text-blue-700 dark:text-blue-400',
    success: 'border-emerald-600 text-emerald-700 dark:text-emerald-400',
    warning: 'border-amber-500 text-amber-800 dark:text-amber-300',
    info: 'border-sky-600 text-sky-700 dark:text-sky-400',
    error: 'border-red-600 text-red-700',
    secondary: 'border-violet-600 text-violet-700',
  }
  return m[raw] || m.primary
}

function techChipStyle(tech) {
  const raw = getTechColor(tech)
  if (typeof raw === 'string' && raw.startsWith('#')) {
    return {
      backgroundColor: `${raw}22`,
      borderColor: raw,
      color: raw,
    }
  }
  return {}
}

function closeModal() {
  showProjectModal.value = false
  selectedProject.value = null
}

function openProject(project) {
  selectedProject.value = project
  showProjectModal.value = true
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.project-card').forEach((card) => {
    observer.observe(card)
  })
})
</script>

