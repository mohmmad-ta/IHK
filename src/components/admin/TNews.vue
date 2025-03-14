<script setup>

import Alert from "@/components/admin/form/Alert.vue";
import { useAdminStore } from '@/stores/StoreAdmin.js'
const store = useAdminStore();

const alert = async (id, index)=>{
  store.alert.description = "هل تريد حذف الخبر ?"
  store.alert.title = " حذف الخبر ?"
  store.alert.id = id
  store.alert.open = true
  store.alert.number = index
}
const alertFunction = async ()=>{
  await store.formDeleteNews(store.alert.id)
  store.allNews.splice(store.alert.number, 1);
  store.alert.open = false
}
const updateNews = async (index)=>{
  store.form_status = "put"
  store.openForm = store.dashStep
  store.newsData = {
    title : store.allNews[index].title,
    content : store.allNews[index].content,
    sendNoifyForGuest : false,
    image: null,
  }
  store.alert.id = store.allNews[index].id
  store.alert.number = index
}
const create = async () => {
  store.form_status = "post"
  store.openForm = store.dashStep
  store.newsData = {
    title : "",
    content : "",
    sendNoifyForGuest : false,
    image: null,
  }
}
</script>

<template>
  <div class=" h-full w-full p-2.5 rounded">
    <div class="w-full mb-4 py-2 px-4 rounded flex items-center justify-end bg-white">
      <button @click="create" type="button" class="px-4 bg-main-50 py-1 text-white rounded">{{ $t('admin_news_btn_add') }}</button>
    </div>
    <div class="p-2 bg-white">
      <table class="table-fixed w-full">
        <thead class="border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold">
        <tr>
          <th class="p-2">{{ $t('admin_news_st') }}</th>
          <th class="p-2 tableHid">{{ $t('admin_news_created_at') }}</th>
          <th class="p-2 tableHid">{{ $t('admin_news_content') }}</th>
          <th class="p-2">{{ $t('admin_news_title') }}</th>
          <th class="p-2 tableHid">{{ $t('admin_news_no') }}</th>
        </tr>
        </thead>
        <tbody class="text-center text-primary-950">
        <tr :class="index % 2 !== 0 ? 'bg-secondary-100' : 'bg-none'" v-for="(news, index) in store.allNews" :key="index">
          <td>
            <div class="flex items-center gap-3 justify-center">
              <i @click="alert(news.id, index)"
                 class="fa-regular fa-trash-can hover:text-red-500 duration-150 text-sm cursor-pointer"></i>
              <i @click="updateNews(index)"
                 class="fa-solid fa-pencil hover:text-amber-500 duration-150 text-sm cursor-pointer"></i>
            </div>
          </td>
          <td class="tableHid">{{ news.created_at }}</td>
          <td class="tableHid">{{ news.content.length > 20 ? news.content.slice(0,20) + " ... " : news.content }}</td>
          <td class="py-3 text-main-50">{{ news.title }}</td>
          <td class="tableHid">{{ index + 1 }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Alert @alertFunction="alertFunction"/>
</template>