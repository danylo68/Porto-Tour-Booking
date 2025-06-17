<script setup lang="ts">
import NavTop from "./components/NavTop.vue";
import HeaderSection from "./components/HeaderSection.vue";
import MainSection from "./components/MainSection.vue";
import MainSection2 from "./components/MainSection2.vue";
import NavBot from './components/NavBot.vue';
import Carousel from './components/Carousel.vue'
import MainSectionHead from "./components/MainSectionHead.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    
    <!-- En-tête -->
    <NavTop />
    <header>
      <HeaderSection />
    </header>

    <!-- Contenu principal -->
    <main class="flex-1">
      <MainSection />
      <MainSection2 />
      <MainSectionHead />
      <!-- <RouterView /> -->
    </main>
    <Carousel />
    <!-- Pied de page -->
    <NavBot />
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Aileron', sans-serif;
  font-weight: 400; /* Normal */
}
.bold-text {
  font-family: 'Aileron', sans-serif;
  font-weight: 700; /* Bold */
}

</style>
