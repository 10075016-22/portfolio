<template>
  <v-container>
    <!-- Sección del nombre -->
    <v-row>
      <v-col class="d-flex justify-space-between">
        <p :class="[ mobile ? 'text-subtitle' : 'text-h4', 'font-weight-bold', 'mt-2']">Santiago Lopez Lazaro</p>
        <div :class="[mobile ? 'text-center' : '']">
          <v-avatar size="auto" class="mr-2" density="compact">
            <v-img :src="`/icons/${$i18n.locale}.png`"/>
          </v-avatar>
          <v-btn elevation="0" icon @click="$i18n.locale = $i18n.locale == 'es' ? 'en' : 'es' " :size="mobile ? 'small' : 'default'" class="mr-1"> <v-icon>mdi-translate</v-icon></v-btn>
          <v-btn @click="toggleTheme" elevation="0" icon :size="mobile ? 'small' : 'default' "> <v-icon>mdi-theme-light-dark</v-icon></v-btn>
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
    
    <!-- Sección de estadísticas -->
    <!-- <Stats /> -->
    
    <!-- Sección de habilidades -->
    <Skill />

    <!-- Sección de proyectos -->
    <Projects />

    <Timeline />
    
    <!-- Sección de contacto -->
    <Contact />
  </v-container>
</template>

<script setup>
import { useDisplay, useTheme } from 'vuetify/lib/framework.mjs'

import BasicList from '@/components/cv/BasicList.vue'
import SocialButtons from '@/components/cv/Social.vue'
import Photo from '@/components/cv/Photo.vue'
import AboutMe from '@/components/cv/about/AboutMe.vue'
// import Stats from '@/components/cv/stats/Stats.vue'
import Skill from '@/components/cv/skill/Skill.vue'
import Projects from '@/components/cv/projects/Projects.vue'
import Timeline from '@/components/cv/experience/Timeline.vue'
import Contact from '@/components/cv/contact/Contact.vue'


const { mobile } = useDisplay()
const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>
