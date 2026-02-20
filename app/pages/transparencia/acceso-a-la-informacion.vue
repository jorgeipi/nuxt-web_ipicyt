<script setup lang="ts">
import { unidadTransparencia, comiteTransparencia, obligacionesTransparencia, 
          solicitudes, informeGubernamental, indiceExpedientes, calendarioInstitucional } from '@shared/content/transparencia/acceso-informacion'

const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
  showMenu: true,
  menuItems: [
    { label: 'Protección de Datos personales', to: '/proteccion-de-datos-personales/bienvenida', order: 2 }
  ],
})

definePageMeta({
  layout: false,
}) 
</script>

<template>
  <NuxtLayout name="main">
    <template #banner>
        <LayoutBannerBase image="/imgs/transparencia/acceso-informacion/acceso-informacion-header.png">
          <h1 class="h1-banner">Transparencia: <span class="font-weight-regular">Acceso a la información</span></h1>
        </LayoutBannerBase>
    </template>

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
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.transparencia {
  max-width: 992px;
}
</style>

