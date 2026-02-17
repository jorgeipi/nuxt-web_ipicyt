<script setup>
import { usePersonales } from '@composables/personal/usePersonales';
import { SuccessRingIcon, LINANIcon } from "@shared/components/icons";
import linanlogo from "/imgs/research/laboratorios-nacionales/LINAN-logo.png";

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorLINAN', cvepuesto: 602},
]);
</script>

<template>
  <div class="displayCenter container">
    <div class="laboratorio" v-if="!personalLoading">

      <section class="introSeccion">
        <PersonalAcademico v-if="personal.coordinadorLINAN" :personal="personal.coordinadorLINAN" />

        <div class="introInfo">
          <img :src="linanlogo" alt="linan_logo"/>

          <div class="mb-7">
            <p class="parrafo">
              El Laboratorio Nacional de Investigaciones en Nanociencias y
              Nanotecnología es un laboratorio interinstitucional que ofrece
              servicios de alta calidad en análisis y caracterización de materiales
              para el desarrollo de la nanociencia y la nanotecnología.
              <strong
                >Cuenta con infraestructura altamente especializada que permite el
                estudio, descripción y análisis de múltiples materiales en la escala
                micrométrica y nanométrica.</strong>
              Los servicios de caracterización que otorga el LINAN son reconocidos a
              nivel nacional e internacional por su confiabilidad y están
              respaldados por el personal especializado a cargo.
            </p>
            <br/>
            <p class="parrafo">
              El LINAN pertenece a los Laboratorios Nacionales de la Secretaría de
              Ciencia, Humanidades, Tecnología e Innovación
              <strong>(Secihti)</strong> por lo que busca incidir en la
              generación de capacidades científicas, tecnológicas y de innovación a
              nivel nacional.
            </p>
          </div>

          <ButtonPortal :url="'https://linan.ipicyt.edu.mx/'">
            <LINANIcon  />
            <p class="ml-5 font-weight-bold">Visita el portal del LINAN</p>
          </ButtonPortal>
        </div>
      </section>

      <section>
        <h2 class="mb-5">Servicios del LINAN</h2>
        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2>Microscopia Electrónica de Transmisión</h2>
              <p class="parrafo">Es una técnica de análisis que permite caracterizar materiales sólidos ultradelgados, espesor menor a 100nm, proporcionando información a escala nanométrica. Es posible obtener detalles estructurales y morfológicos a través de micrografías de alta resolución; análisis composicional y químico empleando las espectroscopías EDS/EELS acopladas al equipo; y caracterización cristalográfica mediante difractogramas de electrones SAED.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2>Microscopia Electrónica de Barrido</h2>
              <p class="parrafo">Es una técnica de caracterización superficial no destructiva que proporciona información morfológica y de composición química elemental de la superficie de los materiales. Al incidir un haz de electrones sobre la muestra, interactúa con ella y se producen diversos efectos que serán traducidos en micrografías con información topográfica de los materiales.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2>Difracción de Rayos-X</h2>
              <p class="parrafo">Caracterización de materiales mediante la identificación de fases cristalinas. A partir de la difracción de rayos X es posible identificar el sistema cristalino de la muestra analizada y obtener información tridimensional acerca de la estructura interna del cristal. Esta técnica es ideal para muestras en polvo policristalinas, es decir, aquellas que presentan varios cristales diminutos con orientaciones completamente aleatorias.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
              <h2>Espectrometría Raman</h2>
              <p class="parrafo">Análisis que permite obtener información química y estructural de diversos materiales al generar un espectro vibracional 'Raman', el cual es único para cada tipo compuesto y sirve como una huella digital para identificarlo. Permite determinar vibraciones moleculares y caracterizar fases puras y mezclas de minerales con un empaquetamiento atómico similar. Se considera una técnica de análisis no destructiva que se realiza directamente sobre el material, sin necesidad de tratamiento previo.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
                <h2>Espectrometría de Fluorescencia de Rayos X</h2>
                <p class="parrafo">Determinación de la composición química elemental de diversos materiales mediante la medición de las energías e intensidades de los rayos X emitidos por la muestra al ser irradiada por una fuente conocida de rayos X de alta energía. Este análisis permite identificar los elementos presentes y sus concentraciones. Es necesario que el laboratorio cuente con estándares que permitan determinar el compuesto o elemento de interés.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
                <h2>Espectrometría de Electrones Fotoemitidos por Rayos-X</h2>
                <p class="parrafo">Servicio de análisis químico de alta sensitividad en la superficie de los materiales, con un límite de detección que aumenta con el número atómico del elemento. Se obtiene información de los primeros 10nm de la superficie de los materiales. La técnica proporciona datos sobre la composición elemental, estados de oxidación y ambiente químico. Permite la detección de todos los elementos excepto H y He.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
                <h2>Sistema de Medición de Propiedades Físicas</h2>
                <p class="parrafo">Análisis que permite medir el momento magnético de una muestra sólida en función de: un campo magnético aplicado a una temperatura dada (ciclos de histéresis e isotermas de magnetización); una temperatura para un campo magnético constante aplicado (curvas termomagnéticas); y en función del tiempo (estudio de fenómenos de relajación de la magnetización). El equipo solo permite analizar muestras sólidas pequeñas en forma de trozos, polvos, cintas o películas delgadas.</p>
            </div>
          </template>
        </SectionOverline>

        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
          </template>

          <template #content>
            <div class="d-flex flex-column ga-8">
                <h2>Medición de Dureza</h2>
                <p class="parrafo">Determinación de la dureza de materiales en una escala microscópica (en áreas muy pequeñas de una muestra). El equipo aplica una carga máxima de 2 Kgf sobre la superficie del material a través de un indentador, al medir la huella generada se puede calcular la dureza del material analizado (Vickers y Knoop). La técnica permite obtener datos precisos sobre la dureza sin afectar significativamente la estructura del material.</p>
            </div>
          </template>
        </SectionOverline>
      </section>

      <section class="laboratorio_contacto">
        <PersonalContacto v-if="personal.coordinadorLINAN" :personal="personal.coordinadorLINAN" />
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