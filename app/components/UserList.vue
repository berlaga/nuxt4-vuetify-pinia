<script setup lang="ts">
import { computed } from "vue";

const { data, pending, error } = await useFetch("/api/users");

const users = computed(() => data.value ?? []);

const columns = [
  { title: "First Name", key: "firstName" },
  { title: "Last Name", key: "lastName" },
  { title: "Age", key: "age" },
  { title: "Email", key: "email" },
];
</script>

<template>
  <div>
    <div v-if="pending">Loading users...</div>
    <div v-else-if="error">Error loading users</div>
    <VDataTable
      v-else
      :items="users"
      :columns="columns"
      item-key="email"
      class="ma-2"
    >
      <template #item.firstName="{ item }">{{ item.firstName }}</template>
      <template #item.lastName="{ item }">{{ item.lastName }}</template>
      <template #item.age="{ item }">{{ item.age }}</template>
      <template #item.email="{ item }">{{ item.email }}</template>
    </VDataTable>
  </div>
</template>
