<template>
  <Title :title="$t('titles.habilities')"/>
  <v-row>
    <ProgressInfo 
      v-for="(item, index) in aSkill" 
      :color="item.color" 
      :icon="item.icon" 
      :image="item.image" 
      :label="item.experience + ' ' + $t('others.years')" 
      :text="item.skill"
      :progress="item.value"
      :key="index +'__'"
    />
  </v-row>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useDisplay } from "vuetify/lib/framework.mjs";
import ProgressInfo from "@/components/utils/ProgressInfo.vue";
import Title from '@/components/utils/Title.vue'

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
    image: "",
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
      icon: "",
      image: "/icons/skill/aws.svg",
      color: "",
      value: 60,
      experience: "2",
    },
    {
      skill: "Vue js",
      icon: "mdi-vuejs",
      color: "success",
      value: 85,
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
      value: 85,
      experience: "4",
    },
    {
      skill: "MongoDB",
      image: "/icons/skill/mongodb.svg",
      icon: "",
      color: "success",
      value: 60,
      experience: "2",
    },
    {
      skill: "Docker",
      icon: "mdi-docker",
      color: "blue",
      value: 60,
      experience: "2",
    },
  ];
};
</script>