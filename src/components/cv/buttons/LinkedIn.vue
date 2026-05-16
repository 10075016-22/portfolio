<template>
  <IconTooltipBtn :label="$t('hover.linkedIn')" button-class="bg-[#0077B5] text-white mr-2" @click="__open">
    <Icon icon="mdi:linkedin" class="size-5 text-white" aria-hidden="true" />
  </IconTooltipBtn>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import IconTooltipBtn from '@/components/ui/IconTooltipBtn.vue'

const URL = 'https://www.linkedin.com/in/santiago-lopez-06812410a/'
const __open = () => {
  window.open(URL, '_blank')
}
</script>
