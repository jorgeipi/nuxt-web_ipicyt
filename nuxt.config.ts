// nuxt.config.ts
export default defineNuxtConfig({
  extends: [
    './layers/Home',
  ],
  
  compatibilityDate: '2025-01-15',
  devtools: { enabled: true },
  
  imports: {
    autoImport: false
  },
  
  components: false
})