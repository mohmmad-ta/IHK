<script setup>
import axios from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

const userData = ref({
  email: '',
  password: '',
})
const alertLogin = ref("")
const login = ()=>{
  if (userData.value.email !== '' && userData.value.password !== ''){
    axios.post(`api/login`, userData.value).then((data)=>{
      localStorage.setItem("token", data.data.token);
      router.push("/admin");
    }).catch((err)=>{
      alertLogin.value = "البيانات غير مكتملة او غير صحيحة"
    })
  }else {
    alertLogin.value = "البيانات غير مكتملة او غير صحيحة"
  }
}

</script>

<template>
  <main class="container">
    <div class="min-h-screen pb-10 pt-16 w-full flex items-center justify-center">
      <div class="w-96 p-5">
        <!--    logo    -->
        <div class="items-center flex gap-4 mb-4 justify-center w-full">
          <h2 class="font-bold text-primary-950">{{ $t('login_logo') }}</h2>
        </div>
        <!--    input     -->
        <form class="text-right grid gap-1.5">

          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('login_email') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input v-model="userData.email" type="email" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>
          <!--   input user name   -->
          <div>
            <label class="text-secondary-950">{{ $t('login_password') }}</label>
            <div class="flex gap-2 mt-0.5 text-sm">
              <input v-model="userData.password" type="password" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
            </div>
          </div>

          <Transition>
            <p v-if="alertLogin !== ''" class="p-2 mt-2 text-sm bg-red-200 text-red-700 rounded">{{alertLogin}}</p>
          </Transition>

          <div class="flex justify-center py-4 items-center gap-4">
            <button @click="login" type="button" class="w-3/4 bg-main-50 py-2 mt-2 font-bold text-white rounded">{{ $t('login_button') }}</button>
          </div>
        </form>
      </div>
    </div>

  </main>
</template>
