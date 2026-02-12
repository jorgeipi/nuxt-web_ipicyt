import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/leaflet', 'nuxt-aos', '@pinia/nuxt'],
  
  googleFonts: {
    families: {
      'Noto Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preconnect: true,
    prefetch: true,
    preload: true
  },

  css: [
    fileURLToPath(new URL('./app/styles/style.scss', import.meta.url))
  ],
  
  // Alias
  alias: {
    '@': fileURLToPath(new URL('./app', import.meta.url)),
    '@data': fileURLToPath(new URL('./app/shared/data', import.meta.url)),
    '@shared': fileURLToPath(new URL('./app/shared', import.meta.url)),
    '@stores': fileURLToPath(new URL('./app/shared/stores', import.meta.url)),
    '@composables': fileURLToPath(new URL('./app/shared/composables', import.meta.url)),
    '@components': fileURLToPath(new URL('./app/shared/components', import.meta.url)),
  },
  
  hooks: {
    'pages:extend'(pages) {
      const homePages = pages.filter(page => page.path.startsWith('/home'))
      homePages.forEach(page => {
        page.path = page.path.replace('/home', '') || '/'
      })
    }
  },
  
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true }
})