<template>
  <v-col :cols="mobile ? 12 : 4">
    <div
      class="skill-item"
      :class="{ 'skill-item--animated': isVisible }"
      :style="{ animationDelay: `${delay}ms` }"
    >
      <div class="d-flex justify-space-between">
        <div class="d-flex">
          <v-icon size="45" :color="props.color" v-if="props.icon !== ''" class="skill-icon">
            {{ props.icon }}
          </v-icon>
          <img :src="props.image" v-if="props.image !== ''" :alt="props.text" width="45" class="mt-2 skill-image"/>
          <p class="mt-3 ml-2 skill-text">{{ props.text }}</p>
        </div>
        <div class="mr-3">
          <p class="mt-2">{{ props.label }}</p>
        </div>
      </div>
      <v-progress-linear
        :model-value="isVisible ? props.progress : 0"
        class="mt-2 skill-progress"
        color="blue"
        :indeterminate="props.progress === 0"
        :max="props.max"
        height="8"
        rounded
      />
    </div>
  </v-col>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
const { mobile } = useDisplay();

const props = defineProps({
  color: {
    type: String,
    default: () => "",
  },
  icon: {
    type: String,
    default: () => "",
  },
  image: {
    type: String,
    default: () => "",
  },
  text: {
    type: String,
    default: () => "",
  },
  label: {
    type: String,
    default: () => "",
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
});

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, props.delay);
});
</script>

<style scoped>
.skill-item {
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1rem;
  border-radius: 8px;
  background: rgba(var(--v-theme-surface), 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--v-theme-outline), 0.1);
}

.skill-item--animated {
  opacity: 1;
  transform: translateX(0);
}

.skill-item:hover {
  background: rgba(var(--v-theme-surface), 0.8);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.skill-icon,
.skill-image {
  transition: all 0.3s ease;
}

.skill-item:hover .skill-icon,
.skill-item:hover .skill-image {
  transform: scale(1.1);
}

.skill-text {
  font-weight: 600;
  transition: color 0.3s ease;
}

.skill-item:hover .skill-text {
  color: rgb(var(--v-theme-primary));
}

.skill-label {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface-variant));
}

.skill-progress {
  transition: all 0.8s ease;
}

.skill-progress .v-progress-linear__background {
  background: rgba(var(--v-theme-outline), 0.2) !important;
}

.skill-progress .v-progress-linear__determinate {
  background: linear-gradient(
    90deg,
    rgb(var(--v-theme-primary)),
    rgb(var(--v-theme-secondary))
  ) !important;
}
</style>