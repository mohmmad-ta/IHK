<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
import {ref} from "vue";
import axios from "axios";
const store = useAdminStore()

</script>

<template>
  <div class="w-full overflow-hidden justify-center">
    <form class="text-right">
      <label class="text-secondary-950">{{ $t('problem_type') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.notificationsData.type" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>
      <label class="text-secondary-950">{{ $t('problem_name') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.notificationsData.compliment.name" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>
      <label class="text-secondary-950">{{ $t('problem_mobile') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.notificationsData.compliment.mobile" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>
      <label class="text-secondary-950">{{ $t('problem_subject') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.notificationsData.compliment.subject" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>

      <label class="text-secondary-950">{{ $t('problem_description') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <textarea v-model="store.notificationsData.compliment.description" type="text" class="scrollbar-hide outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md"></textarea>
      </div>
      <label class="text-secondary-950">{{ $t('admin_news_created_at') }}</label>
      <div class="flex gap-2 mt-0.5 text-sm">
        <input v-model="store.notificationsData.compliment.created_at" type="text" class="outline-none w-full text-right border-zinc-200 border-1 text-white transition px-3 py-2 bg-inputColor-950 rounded-md">
      </div>

    </form>
  </div>
</template>