<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  error: Object
});

const router = useRouter();

const is404 = computed(() => props.error?.statusCode === 404);

const funnyMessages = [
  "Oops! This page went on vacation and forgot to leave a forwarding address.",
  "404: Page not found. But hey, you found this awesome error page!",
  "This page is playing hide and seek... and winning.",
  "Houston, we have a problem. This page is lost in cyberspace.",
  "The page you're looking for is in another castle. 🏰",
  "Error 404: Page not found. Our bad. Want to go home instead?",
  "Well, this is awkward. The page took a wrong turn at Albuquerque.",
  "This page is currently on a coffee break. Permanently."
];

const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];

const goHome = () => {
  router.push('/');
};
</script>

<template>
  <v-container class="fill-height d-flex align-center justify-center">
    <v-card 
      class="pa-8 text-center error-card" 
      max-width="600"
      elevation="8"
    >
      <template v-if="is404">
        <v-img
          src="/404-detective.png"
          alt="404 Error - Page Not Found"
          max-width="400"
          class="mx-auto mb-6"
        />
        
        <h1 class="text-h2 font-weight-bold mb-4 error-title">
          404
        </h1>
        
        <h2 class="text-h5 mb-4 text-grey-darken-1">
          Page Not Found
        </h2>
        
        <p class="text-body-1 mb-6 funny-message">
          {{ randomMessage }}
        </p>
        
        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-home"
          @click="goHome"
          class="home-button"
        >
          Take Me Home
        </v-btn>
      </template>
      
      <template v-else>
        <v-icon 
          icon="mdi-alert-circle" 
          size="100" 
          color="error"
          class="mb-4"
        />
        
        <h1 class="text-h3 font-weight-bold mb-4">
          Oops! Something went wrong
        </h1>
        
        <p class="text-body-1 mb-6 text-grey-darken-1">
          {{ error?.message || 'An unexpected error occurred' }}
        </p>
        
        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-home"
          @click="goHome"
        >
          Go Home
        </v-btn>
      </template>
    </v-card>
  </v-container>
</template>

<style scoped>
.error-card {
  border-radius: 16px !important;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.error-title {
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 6rem !important;
}

.funny-message {
  font-style: italic;
  color: #424242;
  line-height: 1.6;
}

.home-button {
  transition: transform 0.2s ease;
}

.home-button:hover {
  transform: scale(1.05);
}

.fill-height {
  min-height: 100vh;
}
</style>
