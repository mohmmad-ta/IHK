<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
const store = useAdminStore()
const emit = defineEmits(['alertFunction']);
const alertFunction = ()=>{
  emit('alertFunction')
}
</script>

<template>
  <Transition>
    <div v-if="store.alert.open === true" class="fixed justify-center items-center flex top-0 left-0 z-50 w-full min-h-screen">
      <div @click="store.alert.open = false" class="w-full cursor-pointer absolute top-0 z-50 left-0 h-full bg-primary-300 backdrop-blur-sm"></div>
      <div class="bg-white duration-150 justify-center min-w-96 z-50 p-4 rounded h-fit">
        <div class="w-full justify-center">
          <div class="text-right py-1.5 px-1 grid gap-1">
            <div class="w-full text-center">
              <h2 class="font-bold text-xl text-primary-950 my-4">{{ store.alert.title}}</h2>
              <p class="text-secondary-950 font-light text-sm">{{ store.alert.description}}</p>
            </div>
            <div class="flex justify-center pt-8 pb-4 items-center gap-4">
              <button @click="store.alert.open = false" type="button" class="w-3/4 bg-secondary-500 py-1.5 text-white rounded">{{ $t('form_false') }}</button>
              <button @click="alertFunction()" type="button" class="w-3/4 bg-main-50 py-1.5 text-white rounded">{{ $t('form_true') }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>