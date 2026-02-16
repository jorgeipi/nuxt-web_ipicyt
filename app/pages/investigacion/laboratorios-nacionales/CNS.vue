<script setup>
import { onMounted } from 'vue';
// import ContactoItem from "@ipicyt/components/item/acerca/contactoItem.vue";


import { usePersonales } from '@composables/personal/usePersonales';
import cnslogo from "/imgs/research/laboratorios-nacionales/CNS-logo.png";
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
</script>

<template>
  <div class="displayCenter container">
    <div class="laboratorio" v-if="!personalLoading">

      <div class="introSeccion">
        <PersonalAcademico v-if="personal.coordinadorCNS" :personal="personal.coordinadorCNS" />

        <div class="introInfo">

          <img :src="cnslogo" alt="cns_logo" />

          <div class="mb-7">
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
            <CNSIcon />
            <p class="ml-5 font-weight-bold">Visita el portal del CNS</p>
          </ButtonPortal>

        </div>
      </div>

      <div>
        <h2 class="mb-5">Servicios del CNS</h2>
        <SectionOverline>
          <template #icon>
            <SuccessRingIcon class="icon" />
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
            <SuccessRingIcon class="icon" />
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
            <SuccessRingIcon class="icon" />
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
      </div>

      <div class="mt-11">
          <PersonalContacto :personal="a" />
      </div>

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