// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-gtag'],
  gtag: {
    id: 'G-GJ82SDZEXZ'
  },
  app: {
    head: {
      title: "Kuma's page",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'stylesheet', href: '/vendor/bootstrap.css' }
      ],
      script: [
        // GAの記述はモジュールがやってくれるのでここから削除！
        { src: '/vendor/bootstrap.bundle.js', body: true }
      ]
    }
  }
})