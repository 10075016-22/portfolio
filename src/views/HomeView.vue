<template>
  <v-container>
    <!-- Sección del nombre -->
    <v-row>
      <v-col class="d-flex justify-space-between">
        <p :class="[ mobile ? 'text-h5' : 'text-h4', 'font-weight-bold']">Santiago Enoc Lopez Lazaro</p>
        <div>
          <v-btn elevation="0" icon> <v-icon>mdi-translate</v-icon></v-btn>
          <v-btn @click="toggleTheme" elevation="0" icon> <v-icon>mdi-theme-light-dark</v-icon></v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Sección de información personal y redes sociales -->
    <v-row>
      <v-col :cols="mobile ? 12 : 6">
        <BasicList class="mb-2"/>
        <SocialButtons :class="[mobile ? 'd-flex justify-center' : '']" />
      </v-col>

      <!-- Sección de foto -->
      <v-col :class="['d-flex', mobile ? 'justify-center' : 'justify-end', mobile ? '' : 'mr-3']" :cols="mobile ? 12 : 5">
        <Photo />
      </v-col>
    </v-row>

    <!-- Sección de información adicional -->
    <AboutMe />
    
    <!-- Sección de habilidades -->
    <Skill />
  </v-container>
</template>

<script setup>
import { useDisplay, useTheme } from 'vuetify/lib/framework.mjs'
import BasicList from '@/components/cv/BasicList.vue'
import SocialButtons from '@/components/cv/Social.vue'
import Photo from '@/components/cv/Photo.vue'
import AboutMe from '@/components/cv/about/AboutMe.vue'
import Skill from '@/components/cv/skill/Skill.vue'

const { mobile } = useDisplay()
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
