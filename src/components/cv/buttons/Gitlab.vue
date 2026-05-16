<template>
  <IconTooltipBtn :label="$t('hover.gitlab')" button-class="mr-2 bg-[#fc6d26] text-white" @click="__open">
    <Icon icon="mdi:gitlab" class="size-5 text-white" aria-hidden="true" />
  </IconTooltipBtn>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import IconTooltipBtn from '@/components/ui/IconTooltipBtn.vue'

const URL = 'https://gitlab.com/sell3.thiago'
const __open = () => {
  window.open(URL, '_blank')
}
</script>
