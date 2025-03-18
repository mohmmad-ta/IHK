<script setup>
import {RouterView, useRoute} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
const route = useRoute();
</script>

<template dir="ltr">
  <NavBar v-show="route.path.slice(1,6) !== 'admin'" />
  <RouterView />
<!--  <footer v-show="route.path.slice(1,6) !== 'admin'" class="w-full text-center pt-8 pb-2 bg-primary-950">-->
<!--    <h2 class="font-bold text-main-50 mb-4 text-2xl">{{ $t('footer_title') }}</h2>-->
<!--    <p class="text-secondary-950 text-sm">diyala news agency</p>-->
<!--  </footer>-->
</template>
