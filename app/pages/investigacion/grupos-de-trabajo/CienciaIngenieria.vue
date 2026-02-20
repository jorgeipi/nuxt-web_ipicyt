<script setup>

import GCIlogo from "/imgs/research/grupos/GCI/GCI-logo.png";

import { GCIIcon, SuccessRingIcon } from "@components/icons";
import { usePersonales } from '@composables/personal/usePersonales';

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorGCIC', cvepuesto: 16, cvepersonal: 21 },
  { key: 'asistenteJefe', cvepuesto: 653 },
  { key: 'asistenteTecnico', cvepuesto: 147 }
]);


const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
})

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout name="main">
      <template #banner>
        <LayoutBannerBase
          image="/imgs/research/grupos/GCI/GCI-banner.png"
          height="200px"
          variant="centered"
        >
          <h1 class="h1-banner">Grupo de Ciencia e Ingeniería Computacionales (GCIC)</h1>
        </LayoutBannerBase>
      </template>

      <div class="research-group" v-if="!personalLoading">

      <section class="research-group__intro mb-12">
        <PersonalAcademico v-if="personal.coordinadorGCIC" :personal="{
          ...personal.coordinadorGCIC,
          nombrepuesto: 'Coordinador del Grupo de Ciencia e Ingeniería Computacionales'
        }" />
        
        <div class="research-group__intro--info">
          <img class="research-group__logo mb-8" :src="GCIlogo" alt="GCI_name" />

          <div class="mb-8">
            <p>
              El <b>Grupo de Ciencias e Ingeniería Computacionales</b> tiene como
              principal misión realizar investigación en las diversas áreas de la
              ciencia y sus aplicaciones tecnológicas, y de innovación haciendo uso
              de métodos computacionales de frontera para la solución de problemas
              diversos de impacto social, económico y humanístico.
            </p>
            <p>
              Ofrecer un posgrado multidisciplinario, para formar recursos humanos
              de alta calidad en el área de aplicaciones de cómputo de alto
              rendimiento, manejo de grandes cantidades de datos y métodos de
              modernos de aprendizaje por medio de supercomputadoras. Así como la
              formación de recursos humanos incluyendo un alto compromiso social y
              riguroso comportamiento ético.
            </p>
            <p>
              Su visión es ser un referente nacional e internacional en solución de
              problemas complejos en las diversas áreas del conocimiento y sus
              aplicaciones, así como en la formación de recursos humanos en áreas
              estratégicas y prioritarias en el país para los sectores privado,
              gubernamental y académico. Fortalecer la vinculación con esos sectores
              mediante la oferta de capacitación y actualización continua
            </p>
          </div>

          <ButtonPortal :href="'https://cic.mhc.ipicyt.edu.mx'">
            <GCIIcon class="flex-shrink-0"/>
            <p class="font-weight-bold">Portal del Grupo de Ciencia e Ingeniería Computacionales</p>
          </ButtonPortal>

        </div>
      </section>

      <section class="research-group__acordiones">
        <h2 class="mb-5">Servicios del GCIC</h2>
        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon color-secondary" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2 class="color-secondary">Diplomado en Inteligencia Artificial Aplicada</h2>
              <p>
                El objetivo de este diplomado es, facilitar a los profesionales y
                estudiantes participantes la adquisición los conceptos teóricos y
                prácticos para poner en práctica algoritmos básicos de la IA, en
                particular, del aprendizaje de máquina y aprendizaje profundo. Con ello,
                se pretende que los estudiantes adquieran los conocimientos que les
                permitan elaborar desarrollos tecnológicos, proyectos empresariales o
                investigaciones académicas con herramientas básicas de IA a través de
                técnicas del uso de sistemas de computación de alto rendimiento.
              </p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline :imgicon="succes_icon">
          <template #icon>
            <SuccessRingIcon class="icon color-secondary" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2 class="color-secondary">
                Diplomado en Inteligencia Artificial para la Informática de la Salud
              </h2>
              <p>
                El objetivo de este diplomado es, proporcionar a los estudiantes
                participantes conocimientos teóricos y prácticos de la IA que les
                permitan elaborar proyectos que resuelvan problemas específicos en su
                práctica profesional o temas relacionados con investigaciones
                científicas en Ciencias de la Salud.
              </p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline :imgicon="succes_icon" class="borderbottom">
          <template #icon>
            <SuccessRingIcon class="icon color-secondary" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2 class="color-secondary">Escuelas Nacionales de Supercómputo (ENS)</h2>
              <p>
                En las ENS se ofrecen e imparten programas académicos en las modalidades
                presencial y virtual, para contribuir a la formación y especialización
                de recursos humanos de alta especialidad en México, orientados a su
                aplicación en desarrollo en el uso, operación, gestión y administración
                de herramientas tecnológicas, con énfasis en técnicas de cómputo de alto
                rendimiento aplicadas a la solución de problemas sociales de alto
                impacto.
              </p>
              <p>
                Los programas académicos construyen andamiajes para la colaboración y la
                convergencia de las comunidades académica y tecnológica que permiten el
                uso eficaz y eficiente de los recursos públicos del CNS. En particular,
                las Escuelas Nacionales de Supercómputo abordarán la solución de
                problemas relacionados con la salud humana (Biomedicina Molecular
                Informática), Análisis de Series de Tiempo de Señales Biomédicas,
                Soluciones para la Remoción de Contaminantes del Agua, y Métodos pare el
                Seguimiento y Monitoreo de Fenómenos Naturales Asociados al Cambio
                Climático.
              </p>
            </div>
          </template>
        </SectionOverline>
      </section>

      <section class="research-group__contacto mt-12 d-flex flex-wrap ga-5">
        <PersonalContacto v-if="personal.asistenteJefe" :personal="personal.asistenteJefe" />
        <PersonalContacto v-if="personal.asistenteTecnico" :personal="personal.asistenteTecnico" />
      </section>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.research-group {
    max-width: 790px;
    &__intro {
        display: flex;
        @include m.tablet {
            flex-direction: column;
        }
        &--info {
            margin-left: 3.2rem;
            @include m.tablet {
                margin-left: 0rem;
            }
        }
    }

    &__logo {
        max-width: 100%;
        min-height: 110px;
        height: auto;
        display: block;
        object-fit: contain;
    }
}
</style>