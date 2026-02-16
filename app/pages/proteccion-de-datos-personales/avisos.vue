<script setup lang="ts">
import { avisos } from '@data/proteccion-de-datos/avisos';
import { getDatosAvisosPath } from '@shared/helpers/proteccion-de-datos/getPath'
</script>

<template>
  <div class="dp-avisos"> 
    <h2 class="dp-avisos__title">
      Protección de Datos Personales:
      <span class="dp-avisos__title-subtitle">Avisos de Privacidad Integrales</span>
    </h2>
    
    <div class="dp-avisos__intro">
      <p class="dp-avisos__intro-text">
        Hacemos de su conocimiento que eI Instituto Potosino de Investigación
        Científica y Tecnológica, A.C., con motivo de respetar, proteger y
        garantizar el derecho humano a la autodeterminación informativa, ha
        desarrollado una Política de Privacidad la cual ponemos a su disposición
        en las siguientes ligas:
      </p>
    </div>
    
    <div class="dp-avisos__buttons d-flex flex-column ga-5">
      <div v-for="(item, index) in avisos" :key="index">
        <ButtonLink class="dp-avisos__button justify-start align-start" :href="getDatosAvisosPath(item.file)" color="var(--color-text-subtle)">
            {{ item.title }}
        </ButtonLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dp-avisos {
  max-width: 609px;

  &__title {
    &-subtitle {
      font-weight: 400;
    }
  }

  &__intro {
    margin: 5rem 0;
  }

  &__button {
    p, h1, h2, h3, h4, h5, a, span {
      text-align: start;
    }
  }
}
</style>