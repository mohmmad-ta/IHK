<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
import axios from "axios";
const store = useAdminStore()

const handleFileUpload = (event)=> {
  store.newsData.image = event.target.files[0]; // Capture the image file
}

const postCreateNews = async ()=>{
  const dataPost = new FormData();
  dataPost.append('title', store.newsData.title);
  dataPost.append('content', store.newsData.content);
  dataPost.append('sendNoifyForGuest', store.newsData.sendNoifyForGuest);
  dataPost.append('image', store.newsData.image);
  const res = await axios.post(`api/news`, dataPost, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  store.allNews.push(res.data.data)
}
const postUpdateNews = async (id)=>{
  const dataPost = new FormData();
  dataPost.append('title', store.newsData.title);
  dataPost.append('content', store.newsData.content);
  dataPost.append('sendNoifyForGuest', store.newsData.sendNoifyForGuest);
  dataPost.append('image', store.newsData.image);
  const res = await axios.put(`api/news/${id}`, store.newsData)
  store.allNews[store.alert.number] = res.data.data
}

const News = async () =>{
  if (store.form_status === "post"){
    await postCreateNews()
    store.openForm = 0
  }else if(store.form_status === "put"){
    await postUpdateNews(store.alert.id)
    store.openForm = 0
  }
}

</script>

<template>
  <div class="w-full overflow-hidden justify-center">
    <form class="text-right">

      <label class="text-secondary-950">{{ $t('admin_news_title') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.newsData.title" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>
      <label class="text-secondary-950">{{ $t('admin_news_content') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <textarea v-model="store.newsData.content" type="text" class="scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"></textarea>
      </div>


      <div class="flex justify-end gap-2 mt-4 text-sm">
        <p class="text-secondary-950 w-full">{{ $t('form_notification') }}</p>
        <input v-model="store.newsData.sendNoifyForGuest" type="checkbox" class="outline-none text-right border-secondary-950 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>


      <div class="mt-3">
        <h2 class="mb-1">{{ $t('form_image') }}</h2>
        <input class="w-full" type="file" @change="handleFileUpload">
      </div>

      <div class="flex justify-center pt-8 pb-4 items-center gap-4">
        <button @click="store.openForm = 0" type="button" class="w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded">{{ $t('form_false') }}</button>
        <button @click="News()" type="button" class="w-3/4 bg-main-50 py-1.5 font-bold text-white rounded">{{ $t('form_true') }}</button>
      </div>
    </form>
  </div>
</template>