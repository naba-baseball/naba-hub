import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@vueuse/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "@anu-vue/nuxt",
    "@unocss/nuxt",
  ],
  css: [
    "@anu-vue/preset-theme-default/dist/style.css",
    "@fontsource/rubik/variable.css",
    "~/assets/css/main.css",
  ],
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
  },
  build: {
    transpile: ["@ag-grid-community/vue3"],
  },
  pwa: {
    manifest: {
      name: "NABA Hub",
    },
    meta: {
      name: "NABA Hub",
    },
  },
});
