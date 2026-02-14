<script setup>
definePageMeta({
  layout: "login",
});

import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";

const email = ref("");
const password = ref("");
const loading = ref(false);

const auth = useAuthStore();

const login = () => {
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    auth.login();
    navigateTo("/");
  }, 1200);
};
</script>

<template>
  <v-card width="420" class="pa-6">
    <h2 class="text-h5 mb-4 text-center">Welcome Back</h2>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      prepend-inner-icon="mdi-email"
      variant="outlined"
      class="mb-3"
    />

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      prepend-inner-icon="mdi-lock"
      variant="outlined"
      class="mb-6"
    />

    <v-btn block color="primary" :loading="loading" @click="login">
      Login
    </v-btn>

    <div class="text-center mt-4">
      <v-btn variant="text" size="small">Forgot password?</v-btn>
    </div>
  </v-card>
</template>
