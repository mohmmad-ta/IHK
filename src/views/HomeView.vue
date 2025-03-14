<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()

const config = {
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
const breakpoints = {
  1: {
    itemsToShow: 2.4,
  },
  700: {
    itemsToShow: 3,
  },
  1000: {
    itemsToShow: 3.5,
  },
  1500: {
    itemsToShow: 5.3,
  },
}
</script>

<template>
  <main class="my-16">
    <Carousel class="overflow-hidden" :transition="700" v-bind="config">
      <Slide v-for="News in store.sliderNews" :key="News.id">
        <div class="relative ci">
          <RouterLink :to="{ name: 'showNews', params: { id: News.id } }">
            <img class="absolute top-0 left-0 z-0 ci" :src="'https://api.diyalanewsagency.com/'+News.image" alt="">
            <div class="w-full absolute flex flex-wrap p-6 items-end bottom-0 left-0 min-h-[50%] z-10 bg-gradient-to-b from-primary-10 to-primary-950">
              <div class="text-right w-full py-3 px-10">
                <h2 class="w-full text-white font-bold text-lg md:text-2xl mb-2">{{News.title}}</h2>
                <p class="w-full text-zinc-300 text-md max-h-20 overflow-hidden md:text-lg">{{News.content}}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>

    <div class="container justify-center flex flex-wrap lg:flex-nowrap gap-2 py-14">
      <div class="bg-primary-950 mb-10 w-full lg:w-96 h-fit px-3 py-10 text-center rounded-md">
        <h2 class="text-main-50 font-bold text-4xl">{{ $t('problem_logo') }}</h2>
        <p class="text-secondary-950 my-3">{{ $t('problem_description_home') }}</p>
        <RouterLink to="/problem">
          <button type="button" class="border-main-50 border-2 rounded py-1 px-3 duration-150 hover:bg-main-50 text-white">{{ $t('problem_logo_home') }}</button>
        </RouterLink>
      </div>
      <div class="flex gap-4 justify-center flex-wrap w-full">
        <div v-for="News in store.allNews" :key="News.id">
          <RouterLink :to="{ name: 'showNews', params: { id: News.id } }">
            <CardNews :News="News" />
          </RouterLink>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.ci{
  width: 100% !important;
  height: 600px !important;
}
@media (max-width: 768px) {
  .ci{
    height: 300px !important;
  }
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 1s;
}
</style>