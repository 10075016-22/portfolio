<template>
  <v-row>
    <v-col :cols="mobile ? 12 : 3">
      <h2>Habilidades y Conocimientos</h2>
    </v-col>
    <v-col :cols="mobile ? 12 : 9">
      <v-divider class="w-100 pa-0 mt-5"></v-divider>
    </v-col>
  </v-row>

  <v-row>
    <v-col :cols="mobile ? 12 : 4" v-for="(item, index) in aSkill" :key="index">
      <div class="d-flex justify-space-between">
        <div>
          <v-icon size="45" :color="item.color"> {{ item.icon }} </v-icon>
          {{ item.skill }}
        </div>
        <div class="mr-3">
          <p class="mt-2">{{ item.experience }} Años</p>
        </div>
      </div>
      <v-progress-linear :model-value="item.value" class="mt-2" color="blue" />
    </v-col>
  </v-row>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";

const { mobile } = useDisplay();

const aSkill = ref([
    {
      skill: "Javascript",
      icon: "mdi-language-javascript",
      color: "warning",
      value: 0,
      experience: "4",
    },
    {
      skill: "Aws",
      icon: "mdi-aws",
      color: "",
      value: 0,
      experience: "2",
    },
    {
      skill: "Vue js",
      icon: "mdi-vuejs",
      color: "success",
      value: 0,
      experience: "4",
    },
    {
      skill: "PHP",
      icon: "mdi-language-php",
      color: "#777BB3",
      value: 0,
      experience: "4",
    },
    {
      skill: "MySQL",
      icon: "mdi-database",
      color: "blue",
      value: 0,
      experience: "4",
    },
    {
      skill: "Java",
      icon: "mdi-language-java",
      color: "#634533",
      value: 0,
      experience: "4",
    },
    {
      skill: "MongoDB",
      icon: "mdi-database-outline",
      color: "success",
      value: 0,
      experience: "2",
    },
    {
      skill: "Docker",
      icon: "mdi-docker",
      color: "blue",
      value: 0,
      experience: "2",
    },
  ]);

onMounted(() => {
  setTimeout(() => getItems(), 2000);
});

const getItems = () => {
  aSkill.value = [
    {
      skill: "Javascript",
      icon: "mdi-language-javascript",
      color: "warning",
      value: 87,
      experience: "4",
    },
    {
      skill: "Aws",
      icon: "mdi-aws",
      color: "",
      value: 50,
      experience: "2",
    },
    {
      skill: "Vue js",
      icon: "mdi-vuejs",
      color: "success",
      value: 90,
      experience: "4",
    },
    {
      skill: "PHP",
      icon: "mdi-language-php",
      color: "#777BB3",
      value: 85,
      experience: "4",
    },
    {
      skill: "MySQL",
      icon: "mdi-database",
      color: "blue",
      value: 85,
      experience: "4",
    },
    {
      skill: "Java",
      icon: "mdi-language-java",
      color: "#634533",
      value: 75,
      experience: "4",
    },
    {
      skill: "MongoDB",
      icon: "mdi-database-outline",
      color: "success",
      value: 60,
      experience: "2",
    },
    {
      skill: "Docker",
      icon: "mdi-docker",
      color: "blue",
      value: 55,
      experience: "2",
    },
  ];
};
</script>