<template>
  <div class="relative min-h-screen">
    <PortfolioThreeBackdrop />
    <div class="relative z-0 text-[rgb(var(--v-theme-on-surface))]">
      <main class="mx-auto max-w-5xl px-4 py-6 sm:px-6">
        <router-view v-slot="{ Component }">
          <Transition name="locale" mode="out-in">
            <component
              :is="Component"
              :key="`${route.path}-${locale}`"
            />
          </Transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import PortfolioThreeBackdrop from '@/components/effects/PortfolioThreeBackdrop.vue'
import { providePortfolioTheme } from '@/composables/usePortfolioTheme.js'

providePortfolioTheme()

const route = useRoute()
const { locale } = useI18n()

defineOptions({
  name: 'App',
})
</script>
