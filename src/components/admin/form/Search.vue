<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
const store = useAdminStore()

const Tag = async () =>{
  if (store.form_status === "post"){
    console.log(store.form_status)
    await store.postCreateTag()
    store.openForm = 0
  }else if(store.form_status === "put"){
    console.log(store.form_status)
    await store.putUpdateTag(store.formTag_id)
    store.openForm = 0
  }
}
</script>

<template>
  <div class="w-full justify-center">
    <h2 class="text-secondary-950 w-full text-center">Tag</h2>
    <hr class="w-full">
    <form class="text-right">

      <!--   input user name   -->
      <label class="text-secondary-950">name</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.formTag_name" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md" placeholder="الاسم الاول">
      </div>

      <div class="flex justify-center pt-8 pb-4 items-center gap-4">
        <button @click="store.openForm = 0" type="button" class="w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded">close</button>
        <button @click="Tag()" type="button" class="w-3/4 bg-main-50 py-1.5 font-bold text-white rounded">add to card</button>
      </div>
    </form>
  </div>
</template>