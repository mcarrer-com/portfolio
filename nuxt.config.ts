// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-svgo'
  ],

  css: [
    "@/assets/styles/tailwind.css",
    "@/assets/styles/light.scss",
    "@/assets/styles/dark.scss"
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    }
  },

  image: {
    provider: 'netlify',
    format: ['webp']
  },

  eslint: {
    lintOnStart: false,
    exclude: ['**/node_modules/**', 'dist']
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})
