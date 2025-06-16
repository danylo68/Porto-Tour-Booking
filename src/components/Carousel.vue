<!-- <template>
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
  </template> -->

  
  
  
  
  
  
  
  
  <!-- <script setup lang="ts">
  import { ref } from 'vue'
  
  const products = [
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  },
  {
    id: 1,
    name: "Maison de plage",
    imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    location: "Espinho, Portugal",
    description: "À 500m de la plage avec vue mer"
  }, -->
  
  
  
  
  
  
  
<!--   
  
  
  
 
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/rainha_zljas3.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802743/portodouro1_uv8ikc.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/jardimPorto_q4b9au.jpg',
//  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/gardenporto_vkj8ho.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/eifel2_izinab.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/costanova_t3fxbz.jpg',
//  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/benagil1_z58ioo.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve3_s849kd.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve1_dzxpug.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749821941/emanuel-haas-CBRAZqV1OLI-unsplash_cedslc.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/porto4_bd7aor.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/fatima_ltj5cj.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/a_180/v1749802727/arouca_ez5zbc.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/a_90/v1749802737/fatima1_eu3mu7.jpg',
//   'https://res.cloudinary.com/dp17akqzu/image/upload/v1750076921/denis--nim4DvvoSQ-unsplash_io8ld2.jpg',    
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
   -->
   
   
   
   <template>
   
    <div class="relative w-full overflow-hidden mt-8 bg-white">
    
      <div class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="w-full flex-shrink-0 relative"
        >
          <!-- Image -->
          <img
            :src="image.src"
            alt="Photo Portugal"
            class="w-full h-144 object-cover rounded-lg shadow-lg"
          />
          
          <!-- Overlay avec description et localisation -->
          <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <div class="flex items-center mb-1">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span class="font-medium">{{ image.location }}</span>
            </div>
            <p class="text-sm">{{ image.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Boutons de navigation (inchangés) -->
      <button
        @click="prev"
        class="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white z-10"
      >
        ‹
      </button>
      <button
        @click="next"
        class="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white z-10"
      >
        ›
      </button>
  
      <!-- Indicateurs (inchangés) -->
      <div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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
  
  <script setup>
  import { ref } from 'vue'
  
  const currentIndex = ref(0)
  
  const images = ref([
    
    {
      src: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/rainha_zljas3.jpg',
      location: 'Porto, Portugal',
      description: 'Librairie Leilo'
 },
    {
      src: 'https://res.cloudinary.com/dp17akqzu/image/upload/a_90/v1749802737/fatima1_eu3mu7.jpg',
      location: 'Fatima, Portugal',
      description: 'Site de Fatima'
    },
    {
      src: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802743/portodouro1_uv8ikc.jpg',
      location: 'Porto, Portugal',
      description: 'Bord du Douro Porto'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/jardimPorto_q4b9au.jpg',
      location: 'Porto, Portugal',
      description: 'Jardim do Palacio de Cristal'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/gardenporto_vkj8ho.jpg',
      location: 'Porto, Portugal',
      description: 'Jardim do Palacio de Cristal'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/eifel2_izinab.jpg',
      location: 'Lisbonne, Portugal',
      description: 'Porto / Gaia'
    },
    {
      src: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/costanova_t3fxbz.jpg',
      location: 'Aveiro, Portugal',
      description: 'Costa Nova'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/ponteeifel_cjuvzm.jpg',
      location: 'Porto, Portugal',
      description: 'Gaia'
    },
    {
      src:   'https://res.cloudinary.com/dp17akqzu/image/upload/v1749826283/IMG_20220716_170043_gvigr7.jpg',
      location: 'Aveiro, Portugal',
      description: 'Aveiro'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve1_dzxpug.jpg',
      location: 'Algarve, Portugal',
      description: 'Centre ville Olhos de Água'
    },
    
    {
      src:   'https://res.cloudinary.com/dp17akqzu/image/upload/w_500/v1749821941/emanuel-haas-CBRAZqV1OLI-unsplash_cedslc.jpg',
      location: 'Algarve, Portugal',
      description: 'Benagil'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/porto4_bd7aor.jpg',
      location: 'Porto, Portugal',
      description: 'Porto'
    },
    {
      src:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/fatima_ltj5cj.jpg',
      location: 'Fatima, Portugal',
      description: 'Le site de Fatima'
    },
    {
      src: 'https://res.cloudinary.com/dp17akqzu/image/upload/a_180/v1749802727/arouca_ez5zbc.jpg',
      location: 'Arouca, Portugal',
      description: 'Passos de Paiva'
    },
    {
      src:   'https://res.cloudinary.com/dp17akqzu/image/upload/v1750076921/denis--nim4DvvoSQ-unsplash_io8ld2.jpg',   
      location: 'Porto, Portugal',
      description: 'Tramway Rive du Douro'
    },
   
    {
      src:   ' https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',   
      location: 'Gondomar, Portugal',
      description: 'Plage fluvial Zebreiros'
    },
  
    {
      src:   '  https://res.cloudinary.com/dp17akqzu/image/upload/v1750076928/surf-lesson-espinho_roxfnk.jpg',   
      location: 'Espinho, Portugal',
      description: 'Surf à Espinho'
    },
    // Ajoutez d'autres images avec leurs métadonnées
  ])
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length
  }
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length
  }
  </script>
  
  <style scoped>
  /* Animation douce pour l'apparition du texte */
  .relative:hover .bg-gradient-to-t {
    opacity: 1;
    transform: translateY(0);
  }
  
  .bg-gradient-to-t {
    opacity: 0.9;
    transform: translateY(10px);
    transition: all 0.3s ease;
  }
  </style>