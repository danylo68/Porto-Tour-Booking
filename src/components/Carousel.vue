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
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/rainha_zljas3.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802743/portodouro1_uv8ikc.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/jardimPorto_q4b9au.jpg',
 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/gardenporto_vkj8ho.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/eifel2_izinab.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/costanova_t3fxbz.jpg',
 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/benagil1_z58ioo.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/arouca_ez5zbc.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve3_s849kd.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve1_dzxpug.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749821941/emanuel-haas-CBRAZqV1OLI-unsplash_cedslc.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/porto4_bd7aor.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/fatima_ltj5cj.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/a_180/v1749802727/arouca_ez5zbc.jpg',
  'https://res.cloudinary.com/dp17akqzu/image/upload/a_90/v1749802737/fatima1_eu3mu7.jpg',
    
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
  