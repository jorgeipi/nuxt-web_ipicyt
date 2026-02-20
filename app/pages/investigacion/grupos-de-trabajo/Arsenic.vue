<script setup>
import arsenicLogo from "/imgs/research/grupos/ARAN/ARAN-logo.png";
import { usePersonales } from '@composables/personal/usePersonales';
import { ArsenicIcon, SuccessRingIcon } from "@components/icons";

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadoraArsenic', cvepuesto: 596, cvepersonal: 297},
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
          image="/imgs/research/grupos/ARAN/ARAN-banner.png"
          variant="centered"
          overlay="gradient"
        >
          <h1 class="h1-banner">Arsenic Research and Action Network</h1>
        </LayoutBannerBase>
      </template>

      <div class="research-group" v-if="!personalLoading">

        <section class="research-group__intro mb-12">
          <PersonalAcademico v-if="personal.coordinadoraArsenic" :personal="{
            ...personal.coordinadoraArsenic,
            nombrepuesto: 'Coordinador(a) de Arsenic Research and Action Network'
          }" />

          <div class="research-group__intro--info">
            <img class="research-group__logo mb-8" :src="arsenicLogo" alt="arsenic_name" />

            <div class="mb-8">
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
              <ArsenicIcon class="flex-shrink-0" />
              <p class="font-weight-bold">Arsenic Research and Action Network</p>
            </ButtonPortal>

          </div>
        </section>

        <section class="research-group__acordiones">
          <h2 class="mb-5">Objetivos</h2>

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

        <section class="research-group__contacto mt-12">
          <PersonalContacto v-if="personal.coordinadoraArsenic" :personal="personal.coordinadoraArsenic" />
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