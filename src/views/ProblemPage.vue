<script setup>
import { useDataStore } from '@/stores/StoreData.js'
const store = useDataStore()
import axios from "axios";
import {ref} from "vue";

const alert = ref("")
const alertTrue = ref("")

const formPostComplaints = () =>{
  axios.post(`api/frontend/complaints`, store.complaintData).then((res) => {
    alertTrue.value = "تم ارسال طلبك بنجاح"
  }).catch((err) => {
    alert.value = "البيانات غير مكتملة او غير صحيحة"
  })
}
</script>

<template>
  <main class="container">
    <div class="min-h-screen pb-10 pt-16 w-full flex items-center justify-center">
      <div class="w-96 p-5">
        <!--    logo    -->
        <div class="items-center flex gap-4 mb-4 justify-center w-full">
          <h2 class="font-bold text-xl text-primary-950">{{ $t('problem_logo') }}</h2>
        </div>
        <!--    input     -->
        <form class="text-right grid gap-1.5">

          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('problem_name') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input v-model="store.complaintData.name" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('problem_mobile') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input v-model="store.complaintData.mobile" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('problem_subject') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input v-model="store.complaintData.subject" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('problem_description') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <textarea v-model="store.complaintData.description" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"></textarea>
            </div>
          </div>

          <Transition>
            <p v-if="alert !== ''" class="p-2 mt-2 text-sm bg-red-200 text-red-700 rounded">{{alert}}</p>
          </Transition>

          <Transition>
            <p v-if="alertTrue !== ''" class="p-2 mt-2 text-sm bg-green-200 text-green-700 rounded">{{alertTrue}}</p>
          </Transition>

          <div class="flex justify-center py-4 items-center gap-4">
            <button @click="formPostComplaints" type="button" class="w-3/4 bg-main-50 py-2 font-bold text-white rounded">{{ $t('problem_button') }}</button>
          </div>
        </form>
      </div>
    </div>

  </main>
</template>
