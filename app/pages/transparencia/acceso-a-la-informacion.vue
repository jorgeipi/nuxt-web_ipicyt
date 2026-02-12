<script setup lang="ts">
import { unidadTransparencia, comiteTransparencia } from '@shared/content/transparencia/acceso-informacion'
import { AccordionRight } from '@components/accordion';

</script>

<template>
  <div class="transparencia">
    <h2 class="mb-8">Transparencia: <span style="font-weight: 400;">Acceso a la Información</span></h2>

    <section class="d-flex flex-column ga-18">
        <unidadTransparencia />
        <comiteTransparencia />
    </section>

    <section class="">
      <AccordionRight id="ejemplo">
        <template #tilte>
          <h2>Ejemplo</h2>
        </template>
        <template #content>
          <p>Hola</p>
        </template>
      </AccordionRight>
    </section>
    <!-- <UnidadTransparencia />

    <ComiteTransparencia />

    <OblicacionesTransparencia />

    <Solicitudes />

    <Informe />

    <Expedientes />

    <Calendario /> -->
  </div>
</template>

<style lang="scss" scoped>
.transparencia {
  max-width: 992px;
}
</style>

