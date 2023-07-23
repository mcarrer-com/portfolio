// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // ssr: false,

  modules: [
    '@nuxthq/ui',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-svgo'
  ],

  css: [
    "@/assets/styles/tailwind.css",
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
    provider: 'netlify',

    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
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
