<template>
  <v-btn color="primary" icon density="comfortable" @click="__open">
    <v-icon color="white">mdi-email-outline</v-icon>
  </v-btn>
</template>
<script setup>
const URL = "mailto:sell3.1998@hotmail.com";
const __open = () => {
  window.open(URL);
};
</script>