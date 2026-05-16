<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
    <div class="md:col-span-4">
      <h2 class="text-2xl font-bold">{{ props.title }}</h2>
    </div>
    <div class="md:col-span-8">
      <div class="mt-2 h-px w-full bg-[rgb(var(--v-theme-outline))] md:mt-5" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
</script>
