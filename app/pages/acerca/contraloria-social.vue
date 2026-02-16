<script setup>
import { apoyos, documentos, material, medios } from '@shared/content/acerca/contraloria'
</script>

<template>
  <div class="contraloria-social">
    <div class="contraloria-social__acordeones d-flex flex-column ga-7 pb-7">
      <AccordionRight id="documentos">
        <template #title>
          <h3>Documentos Normativos</h3>
        </template>
        <template #content>
          <documentos />
        </template>
      </AccordionRight>

      <AccordionRight id="apoyos">
        <template #title>
          <h3>Apoyos Vigilados</h3>
        </template>
        <template #content>
          <apoyos />
        </template>
      </AccordionRight>


      <AccordionRight id="material">
        <template #title>
          <h3>Material de Difusión</h3>
        </template>
        <template #content>
          <material />
        </template>
      </AccordionRight>


      <AccordionRight id="medios">
        <template #title>
          <h3>Medios para quejas y denuncias de la Contraloría Social</h3>
        </template>
        <template #content>
          <medios />
        </template>
      </AccordionRight>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contraloria-social{
  max-width: 810px;

  &__acordeones{
    border-bottom:1px solid var( --color-gray-light);
  }
}
</style>