


 <template>
  <div class="bg-white min-h-[70vh] py-8">
    <div class="w-full px-4 mx-auto max-w-7xl">
    
      <h2 class="text-2xl font-mono font-bold text-gray-800 px-4 pb-6 ">{{ logeas.title }}</h2>
      <p class="text-gray-800 font-mono px-4 pb-4 ">{{ logeas.description }}</p>
      <p class="text-gray-800 font-mono font-bold px-4 pb-6 ">{{ logeas.prix }}</p>
      
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
  title: 'Appartement 1 pour cinq personnes',
  description: 'L appartement 1 est au premier niveau : un appartement avec terrasse de 30 m², deux chambres, une salle d’eau avec douche, lavabo et WC.',
  prix: '400,00 euros la semaine',
}

const products = [
  {
    id: 1,
    name: 'Anta / Appt 1 Terrasse',
    href: '#',
    imageSrc: '/images/terasseanta.jpg',
    imageAlt: 'Terrasse Anta',
  },
  {
    id: 2,
    name: 'Anta / Appt 1 Terrasse',
    href: '#',
    imageSrc: '/images/anta1.jpg',
    imageAlt: 'Vue salon',
  },
  {
    id: 6,
    name: 'Terrasse table',
    href: '#',
    imageSrc: '/images/terassetable.jpg',
    imageAlt: 'Table sur terrasse',
  },
  {
    id: 3,
    name: 'Anta / Appt 1 Salon',
    href: '#',
    imageSrc: '/images/anta2.jpg',
    imageAlt: 'Appt 1 Salon',
  },
  {
    id: 4,
    name: 'Salon clair et spacieux',
    href: '#',
    imageSrc: '/images/salon1.jpg',
    imageAlt: 'Salon clair et spacieux',
  },
  {
    id: 5,
    name: 'Salle de bains moderne',
    href: '#',
    imageSrc: '/images/banosloge1.jpg',
    imageAlt: 'Salle de bains moderne',
  },
 
  {
    id: 7,
    name: 'Chambre 1 avec lit double',
    href: '#',
    imageSrc: '/images/chambre1.jpg',
    imageAlt: 'Chambre 1 avec lit double',
  },
  {
    id: 8,
    name: 'Chambre 2 avec lit double',
    href: '#',
    imageSrc: '/images/chambre2.jpg',
    imageAlt: 'Chambre 2 avec lit double',
  
  },
]
</script>


<style scoped>

</style>

