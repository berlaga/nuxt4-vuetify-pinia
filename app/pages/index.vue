<script setup>
import { useCounterStore } from "~/stores/counter";
const counter = useCounterStore();
</script>

<template>
  <v-container class="pa-6">
    <v-card class="pa-6">
      <h1>Nuxt 4 + Vuetify + Pinia</h1>

      <p>Count: {{ counter.count }}</p>

      <v-btn color="primary" @click="counter.increment"> Increment </v-btn>
    </v-card>
  </v-container>
</template>
