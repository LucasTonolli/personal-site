<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const birthday = new Date('2002-01-13')
const today = new Date()
let ageVal = today.getFullYear() - birthday.getFullYear()
const monthDiff = today.getMonth() - birthday.getMonth()
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
  ageVal--
}
const currentAge = ageVal

const dynamicText = ref('')
const phrasesKeys = [
  'home.hero.dinamycTexts.dev',
  'home.hero.dinamycTexts.otaku',
  'home.hero.dinamycTexts.student',
  'home.hero.dinamycTexts.love_sports',
  'home.hero.dinamycTexts.coffee',
]
let phraseIndex = 0
let charIndex = 0

const typeEffect = () => {
  const currentPhraseKey = phrasesKeys[phraseIndex]
  const currentTranslation = t(currentPhraseKey)

  if (charIndex < currentTranslation.length) {
    dynamicText.value += currentTranslation.charAt(charIndex)
    charIndex++
    setTimeout(typeEffect, 100)
  } else {
    setTimeout(eraseEffect, 2000)
  }
}

const eraseEffect = () => {
  const currentKey = phrasesKeys[phraseIndex]
  const currentTranslationPharase = t(currentKey)
  if (charIndex > 0) {
    dynamicText.value = currentTranslationPharase.substring(0, charIndex - 1)
    charIndex--
    setTimeout(eraseEffect, 50)
  } else {
    phraseIndex = (phraseIndex + 1) % currentTranslationPharase.length
    setTimeout(typeEffect, 500)
  }
}

onMounted(() => {
  setTimeout(() => {
    requestAnimationFrame(typeEffect)
  }, 500)
})

watch(locale, () => {
  dynamicText.value = ''
  charIndex = 0
})
</script>

<template>
  <section class="section home-hero">
    <div class="hero-text">
      <div class="badge">{{ t('home.hero.badge') }}</div>

      <h1 class="title">
        {{ t('home.hero.greeting') }} <span class="highlight">Lucas Vezaro Tonolli</span>
      </h1>

      <div class="dynamic-wrapper">
        <span class="dynamic">{{ dynamicText }}</span>
        <span class="cursor">|</span>
      </div>

      <div class="social-links">
        <a
          href="https://www.linkedin.com/in/lucas-tonolli/"
          target="_blank"
          class="social-btn linkedin"
          title="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>

        <a
          href="https://www.instagram.com/lucas_tonolli97/"
          target="_blank"
          class="social-btn instagram"
          title="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>

      <div class="description">
        <p v-html="t('home.hero.desc.paragraph_one', { age: currentAge })"></p>
        <p>{{ t('home.hero.desc.paragraph_two') }}</p>
      </div>

      <div class="cta-group">
        <RouterLink to="/dev" class="btn-primary">
          <span>💻</span> {{ t('buttons.dev_mode') }}
        </RouterLink>
        <RouterLink to="/otaku" class="btn-secondary" :style="{ display: 'none' }">
          <span>⛩️</span> {{ t('buttons.otaku_mode') }}
        </RouterLink>
      </div>
    </div>

    <div class="hero-image">
      <div class="image-border">
        <img
          src="/profile-pic.webp"
          srcset="/profile-pic.webp 300w, /profile-pic.webp 600w"
          sizes="(max-width: 768px) 250px, 350px"
          alt="Foto de perfil de Lucas Vezaro Tonolli"
          class="profile-pic"
          fetchpriority="high"
          width="600"
          height="400"
        />
      </div>
      <div class="status-badge">
        <span class="icon">☕</span>
        <span>{{ t('home.hero.caffeine') }}: 85%</span>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* --- ESTILOS BASE (MOBILE - Padrão Leve) --- */
.home-hero {
  display: flex;
  flex-direction: column-reverse; /* Mobile: Imagem em cima, texto embaixo */
  gap: 3rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
}

/* --- TEXTOS --- */
.badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--color-secondary);
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 243, 255, 0.2);
}

.home-hero .title {
  font-size: 2rem; /* Mobile: Fonte um pouco menor */
  margin-bottom: 1rem;
  text-align: center; /* Mobile: Centralizado */
}

