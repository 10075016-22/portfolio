<template>
    <v-row>
      <v-col :cols="mobile ? 12 : 4">
        <h2>{{ props.title }}</h2>
      </v-col>
      <v-col :cols="mobile ? 12 : 8">
        <v-divider class="w-100 pa-0 mt-5"></v-divider>
      </v-col>
    </v-row>
  </template>
  <script setup>
  import { useDisplay } from "vuetify/lib/framework.mjs";
  
  const { mobile } = useDisplay();

  const props = defineProps({
    title: String
  })
  </script>
  