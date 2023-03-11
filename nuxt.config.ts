// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@vueuse/nuxt",
    "@kevinmarrec/nuxt-pwa",
    "@unocss/nuxt",
    "magic-regexp/nuxt",
    "@formkit/nuxt"
  ],
  css: ["~/assets/css/main.css", "@fontsource/rubik/variable.css", "@unocss/reset/tailwind.css"],
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
