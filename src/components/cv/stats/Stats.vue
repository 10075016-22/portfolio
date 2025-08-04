<template>
  <div class="stats-section">
    <SimpleTitle :title="$t('titles.stats')" color="primary" />
    
    <v-row>
      <v-col
        v-for="stat in stats"
        :key="stat.id"
        :cols="mobile ? 6 : 3"
        class="mb-4"
      >
        <v-card
          class="stat-card"
          elevation="2"
          :class="{ 'stat-card--animated': stat.isVisible }"
        >
          <v-card-text class="text-center pa-6">
            <div class="stat-icon-wrapper mb-3">
              <v-icon
                :icon="stat.icon"
                :color="stat.color"
                size="48"
                class="stat-icon"
              />
            </div>
            
            <div class="stat-number-wrapper">
              <span 
                class="stat-number"
                :class="{ 'animate-count': stat.isVisible }"
                :data-target="stat.value"
              >
                {{ stat.isVisible ? stat.value : 0 }}
              </span>
              <span class="stat-symbol">{{ stat.symbol }}</span>
            </div>
            
            <p class="stat-label mt-2">{{ stat.label }}</p>
            
            <div class="stat-progress mt-3">
              <v-progress-linear
                :model-value="stat.isVisible ? stat.percentage : 0"
                :color="stat.color"
                height="4"
                rounded
                class="stat-progress-bar"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'
import SimpleTitle from '@/components/utils/SimpleTitle.vue'

const { mobile } = useDisplay()

const stats = ref([
  {
    id: 1,
    value: 4,
    symbol: '+',
    label: 'Años de Experiencia',
    icon: 'mdi-briefcase',
    color: 'primary',
    percentage: 80,
    isVisible: false
  },
  {
    id: 2,
    value: 25,
    symbol: '+',
    label: 'Proyectos Completados',
    icon: 'mdi-rocket-launch',
    color: 'success',
    percentage: 90,
    isVisible: false
  },
  {
    id: 3,
    value: 8,
    symbol: '+',
    label: 'Tecnologías Dominadas',
    icon: 'mdi-code-braces',
    color: 'warning',
    percentage: 85,
    isVisible: false
  },
  {
    id: 4,
    value: 100,
    symbol: '%',
    label: 'Satisfacción del Cliente',
    icon: 'mdi-heart',
    color: 'error',
    percentage: 95,
    isVisible: false
  }
])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const statId = parseInt(entry.target.dataset.statId)
        const stat = stats.value.find(s => s.id === statId)
        if (stat) {
          stat.isVisible = true
        }
      }
    })
  }, { threshold: 0.5 })

  // Observar cada tarjeta de estadística
  document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.dataset.statId = stats.value[index].id
    observer.observe(card)
  })
})
</script>

<style scoped>
.stats-section {
  margin: 3rem 0;
}

.stat-card {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(30px);
  opacity: 0;
  height: 100%;
}

.stat-card--animated {
  transform: translateY(0);
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
}

.stat-icon-wrapper {
  position: relative;
  display: inline-block;
}

.stat-icon {
  transition: all 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.1);
}

.stat-number-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  transition: all 0.6s ease;
}

.stat-symbol {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--v-theme-primary));
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
}

.stat-progress {
  max-width: 80px;
  margin: 0 auto;
}

.stat-progress-bar {
  transition: all 0.8s ease;
}

.animate-count {
  animation: countUp 1.5s ease-out;
}

@keyframes countUp {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .stat-number {
    font-size: 2rem;
  }
  
  .stat-symbol {
    font-size: 1.2rem;
  }
  
  .stat-label {
    font-size: 0.8rem;
  }
}
</style> 