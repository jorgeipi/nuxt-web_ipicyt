<script setup>
import { PageSkeleton } from '@components/skeleton'
import { usePropIntelectual } from '@composables/vinculacion/usePropIntelectual';

const { propiedadIntelectual, personal, allLoading } = usePropIntelectual();
</script>

<template>
  <TransitionGroup name="fade">
    <div class="vinculacion--propIntelectual" v-if="!allLoading">
      <section class="propIntelectual--intro">

        <PersonalAcademico v-if="personal.coordinador" :personal="personal.coordinador" />

        <div class="propIntelectual--info">
          <p class="info">
            La Coordinación de Propiedad Intelectual tiene como misión optimizar las estrategias de protección y gestión de los activos intangibles del Instituto. Su labor se centra en acompañar a investigadores y demás interesados en la identificación y protección de desarrollos susceptibles de propiedad intelectual, brindando asesoría y seguimiento durante todo el proceso de gestión.
            <br/><br/>
            Asimismo, impulsa la sensibilización y promoción de la importancia de las diferentes figuras de protección entre la comunidad interna y externa, fomentando una cultura que valore y aproveche el conocimiento generado.
            <br/><br/>
            Con estas acciones, la Coordinación contribuye al fortalecimiento de la innovación, a la transferencia de conocimiento y a la proyección institucional con impacto social.
          </p>
        </div>
      </section>

      <section class="propIntelectual--content">
        <VinculacionPatentesTitle>Portafolio de Propiedad Intelectual del IPICYT</VinculacionPatentesTitle>

        <section class="propIntelectual--patentes">
          <VinculacionPatentesAcordeones :propiedadIntelectual="propiedadIntelectual" v-if="propiedadIntelectual && !allLoading" />
        </section>
      </section>

      <section class="propIntelectual--contacto">
        <PersonalContacto v-if="personal.coordinador" :personal="personal.coordinador" />
      </section>
    </div>

    <template v-else>
      <div class="vinculacion--propIntelectual">
        <PageSkeleton />
      </div>
    </template>
  </TransitionGroup>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.vinculacion--propIntelectual{
    max-width: 78.9rem;
    .propIntelectual--intro{
        display: flex;
        align-items: start;
        justify-content: start;
        flex-direction: row;
        gap: 2rem;

        margin-bottom: 4.6rem;

        @include m.tablet{
            flex-direction: column;
        }

        @include m.mobile{
            gap: 0rem;
        }

        .propIntelectual--info{

        }
    } 
    
    .propIntelectual--content{
        .propIntelectual--patentes{
            margin-bottom: 6.5rem;
        }
    }

}
</style>