<template>
  <v-tooltip :text="$t('hover.email')" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        class="ma-2"
        color="primary"
        icon
        density="comfortable"
        @click="__open"
        v-bind="props"
      >
        <v-icon color="white">mdi-email-outline</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>
<script setup>
const URL = "mailto:sell3.1998@hotmail.com";
const __open = () => {
  window.open(URL);
};
</script>