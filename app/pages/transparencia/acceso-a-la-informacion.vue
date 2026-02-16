<script setup lang="ts">
import { unidadTransparencia, comiteTransparencia, obligacionesTransparencia, 
          solicitudes, informeGubernamental, indiceExpedientes, calendarioInstitucional } from '@shared/content/transparencia/acceso-informacion'

</script>

<template>
  <div class="transparencia">
    <h2 class="mb-8">Transparencia: <span class="font-weight-regular">Acceso a la Información</span></h2>

    <section class="d-flex flex-column ga-18 mb-18">
        <unidadTransparencia />
        <comiteTransparencia />
    </section>

    <section class="d-flex flex-column ga-8">
      <obligacionesTransparencia />
      <solicitudes />
      <informeGubernamental />
      <indiceExpedientes />
      <calendarioInstitucional />
   </section>
  </div>
</template>

<style lang="scss" scoped>
.transparencia {
  max-width: 992px;
}
</style>

