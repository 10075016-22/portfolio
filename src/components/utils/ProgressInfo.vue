<template>
  <v-col :cols="mobile ? 12 : 4">
    <div class="d-flex justify-space-between">
      <div class="d-flex">
          <v-icon size="45" :color="props.color" v-if="props.icon !== ''"> {{ props.icon }} </v-icon>
          <img :src="props.image" v-if="props.image !== '' " :alt="props.text" width="45" class="mt-2"/>
          <p class="mt-3 ml-2"> {{ props.text }} </p>
      </div>
      <div class="mr-3">
        <p class="mt-2">{{ props.label }}</p>
      </div>
    </div>
    <v-progress-linear
      :model-value="props.progress"
      class="mt-2"
      color="blue"
      :indeterminate="props.progress === 0"
      :max="props.max"
    />
  </v-col>
</template>
<script setup>
import { useDisplay } from "vuetify/lib/framework.mjs";
const { mobile } = useDisplay();

const props = defineProps({
  color: {
    type: String,
    default: () => "",
  },
  icon: {
    type: String,
    default: () => "",
  },
  image: {
    type: String,
    default: () => "",
  },
  text: {
    type: String,
    default: () => "",
  },
  label: {
    type: String,
    default: () => "",
  },
  progress: {
    type: Number,
    default: () => 0,
  },
  max: {
    type: Number,
    default: () => 100
  }
});
</script>