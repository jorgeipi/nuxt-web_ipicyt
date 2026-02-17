<script setup>

import GCIlogo from "/imgs/research/grupos/GCI-logo.png";

import { GCIIcon, SuccessRingIcon } from "@components/icons";
import { usePersonales } from '@composables/personal/usePersonales';

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorGCIC', cvepuesto: 16, cvepersonal: 21 },
  { key: 'asistenteJefe', cvepuesto: 653 },
  { key: 'asistenteTecnico', cvepuesto: 147 }
]);
</script>

<template>
  <div class="displayCenter container">
  <div class="laboratorio " v-if="!personalLoading">

    <section class="introSeccion">
      <PersonalAcademico v-if="personal.coordinadorGCIC" :personal="{
        ...personal.coordinadorGCIC,
        nombrepuesto: 'Coordinador del Grupo de Ciencia e Ingeniería Computacionales'
      }" />
      
      <div class="introInfo">
        <img :src="GCIlogo" alt="lanbama_name" />

        <div class="mb-7">
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
          <GCIIcon />
          <p class="ml-5 font-weight-bold">Portal del Grupo de Ciencia e Ingeniería Computacionales</p>
        </ButtonPortal>

      </div>
    </section>

    <section>
      <h2 class="mb-5">Servicios del GCIC</h2>
      <SectionOverline>
        <template #icon>
          <SuccessRingIcon class="icon" />
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
          <SuccessRingIcon class="icon" />
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
          <SuccessRingIcon class="icon" />
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

    <section class="laboratorio_contacto">
      <PersonalContacto v-if="personal.asistenteJefe" :personal="personal.asistenteJefe" />
      <PersonalContacto v-if="personal.asistenteTecnico" :personal="personal.asistenteTecnico" />
    </section>
  </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.icon {
  color: var(--color-secondary);
}

.laboratorio {
  display: block;
  padding: 2rem;
  max-width: 790px;

  margin-bottom: 6rem;

  @include m.mobile {
    padding: 0%;
  }

  h3 {
    color: var(--color-black);
    padding: 2rem 0 2rem 0;
  }

  h4 {
    color: var(--color-secondary);
    font-size: 2.2rem;
    line-height: 28px;
    padding: 1.5rem 0 1.5rem 0;
  }

  .contactoItem,
  .text-persona {
    p {
      padding: 0%;
    }
  }

  .contactoItem {
    margin: 0;
  }

  .parrafo {
    // padding: 1.5rem 0 1rem 0;
    // line-height: 24px;
  }

  .servicios {
    border-bottom: 1px solid var(--color-black);
  }

  .introSeccion {
    display: flex;
    margin-bottom: 5rem;

    @include m.tablet {
      flex-direction: column;
    }

    .introInfo {
      padding-left: 3rem;
      max-width: 582px;
      display: grid;

      p {
        padding: 1rem 0 1rem 0;
      }

      img {
        margin-bottom: 3rem;
      }

      .portal {
        text-decoration: underline;
      }

      .btn_portal {
        img {
          margin: 0;
        }
      }

      @include m.mobile {
        padding-left: 0%;
        padding-top: 2rem;

        img {
          max-width: 300px;
        }
      }
    }
  }

  .borderbottom {
    border-bottom: 1px solid var(--color-black);
    padding-bottom: 2rem;
  }

  .laboratorio_contacto {
    margin-top: 4.5rem;

    display: flex;
    flex-direction: column;

    gap: 4.5rem
  }

}
</style>