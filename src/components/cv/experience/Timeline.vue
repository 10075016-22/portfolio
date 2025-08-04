<template>
  <div class="timeline-section">
    <SimpleTitle :title="$t('titles.workExperience')" color="primary" />
    
    <div class="timeline-container">
      <div v-for="(experience, index) in experiences" :key="experience.id" class="timeline-item"
        :class="{ 
          'timeline-item--left': index % 2 === 0,
          'timeline-item--right': index % 2 === 1,
          'timeline-item--visible': experience.isVisible 
        }"
        :style="{ animationDelay: `${index * 300}ms` }"
      >
        <div class="timeline-content">
          <div class="timeline-header">
            <div class="timeline-date">
              <v-chip :color="experience.color" variant="flat" size="small" class="mb-2" >
                {{ experience.fecha }}
              </v-chip>
            </div>
            <h3 class="timeline-title">{{ experience.cargo }}</h3>
            <p class="timeline-company">{{ experience.empresa }}</p>
          </div>
          
          <div class="timeline-body">
            <p class="timeline-description">{{ experience.descripcion }}</p>
            
            <div class="timeline-skills">
              <v-chip v-for="skill in experience.sKill" :key="skill.text" :color="skill.color || 'primary'" size="small" variant="outlined" class="ma-1">
                <v-icon :icon="skill.icon" size="16" class="mr-1" v-if="skill.icon" />
                <img :src="skill.image" :alt="skill.text" width="16" class="mr-1" v-if="skill.image"/>
                {{ skill.text }}
              </v-chip>
            </div>
          </div>
        </div>
        
        <div class="timeline-dot" :style="{ backgroundColor: experience.color }">
          <v-icon icon="mdi-briefcase" color="white" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
import colors from '@/utils/colors'

const { t } = useI18n()

const experiences = ref([
  {
    id: 1,
    fecha: `Sep 2022 - Ago 2025`,
    cargo: t("cargos.fullstacks"),
    empresa: "Techboss SAS",
    descripcion: t('experience.descripcion.techboss'),
    color: 'primary',
    sKill: [
      { color: colors.PHP, icon: "mdi-language-php", text: "PHP" },
      { color: colors.VUE, icon: "mdi-vuejs", text: "VUE JS" },
      { color: '', icon: "", text: "WebRTSP", image: '/icons/skill/webrtc.svg' },
      { color: '', icon: "", text: "Mysql", image: '/icons/skill/mysql.svg' },
      { color: '', icon: "", text: "MongoDB", image: '/icons/skill/mongodb.svg' },
      { color: '', icon: "", text: "AWS", image: '/icons/skill/aws.svg' }
    ],
    isVisible: false
  },
  {
    id: 2,
    fecha: 'Sep 2021 - Oct 2023',
    cargo: t("cargos.ingenieroSoftware"),
    empresa: "Sipremcol",
    descripcion: t('experience.descripcion.sipremcol'),
    color: 'success',
    sKill: [
      { color: colors.PHP, icon: "mdi-language-php", text: "PHP" },
      { color: colors.VUE, icon: "mdi-vuejs", text: "VUE JS" },
      { color: '', icon: "", text: "Mysql", image: '/icons/skill/mysql.svg' },
      { color: colors.DOCKER, icon: "mdi-docker", text: "Docker" }
    ],
    isVisible: false
  },
  {
    id: 3,
    fecha: 'Ago 2021 - Oct 2021',
    cargo: t("cargos.backend"),
    empresa: "Graphic Market Company",
    descripcion: t('experience.descripcion.gmp'),
    color: 'warning',
    sKill: [
      { color: colors.NODE, icon: "mdi-nodejs", text: "Node JS" },
      { color: colors.VUE, icon: "mdi-vuejs", text: "VUE JS" }
    ],
    isVisible: false
  },
  {
    id: 4,
    fecha: 'Dic 2020 - Jun 2021',
    cargo: t("cargos.backend") + " Jr",
    empresa: "Inxait Corp",
    descripcion: t('experience.descripcion.inxait'),
    color: 'info',
    sKill: [
      { color: colors.LARAVEL, icon: "mdi-laravel", text: "Laravel" },
      { color: colors.VUE, icon: "mdi-vuejs", text: "VUE JS" },
      { color: colors.LARAVEL, icon: "mdi-language-html5", text: "HTML 5" }
    ],
    isVisible: false
  },
  {
    id: 5,
    fecha: 'Abr. 2020 - Mar. 2021',
    cargo: t("cargos.desarrolladorSoftware"),
    empresa: "Intelligent Electronic Solutions (IES)",
    descripcion: t('experience.descripcion.ies'),
    color: 'error',
    sKill: [
      { color: colors.LARAVEL, icon: "mdi-angularjs", text: "Angular" },
      { color: colors.JAVA, icon: "mdi-language-java", text: "Java" }
    ],
    isVisible: false
  },
  {
    id: 6,
    fecha: 'Ene. 2020 - Mar. 2020',
    cargo: t("cargos.desarrolladorSoftware"),
    empresa: "SSTEC",
    descripcion: t('experience.descripcion.sstec'),
    color: 'secondary',
    sKill: [
      { color: colors.JAVASCRIPT, icon: "mdi-language-javascript", text: "Javascript" }
    ],
    isVisible: false
  },
  {
    id: 7,
    fecha: 'Jul. 2019 - Dic. 2019',
    cargo: t("cargos.desarrolladorWeb"),
    empresa: "Inversiones GERA SAS",
    descripcion: t('experience.descripcion.gera'),
    color: 'teal',
    sKill: [
      { color: colors.PHP, icon: "mdi-language-php", text: "PHP" },
      { color: colors.JAVA, icon: "mdi-language-java", text: "Java" },
      { color: colors.JAVASCRIPT, icon: "mdi-language-javascript", text: "Javascript" },
      { color: '', icon: "", text: "Mysql", image: '/icons/skill/mysql.svg' }
    ],
    isVisible: false
  }
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const experienceId = parseInt(entry.target.dataset.experienceId)
        const experience = experiences.value.find(e => e.id === experienceId)
        if (experience) {
          experience.isVisible = true
        }
      }
    })
  }, { threshold: 0.3 })

  // Observar cada elemento del timeline
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.dataset.experienceId = experiences.value[index].id
    observer.observe(item)
  })
})
</script>

<style scoped>
.timeline-section {
  margin: 3rem 0;
}

.timeline-container {
  position: relative;
  padding: 2rem 0;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    to bottom,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-secondary))
  );
  transform: translateX(-50%);
  border-radius: 2px;
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.timeline-item--visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-item--left {
  width: 45%;
  margin-right: 55%;
}

.timeline-item--right {
  width: 45%;
  margin-left: 55%;
}

.timeline-content {
  background: rgba(var(--v-theme-surface), 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--v-theme-outline), 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.timeline-header {
  margin-bottom: 1rem;
}

.timeline-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  margin: 0.5rem 0;
}

.timeline-company {
  font-size: 1.1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin: 0.25rem 0;
  opacity: 0.8;
}

.timeline-description {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface));
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 400;
}

.timeline-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.timeline-dot {
  position: absolute;
  top: 1.5rem;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.timeline-item--left .timeline-dot {
  right: -12px;
}

.timeline-item--right .timeline-dot {
  left: -12px;
}

/* Responsive */
@media (max-width: 768px) {
  .timeline-container::before {
    left: 2rem;
  }
  
  .timeline-item {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 4rem;
  }
  
  .timeline-dot {
    left: 0 !important;
    right: auto !important;
  }
}
</style> 