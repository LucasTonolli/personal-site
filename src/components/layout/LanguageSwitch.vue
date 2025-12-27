<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLocale = () => {
  locale.value = locale.value === 'pt' ? 'en' : 'pt'
  localStorage.setItem('user-lang', locale.value)
}
</script>

<template>
  <button @click="toggleLocale" class="lang-btn">
    <span v-if="locale === 'pt'">🇧🇷 PT</span>
    <span v-else>🇺🇸 EN</span>
  </button>
</template>

<style scoped>
.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-family: var(--font-code);
}
</style>
