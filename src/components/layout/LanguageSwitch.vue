<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isOpen = ref(false)

const availableLocales = [
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'ES', flag: '🇪🇸' }, // Ou use a bandeira da AL se preferir
]

const setLocale = (langCode) => {
  locale.value = langCode
  localStorage.setItem('user-lang', langCode)
  isOpen.value = false
}
</script>

<template>
  <div class="lang-switcher">
    <button @click="isOpen = !isOpen" class="lang-btn current">
      {{ availableLocales.find((l) => l.code === locale).flag }}
      {{ availableLocales.find((l) => l.code === locale).label }}
      <span class="arrow" :class="{ up: isOpen }">▼</span>
    </button>

    <ul v-if="isOpen" class="dropdown">
      <li
        v-for="lang in availableLocales"
        :key="lang.code"
        @click="setLocale(lang.code)"
        :class="{ active: locale === lang.code }"
      >
        <span>{{ lang.flag }} {{ lang.label }}</span>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.lang-switcher {
  position: relative; /* Necessário para posicionar o dropdown */
  display: inline-block;
  font-family: var(--font-code); /* Mantendo sua fonte mono */
}

.lang-btn {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 6px 12px; /* Um pouco mais de espaço */
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
}

.lang-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.4);
}

.arrow {
  font-size: 0.7em;
  transition: transform 0.2s;
}

.arrow.up {
  transform: rotate(180deg);
}

/* O Menu Dropdown */
.dropdown {
  position: absolute;
  top: 100%; /* Logo abaixo do botão */
  right: 0;
  margin-top: 5px;
  background: #0a0a0a; /* Fundo escuro sólido para leitura */
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0;
  list-style: none;
  min-width: 100px;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.dropdown li {
  padding: 8px 12px;
  cursor: pointer;
  color: #aaa;
  transition: 0.2s;
  display: flex;
  gap: 8px;
}

.dropdown li:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.dropdown li.active {
  color: #fff;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.05);
}
</style>
