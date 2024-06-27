// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-svgo'
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ],
    }
  },

  css: [
    "@/assets/css/tailwind.css",
    "@/assets/scss/light.scss",
    "@/assets/scss/dark.scss"
  ],

  image: {
    provider: 'netlify'
  }
})
