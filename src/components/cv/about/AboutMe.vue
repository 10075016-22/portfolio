<template>
  <Title :title="$t('titles.aboutMe')"/>
  <v-row>
    <v-col cols="12">
      <p class="text-justify">
        {{ $t('text.aboutMe') }}
      </p>
    </v-col>
  </v-row>
  
</template>
<script setup>
import Title from '@/components/utils/Title.vue'
</script>