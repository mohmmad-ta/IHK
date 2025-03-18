<script setup>
const s = defineProps({
  News: {
    type: Object
  },
})
</script>

<template>
  <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
    <img class="rounded h-52 w-full" :src="'https://api.diyalanewsagency.com/'+News.image" :alt="News.image">
    <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{News.title.length > 30 ? News.title.slice(0, 30) + "..." : News.title}}</h2>
    <p class="text-main2-950 h-12 overflow-hidden">{{News.content}}</p>
    <span class="text-gray-300 text-sm">{{News.created_at}}</span>
  </div>
</template>
