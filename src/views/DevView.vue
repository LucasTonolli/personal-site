<script setup>
import DevHeroSection from '../components/DevHeroSection.vue'
import FooterBar from '../components/FooterBar.vue'
import NavBar from '../components/NavBar.vue'
</script>

<template>
  <NavBar title="Dev" />

  <main class="content-area">
    <div class="dev-container">
      <DevHeroSection />
    </div>
  </main>
  <FooterBar />
</template>
