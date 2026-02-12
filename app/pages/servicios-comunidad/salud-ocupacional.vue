<script setup>
import { usePersonales } from '@composables/personal/usePersonales';
import SaludIntro from "/imgs/servicios-comunidad/salud-ocupacional/saludIntro.png";

const { personal, personalLoading } = usePersonales([
  { key: 'areaSalud', cvepersonal: 1083 },
]);
</script>

<template>
  <div class="salud" v-if="!personalLoading">

    <div class="salud__intro">
      <PersonalAcademico v-if="personal.areaSalud" :personal="personal.areaSalud" />
      <div class="salud-intro__desc d-flex flex-column ga-7">
        <img class="salud__logo" :src="SaludIntro" alt="">

        <div>
          <h2 class="mb-5">Salud Ocupacional</h2>
          <p>
            Brinda atención de Primer Nivel, enfocándose en acciones y
            actividades de promoción de la salud y prevención de enfermedades;
            contribuyendo a que el personal integrante de nuestra comunidad logre
            un equilibrio en su bienestar.
          </p>
        </div>
      </div>
    </div>

    <div class="salud__content">
      <SectionOverline>
        <template #content>
          <div class="d-flex flex-column ga-5">
            <h2 class="salud__content-title">Atención y ubicación</h2>
            <ul class="font-weight-bold">
              <li>Edificio Delta, Planta Baja</li>
              <li>Lunes a jueves de 9 am a 5 pm</li>
              <li>Viernes de 9 am a 3 pm</li>
              <li>Ext. 7211</li>
              <a class="email" href="mailto:mirna.saucedo@ipicyt.edu.mx">
                <li>mirna.saucedo@ipicyt.edu.mx</li>
              </a>
            </ul>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div class="d-flex flex-column ga-5">
            <h2 class="salud__content-title">Atención básica de salud</h2>
            <p>Verificación de oxigenación, curaciones o aplicación de inyecciones <span class="font-weight-bold">(con
                receta médica).</span></p>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div class="d-flex flex-column ga-5">
            <h2 class="salud__content-title">Orientación de salud ante enfermedades crónico-degenerativas</h2>
            <p>Verificación de presión arterial y glucosa.</p>
          </div>  
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div class="d-flex flex-column ga-5">
            <h2 class="salud__content-title">Atención de urgencias y accidentes dentro del Instituto, así como su seguimiento</h2>
            <p>
              Atención en caso de sufrir algún accidente dentro del Instituto.
              <br><span class="font-weight-bold">Llama a la Ext. 7211, o contacta al personal de vigilancia al
                alcance.</span>
            </p>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div class="d-flex flex-column ga-5">
              <h2 class="salud__content-title">Primera respuesta y estabilización ante problemas de salud</h2>
              <p>En caso de:</p>
              <ul class="font-weight-bold">
                <li>Malestar general</li>
                <li>Dolores de cabeza por diferentes causas</li>
                <li>Problemas súbitos de salud</li>
              </ul>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div>
              <h2 class="salud__content-title">Referencia de pacientes a segundo y tercer nivel de atención <span class="font-weight-regular">(especialidades)</span></h2>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div>
            <h2 class="salud__content-title">Realización de jornadas de salud <span class="font-weight-regular">(promoción y fomento a la salud)</span></h2>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div>
              <h2 class="salud__content-title">Gestión de orientación nutricional y de primeros auxilios psicológicos</h2>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div>
              <h2 class="salud__content-title">Coordinación de Brigadas</h2>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
        <template #content>
          <div>
            <h2 class="salud__content-title">Toma de muestras para detección de COVID-19, Influenza y Virus sincicial respiratorio</h2>
          </div>
        </template>
      </SectionOverline>

    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.salud{
  max-width: 609px;
  .salud__intro{
    // d-flex flex-row ga-5 mb-10
    display: flex;
    flex-direction: row;
    column-gap: 5rem;
    margin-bottom: 4rem;

    @include m.mobile{
      flex-direction: column;
    }
    .salud-intro__desc{
      .salud__logo{
                    max-width: 344px;
            min-height: 107px;
            height: auto;
            display: block;
            object-fit: contain;
      }
    }
  }

  .salud__content{

    .salud__content-title{
      color: var(--color-secondary);
    } 
  }
}
.email{
  color: var(--color-black);
  text-decoration: none;
}
</style>