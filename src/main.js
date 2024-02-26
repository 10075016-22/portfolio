import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

import './assets/style.css'

// locale
import en from './locale/en.json'
import es from './locale/es.json'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  messages: {
    en: en,
    es: es
  }
})

createApp(App)
  .use(i18n)
  .use(router)
  .use(vuetify)
  .mount('#app')
