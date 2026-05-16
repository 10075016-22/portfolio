<template>
  <ul class="list-none space-y-2 p-0">
    <li class="flex items-center gap-3 text-[rgb(var(--v-theme-on-surface))]">
      <Icon icon="mdi:laptop" class="size-5 shrink-0 text-[rgb(var(--v-theme-primary))]" aria-hidden="true" />
      <span>{{ $t('cargos.fullstacks') }}</span>
    </li>
    <li class="flex items-center gap-3 text-[rgb(var(--v-theme-on-surface))]">
      <Icon icon="mdi:map-marker-outline" class="size-5 shrink-0 text-[rgb(var(--v-theme-primary))]" aria-hidden="true" />
      <span>Montería, Colombia</span>
    </li>
    <li class="flex items-center gap-3 text-[rgb(var(--v-theme-on-surface))]">
      <Icon icon="mdi:phone" class="size-5 shrink-0 text-[rgb(var(--v-theme-primary))]" aria-hidden="true" />
      <span>+57 300 275 0183</span>
    </li>
  </ul>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>
