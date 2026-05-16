<template>
  <IconTooltipBtn :label="$t('hover.email')" button-class="m-2 bg-[rgb(var(--v-theme-primary))] text-white" @click="__open">
    <Icon icon="mdi:email-outline" class="size-5 text-white" aria-hidden="true" />
  </IconTooltipBtn>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import IconTooltipBtn from '@/components/ui/IconTooltipBtn.vue'

const URL = 'mailto:sell3.1998@hotmail.com'
const __open = () => {
  window.open(URL)
}
</script>
