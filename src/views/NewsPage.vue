<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';
import CardNews from "@/components/CardNews.vue";
import {onMounted, onUnmounted, ref} from "vue";
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()

const scrollComponent = ref(null);
const page1 =ref(1)
onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e)=>{
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    store.scrollStatus = false
    page1.value += 1;
    store.getIndexNews(page1.value)
  }
}
</script>

<template>
  <main class="py-14 min-h-screen container" ref="scrollComponent">
    <div class="flex gap-4 mt-10 justify-center flex-wrap w-full">
      <div v-for="News in store.allNews" :key="News.id">
        <RouterLink :to="{ name: 'showNews', params: { id: News.id } }">
          <CardNews :News="News" />
        </RouterLink>
      </div>
    </div>
  </main>
</template>

