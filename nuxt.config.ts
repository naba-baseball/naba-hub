// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@vueuse/nuxt", "@kevinmarrec/nuxt-pwa"],
  css: [
    "~/assets/css/main.css",
    "@ag-grid-community/styles/ag-grid.css",
    "@ag-grid-community/styles/ag-theme-alpine.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pwa:{
    manifest:{
      name: "NABA Hub"
    },
    meta: {
      name: 'NABA Hub'
    }
  }
});
