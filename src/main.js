import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import './assets/style.css'

import en from './locale/en.json'
import es from './locale/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  messages: {
    en: en,
    es: es,
  },
})

createApp(App).use(i18n).use(router).mount('#app')
