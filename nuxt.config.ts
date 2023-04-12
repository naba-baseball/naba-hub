// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  experimental:{
    renderJsonPayloads: true
  },
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@kevinmarrec/nuxt-pwa',
    '@unocss/nuxt',
    'magic-regexp/nuxt',
    '@formkit/nuxt',
  ],
  css: ['~/assets/css/main.css', '@fontsource/rubik/variable.css', '@unocss/reset/tailwind.css'],
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
    MONGO_URL: process.env.MONGO_URL,
  },
  build: {
    transpile: ['@ag-grid-community/vue3'],
  },
  pwa: {
    manifest: {
      name: 'NABA Hub',
    },
    meta: {
      name: 'NABA Hub',
    },
  },
})
