<template>
  <div class="simple-title-container">
    <h2 class="simple-title">
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.simple-title-container {
  margin: 2rem 0 1.5rem 0;
}

.simple-title {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin: 0;
  position: relative;
}
</style> 