<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
const store = useAdminStore();

const open = (index) => {
  store.openForm = store.dashStep
  store.complaintsData = store.allComplaints[index]
}
</script>

<template>
  <div class=" h-full w-full bg-white p-2.5 rounded">
    <table class="table-fixed w-full">
      <thead class="border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold">
      <tr>
        <th class="p-2">{{ $t('admin_news_created_at') }}</th>
        <th class="p-2 tableHid">{{ $t('problem_description') }}</th>
        <th class="p-2">{{ $t('problem_mobile') }}</th>
        <th class="p-2">{{ $t('problem_name') }}</th>
        <th class="p-2 tableHid">{{ $t('admin_news_no') }}</th>
      </tr>
      </thead>
      <tbody class="text-center text-primary-950">
      <tr class="cursor-pointer" @click="open(index)" :class="index % 2 !== 0 ? 'bg-secondary-100' : 'bg-none'" v-for="(complaint, index) in store.allComplaints" :key="index">
        <td>{{ complaint.created_at }}</td>
        <td class="tableHid">{{ complaint.description.length > 20 ? complaint.description.slice(0,20) + " ... " : complaint.description }}</td>
        <td class="py-3">{{ complaint.mobile }}</td>
        <td>{{ complaint.name }}</td>
        <td class="tableHid">{{ index + 1 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>