// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  imports: {
    autoImport: false,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt'
  ],
  runtimeConfig: {
    public: {
      API_URL: 'http://localhost:8080'
    }
  },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './app/assets/icons'
      }
    ]
  }
})