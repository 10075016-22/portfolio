<template>
  <v-card elevation="0">
    <v-card-text>
      <LinkedIn />    
      <Whatsapp />
      <Email class="ma-2"/>
      <Gitlab/>
      <CVDownload />
    </v-card-text>
  </v-card>
</template>
<script setup>
import Whatsapp from '@/components/cv/buttons/Whatsapp.vue'
import LinkedIn from '@/components/cv/buttons/LinkedIn.vue'
import Email from '@/components/cv/buttons/Email.vue'
import Gitlab from '@/components/cv/buttons/Gitlab.vue'

import CVDownload from '@/components/cv/buttons/CvDownload.vue'
</script>
