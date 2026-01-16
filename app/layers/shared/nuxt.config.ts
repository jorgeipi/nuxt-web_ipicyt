export default defineNuxtConfig({
  extends: [
    './layers/shared',
    './layers/home',
  ],
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true }
})