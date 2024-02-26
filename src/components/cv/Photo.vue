<template>
  <v-avatar size="200">
    <v-img src="/images/Me.jpeg" />
  </v-avatar>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay()
</script>
<style scoped>
.me {
  border-radius: 50%; /* Hace que la imagen sea circular */
}
</style>