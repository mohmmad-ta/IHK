<script setup>


</script>

<template>
  <main class="py-14 min-h-screen container" ref="scrollComponent">
    <div class="flex gap-4 mt-10 justify-center flex-wrap w-full">
      <RouterLink :to="{ name: 'showNews', params: { id: 1 } }">
        <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
          <img class="rounded h-52 w-full" src="/w.png">
          <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{ $t('work-1-title')}}</h2>
          <p class="text-main2-950 h-12 overflow-hidden">{{ $t('work-1-content')}}</p>
          <span class="text-gray-300 text-sm">{{ $t('work-1-text')}}</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'showNews', params: { id: 2 } }">
        <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
          <img class="rounded h-52 w-full" src="/w.png">
          <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{ $t('work-2-title')}}</h2>
          <p class="text-main2-950 h-12 overflow-hidden">{{ $t('work-2-content')}}</p>
          <span class="text-gray-300 text-sm">{{ $t('work-2-text')}}</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'showNews', params: { id: 3 } }">
        <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
          <img class="rounded h-52 w-full" src="/w.png">
          <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{ $t('work-3-title')}}</h2>
          <p class="text-main2-950 h-12 overflow-hidden">{{ $t('work-3-content')}}</p>
          <span class="text-gray-300 text-sm">{{ $t('work-3-text')}}</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'showNews', params: { id: 4 } }">
        <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
          <img class="rounded h-52 w-full" src="/w.png">
          <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{ $t('work-4-title')}}</h2>
          <p class="text-main2-950 h-12 overflow-hidden">{{ $t('work-4-content')}}</p>
          <span class="text-gray-300 text-sm">{{ $t('work-4-text')}}</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'showNews', params: { id: 5 } }">
        <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
          <img class="rounded h-52 w-full" src="/w.png">
          <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{ $t('work-5-title')}}</h2>
          <p class="text-main2-950 h-12 overflow-hidden">{{ $t('work-5-content')}}</p>
          <span class="text-gray-300 text-sm">{{ $t('work-5-text')}}</span>
        </div>
      </RouterLink>
      <RouterLink :to="{ name: 'showNews', params: { id: 6 } }">
        <div class="w-[22rem] relative shadow-md hover:scale-105 duration-200 shadow-secondary-100 overflow-hidden text-right bg-secondary-950 p-2 rounded">
          <img class="rounded h-52 w-full" src="/w.png">
          <h2 class="text-main-50 font-bold text-lg overflow-hidden max-h-6 my-1.5">{{ $t('work-6-title')}}</h2>
          <p class="text-main2-950 h-12 overflow-hidden">{{ $t('work-6-content')}}</p>
          <span class="text-gray-300 text-sm">{{ $t('work-6-text')}}</span>
        </div>
      </RouterLink>
    </div>
  </main>
</template>
