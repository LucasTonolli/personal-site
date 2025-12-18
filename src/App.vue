<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div class="app-layout">
    <NavBar />

    <main class="content-area">
      <RouterView />
    </main>
    <FooterBar />
  </div>
</template>

<style scoped>
.app-layout {
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 100vh;

  background-color: var(--color-bg-card);
  border-left: 1px solid #222;
  border-right: 1px solid #222;

  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}

.content-area {
  flex: 1;
  padding: 2rem;
}
</style>
