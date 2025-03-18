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
  <div class="container gap-4 block md:flex py-24 text-right">
    <div class="w-full flex gap-4 h-fit mb-4">
      <div class="w-full md:w-1/2">
        <img class="rounded w-full" :src="'https://api.diyalanewsagency.com/'+showData.image" :alt="showData.image">
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-main-50 font-bold text-3xl overflow-hidden my-6">{{showData.title}}</h2>
        <span class="text-gray-200 text-sm">{{showData.created_at}}</span>
        <p class="text-main2-950 text-lg my-2 overflow-hidden">{{showData.content}}</p>
      </div>
    </div>
  </div>
</template>