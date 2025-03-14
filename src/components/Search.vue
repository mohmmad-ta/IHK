<script setup>
import { useDataStore } from '@/stores/StoreData.js'
import {ref} from "vue";
const store = useDataStore()

</script>

<template>
  <div class="w-full justify-center">
    <div class="w-full flex justify-end">
      <button @click="store.openForm = 0" type="button" class="w-fit text-right px-2 mb-1 text-secondary-950 hover:text-red-500 duration-150 text-lg"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <form class="text-right">
      <div class="flex gap-1 items-center mt-0.5 px-2 bg-inputColor-950 rounded-md text-sm">
        <input type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition bg-inputColor-950 px-3 py-2" placeholder="search">
        <i class="fa-solid fa-magnifying-glass text-secondary-950 text-md"></i>
      </div>

    </form>
  </div>
</template>