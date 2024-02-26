<template>
    <v-btn color="#fc6d26" icon density="comfortable" class="mr-2" @click="__open">
      <v-icon color="white">mdi-gitlab</v-icon>
    </v-btn>
  </template>
  <script setup>
  const URL = "https://gitlab.com/sell3.thiago"
  const __open = () => {
    window.open(URL, '_blank')
  }
  </script>