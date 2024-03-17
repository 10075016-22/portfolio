<template>
  <v-tooltip :text="$t('hover.descargar')" location="top">
    <template v-slot:activator="{ props }">
      <v-btn
        icon
        elevation="0"
        color="#F40F02"
        density="comfortable"
        v-bind="props"
        @click="onDownload"
      >
        <v-icon color="white">mdi-file-pdf-box</v-icon>
      </v-btn>
    </template>
  </v-tooltip>
</template>
<script setup>

const onDownload = () => {
    window.open('/cv/cv.pdf', '_blank')
}
</script>