<template>
  <IconTooltipBtn :label="$t('hover.descargar')" button-class="bg-[#F40F02] text-white shadow-none" @click="onDownload">
    <Icon icon="mdi:file-pdf-box" class="size-5 text-white" aria-hidden="true" />
  </IconTooltipBtn>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import IconTooltipBtn from '@/components/ui/IconTooltipBtn.vue'

function onDownload() {
  window.open('/cv/cv.pdf', '_blank')
}
</script>
