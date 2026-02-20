<script setup>
import { SuccessRingIcon, LANBAMAIcon } from "@shared/components/icons";
import { usePersonales } from '@composables/personal/usePersonales';
import lanbamalogo from "/imgs/research/laboratorios-nacionales/LANBAMA/LANBAMA-logo.png";

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorLANBAMA', cvepuesto: 325},
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
      <!-- Banner personalizado en el slot -->
      <template #banner>
        <LayoutBannerBase
          image="/imgs/research/laboratorios-nacionales/LANBAMA/LANBAMA-banner.png"
          height="200px"
          variant="centered"
        >
          <div>
            <h1 class="h1-banner">Laboratorio Nacional de Biotecnología Agrícola, Médica y Ambiental (LANBAMA)</h1>
          </div>
          <!-- <BannerTitle>Investigación en IPICYT</BannerTitle>
          <BannerText>Innovación y ciencia de clase mundial</BannerText> -->
        </LayoutBannerBase>
      </template>

    <div class="displayCenter container">
      <div class="research-laboratory" v-if="!personalLoading">
        <section class="research-laboratory__intro mb-12">
          <PersonalAcademico v-if="personal.coordinadorLANBAMA" :personal="personal.coordinadorLANBAMA" />

          <div class="research-laboratory__intro--info">
            <img class="research-laboratory__logo mb-8" :src="lanbamalogo" alt="LANBAMA logo" />

            <div class="mb-8">
              <p class="parrafo mb-3">
                El LANBAMA cuenta con personal calificado y equipo de vanguardia con
                mantenimiento continuo, para ofrecer servicios a la academia,
                industria, sector gubernamental y público en general, en las áreas de
                biotecnología, agrícola, médica y ambiental.
              </p>
              <p class="parrafo mb-3">
                <b>Tiene más de 150 clientes</b> de varios estados de la república del
                sector agrícola, minero, alimentario y académico. Los servicios más
                solicitados son análisis microbiológicos, fisicoquímicos y de metales
                pesados de agua y suelo en la sección ambiental y secuenciación de
                ácidos nucleicos y detección y monitoreo de patógenos en sección
                molecular
              </p>
              <p class="parrafo">
                Recibió la acreditación de la <b>ema</b> para 2 ensayos de agua y 3 de
                fitodiagnóstico molecular, así como el reconocimiento del <b>InDRE para
                diagnóstico de COVID-19.</b>
              </p>
            </div>

            <ButtonPortal :href="'https://lanbama.ipicyt.edu.mx/'">
              <LANBAMAIcon  class="flex-shrink-0"/>
              <p class="font-weight-bold">Visita el portal del LANBAMA</p>
            </ButtonPortal>
          </div>
        </section>

        <section class="research-laboratory__acordiones">
          <h2 class="mb-5">Servicios de LANBAMA</h2>
          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="icon color-secondary"/>
            </template>

            <template #content>
              <div class="d-flex flex-column ga-8">
                <h2>Ciencias Ambientales</h2>
                <ul>
                  <li>
                    Espectrofotómetro de emisión óptica de plasma acoplado inductivamente
                    (ICP-OES)
                  </li>
                  <li>
                    Cromatógrafo de gases con detector de masas 7890A, 5975C (CG_MSD)
                  </li>
                  <li>
                    Cromatógrafo de gases con detector de ionización de flama y
                    microcaptura de electrones (CG_FID_ECD)
                  </li>
                  <li>Cromatógrafo de líquidos de alta resolución (HPLC)</li>
                  <li>Analizador elemental/Elemental combustion system</li>
                  <li>Cromatógrafo de gases acoplado a masas con sistema head space</li>
                  <li>Medidor Versa Star Pro pH/ISE</li>
                  <li>Rotavapor marca Buchi</li>
                  <li>Sistema de extracción soxhlet</li>
                  <li>pHmetro Orion 3 star</li>
                  <li>Caracterización de sólidos</li>
                </ul>
              </div>
            </template>
          </SectionOverline>
          
          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="icon color-secondary"/>
            </template>

            <template #content>
              <div class="d-flex flex-column ga-8">
                <h2>Biología Molecular</h2>
                <ul>
                  <li>Secuenciación</li>
                  <li>MiSeq</li>
                  <li>PCR tiempo real</li>
                  <li>Fotodocumentación de imágenes</li>
                  <li>Manejo de líquidos</li>
                  <li>Sonicación de muestras</li>
                  <li>Cuantificación de ADN, ARN, micro RNA y proteínas</li>
                  <li>Cuantificación de ácidos nucleicos y proteínas</li>
                  <li>Captura de imágenes con Luz Blanca y ultravioleta</li>
                  <li>Concentración de muestras</li>
                  <li>Centrifugación de muestras</li>
                  <li>Diagnóstico de microorganismos por PCR</li>
                  <li>Diagnóstico de microorganismos por inmunología</li>
                  <li>Diagnóstico de microorganismos por microbiología</li>
                  <li>Pruebas de efectividad biológica in vitro</li>
                  <li>Purificación de ADN</li>
                  <li>Clonación</li>
                </ul>
              </div>
            </template>
          </SectionOverline>
        </section>


        <section class="laboratorio__contacto mt-12">
          <PersonalContacto v-if="personal.coordinadorLANBAMA" :personal="personal.coordinadorLANBAMA" />
        </section>

      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.research-laboratory {
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