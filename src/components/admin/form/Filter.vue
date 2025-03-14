<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {onMounted, ref} from "vue";
import {Carousel, Navigation, Slide} from "vue3-carousel";
const store = useAdminStore()

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
]
const filters = ref({
  category: "",
  sort_by: "",
  sort_order: "",
})
const categories = ref()

onMounted(async ()=>{
  categories.value = await store.getIndexCategory()
})

const saveFilters = async ()=>{
  if (store.dashStep === 1){
    await store.getIndexProduct(filters.value.category, filters.value.sort_by, filters.value.sort_by)
  }
  store.openForm = 0
}

</script>

<template>
  <div class="max-w-[30rem] overflow-hidden justify-center">
    <h2 class="text-secondary-950 w-full text-center">Filter</h2>
    <hr class="w-full">
    <form class="text-right py-1">

      <!--   input category   -->
      <h2 class="text-secondary-950 my-3">category</h2>
      <div class="mt-0.5 text-sm" >
        <Carousel class="px-9" :items-to-show="2.5" :wrapAround="false" :transition="500" :loop="true">
          <Slide v-for="(category, index) in categories" :key="category.id">
            <button :class="filters.category === category.name ? 'border-main-50 text-main-50 border-solid' : 'border-secondary-500 text-secondary-950 border-dashed'" @click="filters.category = category.name" type="button" class=" duration-150 slider-w border-2 px-3 py-0.5 rounded">{{category.name}}</button>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div v-for="(category, index) in categories" :key="category.id">
        </div>
      </div>
      <!--   input sort_by   -->
      <h2 class="text-secondary-950 my-3">sort_by</h2>
      <div class="mt-0.5 text-sm" >
        <Carousel class="px-9" :items-to-show="2.5" :wrapAround="false" :transition="500" :loop="true">
          <Slide v-for="(category, index) in categories" :key="category.id">
            <button :class="filters.category === category.name ? 'border-main-50 text-main-50 border-solid' : 'border-secondary-500 text-secondary-950 border-dashed'" @click="filters.category = category.name" type="button" class=" duration-150 slider-w border-2 px-3 py-0.5 rounded">{{category.name}}</button>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div v-for="(category, index) in categories" :key="category.id">
        </div>
      </div>
      <!--   input sort_order   -->
      <h2 class="text-secondary-950 my-3">sort_order</h2>
      <div class="mt-0.5 text-sm" >
        <Carousel class="px-9" :items-to-show="2.5" :wrapAround="false" :transition="500" :loop="true">
          <Slide v-for="(category, index) in categories" :key="category.id">
            <button :class="filters.category === category.name ? 'border-main-50 text-main-50 border-solid' : 'border-secondary-500 text-secondary-950 border-dashed'" @click="filters.category = category.name" type="button" class=" duration-150 slider-w border-2 px-3 py-0.5 rounded">{{category.name}}</button>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <div v-for="(category, index) in categories" :key="category.id">
        </div>
      </div>

      <div class="flex justify-center pt-6 pb-4 items-center gap-4">
        <button @click="store.openForm = 0" type="button" class="w-3/4 bg-secondary-500 py-1.5 font-bold text-white rounded">close</button>
        <button @click="saveFilters()" type="button" class="w-3/4 bg-main-50 py-1.5 font-bold text-white rounded">Save</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.slider-w{
  width: 10rem !important;
  height: 100% !important;
}

</style>