.dynamic-wrapper {
  font-family: var(--font-code);
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center; /* Mobile: Centralizado */
}

.cursor {
  animation: blink 1s infinite;
  color: var(--color-primary);
  margin-left: 2px;
}

.description {
  color: var(--color-text-muted);
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 auto 2rem auto;
  text-align: center; /* Mobile: Centralizado */
}

.description strong {
  color: #fff;
  font-weight: 600;
}

/* --- SOCIAL & BOTÕES --- */
.social-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  justify-content: center; /* Mobile: Centralizado */
}

.social-btn {
  color: var(--color-text-muted);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}

.social-btn:hover {
  transform: translateY(-5px);
  color: #fff;
}
/* Efeitos de hover mantidos (só ativam se o usuário tiver mouse/touch preciso) */
.social-btn.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
  box-shadow: 0 0 15px rgba(0, 119, 181, 0.5);
}
.social-btn.x-social:hover {
  background: #000;
  border-color: #fff;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}
.social-btn.instagram:hover {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  border-color: #d6249f;
  box-shadow: 0 0 15px rgba(214, 36, 159, 0.5);
}

.cta-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
}

/* Botões - Base Mobile (Sem sombras pesadas) */
.btn-primary,
.btn-secondary {
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-family: var(--font-code);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: var(--color-primary);
  color: #fff;
  /* Mobile: Sem sombra pesada para performance */
  box-shadow: none;
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
}

/* --- IMAGEM (Mobile Otimizado) --- */
.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
}

.image-border {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(45deg, var(--color-primary), var(--color-secondary));
  padding: 4px;

  /* Mobile: Sombra estática e leve. SEM ANIMAÇÃO. */
  box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
  animation: none;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: #222;
}

.status-badge {
  position: absolute;
  bottom: 5px; /* Ajuste fixo mobile */
  right: 10px;

  /* Mobile: Fundo sólido, sem blur, sem animação */
  background: rgba(20, 20, 20, 0.95);
  backdrop-filter: none;
  animation: none;

  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-family: var(--font-code);
  font-size: 0.85rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* Keyframes (definições ficam aqui, mas só usadas no desktop) */
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
@keyframes pulseBorder {
  0% {
    box-shadow: 0 0 20px rgba(255, 0, 122, 0.3);
  }
  100% {
    box-shadow: 0 0 40px rgba(0, 243, 255, 0.3);
  }
}
@keyframes floatBadge {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* --- DESKTOP (Min-Width 768px) ---
   Aqui adicionamos a complexidade e layout horizontal
*/
@media (min-width: 768px) {
  .home-hero {
    flex-direction: row; /* Vira linha */
    justify-content: space-between;
    text-align: left;
    min-height: 80vh;
  }

  .home-hero .title {
    font-size: 3rem; /* Aumenta fonte */
    text-align: left;
  }

  .hero-text {
    flex: 1;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; /* Alinha tudo à esquerda */
  }

  .dynamic-wrapper {
    font-size: 1.5rem;
    justify-content: flex-start;
  }

  .social-links {
    justify-content: flex-start;
  }

  .description {
    margin: 0 0 2.5rem 0;
    max-width: 550px;
    font-size: 1.1rem;
    text-align: left;
  }

  .cta-group {
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    max-width: none;
  }

  .btn-primary,
  .btn-secondary {
    width: auto;
  }

  /* Ativando efeitos pesados só no Desktop */
  .btn-primary {
    box-shadow: 0 4px 15px rgba(255, 0, 122, 0.4);
  }
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 0, 122, 0.6);
  }

  .btn-secondary:hover {
    background: rgba(0, 243, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
  }

  .hero-image {
    flex: 1;
    justify-content: flex-end;
    align-items: center;
  }

  .image-border {
    width: 350px;
    height: 350px;
    /* Ativa animação pesada */
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
    animation: pulseBorder 4s infinite reverse;
  }

  .status-badge {
    bottom: 10px;
    /* Ativa blur e animação */
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    animation: floatBadge 3s ease-in-out infinite;
  }
}
</style>
