import { defineNuxtConfig } from 'nuxt/config'

// app/layers/Home/nuxt.config.ts
export default defineNuxtConfig({
  components: [
    { path: 'components', pathPrefix: false },
  ]
})
