<script setup>
  // import { PersonalAcademico, PersonalContacto } from '@/modules/personal/components'
  import { usePersonales } from '@composables/personal/usePersonales';
  // import { ListComunicacion } from '../components/list';


  const { personal, personalLoading } = usePersonales([
    { key: 'JefaComunicacion', cvepuesto: 610 },
  ]);

  const departmentAreas = [
    { title: 'Organización de eventos para la divulgación de la ciencia', email: 'rocio.perales@ipicyt.edu.mx' },
    { title: 'Visitas guiadas', email: 'veronica.gomez@ipicyt.edu.mx' },
    { title: 'Prensa, divulgación y audiovisuales', email: 'javier.delgado@ipicyt.edu.mx' },
    { title: 'Administración de redes sociales', email: 'veronica.gomez@ipicyt.edu.mx' },
    { title: 'Diseño de identidad institucional', emails: ['pedro.gutierrez@ipicyt.edu.mx', 'rebeca.saucedo@ipicyt.edu.mx'] },
    { title: 'Diseño de interfaces gráficas de usuario', email: 'pedro.gutierrez@ipicyt.edu.mx' },
  ];
</script>

<template>
  <div class="comunicacion-social" v-if="!personalLoading">
    <div class="comunicacion-social__header">
      <PersonalAcademico v-if="personal.JefaComunicacion" :personal="personal.JefaComunicacion" />

      <div class="comunicacion-social__info">
        <div class="comunicacion-social__info-text">
          <h2 class="comunicacion-social__info-title">
            Funciones del Departamento de Comunicación Social
          </h2>
          <p class="comunicacion-social__info-paragraph">
            Las acciones del Departamento de Comunicación Social ocupan un lugar importante dentro del IPICYT, pues
            estas actividades son la ventana del Instituto hacia la sociedad
            a través de una amplia gama de estrategias comunicativas, desde la difusión de noticias científicas hasta la
            organización de eventos de divulgación, el IPICYT busca llegar a públicos diversos y generar un impacto
            positivo en la sociedad. Al despertar vocaciones científicas en niños y jóvenes, estamos sembrando las
            semillas del progreso y garantizando un futuro más próspero para nuestro país.
          </p>
        </div>
      </div>
    </div>

      <div class="comunicacion-social__list">
        <AcercaListComunicacion v-for="area in departmentAreas" :key="area.title">
          <template #title>{{ area.title }}</template>
          <template #email>
            <span v-if="area.email">{{ area.email }}</span>
            <span v-else v-for="(email, idx) in area.emails" :key="idx">{{ email }}</span>
          </template>
        </AcercaListComunicacion>
      </div>

    <PersonalContacto v-if="!personalLoading && personal.JefaComunicacion" :personal="personal.JefaComunicacion" />
  </div>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

@mixin text-styleCS($color, $font-size, $font-weight, $line-height) {
    color: $color;
    font-size: $font-size;
    font-style: normal;
    font-weight: $font-weight;
    line-height: $line-height;
}

.comunicacion-social {
    max-width: 81rem;
    display: flex;
    flex-direction: column;
  
    &__header {
      display: flex;
      min-height: 27.6rem;
      margin-bottom: 1.8rem;

      gap: 2.4rem;

      @include m.tablet {
        flex-direction: column;
        min-height: 0;

        & .comunicacion-social__info{
          &-text{
            .comunicacion-social__info-title{
              font-size: 1.9rem!important;
            }

            .comunicacion-social__info-paragraph{
              font-size: 1.5rem!important;
            }
          }
        }
      }
  
      & .comunicacion-social__info {
        flex-grow: 1;
        flex-basis: 0;
  
        &-text {
          margin-bottom: 3rem;
  
          .comunicacion-social__info-title {
            @include text-styleCS(var(--color-black), 2.1rem, 700, 2.2rem);
            margin: 0;
            margin-bottom: 2rem;
          }
  
          .comunicacion-social__info-paragraph {
            @include text-styleCS(var(--color-black), 1.5rem, 400, 2.2rem);
            margin: 0;
          }
        }
      }
    }
  
    &__list {
      margin-bottom: 7.2rem;

      @include m.mobile {
        margin-bottom: 2rem;
      }
    }
}
</style>
