<script setup>

</script>

<template>
  <div class="container w-full  mt-24 flex flex-wrap md:flex-nowrap">
    <!--  Left list boxes   -->
    <div class="w-full grid py-4 px-0 lg:px-10 md:w-1/2">
      <div class="w-full md:w-[28rem] ml-auto text-center my-8">
        <h2 class="text-2xl font-bold text-main-50 mb-1.5">{{ $t('home-work-title') }}</h2>
        <p class="text-main2-950 text-xs">{{ $t('home-work-content') }}</p>
      </div>
      <div class="w-full md:w-[28rem] md:h-[28rem] ml-auto cursor-pointer hover:scale-105 duration-200 shadow-sm rounded-md bg-secondary-950 overflow-hidden mb-2">
        <img src="/w.png" alt="">
      </div>
      <RouterLink class="w-full hidden md:block md:w-[28rem] ml-auto text-center my-8" to="/ourWork">
        <h2 class="text-2xl font-bold text-main2-950 duration-150 hover:text-main-50 mb-1.5">{{ $t('home-work-btn') }}</h2>
      </RouterLink>

    </div>
    <!--  Right text boxes   -->
    <div class="w-full py-4 px-0 lg:px-10 md:w-1/2">
      <div class="w-full  md:w-[28rem] md:h-[28rem] cursor-pointer hover:scale-105 duration-200 shadow-sm rounded-md bg-secondary-950 overflow-hidden mb-14">
        <img src="/w.png" alt="">
      </div>
      <div class="w-full md:w-[28rem] md:h-[28rem] cursor-pointer hover:scale-105 duration-200 shadow-sm rounded-md bg-secondary-950 overflow-hidden mb-2">
        <img src="/w.png" alt="">
      </div>
      <RouterLink class="w-full block md:hidden md:w-[28rem] ml-auto text-center my-8" to="/ourWork">
        <h2 class="text-2xl font-bold text-main2-950 duration-150 hover:text-main-50 mb-1.5">{{ $t('home-work-btn') }}</h2>
      </RouterLink>

    </div>
  </div>
</template>

<style scoped>

</style>