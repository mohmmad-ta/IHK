<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'

const store = useAdminStore();
</script>

<template>
  <header :class="store.slidOpen === true ? 'pr-80' : 'pr-0'" class="z-40 fixed top-0 left-0 w-full h-16 bg-white shadow-md duration-200 shadow-secondary-50 overflow-hidden">
    <nav class="flex items-center justify-end h-16 px-6">
      <button v-if="store.slidOpen === true" @click="store.slidOpen === true ? store.slidOpen = false : store.slidOpen = true" type="button" class="text-xl text-secondary-950 transition-opacity duration-150">
        <i class="fa-solid fa-bars-staggered"></i>
      </button>
      <button v-else-if="store.slidOpen === false" @click="store.slidOpen === true ? store.slidOpen = false : store.slidOpen = true" type="button" class="text-xl text-secondary-950 transition-opacity duration-150">
        <i class="fa-solid fa-bars"></i>
      </button>
    </nav>
  </header>
</template>