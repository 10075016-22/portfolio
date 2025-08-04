<template>
  <v-tooltip :text="$t('hover.github')" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        color="#000000"
        icon
        density="comfortable"
        class="mr-2"
        @click="__open"
        v-bind="props"
      >
        <v-icon color="white">mdi-github</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>
  <script setup>
const URL = "https://github.com/10075016-22";
const __open = () => {
  window.open(URL, "_blank");
};
</script>