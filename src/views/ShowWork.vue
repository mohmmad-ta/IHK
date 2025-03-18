<script setup>
import { useRoute} from "vue-router";
const route = useRoute();

</script>

<template>
  <div class="container gap-4 block md:flex py-24 text-right">
    <div class="w-full flex gap-4 h-fit mb-4">
      <div class="w-full md:w-1/2">
        <img class="rounded w-full" src="/w.png" alt="" />
      </div>
      <div class="w-full md:w-1/2">
        <h2 class="text-main-50 font-bold text-3xl overflow-hidden my-6">{{ $t(`work-${route.params.id}-title`)}}</h2>
        <span class="text-gray-200 text-sm">{{ $t(`work-${route.params.id}-title`)}}</span>
        <p class="text-main2-950 text-lg my-2 overflow-hidden">{{ $t(`work-${route.params.id}-title`)}}</p>
      </div>
    </div>
  </div>
</template>