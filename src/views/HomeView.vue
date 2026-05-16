<template>
  <div class="flex flex-col gap-14 md:gap-24">
    <ParallaxSection :intensity="34">
      <div class="space-y-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p :class="mobile ? 'text-xl font-bold' : 'text-2xl font-bold md:text-3xl'" class="mt-2">
            Santiago Lopez Lazaro
          </p>
          <div :class="mobile ? 'flex flex-wrap items-center justify-center gap-1' : 'flex items-center gap-2'">
            <div class="mr-2 inline-flex h-9 w-auto items-center overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-600">
              <img :src="`/icons/${$i18n.locale}.png`" alt="" class="h-9 max-w-[48px] object-contain" width="36" height="36" />
            </div>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full text-[rgb(var(--v-theme-on-surface))] transition hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
              :class="mobile ? 'h-9 w-9' : ''"
              aria-label="Cambiar idioma"
              @click="$i18n.locale = $i18n.locale === 'es' ? 'en' : 'es'"
            >
              <Icon icon="mdi:translate" class="size-6" />
            </button>
            <button
              type="button"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full text-[rgb(var(--v-theme-on-surface))] transition hover:bg-slate-200/60 dark:hover:bg-slate-700/60"
              :class="mobile ? 'h-9 w-9' : ''"
              aria-label="Tema"
              @click="toggleTheme()"
            >
              <Icon icon="mdi:theme-light-dark" class="size-6" />
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div class="lg:col-span-6">
            <BasicList class="mb-2" />
            <SocialButtons :class="mobile ? 'flex flex-wrap justify-center' : ''" />
          </div>
          <div
            :class="[
              'flex lg:col-span-5 lg:col-start-8',
              mobile ? 'justify-center' : 'justify-end lg:mr-3',
            ]"
          >
            <Photo />
          </div>
        </div>
      </div>
    </ParallaxSection>

    <ParallaxSection :intensity="22">
      <AboutMe />
    </ParallaxSection>

    <ParallaxSection :intensity="26">
      <Skill />
    </ParallaxSection>

    <ParallaxSection :intensity="20">
      <Projects />
    </ParallaxSection>

    <ParallaxSection :intensity="18">
      <Timeline />
    </ParallaxSection>

    <ParallaxSection :intensity="16">
      <Contact />
    </ParallaxSection>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import ParallaxSection from '@/components/layout/ParallaxSection.vue'
import BasicList from '@/components/cv/BasicList.vue'
import SocialButtons from '@/components/cv/Social.vue'
import Photo from '@/components/cv/Photo.vue'
import AboutMe from '@/components/cv/about/AboutMe.vue'
import Skill from '@/components/cv/skill/Skill.vue'
import Projects from '@/components/cv/projects/Projects.vue'
import Timeline from '@/components/cv/experience/Timeline.vue'
import Contact from '@/components/cv/contact/Contact.vue'
import { useBreakpoint } from '@/composables/useBreakpoint.js'
import { usePortfolioTheme } from '@/composables/usePortfolioTheme.js'

const { mobile } = useBreakpoint()

const { toggleTheme } = usePortfolioTheme()
</script>
