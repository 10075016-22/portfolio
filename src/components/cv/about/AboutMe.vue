<template>
  <v-row>
    <v-col :cols="mobile ? 12 : 1">
      <h2>Sobre mí</h2>
    </v-col>
    <v-col :cols="mobile ? 12 : 11">
      <v-divider class="w-100 pa-0 mt-5"></v-divider>
    </v-col>
    <v-col cols="12">
      <p class="text-justify">
        Desarrollador de software apasionado con 4 años de experiencia en el
        ámbito full-stack, especializado en tecnologías como
        <v-icon color="success">mdi-vuejs</v-icon> Vue js,
        <v-icon color="warning">mdi-language-javascript</v-icon> JavaScript,
        <v-icon color="#634533">mdi-language-java</v-icon> Java,
        <v-icon color="success">mdi-nodejs</v-icon> Node.js,
        <v-icon color="#4584b6">mdi-language-python</v-icon> Python,
        <v-icon color="#777BB3">mdi-language-php</v-icon> PHP, y
        <v-icon color="#F05340">mdi-laravel</v-icon> Laravel. Competente en el
        manejo de bases de datos SQL y NoSQL, así como en la implementación de
        soluciones eficientes y escalables. Mi enfoque implica la construcción
        de aplicaciones robustas y de alto rendimiento y el uso de
        <v-icon color="blue">mdi-docker</v-icon> Docker para agilizar el
        despliegue y la gestión. Siempre en busca de nuevos retos para seguir
        creciendo profesionalmente. ¡Conectemos y exploremos juntos el mundo del
        desarrollo de software! 🚀
      </p>
    </v-col>
  </v-row>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay();
</script>