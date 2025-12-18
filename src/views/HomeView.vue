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
