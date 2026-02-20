<script setup lang="ts">
import { EyeIcon } from '@components/icons'

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
          <h1 class="h1-banner">Protección de Datos Personales: <span class="font-weight-regular">Datos del Contacto de la Unidad de Transparencia</span></h1>
        </LayoutBannerBase>
    </template>

    <div class="dp-contacto">
      <h2 class="dp-contacto__title mb-12">
        Protección de Datos Personales:
        <span class="dp-contacto__title-subtitle">Datos del Contacto de la Unidad de Transparencia</span>
      </h2>

    <TableGray class="mb-12" th-size="1.5rem" thead-color="#848ba6">
      <template #thead>
        <tr>
          <th>Horario de atención de la Unidad de Transparencia</th>
          <th>Teléfono y extensión</th>
          <th>Correo electrónico Oficial</th>
          <th>Domicilio Oficial de la Unidad de Transparencia</th>
          <th>Nombre del Responsable de atención y operación de la Unidad de Transparencia</th>
          <th>Cargo o función en la Unidad de Transparencia</th>
        </tr>
      </template>
      <template #tbody>
        <tr>
          <td data-label="Horario de atención de la Unidad de Transparencia">
            9:00 a.m. a 17:00 p.m.
          </td>
          <td data-label="Teléfono y extensión">
            +1 (444) 8 34 20 00 Ext. 2018 y 3216
          </td>
          <td data-label="Correo electrónico Oficial">
            umorales@ipicyt.edu.mx
          </td>
          <td data-label="Domicilio Oficial de la Unidad de Transparencia">
            Camino a la Presa San José No. 2055
          </td>
          <td data-label="Nombre del Responsable">
            C.P.C. Ulises Rodrigo Morales Salcedo
          </td>
          <td data-label="Cargo o función">
            Titular de la Unidad de Transparencia
          </td>
        </tr>
      </template>
    </TableGray>
      
      <div class="dp-contacto__oficial">
        <EyeIcon class="dp-contacto__oficial-icon" />
        <div class="dp-contacto__oficial-content">
          <p class="dp-contacto__oficial-title">
            <b>Oficial de Protección de Datos Personales</b>
          </p>
          <p class="dp-contacto__oficial-text">
            No se cuenta con Oficial de Protección de Datos Personales, en virtud
            de que, hasta este momento, no se realizan tratamientos relevantes o
            intensivos de datos personales.
          </p>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.dp-contacto {
  // max-width: 609px;

  &__title {
    &-subtitle {
      font-weight: 400;
    }
  }

  &__table {
    margin: 5rem 0;
  }

  &__oficial {
    display: flex;

    &-icon {
      width: 68px;
      height: 52px;
      margin: 0 2rem 0 0;
      flex-shrink: 0;
    }

    &-content {
      // Estilos del contenedor de texto si necesitas
    }

    &-title {
      // Estilos adicionales para el título si necesitas
    }

    &-text {
      // Estilos adicionales para el texto si necesitas
    }
  }
}
</style>