<script setup>
import AccordionRight from '@/components/accordion/Right.vue'
import { coordinacion, departamentos, organo, tramites } from '@shared/content/acerca/secretaria'

import { PersonalTipo } from '@shared/constants/personal/personal-tipo';
// import { PersonalAcademico, PersonalContacto } from '@/modules/personal/components'
import { usePersonales } from '@composables/personal/usePersonales';

const { personal, personalLoading } = usePersonales([
  { key: 'secretariaAcademica', cvepuesto: 616, tipo: PersonalTipo.RESUMEN },
  { key: 'asistente', cvepuesto: 26 }
]);

// name
// definePageMeta({
//   name: 'secretaria-academica', // Define a custom name
// })
</script>

<template>
  <div class="secretaria" v-if="!personalLoading">
    <div class="secretaria__intro mb-12">
      <PersonalAcademico v-if="personal.secretariaAcademica" :personal="{
        ...personal.secretariaAcademica,
        resumen: 'Bióloga y Doctora en Ciencias Biomédicas por la Universidad Nacional Autónoma de México.'
      }" />

      <div class="funciones">
        <h2 class="mb-5">Funciones de la Secretaría Académica</h2>
        <p>
          Es la entidad a través de la cual la Dirección General coordina las
          actividades académicas de las cinco Divisiones de investigación, del
          Posgrado Institucional y de los Órganos Colegiados institucionales
          internos y externos. La Secretaría Académica coordina también los
          Departamentos de Posgrado, de Biblioteca y el área de Seguimiento
          Académico. Asimismo, coordina los ejercicios de Planeación Estratégica
          institucionales.
        </p>
      </div>
    </div>
    <div class="secretaria__contenido mb-12 pb-8">
      <component v-for="{ id, title, component } in [
        { id: 'organo', title: 'Órganos Colegiados', component: organo },
        { id: 'coordinacion', title: 'Coordinación de la Agenda Académica y del Posgrado Institucional', component: coordinacion },
        { id: 'departamentos', title: 'Departamentos y Áreas del Posgrado Institucional', component: departamentos },
        { id: 'tramites', title: 'Trámites académicos y Convocatorias de Becas', component: tramites }
      ]" :key="id" :is="AccordionRight" :id="id">
        <template #title>
          <h2>{{ title }}</h2>
        </template>
        <template #content>
          <component :is="component" />
        </template>
      </component>
    </div>


    <PersonalContacto v-if="!personalLoading && personal.asistente" :personal="personal.asistente" />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base/mixins' as m;

.secretaria {
  max-width: 810px;

  .secretaria__intro {
    display: flex;
    column-gap: 2rem;

    @include m.tablet {
      flex-direction: column;
    }
  }

  .secretaria__contenido {
    display: flex;
    flex-direction: column;
    gap: 3rem;

    border-bottom: 1px solid var(--color-gray-light);
  }
}
</style>
