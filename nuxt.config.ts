// nuxt.config.ts (raíz del proyecto)
export default defineNuxtConfig({
  extends: [
    './app/layers/home',
    './app/layers/about',
    './app/layers/vinculacion',
  ],
  
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true }
})