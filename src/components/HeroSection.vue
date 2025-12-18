<script setup>
import { ref, onMounted } from 'vue'

const age = () => {
  const birthday = new Date('2002-01-13')
  const today = new Date()

  let age = today.getFullYear() - birthday.getFullYear()
  const monthDiff = today.getMonth() - birthday.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
    age--
  }
  return age
}
const dynamicText = ref('')
const phrases = [
  '👨‍💻 Fullstack Developer',
  '🎌 Otaku',
  '🎓 Universitário',
  '⚽ Entusiasta de Esportes',
  '☕ Movido a Café',
]
let currentPhraseIndex = 0
let charIndex = 0

const writeText = () => {
  if (charIndex < phrases[currentPhraseIndex].length) {
    dynamicText.value += phrases[currentPhraseIndex].charAt(charIndex)
    charIndex++
    setTimeout(writeText, 100)
  } else {
    setTimeout(eraseText, 2000)
  }
}

const eraseText = () => {
  if (charIndex > 0) {
    dynamicText.value = phrases[currentPhraseIndex].substring(0, charIndex - 1)
    charIndex--
    setTimeout(eraseText, 50)
  } else {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length
    setTimeout(writeText, 500)
  }
}

onMounted(() => {
  writeText()
})
</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <div class="badge">Bem-vindo ao meu espaço</div>

      <h1 class="title">Olá, eu sou <span class="highlight">Lucas Vezaro Tonolli</span></h1>

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
          href="https://x.com/Tonolli_Lucas"
          target="_blank"
          class="social-btn x-social"
          title="X (Twitter)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
            />
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
        <p>
          Tenho <strong>{{ age() }} anos</strong> e sou estudante de
          <strong>Ciência da Computação.</strong>
        </p>
        <p>
          Quando não estou desenvolvendo ou estudando, provavelmente estou assistindo algum anime,
          lendo ou praticando esportes.
        </p>
      </div>
      <div class="cta-group">
        <RouterLink to="/dev" class="btn-primary"> <span>💻</span> Modo Dev </RouterLink>
        <RouterLink to="/otaku" class="btn-secondary"> <span>⛩️</span> Modo Otaku </RouterLink>
      </div>
    </div>

    <div class="hero-image">
      <div class="image-border">
        <img src="/profile-pic.webp" alt="Foto de perfil" class="profile-pic" />
      </div>
      <div class="status-badge">
        <span class="icon">☕</span>
        <span>Cafeína: 85%</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.dynamic-wrapper {
  font-family: var(--font-code);
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 1.5rem;
  height: 30px;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--color-primary);
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.social-links {
  display: flex;
  gap: 1.5rem; /* Espaçamento entre ícones */
  margin-bottom: 2rem;
  justify-content: center; /* Centralizado no Mobile */
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

/* Efeitos de Hover Individuais */
.social-btn:hover {
  transform: translateY(-5px);
  color: #fff;
}

/* LinkedIn (Azul) */
.social-btn.linkedin:hover {
  background: #0077b5;
  border-color: #0077b5;
  box-shadow: 0 0 15px rgba(0, 119, 181, 0.5);
}

/* X (Preto/Branco clássico) */
.social-btn.x-social:hover {
  background: #000;
  border-color: #fff;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

/* Instagram (Gradiente) */
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

.description {
  color: #aaa;
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.8;
  margin: 0 auto 2rem auto;
}

.description strong {
  color: #fff;
  font-weight: 600;
}

/* --- BOTÕES --- */
.cta-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin: 0 auto;
}

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
  box-shadow: 0 4px 15px rgba(255, 0, 122, 0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 0, 122, 0.6);
}

.btn-secondary {
  background: transparent;
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
}

.btn-secondary:hover {
  background: rgba(0, 243, 255, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 0 15px rgba(0, 243, 255, 0.2);
}

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
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
  animation: pulseBorder 4s infinite reverse;
}

.profile-pic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: #222;
}

@keyframes pulseBorder {
  0% {
    box-shadow: 0 0 20px rgba(255, 0, 122, 0.3);
  }
  100% {
    box-shadow: 0 0 40px rgba(0, 243, 255, 0.3);
  }
}

/* --- STATUS BADGE (Pílula) --- */
.status-badge {
  position: absolute;
  bottom: 10px;
  right: 10px;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
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

  animation: floatBadge 3s ease-in-out infinite;
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

@media (min-width: 48em) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    gap: 3rem;
  }

  .title {
    font-size: 3rem;
  }

  .dynamic-wrapper {
    font-size: 1.4rem;
  }

  .social-links {
    justify-content: flex-start; /* Alinha à esquerda no PC */
  }

  .description {
    margin: 0 0 2.5rem 0;
    max-width: 550px;
    font-size: 1.1rem;
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

  .image-border {
    width: 350px;
    height: 350px;
  }
}
</style>
