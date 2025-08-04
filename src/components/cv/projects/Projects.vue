<template>
  <div class="projects-section">
    <SimpleTitle :title="$t('titles.projects')" color="primary" />
    
    <!-- Filtros -->
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="d-flex flex-wrap gap-2 justify-center">
          <v-chip
            v-for="filter in filters"
            :key="filter.value"
            :color="activeFilter === filter.value ? 'primary' : 'grey'"
            :variant="activeFilter === filter.value ? 'elevated' : 'outlined'"
            @click="activeFilter = filter.value"
            class="cursor-pointer filter-chip"
            size="large"
          >
            <v-icon :icon="filter.icon" class="mr-2" />
            {{ filter.label }}
          </v-chip>
        </div>
      </v-col>
    </v-row>

    <!-- Grid de proyectos -->
    <v-row>
      <v-col v-for="project in filteredProjects" :key="project.id" :cols="mobile ? 12 : 6" :lg="4" class="mb-4">
        <v-card class="project-card" elevation="4" @click="openProject(project)">
          <!-- Imagen del proyecto -->
          <v-img :src="project.image" :alt="project.title" height="200" cover class="project-image">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-icon size="64" color="grey-lighten-1">mdi-image-off</v-icon>
              </div>
            </template>
          </v-img>

          <!-- Contenido del proyecto -->
          <v-card-text class="pa-4">
            <div class="d-flex justify-space-between align-start mb-3">
              <h3 class="text-h6 font-weight-bold text-primary">{{ project.title }}</h3>
              <v-chip :color="getStatusColor(project.status)" size="small" variant="flat" >
                {{ project.status }}
              </v-chip>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-4">{{ project.description }}</p>
            <!-- Tecnologías utilizadas -->
            <div class="d-flex flex-wrap gap-1 mb-4">
              <v-chip
                v-for="tech in project.technologies"
                :key="tech"
                size="small"
                variant="outlined"
                :color="getTechColor(tech)"
                class="tech-chip"
              >
                {{ tech }}
              </v-chip>
            </div>

            <!-- Botones de acción -->
            <div class="d-flex gap-2">
              <v-btn :href="project.demo" target="_blank" size="small" color="primary" variant="elevated" prepend-icon="mdi-play-circle" :disabled="project.demo === ''">
                {{ $t('projects.demo') }}
              </v-btn>
              <v-btn :href="project.github" target="_blank" size="small" color="black" variant="outlined" prepend-icon="mdi-github" :disabled="project.github === ''">
                {{ $t('projects.code') }}
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal para detalles del proyecto -->
    <v-dialog v-model="showProjectModal" :max-width="mobile ? '100%' : '650'"  scrollable style="justify-content: flex-start;">
      <v-card v-if="selectedProject">
        <v-img :src="selectedProject.image" height="250" cover/>
        <v-card-title class="text-h5 pa-4 font-weight-bold">
          {{ selectedProject.title }}
        </v-card-title>
        <v-card-text class="pa-4">
          <v-row>
            <v-col>
              <p class="text-body-1 mb-4 text-justify">{{ selectedProject.fullDescription }}</p>
              
              <h4 class="text-h6 mb-2">{{ $t('projects.features') }}:</h4>
              <v-list density="compact" class="mb-4">
                <v-list-item v-for="feature in selectedProject.features" :key="feature" :title="feature" >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-check" color="success" />
                  </template>
                </v-list-item>
              </v-list>

              <h4 class="text-h6 mb-2">{{ $t('projects.technologies') }}:</h4>
              <v-list density="compact" class="mb-4">
                <v-chip v-for="tech in selectedProject.technologies" :key="tech" :color="getTechColor(tech)" variant="outlined" class="ma-1">
                  {{ tech }}
                </v-chip>
              </v-list>

              <div class="d-flex gap-2">
                <v-btn v-if="selectedProject.demo" :href="selectedProject.demo" target="_blank" color="primary" prepend-icon="mdi-play-circle">
                  {{ $t('projects.demo') }}
                </v-btn>
                <v-btn v-if="selectedProject.github" :href="selectedProject.github" target="_blank" color="black" variant="outlined" prepend-icon="mdi-github">
                  {{ $t('projects.code') }}
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer />
          <v-btn @click="showProjectModal = false" color="grey">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'

const { mobile } = useDisplay()
const { t } = useI18n()

// Estado reactivo
const activeFilter = ref('all')
const showProjectModal = ref(false)
const selectedProject = ref(null)

// Filtros disponibles
const filters = ref([
  { label: t('projects.all'), value: 'all', icon: 'mdi-apps' },
  { label: 'Vue.js', value: 'vue', icon: 'mdi-vuejs' },
  { label: 'Laravel', value: 'Laravel', icon: 'mdi-laravel' },
  { label: 'JavaScript', value: 'javascript', icon: 'mdi-language-javascript' },
  { label: 'React', value: 'react', icon: 'mdi-react' },
  
])

// Datos de proyectos
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
      t('projectsfeatures.gestionPermisos')
    ]
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
      t('projectsfeatures.integracionWompi')
    ]
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
    features: [
      t('projectsfeatures.diseñoResponsive')
    ]
  }
])

// Computed properties
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category.includes(activeFilter.value.toLowerCase()))
})

// Métodos
const getStatusColor = (status) => {
  const colors = {
    [t('projects.inProduction')]: 'success',
    [t('projects.inDevelopment')]: 'warning',
    [t('projects.paused')]: 'error',
    [t('projects.finished')]: 'info'
  }
  return colors[status] || 'grey'
}

const getTechColor = (tech) => {
  const colors = {
    'Vue.js': 'success',
    'PHP': 'primary',
    'Laravel': '#F05340',
    'Typescript': '#3178C6',
    'Pinia': '#FFD43B',
    'JavaScript': 'warning',
    'Python': 'info',
    'Java': 'error',
    'MySQL': 'secondary',
    'MongoDB': 'success',
    'AWS': 'warning',
    'Docker': 'info',
    'Node.js': 'success',
    'WebRTC': 'primary',
    'Wompi': '#B0F2AE'
  }
  return colors[tech] || 'primary'
}

const openProject = (project) => {
  selectedProject.value = project
  showProjectModal.value = true
}

// Animaciones de entrada
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card)
  })
})
</script>

<style scoped>
.projects-section {
  margin-top: 2rem;
}

.project-card {
  transition: all 0.3s ease;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.project-image {
  position: relative;
  overflow: hidden;
}

.project-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-image::after {
  opacity: 1;
}

.cursor-pointer {
  cursor: pointer;
}

.fade-in {
  animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gap-1 {
  gap: 4px;
}

.gap-2 {
  gap: 8px;
}

.gap-4 {
  gap: 16px;
}

.filter-chip {
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-chip:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tech-chip {
  font-weight: 500;
  transition: all 0.3s ease;
}

.tech-chip:hover {
  transform: scale(1.05);
}
</style> 