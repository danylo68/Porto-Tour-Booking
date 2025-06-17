<template>
  <nav class="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span class="text-xl font-bold">Vacances Espinho</span>
          </router-link>
        </div>

        <!-- Menu principal (desktop) -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-center space-x-4">
            <router-link to="/locations" class="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Locations
            </router-link>
            <router-link to="/destinations" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
            Destinations
          </router-link>
          <a href="mailto:lopa.daniel@mail.com, nanda.lopa@gmail.com" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">Contact</a>
              
          
          </div>
        </div>

        <!-- Bouton mobile -->
        <div class="md:hidden flex items-center">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Ouvrir le menu</span>
            <svg
              class="block h-6 w-6"
              :class="isOpen ? 'hidden' : 'block'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class="block h-6 w-6"
              :class="isOpen ? 'block' : 'hidden'"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div class="md:hidden" :class="isOpen ? 'block' : 'hidden'" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/locations" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
            Locations
          </router-link>
          <router-link to="/destinations" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
            Destinations
          </router-link>
          <a href="mailto:mailto:lopa.daniel@mail.com, nanda.lopa@gmail.com" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
      Contact
    </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>
