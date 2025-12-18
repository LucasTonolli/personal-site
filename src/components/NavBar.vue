<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="logo"><span class="tag">&lt;</span>Dev<span class="tag">/&gt;</span></div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">Sobre</RouterLink>
      <RouterLink to="/contact">Contato</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 2rem;
  border-bottom: 1 solid #333;
}
.logo {
  font-family: var(--font-code);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-main);
  letter-spacing: -1px;
}
.tag {
  color: var(--color-primary);
}

nav a {
  color: var(--color-text-muted);
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

nav a:hover,
nav a.router-link-active {
  color: var(--color-secondary);
  text-shadow: 0 0 8px var(--color-secondary);
}
</style>
