import { createApp } from 'vue'
import './assets/css/base.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import pt from './locales/pt.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'en',
  messages: {
    pt,
    en,
  },
})
const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
