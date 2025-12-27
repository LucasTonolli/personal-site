<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucas-tonolli/',
    icon: '💼',
    user: 'in/lucas-tonolli',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/LucasTonolli',
    icon: '🐙',
    user: '@LucasTonolli',
  },
  {
    name: 'E-mail',
    url: 'mailto:contato@lucas-tonolli.com.br',
    icon: '✉️',
  },
]
</script>

<template>
  <section class="section links-section">
    <div class="links-grid">
      <div class="contact-card">
        <h3 class="card-title">
          <span class="icon">📡</span> {{ t('dev_mode.contact.channels') }}
        </h3>
        <div class="contact-list">
          <a
            v-for="(link, index) in socialLinks"
            :key="index"
            :href="link.url"
            target="_blank"
            class="contact-item"
          >
            <div class="icon-box">{{ link.icon }}</div>
            <div class="info-box">
              <span class="name">{{ link.name }}</span>
              <span class="user">{{ link.user }}</span>
            </div>
            <div class="arrow">→</div>
          </a>
        </div>
      </div>

      <div class="portal-card">
        <div class="portal-content">
          <div class="portal-header">
            <span class="status-dot blinking"></span>
            <span class="status-text">{{ t('dev_mode.contact.lab.under_construction') }}</span>
          </div>

          <h3>{{ t('dev_mode.contact.lab.title') }}</h3>
          <p>
            {{ t('dev_mode.contact.lab.desc') }}
          </p>

          <a href="https://dev.lucas-tonolli.com.br" class="portal-btn disabled" target="_blank">
            <span class="cmd-text">> cd dev.lucas-tonolli.com.br</span>
            <span class="lock-icon">🚧</span>
          </a>
        </div>

        <div class="portal-glow"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.links-section {
  padding-top: 2rem;
  padding-bottom: 4rem;
  width: 100%;
}

.links-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
}

/* --- CARD DE CONTATO --- */
.contact-card {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card-title {
  color: #fff;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--color-bg-card);
  border: 1px solid var(--border-dim);
  padding: 1rem;
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: var(--color-bg-card-hover);
  border-color: var(--color-primary);
  transform: translateX(5px);
}

.icon-box {
  font-size: 1.5rem;
}

.info-box {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.name {
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
}

.user {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  font-family: var(--font-code);
}

.arrow {
  color: var(--border-light);
  font-weight: bold;
}

/* --- CARD DO PORTAL (CTA) --- */
.portal-card {
  position: relative;
  background: linear-gradient(145deg, rgba(18, 18, 23, 1) 0%, rgba(10, 10, 12, 1) 100%);
  border: 1px dashed var(--border-light);
  border-radius: var(--radius-md);
  padding: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.portal-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.portal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 189, 46, 0.1); /* Amarelo bem fraco */
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid rgba(255, 189, 46, 0.3);
}

.status-dot {
  width: 8px;
  height: 8px;
  background-color: #ffbd2e; /* Amarelo aviso */
  border-radius: 50%;
}

.blinking {
  animation: blink 1.5s infinite;
}

.status-text {
  font-family: var(--font-code);
  font-size: 0.75rem;
  color: #ffbd2e;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.portal-card h3 {
  font-size: 1.5rem;
  color: #fff;
  margin: 0;
}

.portal-card p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  max-width: 400px;
}

/* O BOTÃO GRANDE */
.portal-btn {
  background: #000;
  border: 1px solid var(--color-secondary);
  color: var(--color-secondary);
  padding: 1rem 2rem;
  border-radius: 8px;
  font-family: var(--font-code);
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 243, 255, 0.1);
}

.portal-btn:hover:not(.disabled) {
  cursor: not-allowed;
  background: var(--color-secondary);
  color: #000;
  box-shadow: 0 0 25px rgba(0, 243, 255, 0.4);
}

/* Estilo para botão desabilitado (opcional) */
.portal-btn.disabled {
  border-color: var(--border-light);
  color: var(--color-text-muted);
  cursor: not-allowed;
  pointer-events: none;

  box-shadow: none;
  background: rgba(255, 255, 255, 0.02);
}

/* Glow de Fundo */
.portal-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 150%, rgba(0, 243, 255, 0.15), transparent 70%);
  pointer-events: none;
  z-index: 1;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

@media (min-width: 768px) {
  .links-grid {
    grid-template-columns: 1fr 1.2fr; /* Coluna da direita (portal) um pouco maior */
    align-items: center;
  }

  .portal-card {
    height: 100%;
    text-align: left;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .portal-content {
    align-items: flex-start;
    text-align: left;
  }
}
</style>
