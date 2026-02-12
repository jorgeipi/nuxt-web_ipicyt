<script setup lang="ts">
import { EyeIcon } from '@components/icons'
import { Table } from "@components/table";

const dataT1 = [
  [
    "9:00 a.m. a 17:00 p.m.", 
    "+1 (444) 8 34 20 00 Ext. 2018 y 3216", 
    "umorales@ipicyt.edu.mx", 
    "Camino a la Presa San José No. 2055 ", 
    "C.P.C. Ulises Rodrigo Morales Salcedo", 
    "Titular de la Unidad de Transparencia"
  ]
];
</script>

<template>
  <div class="dp-contacto">
    <h2 class="dp-contacto__title">
      Protección de Datos Personales:
      <span class="dp-contacto__title-subtitle">Datos del Contacto de la Unidad de Transparencia</span>
    </h2>
    
    <Table class="dp-contacto__table">
      <table>
        <thead>
          <tr>
            <th>Horario de atención de la Unidad de Transparencia</th>
            <th>Teléfono y extensión</th>
            <th>Correo electrónico Oficial</th>
            <th>Domicilio Oficial de la Unidad de Transparencia</th>
            <th>
              Nombre del Responsable de atención y operación de la Unidad de
              Transparencia
            </th>
            <th>Cargo o función en la Unidad de Transparencia</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in dataT1" :key="i">
            <td data-label="Horario de atención de la Unidad de Transparencia">
              {{ row[0] }}
            </td>
            <td data-label="Teléfono y extensión">{{ row[1] }}</td>
            <td data-label="Correo electrónico Oficial">{{ row[2] }}</td>
            <td data-label="Domicilio Oficial de la Unidad de Transparencia">
              {{ row[3] }}
            </td>
            <td data-label="Nombre del Responsable">{{ row[4] }}</td>
            <td data-label="Cargo o función">{{ row[5] }}</td>
          </tr>
        </tbody>
      </table>
    </Table>
    
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