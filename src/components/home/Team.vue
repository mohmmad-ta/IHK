<script setup>
import {ref} from "vue";

const slid = ref(1)
</script>

<template>
  <div class="container w-full text-right  mt-24 flex flex-wrap md:flex-nowrap gap-4">
    <!--  Left list boxes   -->
    <div class="w-full flex items-center py-4 px-0 lg:px-10 md:w-1/2">
      <div>
        <div @click="slid = 1" :class="slid === 1 ? 'border-main-50' : 'border-secondary-950'" class="w-full border-2 cursor-pointer overflow-hidden hover:scale-105 duration-200 shadow-sm rounded-md bg-secondary-950 h-40 p-6 mb-2">
          <h2 :class="slid === 1 ? 'text-main-50' : 'text-white'" class="text-2xl duration-150 font-bold mb-1.5">{{ $t('home-about-co-title') }}</h2>
          <p class="text-main2-950 text-xs h-12 overflow-hidden">{{ $t('home-about-co-content') }}</p>
        </div>
        <div @click="slid = 2" :class="slid === 2 ? 'border-main-50' : 'border-secondary-950'" class="w-full cursor-pointer border-2 overflow-hidden hover:scale-105 duration-200 shadow-sm rounded-md bg-secondary-950 h-40 p-6 mb-2">
          <h2 :class="slid === 2 ? 'text-main-50' : 'text-white'" class="text-2xl duration-150 font-bold text-main-50 mb-1.5">{{ $t('home-about-ceo-title') }}</h2>
          <p class="text-main2-950 text-xs h-12 overflow-hidden">{{ $t('home-about-ceo-content') }}</p>
        </div>
      </div>
    </div>
    <!--  Right text boxes   -->
    <div v-if="slid === 1" class="w-full px-6 py-10 md:w-1/2 md:px-10 lg:px-20">
      <span class="text-main2-950 font-bold text-xs">{{ $t('home-about-co-text') }}</span>
      <h2 class="text-3xl text-white font-bold my-4">{{ $t('home-about-co-title') }}</h2>
      <p class="text-main2-950 text-md">{{ $t('home-about-co-content') }}</p>
    </div>
    <div v-if="slid === 2" class="w-full px-6 py-10 md:w-1/2 md:px-10 lg:px-20">
      <span class="text-main2-950 font-bold text-xs">{{ $t('home-about-ceo-text') }}</span>
      <h2 class="text-3xl text-white font-bold my-4">{{ $t('home-about-ceo-title') }}</h2>
      <p class="text-main2-950 text-md">{{ $t('home-about-ceo-content') }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>