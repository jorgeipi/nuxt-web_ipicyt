<script setup>
import { usePersonales } from '@composables/personal/usePersonales';
import cnslogo from "/imgs/research/laboratorios-nacionales/CNS/CNS-logo.png";
import { CNSIcon, SuccessRingIcon } from '@components/icons';

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorCNS', cvepuesto: 418 },
]);

const a = {
  nombre: "Recepción CNS",
  nombrepuesto: "Centro Nacional de Supercómputo",
  email: "contacto.cns@ipicyt.edu.mx",
  telefono_completo: "+52 (444) 834 20 00",
  extension: "2100 y 2103",
};

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
          image="/imgs/research/laboratorios-nacionales/CNS/CNS-banner.png"
          height="200px"
          variant="centered"
        >
          <h1 class="h1-banner">Centro Nacional de Supercómputo (CNS)</h1>
          <!-- <BannerTitle>Investigación en IPICYT</BannerTitle>
          <BannerText>Innovación y ciencia de clase mundial</BannerText> -->
        </LayoutBannerBase>
      </template>

    <div class="research-laboratory" v-if="!personalLoading">
        <section class="research-laboratory__intro mb-12">
          <PersonalAcademico v-if="personal.coordinadorCNS" :personal="personal.coordinadorCNS" />

          <div class="research-laboratory__intro--info">

            <img class="research-laboratory__logo mb-8" :src="cnslogo" alt="cns_logo" />

            <div class="mb-8">
              <p class="parrafo">
                El Centro Nacional de Supercómputo del IPICYT es un centro de datos
                especializado en proveer <strong>soluciones integrales e innovadoras en el
                  ámbito de las Tecnologías de la Información y Comunicaciones</strong>, además
                de ofrecer acceso a la infraestructura de <strong>computación de alto
                  rendimiento para toda la comunidad científica y académica</strong>, con el
                objetivo de fomentar la innovación y el desarrollo del país.
              </p>

              <p class="parrafo">
                El CNS se destaca por su infraestructura de vanguardia en constante
                crecimiento, su personal especializado y su capacidad para promover la
                colaboración y el intercambio de conocimientos, todo ello alineado con
                la Ley General en materia de Humanidades, Ciencias, Tecnologías e
                Innovación, que consolida a los Centros Públicos de Investigación del
                <strong>Secihti.</strong>
              </p>
            </div>

            <ButtonPortal class="" :href="'https://cns.ipicyt.edu.mx/'">
              <CNSIcon class="flex-shrink-0"/>
              <p class="font-weight-bold">Visita el portal del CNS</p>
            </ButtonPortal>
          </div>
        </section>

        <section class="research-laboratory__acordiones">
          <h2 class="mb-5">Servicios del CNS</h2>
          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="icon color-secondary" />
            </template>

            <template #content>
              <div class="d-flex flex-column ga-8">
                <h2>Soluciones tecnológicas y de consultoría</h2>
                <p class="parrafo">
                  Tienen el objetivo de
                  <strong>transformar al CNS en una organización económicamente
                    sustentable</strong>
                  para enfocar el esfuerzo en el desarrollar conocimiento científico y
                  recurso humano calificado.
                </p>

                <div>
                  <h6 class="mb-3">Catálogo de servicios:</h6>
                  <ul>
                    <li>Centro de Datos (Housing & Hosting).</li>
                    <li>Soluciones eCloud, Almacenamiento y Respaldo.</li>
                    <li>Telecomunicaciones.</li>
                    <li>Seguridad y análisis de amenazas.</li>
                    <li>Monitoreo de Infraestructura Física y Tecnológica (NOC).</li>
                    <li>Análisis y control de riesgo.</li>
                    <li>Consultoría TIC.</li>
                    <li>Mesa de ayuda y Call center 7x24.</li>
                    <li>Fábrica de Software.</li>
                  </ul>
                </div>
              </div>
            </template>
          </SectionOverline>

          <SectionOverline>

            <template #icon>
              <SuccessRingIcon class="icon color-secondary" />
            </template>

            <template #content>
              <div class="d-flex flex-column ga-8">
                <h2>Soluciones y Servicios para Supercómputo</h2>
                <p class="parrafo">
                  Simulación computacional de programación en paralelo para diferentes
                  líneas de investigación, a disposición de la comunidad científica y
                  académica del país, para la innovación y desarrollo a través de la
                  tecnología.
                </p>
              </div>
            </template>
          </SectionOverline>

          <SectionOverline>
            <template #icon>
              <SuccessRingIcon class="icon color-secondary" />
            </template>

            <template #content>
              <div class="d-flex flex-column ga-8">
                <h2>Servicios para la Academia</h2>

                <p class="parrafo">
                  Desarrollo de <strong>herramientas y soluciones TIC</strong> para el aprendizaje, así
                  como gestión y alojamiento de plataformas educativas. Adicionalmente,
                  ofrecemos <strong>cursos, talleres y capacitaciones especializadas,</strong> enfocados en
                  potenciar el desarrollo académico (docencia), estudiantil y del capital
                  humano.
                </p>

                <div>
                  <ButtonLink :href="'https://cnsedutec.ipicyt.edu.mx/?page=home'">
                    <p><strong>Visita el portal CNS-EduHTec</strong></p>
                  </ButtonLink>
                </div>

              </div>
            </template>
          </SectionOverline>
        </section>

        <section class="research-group__contacto mt-12">
            <PersonalContacto :personal="a" />
        </section>
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