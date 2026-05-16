<template>
  <div class="rounded-xl border border-[rgb(var(--v-theme-outline))]/30 bg-[rgb(var(--v-theme-surface))]/60 p-4 shadow-sm backdrop-blur-sm dark:border-slate-600/40">
    <div class="flex flex-wrap items-center gap-2">
      <LinkedIn />
      <Whatsapp />
      <Email />
      <Gitlab />
      <Github />
      <CVDownload />
    </div>
  </div>
</template>

<script setup>
import Whatsapp from '@/components/cv/buttons/Whatsapp.vue'
import LinkedIn from '@/components/cv/buttons/LinkedIn.vue'
import Email from '@/components/cv/buttons/Email.vue'
import Gitlab from '@/components/cv/buttons/Gitlab.vue'
import Github from '@/components/cv/buttons/Github.vue'
import CVDownload from '@/components/cv/buttons/CvDownload.vue'
</script>
