// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  experimental: {
    renderJsonPayloads: true,
  },
  css: ['@fontsource/rubik/variable.css', '@unocss/reset/tailwind.css'],
  modules: [
    '@nuxt/content',
    '@vueuse/nuxt',
    '@kevinmarrec/nuxt-pwa',
    '@unocss/nuxt',
    '@formkit/nuxt',
  ],
  runtimeConfig: {
    public: {
      NODE_ENV: process.env.NODE_ENV,
    },
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
