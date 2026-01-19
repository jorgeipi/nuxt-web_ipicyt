<!-- layers/home/pages/index.vue -->
<script setup lang="ts">
// import { definePageMeta } from '#imports'
// import MapaSitio from '../components/mapasitio/MapaSitio.vue'

definePageMeta({
  title: 'Instituto Potosino de Investigación Científica y Tecnológica A.C.'
})
</script>

<template>
  <div>
    <section class="hero">
      <h1>Bienvenido a IPICYT</h1>
      <p>Instituto Potosino de Investigación Científica y Tecnológica</p>
    </section>

    <MapaSitio />
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 6rem 0;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;

  h1 {
    font-size: 4rem;
    margin: 0 0 1rem 0;
  }

  p {
    font-size: 1.6rem;
    margin: 0;
    opacity: 0.9;
  }
}
</style>