<template>
  <div class="my-8 mb-6 mt-8">
    <h2 class="relative m-0 text-3xl font-bold max-md:text-2xl text-[rgb(var(--v-theme-on-surface))]">
      {{ title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>
