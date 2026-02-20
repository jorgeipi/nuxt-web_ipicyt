<script setup lang="ts">
import { GlassesIcon } from '@components/icons'

const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
  showMenu: true,
})

definePageMeta({
  layout: false,
}) 
</script>

<template>
  <NuxtLayout name="main">
    <template #banner>
        <LayoutBannerBase image="/imgs/proteccion-datos/proteccion-datos-header.png">
          <h1 class="h1-banner">Protección de Datos Personales: <span class="font-weight-regular">Bienvenida</span></h1>
        </LayoutBannerBase>
    </template>

    <div class="dp-bienvenida">
      <h2 class="dp-bienvenida__title">
        Protección de Datos Personales:
        <span class="dp-bienvenida__title-subtitle">Bienvenida</span>
      </h2>

      <div class="dp-bienvenida__article">
        <GlassesIcon class="dp-bienvenida__icon" />
        <p class="dp-bienvenida__text">
          De conformidad con lo dispuesto en el artículo 250 de los Lineamientos
          Generales de Protección de Datos Personales para el Sector Público, en
          esta sección el <b>INSTITUTO NACIONAL DE TRANSPARENCIA, ACCESO A LA
            INFORMACIÓN Y PROTECCIÓN DE DATOS PERSONALES</b> pone a disposición de las
          personas los avisos de privacidad aplicables a los tratamientos de datos
          personales, los datos de contacto de la Unidad de Transparencia, así
          como en su caso, Oficial de Protección de Datos, e información relevante
          en materia de protección de datos personales.
        </p>
      </div>

      <div class="dp-bienvenida__date">
        <p class="dp-bienvenida__date-text">Fecha actualización: 07/Febrero/2023</p>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.dp-bienvenida {
  max-width: 609px;

  &__title {
    &-subtitle {
      font-weight: 400;
    }
  }

  &__article {
    margin: 5rem 0;
    padding: 3rem;
    display: flex;
    width: 100%;
    background-color: #EEEDED;
    border-radius: 10px;
  }

  &__icon {
    flex-shrink: 0;
    width: 67px;
    height: 53px;
    margin: 2rem;
  }

  &__text {
    // Estilos para el texto si necesitas agregar alguno
  }

  &__date {
    display: inline-block;
    border-top: 1px solid #CCCCCC;

    &-text {
      color: #848BA6;
      padding-top: 1rem;
    }
  }
}
</style>