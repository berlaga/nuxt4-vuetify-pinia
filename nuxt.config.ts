import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ["vuetify/styles", "@mdi/font/css/materialdesignicons.css"],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
  },
});
