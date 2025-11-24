// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Kuma's page",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        // public/vendorに配置したBootstrap CSSを読み込み
        { rel: 'stylesheet', href: '/vendor/bootstrap.css' }
      ],
      script: [
        // Google Analytics (GTM)
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-GJ82SDZEXZ', async: true },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJ82SDZEXZ');
          `
        },
        // Bootstrap Bundle JS (bodyの最後で読み込み)
        { src: '/vendor/bootstrap.bundle.js', body: true }
      ]
    }
  }
})