
  
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
    { title: "Appartement 2 pour trois couchage ", description: 'La loge 2 est au rez de chausssé est un apartement doté de d/une chambres,d/une salle d/eau avec douche, lavabo et WC',prix :"350,00 euros la semaine"
    } 
    
  
  
  
  
  const products = [
      
    {
      id: 8,
      name: 'Anta/ Appt 0 level',
      href: '#',
      imageSrc: '/images/antagr1.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 10,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: '/images/antagr4.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 9,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc:'/images/salon02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 12,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc:'/images/salongr1.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    
    {
      id: 11,
      name: 'Earthen Bottle',
      href: '#',
      imageSrc: '/images/antagr3.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 12,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc:'/images/antagr5.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
   
    {
      id: 12,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc:'/images/banosgr0.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 12,
      name: 'Nomad Tumbler',
      href: '#',
      imageSrc:'/images/banosgr01.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
  ]
  </script> 

