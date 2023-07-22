// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,
  target: 'static',

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-svgo'
  ],

  css: [
    "@/assets/styles/main.scss"
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    }
  },

  image: {
    provider: 'netlify'
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
