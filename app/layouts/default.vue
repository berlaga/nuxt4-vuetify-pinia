<script setup>
import { ref, watch } from "vue";
import { useTheme } from "vuetify";
import { useThemeStore } from "~/stores/theme";
import { useAuthStore } from "~/stores/auth";

const drawer = ref(false);
const themeStore = useThemeStore();
const auth = useAuthStore();

// Vuetify theme controller
const theme = useTheme();

// Sync Pinia → Vuetify
watch(
  () => themeStore.dark,
  (isDark) => {
    theme.change(isDark ? "dark" : "light");
  },
  { immediate: true },
);

const signOut = () => {
  auth.logout();
  navigateTo("/login");
};
</script>

<template>
  <v-app>
    <!-- Top App Bar -->
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>My Nuxt 4 App</v-toolbar-title>
      <img src="/images/logo-5.png" alt="Logo" width="120" />
      <v-spacer />

      <!-- Theme Toggle -->
      <v-btn icon variant="text" @click="themeStore.toggle()">
        <v-icon>
          {{ themeStore.dark ? "mdi-weather-sunny" : "mdi-weather-night" }}
        </v-icon>
      </v-btn>

      <!-- User Menu -->
      <v-menu>
        <template #activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item title="Profile" prepend-icon="mdi-account" />
          <v-list-item title="Settings" prepend-icon="mdi-cog" />

          <v-divider />

          <v-list-item
            title="Sign Out"
            prepend-icon="mdi-logout"
            @click="signOut"
          />
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Left Drawer -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list density="compact">
        <v-list-item to="/" title="Home" prepend-icon="mdi-home" />
        <v-list-item
          to="/users"
          title="Users"
          prepend-icon="mdi-account-group"
        />
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
