<script setup></script>

<template>
  <section class="section">
    <div class="badge-container"><span class="mode-badge">echo "Hello World!"</span></div>
    <h1 class="title">&lt; Modo <span class="highlight">Dev</span> &gt;</h1>
    <h2 class="subtitle">
      Minha jornada como desenvolvedor web, explorando tecnologias, superando desafios e criando
      soluções inovadoras.
    </h2>
    <div class="divider"></div>
  </section>
</template>

<style scoped>
.section {
  flex-direction: column !important;
  min-height: 100vh;
}
.mode-badge {
  font-family: var(--font-code);
  font-size: 0.8rem;
  color: #666;
  background: rgba(255, 255, 255, 0.05);
  padding: 4px 12px;
  border-radius: 4px;
  border: 1px dashed #333;
}
.subtitle {
  color: var(--color-text-muted);
  font-size: 1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #333, transparent);
  margin-top: 2rem;
  width: 100%;
}
</style>
