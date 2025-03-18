<script setup>
import { useDataStore } from '@/stores/StoreData.js'
import Team from "@/components/home/Team.vue";
import OurWork from "@/components/home/OurWork.vue";
const store = useDataStore()
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const breakpoints = {
  // 1px and up
  1: {
    itemsToShow: 1.95,
  },
  700: {
    itemsToShow: 1.95,
  },
  // 700 and up
  1000: {
    itemsToShow: 2.95,
  },
  1500: {
    itemsToShow: 3.95,
  },
}

</script>

<template>
  <main class="mb-16">
    <header class="w-full flex h-screen relative">
      <div class="w-full z-10 container flex items-center h-full">
        <div class="w-full text-right mt-[-12rem]">
          <h2 class="text-white text-3xl md:text-5xl mb-5 w-full md:w-1/2 ml-auto">{{ $t('home-header-title1') }}</h2>
          <h2 class="text-main-50 text-4xl md:text-6xl font-bold mb-5 w-full md:w-1/2 ml-auto">{{ $t('home-header-title2') }}</h2>
          <p class="text-md md:text-2xl text-main2-950 w-full md:w-2/3 ml-auto">{{ $t('home-about-co-text')}}</p>
        </div>
      </div>
      <img class="w-full h-full absolute top-0  left-0" src="/world.png" alt="">
      <div class="w-full h-full absolute top-0  left-0 blur-md bg-gradient-to-l from-primary-950 to-primary-200"></div>
      <div class="flex items-center flex-wrap md:flex-nowrap bg-header-300 backdrop-blur-lg rounded-r-md absolute bottom-20 gap-10 left-0 h-40 px-20">
        <div class="text-main2-950 flex items-center gap-4">ddddddd<span class="text-3xl md:text-5xl text-white">dddd</span></div>
        <div class="text-main2-950 flex items-center gap-4">ddddddd<span class="text-3xl md:text-5xl text-white">dddd</span></div>
        <div class="text-main2-950 flex items-center gap-4">ddddddd<span class="text-3xl md:text-5xl text-white">dddd</span></div>
      </div>
    </header>


    <Team />
    <OurWork />

    <div class="my-10 w-full container ">
      <div class="w-full text-right">
        <h2 class="text-main-50 text-xl m-2">{{ $t('nav_news') }}</h2>
      </div>
      <Carousel :breakpoints="breakpoints" :wrapAround="false" :transition="500" :loop="true">
        <Slide v-for="(news, index) in store.sliderNews" :key="news.id">
          <RouterLink :to="{ name: 'showNews', params: { id: news.id } }">
            <div class="p-3 pb-5 mx-2 rounded-md bg-secondary-950 overflow-hidden hover:scale-105 duration-200">
              <img class="rounded-md ci" src="/w.png" alt="" />
              <h2 class="text-xl h-12 overflow-hidden mt-2 text-right text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur error quos. Architecto aspernatur beatae commodi culpa delectus, dolore illo neque voluptatibus. Consequatur, quidem recusandae? Illum quas quod repellat ut.</h2>
            </div>
          </RouterLink>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>

  </main>
</template>

<style scoped>
.ci{
  width: 325px !important;
  height: 300px !important;
}
@media (max-width: 768px) {
  .ci{
    width: 160px !important;
    height: 150px !important;
  }
}

.carousel__slide {
  padding: 5px;
}
.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

</style>