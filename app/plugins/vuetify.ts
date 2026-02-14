import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { aliases, mdi } from "vuetify/iconsets/mdi";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,

    icons: { defaultSet: "mdi", aliases, sets: { mdi } },

    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          dark: false,
          colors: {
            primary: "#1976D2",
            secondary: "#424242",
            background: "#FFFFFF",
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: "#90CAF9",
            secondary: "#EEEEEE",
            background: "#121212",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
