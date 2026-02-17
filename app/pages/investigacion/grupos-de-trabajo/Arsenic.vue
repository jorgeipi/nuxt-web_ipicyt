<script setup>
import arsenicLogo from "/imgs/research/grupos/Arsenic-logo.png";
import { usePersonales } from '@composables/personal/usePersonales';
import { ArsenicIcon, SuccessRingIcon } from "@components/icons";

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadoraArsenic', cvepuesto: 596, cvepersonal: 297},
]);
</script>

<template>
  <div class="displayCenter container">
    <div class="laboratorio" v-if="!personalLoading">

      <section class="introSeccion">
        <PersonalAcademico v-if="personal.coordinadoraArsenic" :personal="{
          ...personal.coordinadoraArsenic,
          nombrepuesto: 'Coordinador(a) de Arsenic Research and Action Network'
        }" />

        <div class="introInfo">
          <img :src="arsenicLogo" alt="lanbama_name" />

          <div class="mb-7">
            <p>
              <strong>ARAN (Arsenic Research and Action Network)</strong> es una red global de
              expertos en arsénico que trabajan colaborativamente para desarrollar
              soluciones a los desafíos relacionados con este contaminante. Nuestra
              misión es mitigar sus efectos negativos en la salud y el medio
              ambiente mediante investigación, tecnología e innovación con un
              enfoque multidisciplinario.
              <b
                >Abordamos la contaminación en alimentos, suelo, sedimentos y agua,
                impulsando acciones con impacto positivo en la sociedad.</b
              >
              En nuestro
              <a class="portal link" href="https://aran.ipicyt.edu.mx">portal web</a> encontrarás
              información sobre nuestros proyectos, artículos, tesis publicadas y
              registros fotográficos de nuestras actividades. Te invitamos a conocer
              más sobre ARAN y unirte a nuestros esfuerzos en la lucha contra la
              contaminación por arsénico.
            </p>
          </div>

          <ButtonPortal :url="'https://aran.ipicyt.edu.mx'">
            <ArsenicIcon />
            <p class="ml-5 font-weight-bold">Arsenic Research and Action Network</p>
          </ButtonPortal>

        </div>
      </section>


      <section>
        <h2 class="mb-7">Objetivos</h2>

        <div class="">
          <SectionOverline> 
            <template #icon>
              <SuccessRingIcon class="color-secondary" />
            </template>
            <template #content>
              <h6 class="color-secondary">Apoyar el desarrollo de una comunidad de investigación bien capacitada que pueda contribuir a mitigar la exposición, el riesgo y la contaminación por arsénico.</h6>
            </template>
          </SectionOverline>

          <SectionOverline> 
            <template #icon>
              <SuccessRingIcon class="color-secondary" />
            </template>

            <template #content>
              <h6 class="color-secondary">Transferir nuevas habilidades y generar nuevos conocimientos para impactar en el bienestar de las comunidades.</h6>
            </template>
          </SectionOverline>

          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="color-secondary" />
            </template>

            <template #content>
              <h6 class="color-secondary">Fortalecer la excelencia en la investigación en los países socios que apoyan a investigadores, grupos de investigación y redes mediante capacitación, colaboración, visitas recíprocas y la transferencia de conocimientos y habilidades entre socios.</h6>
            </template>
          </SectionOverline>

          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="color-secondary" />
            </template>
            <template #content>
              <h6 class="color-secondary">Establecer vínculos a largo plazo para garantizar mejoras sostenibles en la capacidad de investigación a largo plazo.</h6>
            </template>
          </SectionOverline>

          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="color-secondary" />
            </template>
            <template #content>
              <h6 class="color-secondary">Fomentar y promover el establecimiento de alianzas efectivas entre múltiples partes interesadas.</h6>
            </template>
          </SectionOverline>

          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="color-secondary" />
            </template>

            <template #content>
              <h6 class="color-secondary">Movilizar conocimiento, capacidad técnica, tecnología y recursos para implementar soluciones.</h6>
            </template>
          </SectionOverline>
        </div>
      </section>


      <section class="laboratorio_contacto">
        <PersonalContacto v-if="personal.coordinadoraArsenic" :personal="personal.coordinadoraArsenic" />
      </section>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.icon {
  color: var(--color-secondary);
}

.link {
  &:hover {
    font-weight: inherit;
  }
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