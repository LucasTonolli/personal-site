<script setup>
import FooterBar from '../components/FooterBar.vue'
import HeroSection from '../components/HeroSection.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar title="Lucas" />

  <main class="content-area">
    <div class="home-container">
      <HeroSection />
    </div>
  </main>
  <FooterBar />
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
  font-family: sans-serif;
}

h1 {
  color: #42b983;
}
</style>
