
  
  <template>
    <div class="bg-white min-h-[70vh] py-8">
      <div class="w-full px-4 mx-auto max-w-7xl">
        <h2 class="text-2xl font-mono font-bold text-gray-800 px-4 pb-6 ">{{ logeas.title }}</h2>
        <p class="text-gray-800 font-mono px-4 pb-6 ">{{ logeas.description }}</p>
        <p class="text-gray-800 font-mono font-bold px-4 pb-6 t">{{ logeas.prix }}</p>
  
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
  
  const logeas = 
    { title: "Appartement 'Casa do Sol' rez-de-chaussée pour deux personnes",
    description:"Profitez d’un appartement cosy et fonctionnel situé en rez-de-chaussée, idéal pour une escapade en solo ou en couple. Il dispose d’une chambre confortable et d’une salle d’eau moderne avec douche, lavabo et WC. Parfait pour un séjour agréable dans un cadre paisible.",
    prix :"Prix: 350,00 euros la semaine."
    } 
    
  
  
  const products = [
      
    {
      id: 1,
      name: 'Cuisine aménagée et Bar.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/cuisadogr0_ozl27a.jpg',
      imageAlt: 'Cuisine aménagée et Bar.',
    },
    {
      id: 2,
      name: 'Cuisine aménagée et Bar.',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/antagr4_nwipxy.jpg',
      imageAlt: 'Cuisine aménagée et Bar.',
    },
   
    {
      id: 3,
      name: 'Espace à vivre.',
      href: '#',
      imageSrc:'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/salon02_hgdr7z.jpg',
      imageAlt: 'Espace à vivre.',
    },
    {
      id: 4,
      name: 'Salon',
      href: '#',
      imageSrc:'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/salongr1_lwrd9e.jpg',
      imageAlt: 'Salon.',
    },
    
    {
      id: 5,
      name: 'Une chambre vue 1',
      href: '#',
      imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/antagr3_jyzfd3.jpg',
      imageAlt: 'La chambre vue 1.',
    },
    {
      id: 6,
      name: 'Une chambre vue 2',
      href: '#',
      imageSrc:'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/antagr5_gdu54m.jpg',
      imageAlt: 'La chambre vue 2.',
    },
    {
      id: 7,
      name: 'Lavabo et toilette',
      href: '#',
      imageSrc:'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/banosgr0_z6aqmw.jpg',
      imageAlt: 'Douche et wc.',
    },
    {
      id: 8,
      name: 'Douche et wc.',
      href: '#',
      imageSrc:'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/banosgr01_urp7ou.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
  ]
  </script> 

