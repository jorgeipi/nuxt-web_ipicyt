<script setup>
import { SuccessRingIcon, LANBAMAIcon } from "@shared/components/icons";
import { usePersonales } from '@composables/personal/usePersonales';
import lanbamalogo from "/imgs/research/laboratorios-nacionales/LANBAMA-logo.png";

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorLANBAMA', cvepuesto: 325},
]);
</script>

<template>
  <div class="displayCenter container">
    <div class="laboratorio" v-if="!personalLoading">
      <div class="introSeccion">

        <PersonalAcademico v-if="personal.coordinadorLANBAMA" :personal="personal.coordinadorLANBAMA" />

        <div class="introInfo">
          <img :src="lanbamalogo" alt="LANBAMA logo" />

          <div class="mb-7">
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
            <LANBAMAIcon />
            <p class="ml-5 font-weight-bold">Visita el portal del LANBAMA</p>
          </ButtonPortal>
        </div>
      </div>


      <h3>Servicios de LANBAMA</h3>
      <SectionOverline>
        <template #icon>
          <SuccessRingIcon class="icon"/>
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
          <SuccessRingIcon class="icon"/>
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


      <section class="laboratorio_contacto">
        <PersonalContacto v-if="personal.coordinadorLANBAMA" :personal="personal.coordinadorLANBAMA" />
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