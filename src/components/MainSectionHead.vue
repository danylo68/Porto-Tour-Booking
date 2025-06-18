


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
                <p class="text-gray-800 font-mono font-bold px-4 pb-6 flex items-center">
  <span class="mr-1">📍</span>
  {{ product.Localisation }}
</p>
              
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
    Presentation: ' A propos d Espinho,',
    description: 'Espinho, située sur la côte atlantique à proximité de Porto, trouve ses origines dans une communauté de pêcheurs attirée par la richesse de ses eaux. Aujourd hui, la ville est réputée pour ses superbes plages, son célèbre casino, ses spots de surf et ses terrains de beach-volley. La maison se niche dans une ruelle paisible, à seulement 1,5 km du littoral, offrant ainsi un cadre idéal pour profiter du calme tout en restant à deux pas des plages animées et de toutes les activités de la station balnéaire.',
    Localisation: 'Espinho est à 20 minutes du centre de Porto en train.',
  }
  
  const products = [
    {
      id: 1,
      name: 'Plage Baia d Espinho',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/plageespinho_qhwlv3.jpg',
      imageAlt: 'Plage Baia d Espinho',
      Localisation: 'Espinho',
    },
    {
      id: 2,
      name: 'Le centre ville rue 19',
      href: '#',
      imageSrc:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/rua19_tpmuic.jpg',
      imageAlt: 'rua 19',
      Localisation: 'Espinho',
    },
    {
      id: 3,
      name: 'Praia do Marbelo.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/praia2_mhk3ft.gif', 
      imageAlt: 'Praia do Marbelo d Espinho',
      Localisation: 'Espinho',
    },
    {
      id: 4,
      name: 'Praia do Marbelo.',
      href: '#',
      imageSrc:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/espinhobeach3_cjv41u.jpg', 
      imageAlt: 'plage Espinho2',
      Localisation: 'Espinho',
    },
    {
      id: 5,
      name: 'casino d Espinho.',
      href: '#',
      imageSrc:  'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/casino_espinho_nlktql.png',
      imageAlt: 'casino_espinho',
      Localisation: 'Espinho',
    },
    {
      id: 6,
      name: 'Allée caillebotis Praia de Brito.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/granjavia_mt6f5f.jpg',
      imageAlt: 'Chemin bois',
      Localisation: 'Espinho',
    },
    {
      id: 7,
      name: 'Marché d Espinho chaque Lundi.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802733/espinho-market_oykhj8.jpg',
      imageAlt: 'Marché d Espinho',
      Localisation: 'Espinho',
    },
    {
      id: 8,
      name: 'Supermarché à proximité Mercadona.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/mercadona_jx1ife.webp',
      imageAlt: 'mercadona',
      Localisation: 'Anta',
    },
    {
      id: 9,
      name: 'Bord de mer Plage Baia d Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802736/espinhobeach_vr32fs.jpg',
      imageAlt: 'Plage de Baia',
      Localisation: 'Espinho',
    },
    {
      id: 10,
      name: 'La Gare d Espinho qui dessert Porto',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749826668/gare_clnyaq.jpg',
      imageAlt: 'La Gare d Espinho ',
      Localisation: 'Espinho',
    },
    {
      id: 11,
      name: 'Capela do Senhor da Pedra',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1750076919/Capela-do-Senhor-da-Pedra_buk69n.jpg',
      imageAlt: 'Capela do Senhor da Pedra',
        Localisation: 'Granja',
    },
    {
      id: 12,
      name: 'Plage de Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/beachboat_b9qltt.jpg',
      imageAlt: 'Plage de Baia',
      Localisation: 'Espinho',
    },
    {
      id: 13,
      name: 'Praia de Brito.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/granja_iyh3dn.jpg',
      imageAlt: 'Praia de Brito',
      Localisation: 'Espinho',
    },
  
    {
      id: 14,
      name: 'Plage de Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802736/espinhobeach1_opszwk.jpg',
      imageAlt: 'Plage de Baia',
      Localisation: 'Espinho',
    },
   
    {
      id: 15,
      name: 'Piscine Baia Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1750076924/marcio-pego-_1AZbqyrhRU-unsplash_zikncv.jpg',
      imageAlt: 'Piscine',
      Localisation: 'Espinho',
    },
    {
      id: 16,
      name: 'Le Surf à Espinho.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1750076922/EspinhoSurf_tssdzv.jpg',
      imageAlt: 'Surf Espinho.',
      Localisation: 'Espinho',
    },
  ]
  </script>
  
  
  <style scoped>
  
  </style>
  
  