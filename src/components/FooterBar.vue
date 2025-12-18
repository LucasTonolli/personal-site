<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer-bar">
    <p>&copy; {{ year }} Lucas Vezaro Tonolli.</p>
  </footer>
</template>

<style scoped>
.footer-bar {
  border-top: 1px solid #333;
  padding: 2rem;
  text-align: center;
  font-family: var(--font-code);
  color: var(--color-text-muted);
}
</style>
