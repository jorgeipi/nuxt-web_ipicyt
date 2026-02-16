<script setup>
import { usePersonales } from '@composables/personal/usePersonales';
import { VinculacionIcon } from '@components/icons'

const { personal, personalLoading } = usePersonales([
  { key: 'director', cvedepto: 25, cvepuesto: 108 },
  { key: 'coordinador', cvepersonal: 1264 },
]);

const vinculacion_list = [
  {
    title: 'Relaciones institucionales y alianzas estratégicas',
    text:
      'Estrecha vínculos entre la sociedad y la comunidad científica académica, que permita promover la participación de la ciencia y tecnología como un componente importante para resolver las distintas necesidades reales del entorno.',
    p:
      'Así mismo Fomenta la transferencia de los activos intangibles y el emprendimiento de la base tecnológica dentro del ecosistema de innovación.'
  },
  {
    title: 'Coordinación de proyectos',
    text:
      'Gestiona y coordina el desarrollo de las soluciones científicas y tecnológicas del Instituto que generan recursos propios, a través de ciencia aplicada, para gobiernos, empresas y demás organizaciones públicas, privadas, nacionales o extranjeras.'
  },
  {
    title: 'Coordinación de inversión externa en ciencia y tecnología',
    text:
      'Busca y gestiona fuentes de financiamiento e inversión nacionales o internacionales para proyectos de investigación, desarrollo e innovación.'
  }
]
</script>

<template>
  <TransitionGroup name="fade">
    <div class="vinculacion" v-if="!personalLoading">
        <div class="vinculacion__intro">
            <PersonalAcademico v-if="personal.director" :personal="personal.director" />

            <div class="vinculacion__desc">
                <h2 class="mb-8">Dirección de Vinculación: <span style="font-weight: 500;">Soluciones científicas y tecnológicas al alcance de la sociedad</span></h2>
                <p>Atiende las necesidades sociales mediante los recursos de investigación e infraestructura especializada del instituto, para dar soluciones interdisciplinarias y sustentables a través de la generación y transferencia del conocimiento científico, académico, tecnológico. Considerando, el marco normativo concerniente a los activos intangibles, la gestión de fondos económicos que contribuyan al objeto del instituto, impactando social, ambiental y económicamente a nivel nacional e internacional.</p>
                <ButtonPortal class="vinculacion-button mt-10" :url="'https://vinculacion.ipicyt.edu.mx/'">
                    <!-- <img :src="vinculacion_icon" alt="icon_vinculacion"> -->
                    <VinculacionIcon class="vinculacion-button__icon mr-5"/>
                    <h6 class="vinculacion-button__title">Portal de soluciones científicas y tecnológicas IPICYT</h6>
                </ButtonPortal>
            </div>
        </div>
        
        <div class="vinculacion__list">
            <SectionOverline v-for="(item, index) in vinculacion_list" :key="index">
              <template #content>
                <h2 class="mb-5">{{ item.title }}</h2>
                <p>{{ item.text }}</p>
                <p v-if="item.p">{{ item.p }}</p>
              </template>
            </SectionOverline>
        </div>

        <section class="vinculacion__contacto">
            <PersonalContacto v-if="personal.coordinador" :personal="personal.coordinador" />
        </section>
    </div>

    <template v-else>
      <div class="vinculacion">
        <SkeletonPage />
      </div>
    </template>
  </TransitionGroup>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.vinculacion{
    max-width: 789px;
    .vinculacion__intro{
        display: flex;
        justify-content: center;
        gap: 2rem;
        @include m.mobile{
            gap: 0rem;
            flex-direction: column;
        }
        .vinculacion__desc{
            display: grid;
            max-width: 588px;
            @include m.mobile{
                margin: 0%;
            }  
        }
    }
    .vinculacion__list{
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 4.6rem;
    }
}
</style>