<template>
  <Title :title="$t('titles.workExperience')" />
  <v-row v-for="(item, index) in Listado" :key="index" class="mb-2">
    <v-col :cols="mobile ? 12 : 3">
      <p class="text-medium-emphasis">{{ item.fecha }}</p>
    </v-col>
    <v-divider vertical v-if="!mobile"/>
    <v-col :class="mobile ? '' : 'ml-3'">
      <p class="mb-2 font-weight-bold">{{ item?.cargo }}</p>
      <p>{{ item.empresa }}</p>
      <p class="text-justify mt-1"> {{ item.descripcion }}</p>
      <div class="mt-2">
        <v-chip v-for="({ color, icon, text, image }, index) in item.sKill" :key="index" class="ma-1">
          <!-- icon -->
          <v-icon :color="color" class="mr-2" v-if="icon !== ''">{{ icon }}</v-icon> 
          <!-- image -->
          <img width="20" :src="image" :alt="text" v-if="!!image" class="mr-1">
          <!-- text -->
          <span>{{ text }}</span>

        </v-chip>
      </div>
    </v-col>
  </v-row>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
import Title from "@/components/utils/Title.vue";
import { Experience } from "@/components/cv/experience/Experience.js";
const { mobile } = useDisplay();

const { Listado } = Experience();
</script>
