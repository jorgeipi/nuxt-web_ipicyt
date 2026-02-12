<script setup>
import { funciones } from '@data/servicios-comunidad/comiteFunciones';
import { usePersonales } from '@composables/personal/usePersonales';
import comiteIntro from "/imgs/servicios-comunidad/comite-de-sostenibilidad/comiteIntro.png";

const { personal, personalLoading } = usePersonales([
  { key: 'coordinador', cvepersonal: 334}
]);
</script>

<template>
  <div class="comite">
    <div class="comite__intro mb-7 d-flex flex-column ga-7">
      <div>
        <img class="comite__logo" :src="comiteIntro" alt="" />
      </div>

      <section>
        <p>
          Ante la situación de emergencia climática, en el 2015 la Asamblea
          General de la Organización de las Naciones Unidas adoptó la Agenda 2030
          para el Desarrollo Sostenible, un plan de acción a favor de las
          personas, el planeta y la prosperidad. <strong>La Agenda 2030 plantea 17
          Objetivos de Desarrollo Sostenible (ODS) de carácter integrado e
          indivisible que abarcan las esferas económica, social y ambiental.</strong>
        </p>
        <br>
        <p>
          <strong>El Comité de Sostenibilidad del IPICYT se establece en el año 2022.</strong> Está
          conformado por estudiantes, personal académico y administrativo, y tiene
          por objetivo integrar la sostenibilidad en todos los aspectos de la
          institución: la gestión del campus, la educación, la divulgación y la
          investigación. Este objetivo está alineado con nuestra visión
          institucional y lo lograremos participando en comunidad, realizando
          actividades transversales en sintonía con los ODS.
        </p>
      </section>
    </div>

    <div class="comite__funciones">
        <h2 class="mb-7">Funciones</h2>
        <SectionOverline v-for="(item,index) in funciones" :key="index">
            <template #content>
              <h2 class="comite__funciones-title mb-5">{{ item.title }}</h2>
              <p>{{ item.p }}</p>
            </template>
        </SectionOverline>
    </div>
    <PersonalContacto v-if="!personalLoading && personal.coordinador" :personal="personal.coordinador"  style="margin-top: 5rem;"/>
  </div>
</template>

<style lang="scss" scoped>
.comite{
  max-width: 609px;
  .comite__logo{
        max-width: 100%;
        min-height: 107px;
        height: auto;
        padding-bottom: 3rem;
        display: block;
        object-fit: contain;
  }
}

.comite__funciones-title{
  color: var(--color-secondary);
}
</style>
