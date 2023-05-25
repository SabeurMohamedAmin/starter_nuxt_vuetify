// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@nuxt/devtools"],
  devtools: {
    // Enable devtools (default: true)
    enabled: true
  },
  css: [
    '@mdi/font/css/materialdesignicons.min.css',
    ],
  build: {
    transpile: ['vuetify'],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
