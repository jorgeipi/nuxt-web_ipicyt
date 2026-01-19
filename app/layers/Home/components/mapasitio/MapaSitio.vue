<!-- layers/home/components/mapasitio/MapaSitio.vue -->
<script setup lang="ts">
// ✅ Ya no necesitas estos imports:
// import { useMapaSitio } from '../../composables/useMapaSitio'  ← Auto-importado
// import CardMap from './CardMap.vue'  ← Auto-importado

const { items } = useMapaSitio()
</script>

<template>
  <div class="mapasitio container">
    <div class="box-enlaces">
      <CardMap 
        v-for="(link, index) in items" 
        :key="index" 
        :link="link" 
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mapasitio {
  padding: 4rem 0;

  .box-enlaces {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    gap: 2rem;
    justify-items: center;
  }
}
</style>