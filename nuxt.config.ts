import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-06-14",

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
