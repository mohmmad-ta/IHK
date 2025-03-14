<script setup>
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()
import { useRoute} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";
const route = useRoute();
const showData = ref({
  title: "",
  content: "",
  image: "",
  created_at: "",
});

const getShowNews = async (id)=>{
  if (route.path.slice(1,9) === 'showNews'){
    const {data} = await axios.get(`api/frontend/news/${route.params.id}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    console.log(data.data)
    showData.value = data.data
  }else {
    return 0
  }
}
onMounted(async ()=>{await getShowNews()})
window.onpopstate = async (event)=> {
  if (event.state) {
    await getShowNews()
  }
};
</script>

<template>
  <div dir="rtl" class="container gap-4 block md:flex py-20 text-right">
    <div class="w-full h-fit mb-4">
      <div class="flex justify-start">
        <img class="rounded h-96" :src="'https://api.diyalanewsagency.com/'+showData.image" :alt="showData.image">
      </div>
      <h2 class="text-main-50 font-bold text-2xl overflow-hidden my-1">{{showData.title}}</h2>
      <hr>
      <span class="text-secondary-950 text-sm">{{showData.created_at}}</span>
      <p class="text-primary-950 text-lg my-2 overflow-hidden">{{showData.content}}</p>
    </div>
    <div class="mb-10 max-h-[80vh] overflow-hidden w-96">
      <div @click="getShowNews" v-for="(item, index) in store.sliderNews" :key="index">
        <RouterLink :to="{ name: 'showNews', params: { id: item.id } }">
          <div class="w-80 mx-auto mb-2 gap-3 relative flex justify-between shadow-md shadow-secondary-100 overflow-hidden text-right bg-secondary-100 p-2 rounded h-36">
            <img class="rounded h-full w-20" :src="'https://api.diyalanewsagency.com/'+item.image" alt="">
            <div class="w-full py-1">
              <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 mb-1">{{item.title}}</h2>
              <p class="text-secondary-950 text-sm h-[75px] overflow-hidden">{{item.content}}</p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>