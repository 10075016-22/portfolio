<template>
  <div class="animated-title-container">
    <div class="title-wrapper">
      <h2 
        class="animated-title"
        :class="{ 'animate-in': isVisible }"
        :style="{ '--title-color': `rgb(var(--v-theme-${props.color}))` }"
      >
        <span class="title-text">{{ title }}</span>
        <span class="title-underline"></span>
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  }
})

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<style scoped>
.animated-title-container {
  margin: 2rem 0 1.5rem 0;
}

.title-wrapper {
  position: relative;
  display: inline-block;
}

.animated-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--title-color, rgb(var(--v-theme-primary)));
  margin: 0;
  position: relative;
  overflow: hidden;
}

/* Asegurar que el color se aplique correctamente */
.animated-title .title-text {
  color: var(--title-color, rgb(var(--v-theme-primary))) !important;
}

.title-text {
  display: inline-block;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.title-underline {
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--title-color, rgb(var(--v-theme-primary))), rgb(var(--v-theme-secondary)));
  border-radius: 2px;
  transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
}

.animate-in .title-text {
  transform: translateY(0);
  opacity: 1;
}

.animate-in .title-underline {
  width: 100%;
}

/* Efecto de brillo en hover */
.animated-title:hover .title-underline {
  background: linear-gradient(90deg, 
    var(--title-color, rgb(var(--v-theme-primary))), 
    rgb(var(--v-theme-secondary)), 
    var(--title-color, rgb(var(--v-theme-primary)))
  );
  background-size: 200% 100%;
  animation: shine 2s ease-in-out infinite;
}

@keyframes shine {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Responsive */
@media (max-width: 768px) {
  .animated-title {
    font-size: 1.5rem;
  }
}
</style> 