


<template>
    <div class="bg-white min-h-[70vh] py-8">
      <div class="w-full px-4 mx-auto max-w-7xl">
      
        <h2 class="text-2xl font-mono font-bold text-gray-800 px-4 pb-6 ">{{ logeas.Presentation }}</h2>
        <p class="text-gray-800 font-mono px-4 pb-4 ">{{ logeas.description }}</p>
        <p class="text-gray-800 font-mono font-bold px-4 pb-6 ">{{ logeas.Localisation }}</p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          <div v-for="product in products" :key="product.id" class="w-full max-w-[300px] cursor-pointer" @click="zoomImage(product.imageSrc)">
            <div class="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-64 object-cover" />
              <div class="p-4 space-y-1">
                <h3 class="font-medium font-mono text-gray-800">{{ product.name }}</h3>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Lightbox -->
    <div v-if="zoomedImage" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" @click.self="zoomedImage = null">
      <div class="relative max-w-4xl max-h-[90vh] p-4">
        <img :src="zoomedImage" alt="Zoomed image" class="max-w-full max-h-[80vh] transition duration-300 hover:scale-105 object-contain rounded-lg shadow-xl" />
        <button @click="zoomedImage = null" class="absolute top-2 right-2 text-white text-3xl font-bold">×</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const zoomedImage = ref<string | null>(null)
  const zoomImage = (src: string) => {
    zoomedImage.value = src
  }
  
  const logeas = {
    Presentation: 'Espinho',
    description: 'La maison est situé dans une petite rue calme à 1,5 km de la Mer.',
    Localisation: 'Espinho',
  }
  
  const products = [
    {
      id: 1,
      name: 'Le jardin de la terrasse.',
      href: '#',
      imageSrc: '/images/jardim.jpg',
      imageAlt: 'jardin Anta',
    },
    {
      id: 2,
      name: 'Le centre ville d espinho,rua 19.',
      href: '#',
      imageSrc: '/images/rua19.jpg',
      imageAlt: 'rua 19',
    },
    {
      id: 3,
      name: 'plage Espinho.',
      href: '#',
      imageSrc: '/images/praia2.gif',
      imageAlt: 'rua 19',
    },
    {
      id: 4,
      name: 'plage Espinho.',
      href: '#',
      imageSrc: '/images/beach1.jpg',
      imageAlt: 'rua 19',
    },
    {
      id: 4,
      name: 'casino d Espinho.',
      href: '#',
      imageSrc: '/images/casino_espinho.png',
      imageAlt: 'casino_espinho',
    },
    {
      id: 4,
      name: 'Allée bord de Mer.',
      href: '#',
      imageSrc: '/images/granjavia.jpg',
      imageAlt: 'Chemin bois',
    },
    {
      id: 4,
      name: 'Marché d Espinho.',
      href: '#',
      imageSrc: '/images/espinho-market.jpg',
      imageAlt: 'Marché d Espinho',
    },
    {
      id: 4,
      name: 'Supermarché à proximité.',
      href: '#',
      imageSrc: '/images/mercadona.webp',
      imageAlt: 'mercadona',
    },
    {
      id: 4,
      name: 'La maison est situé à 1 km du centre.',
      href: '#',
      imageSrc: '/images/localisation.png',
      imageAlt: 'localisation',
    },
  ]
  </script>
  
  
  <style scoped>
  
  </style>
  
  