<template>
  <SimpleTitle :title="$t('titles.aboutMe')"/>
  <v-row>
    <v-col cols="12" xl="10">
      <p class="text-justify">
        {{ $t('text.aboutMe') }}
      </p>
    </v-col>
  </v-row>
  
</template>
<script setup>
import SimpleTitle from '@/components/utils/SimpleTitle.vue'
</script>