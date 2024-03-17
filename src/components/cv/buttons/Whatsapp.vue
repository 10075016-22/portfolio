<template>
  <v-tooltip :text="$t('hover.hablemosWhatsapp')" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        color="#128c7e"
        icon
        density="comfortable"
        @click="__open"
        v-bind="props"
      >
        <v-icon color="white">mdi-whatsapp</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>
<script setup>
const URL = "https://wa.link/zg95xq";
const __open = () => {
  window.open(URL, "_blank");
};
</script>