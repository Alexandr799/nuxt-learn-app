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
    app: {
    pageTransition: false,
    head: {
      title: 'VoteApp',
      titleTemplate: '%s | VoteApp',
      htmlAttrs: {
        lang: 'ru'
      },
      link: [
        { rel: 'icon', 'type': 'image/png', href: '/favicon-32x32.png' },
        { rel: "apple-touch-icon", sizes: "48x48", href: "/favicon-48x48.png" },
        { rel: "apple-touch-icon", sizes: "72x72", href: "/favicon-72x72.png" },
        { rel: "apple-touch-icon", sizes: "96x96", href: "/favicon-96x96.png" },
        { rel: "apple-touch-icon", sizes: "256x256", href: "/favicon-256x256.png" },
        { rel: "apple-touch-icon", sizes: "384x384", href: "/favicon-384x384.png" },
        { rel: "apple-touch-icon", sizes: "512x512", href: "/favicon-512x512.png" },
        { rel: "manifest", href: "/manifest.webmanifest", crossorigin: "anonymous" },
      ]
    },
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