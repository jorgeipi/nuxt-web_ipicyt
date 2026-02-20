<script setup lang="ts">
import { IconMessageFillBlue } from '@components/icons'
import { lineamientos, personasIntegrantes, personasConsejeras, codigo, conflicto, prevencion, informes, micrositio } from '@shared/content/acerca/comiteEtica';

const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
  showMenu: true,
})

definePageMeta({
  layout: false,
}) 
</script>

<template>
  <NuxtLayout name="main">
    <template #banner>
        <LayoutBannerBase image="/imgs/about/comite-etica/comite-etica-header.png">
            <h1 class="h1-banner">Comité de Ética</h1>
        </LayoutBannerBase>
    </template>

    <div class="comite-etica ">

      <div class="comite-etica__acordeones d-flex flex-column ga-7 pb-7">
        <AccordionRight id="lineamientos">
          <template #title>
            <h3>Lineamientos de Ética</h3>
          </template>
          <template #content>
            <lineamientos />
          </template>
        </AccordionRight>

        <AccordionRight id="personas-integrantes">
          <template #title>
            <h3>Personas integrantes del Comité de Ética del IPICYT</h3>
          </template>
          <template #content>
            <personasIntegrantes />
          </template>
        </AccordionRight>

        <AccordionRight id="personas-consejeras">
          <template #title>
            <h3>Personas Consejeras para casos de Hostigamiento sexual y Acoso Sexual en el IPICYT</h3>
          </template>
          <template #content>
            <personasConsejeras />
          </template>
        </AccordionRight>

        <AccordionRight id="codigo">
          <template #title>
            <h3>Código de Ética y Código de Conducta</h3>
          </template>
          <template #content>
            <codigo />
          </template>
        </AccordionRight>

        <AccordionRight id="conflicto">
          <template #title>
            <h3>Conflicto de interés</h3>
          </template>
          <template #content>
            <conflicto />
          </template>
        </AccordionRight>

        <AccordionRight id="prevencion">
          <template #title>
            <h3>Prevención, atención y sanción HSyAS</h3>
          </template>
          <template #content>
            <prevencion />
          </template>
        </AccordionRight>

        <AccordionRight id="informes">
          <template #title>
            <h3>Informes CE-IPICYT</h3>
          </template>
          <template #content>
            <informes />
          </template>
        </AccordionRight>

        <AccordionRight id="micrositio">
          <template #title>
            <h3>Micrositio de Ética Pública</h3>
          </template>
          <template #content>
            <micrositio />
          </template>
        </AccordionRight>
      </div>

      <div class="comite-etica__denuncias mt-12">
        <h2 class="mb-5">Denuncias</h2>
        <div class="comite-etica__correo_contactos d-flex flex-row">
          <!-- <img src="/imgs/icons/icon_correo.png" alt=""> -->
          <IconMessageFillBlue class="mr-5"/>
          <div class="d-flex flex-row">
            <p>
            <a class="comite-etica__link" href="mailto:buzon@ipicyt.edu.mx">buzon@ipicyt.edu.mx </a> y <a class="comite-etica__link" href="mailto:etica@ipicyt.edu.mx"> etica@ipicyt.edu.mx</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.comite-etica{
  max-width: 810px;

  .comite-etica__acordeones{
    border-bottom:1px solid var( --color-gray-light);
  }

  .comite-etica__link{
    color: var(--color-secondary);
    &:hover{
      color: var(--color-black);
      text-decoration: none;
      font-weight: 400;
    }
  }
}
</style>