<script setup>
import { useAdminStore } from '@/stores/StoreAdmin.js'
const store = useAdminStore();
const open = (index) => {
  store.openForm = store.dashStep
  store.notificationsData = store.notifications[index].data
}
</script>

<template>
  <div class=" h-full w-full bg-white p-2.5 rounded">
    <table class="table-fixed w-full">
      <thead class="border-b-2 border-secondary-100 text-secondary-950 text-sm font-bold">
      <tr>
        <th class="p-2 tableHid">created_at</th>
        <th class="p-2">product name</th>
        <th class="p-2">title</th>
        <th class="p-2 tableHid">user</th>
        <th class="p-2 tableHid">no.</th>
      </tr>
      </thead>
      <tbody class="text-center text-primary-950">
      <tr class="cursor-pointer" @click="open(index)" :class="index % 2 !== 0 ? 'bg-secondary-100' : 'bg-none'" v-for="(notifications, index) in store.notifications" :key="index">
        <td class="py-3 tableHid">{{ notifications.created_at }}</td>
        <td>{{ notifications.data.compliment.description.length > 20 ? notifications.data.compliment.description.slice(0,20) + " ... " : notifications.data.compliment.description }}</td>
        <td class="py-3">{{ notifications.mobile }}</td>
        <td class="py-3 tableHid">{{ notifications.data.type }}</td>
        <td class="py-3 tableHid">{{ index + 1 }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>