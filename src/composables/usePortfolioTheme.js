import { provide, inject } from 'vue'
import { useDark } from '@vueuse/core'

const THEME_KEY = Symbol('portfolioTheme')

export function providePortfolioTheme() {
  const isDark = useDark({
    storageKey: 'portfolio-theme',
    valueDark: 'dark',
    valueLight: '',
  })

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  const theme = {
    isDark,
    toggleTheme,
  }

  provide(THEME_KEY, theme)
  return theme
}

export function usePortfolioTheme() {
  const t = inject(THEME_KEY)
  if (!t) {
    throw new Error('usePortfolioTheme() requires providePortfolioTheme() in App')
  }
  return t
}
