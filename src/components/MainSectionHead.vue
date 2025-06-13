


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
    description: 'La maison est situé dans une petite ruelle au calme à 1,5 km de la Mer.',
    Localisation: 'Espinho',
  }
  
  const products = [
    {
      id: 1,
      name: 'Le jardin de la terrasse.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/plageespinho_qhwlv3.jpg',
      imageAlt: 'jardin Anta',
    },
    {
      id: 2,
      name: 'Le centre ville',
      href: '#',
      imageSrc:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/rua19_tpmuic.jpg',
      imageAlt: 'rua 19',
    },
    {
      id: 3,
      name: 'plage Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/praia2_mhk3ft.gif', 
      imageAlt: 'plage Espinho',
    },
    {
      id: 4,
      name: 'plage Espinho.',
      href: '#',
      imageSrc:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/espinhobeach3_cjv41u.jpg', 
      imageAlt: 'plage Espinho2',
    },
    {
      id: 4,
      name: 'casino d Espinho.',
      href: '#',
      imageSrc:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/casino_espinho_nlktql.png',
      imageAlt: 'casino_espinho',
    },
    {
      id: 4,
      name: 'Allée bord de Mer.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/granjavia_mt6f5f.jpg',
      imageAlt: 'Chemin bois',
    },
    {
      id: 4,
      name: 'Marché d Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/espinho-market_oykhj8.jpg',
      imageAlt: 'Marché d Espinho',
    },
    {
      id: 4,
      name: 'Supermarché à proximité.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/mercadona_jx1ife.webp',
      imageAlt: 'mercadona',
    },
    {
      id: 4,
      name: 'Plage de Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802736/espinhobeach_vr32fs.jpg',
      imageAlt: 'Plage de Baia',
    },
    {
      id: 4,
      name: 'La Gare d Espinho',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749826668/gare_clnyaq.jpg',
      imageAlt: 'Plage de Baia',
    },
    {
      id: 4,
      name: 'Plage de Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802736/espinho2_qavudl.jpg',
      imageAlt: 'Plage de Baia',
    },
    {
      id: 4,
      name: 'Plage de Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/beachboat_b9qltt.jpg',
      imageAlt: 'Plage de Baia',
    },
    {
      id: 4,
      name: 'Plage de Granja.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/granja_iyh3dn.jpg',
      imageAlt: 'Plage de Granja',
    },
  
    {
      id: 4,
      name: 'Plage de Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802736/espinhobeach1_opszwk.jpg',
      imageAlt: 'Plage de Baia',
    },
  ]
  </script>
  
  
  <style scoped>
  
  </style>
  
  