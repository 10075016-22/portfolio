<template>
  <div>
    <SimpleTitle :title="$t('titles.aboutMe')" />
    <div class="grid grid-cols-1">
      <div class="max-w-4xl">
        <p class="text-justify text-[rgb(var(--v-theme-on-surface))]">
          {{ $t('text.aboutMe') }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
</script>
