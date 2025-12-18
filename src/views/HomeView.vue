<script setup>
import FooterBar from '../components/layout/FooterBar.vue'
import HeroSection from '../components/HeroSection.vue'
import NavBar from '../components/layout/NavBar.vue'
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
