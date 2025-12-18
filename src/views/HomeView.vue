<script setup>
import FooterBar from '../components/layout/FooterBar.vue'
import HomeHero from '../components/home/HomeHero.vue'
import NavBar from '../components/layout/NavBar.vue'
</script>

<template>
  <NavBar title="Lucas" />

  <main class="content-area">
    <div class="home-container">
      <HomeHero />
    </div>
  </main>
  <FooterBar />
</template>
