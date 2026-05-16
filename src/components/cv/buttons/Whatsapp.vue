<template>
  <IconTooltipBtn :label="$t('hover.hablemosWhatsapp')" button-class="bg-[#128c7e] text-white" @click="__open">
    <Icon icon="mdi:whatsapp" class="size-5 text-white" aria-hidden="true" />
  </IconTooltipBtn>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import IconTooltipBtn from '@/components/ui/IconTooltipBtn.vue'

const URL = 'https://wa.link/zg95xq'
const __open = () => {
  window.open(URL, '_blank')
}
</script>
