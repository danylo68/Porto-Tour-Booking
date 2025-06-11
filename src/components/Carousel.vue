<template>
    <div class="relative w-full overflow-hidden">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full flex-shrink-0"
        >
          <img
            :src="image"
            alt="Photo Portugal"
            class="w-full h-144 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
  
      <!-- Boutons -->
      <button
        @click="prev"
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ‹
      </button>
      <button
        @click="next"
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        ›
      </button>
  
      <!-- Dots -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <span
          v-for="(_, i) in images"
          :key="i"
          class="w-3 h-3 rounded-full"
          :class="{
            'bg-white': currentIndex === i,
            'bg-gray-400': currentIndex !== i
          }"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const images = [
    '/images/algarve1.jpg',
    '/images/fatima.jpg',
    '/images/portojardin.jpg',
    '/images/porto1.jpg',
    '/images/porto2.jpg',
    '/images/porto4.jpg',
    '/images/espinho2.jpg',
    '/images/costanova.jpg',
    '/images/arouca.jpg',
    '/images/espinhobeach1.jpg',
    '/images/gardenporto.jpg',
    '/images/beach1.jpg',
    '/images/benagil3.gif',
    '/images/ponteeifel.jpg',
    '/images/granja.jpg',
    '/images/espinhobeach3.jpg',
    '/images/algarve3.jpg',
    '/images/rainha.jpg',
    '/images/praya.jpg',
    '/images/jardimPorto.jpg',
  ]
  
  const currentIndex = ref(0)
  
  function next() {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }
  
  function prev() {
    currentIndex.value =
      (currentIndex.value - 1 + images.length) % images.length
  }
  </script>
  
  <style scoped>
  button {
    font-size: 2rem;
    line-height: 1;
  }
  </style>
  