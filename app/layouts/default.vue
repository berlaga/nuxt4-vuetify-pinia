<script setup>
import { ref } from "vue";

const drawer = ref(true);
</script>

<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>My Nuxt 4 App</v-toolbar-title>

      <v-spacer />

      <!-- Top Menu -->
      <v-btn variant="text" to="/">Home</v-btn>
      <v-btn variant="text">About</v-btn>
      <v-btn variant="text">Contact</v-btn>
    </v-app-bar>

    <!-- Left Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list density="compact">
        <v-list-item to="/" title="Home" prepend-icon="mdi-home" />
        <v-list-item title="Dashboard" prepend-icon="mdi-view-dashboard" />
        <v-list-item title="Settings" prepend-icon="mdi-cog" />
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container class="py-6">
        <slot />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="primary" dark>
      <v-col class="text-center">
        © {{ new Date().getFullYear() }} — My Nuxt 4 App
      </v-col>
    </v-footer>
  </v-app>
</template>
