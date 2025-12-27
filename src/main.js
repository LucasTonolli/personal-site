import { createApp } from 'vue'
import './assets/css/base.css'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'

import pt from './locales/pt.json'
import en from './locales/en.json'

const userLang = localStorage.getItem('user-lang') || navigator.language.split('-')[0]
const i18n = createI18n({
  legacy: false,
  locale: userLang === 'pt' ? 'pt' : 'en',
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
