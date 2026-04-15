// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        { name: 'theme-color', content: '#3D5AFE' },
      ],
    },
  },
  modules: ['@nuxtjs/sitemap', '@nuxt/a11y'],
  site: {
    url: 'https://bluelynk.dev',
    name: 'Blue Lynk',
    defaultLocale: 'es',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/components.css',
    '@/assets/css/responsive.css'
  ],
})