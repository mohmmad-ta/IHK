<script setup>
import SideBar from "@/components/admin/SideBar.vue";
import NavBarAdmin from "@/components/admin/NavBarAdmin.vue";
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {onMounted, onUnmounted, ref} from "vue";
import TNews from "@/components/admin/TNews.vue";
import TProblem from "@/components/admin/TProblem.vue";
import FormNews from "@/components/admin/form/FormNews.vue";
import Filter from "@/components/admin/form/Filter.vue";
import Search from "@/components/admin/form/Search.vue";
import TNotifications from "@/components/admin/TNotifications.vue";
import FormProblem from "@/components/admin/form/FormProblem.vue";
import FormNotification from "@/components/admin/form/FormNotification.vue";

const store = useAdminStore();
onMounted(()=>{
  if (window.innerWidth <= 1200){
    store.slidOpen = false
  }
})
const scrollComponent = ref(null);
const page1 =ref(1)
const page2 =ref(1)
onMounted(()=>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(()=>{
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (e)=>{
  let element = scrollComponent.value;
  if (store.scrollStatusNews === true && store.dashStep === 1){
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      store.scrollStatus = false
      page1.value += 1;
      store.getIndexNews(page1.value)
    }
  }else if(store.scrollStatusComplaints === true && store.dashStep === 2){
    if (element.getBoundingClientRect().bottom < window.innerHeight) {
      store.scrollStatus = false
      page2.value += 1;
      store.getIndexComplaints(page2.value)
    }
  }
}
</script>

<template>
  <main ref="scrollComponent">
    <!--  start register page   -->
    <div class="bg-secondary-100 min-h-screen block lg:flex">
      <SideBar />
      <NavBarAdmin />
      <div :class="store.slidOpen === true ? 'mr-80' : 'mr-0'" class="w-full duration-200 h-fit px-6 py-20 mb-4 lg:p-18">
        <TNews v-if="store.dashStep === 1" />
        <TProblem v-else-if="store.dashStep === 2" />
        <TNotifications v-else-if="store.dashStep === 3" />
      </div>
    </div>
    <Transition>
      <div v-if="store.openForm !== 0" class="fixed justify-center items-center flex top-0 left-0 z-50 w-full min-h-screen">
        <div @click="store.openForm = 0" class="w-full cursor-pointer absolute top-0 z-50 left-0 h-full bg-primary-300 backdrop-blur-sm"></div>
        <div class="bg-white duration-150 justify-center min-w-96 z-50 p-4 rounded h-fit">
          <FormNews v-if="store.openForm === 1" />
          <FormProblem v-if="store.openForm === 2" />
          <FormNotification v-if="store.openForm === 3" />
          <Search v-if="store.openForm === 10" />
          <Filter v-if="store.openForm === 11" />
        </div>
      </div>
    </Transition>
  </main>
</template>