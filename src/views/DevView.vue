<script setup>
import DevContact from '../components/dev/DevContact.vue'
import DevHeroSection from '../components/dev/DevHero.vue'
import DevTechStack from '../components/dev/DevTech.vue'
import DevTimelineSection from '../components/dev/DevTimeline.vue'
import FooterBar from '../components/layout/FooterBar.vue'
import NavBar from '../components/layout/NavBar.vue'
</script>

<template>
  <NavBar title="Dev" />

  <main class="content-area">
    <div class="dev-container">
      <DevHeroSection />
      <DevTimelineSection />
      <DevTechStack />
      <DevContact />
    </div>
  </main>
  <FooterBar />
</template>
