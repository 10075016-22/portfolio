<template>
  <v-tooltip :text="$t('hover.linkedIn')" location="top">
    <template v-slot:activator="{ props }">
      <v-btn color="#0077B5" icon density="comfortable" class="mr-2" @click="__open" v-bind="props">
        <v-icon color="white">mdi-linkedin</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>
<script setup>
const URL = "https://www.linkedin.com/in/santiago-lopez-06812410a/"
const __open = () => {
  window.open(URL, '_blank')
}
</script>