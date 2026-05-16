<template>
  <IconTooltipBtn :label="$t('hover.github')" button-class="mr-2 bg-black text-white" @click="__open">
    <Icon icon="mdi:github" class="size-5 text-white" aria-hidden="true" />
  </IconTooltipBtn>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import IconTooltipBtn from '@/components/ui/IconTooltipBtn.vue'

const URL = 'https://github.com/10075016-22'
const __open = () => {
  window.open(URL, '_blank')
}
</script>
