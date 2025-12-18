<script setup></script>

<template>
  <section class="section dev-hero">
    <div class="hero-glow"></div>

    <div class="terminal-badge">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
      <span class="code-text">echo "Hello World!"</span>
    </div>

    <h1 class="title">&lt; Modo <span class="highlight">Dev</span> &gt;</h1>

    <h2 class="subtitle">
      Minha jornada como desenvolvedor web, explorando tecnologias, superando desafios e criando
      soluções inovadoras.
    </h2>

    <div class="scroll-indicator">
      <span>&#8595;</span>
    </div>

    <div class="divider"></div>
  </section>
</template>

<style scoped>
.section.dev-hero {
  padding: 0 0 2rem 0;
  position: relative;
  min-height: auto;
}

.hero-glow {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, var(--color-primary) 0%, transparent 60%);
  opacity: 0.15;
  pointer-events: none;
  z-index: 0;
}

.terminal-badge {
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid var(--border-light);
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.red {
  background-color: #ff5f56;
}
.yellow {
  background-color: #ffbd2e;
}
.green {
  background-color: #27c93f;
}

.code-text {
  font-family: var(--font-code);
  font-size: 0.9rem;
  color: var(--color-text-muted);
  margin-left: 5px;
}

.title {
  margin-bottom: 1rem;
  z-index: 1;
}

.subtitle {
  color: var(--color-text-muted);
  font-size: 1rem;
  max-width: 650px;
  margin: 0 auto 3rem auto;
  line-height: 1.6;
  z-index: 1;
}

.scroll-indicator {
  animation: bounce 2s infinite;
  color: var(--color-text-muted);
  font-size: 1.5rem;
  opacity: 0.6;
  z-index: 1;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-light), transparent);
  margin-top: 1rem;
  width: 100%;
}

@media (min-width: 768px) {
  .section.dev-hero {
    padding: 4rem 0 2rem 0;
  }

  .hero-glow {
    top: 50%;
  }

  .subtitle {
    font-size: 1.25rem;
  }
}
</style>
