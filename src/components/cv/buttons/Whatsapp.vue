<template>
  <v-btn color="#128c7e" icon density="comfortable" @click="__open">
    <v-icon color="white">mdi-whatsapp</v-icon>
  </v-btn>
</template>
<script setup>
const URL = "https://wa.link/zg95xq";
const __open = () => {
  window.open(URL, '_blank')
}
</script>