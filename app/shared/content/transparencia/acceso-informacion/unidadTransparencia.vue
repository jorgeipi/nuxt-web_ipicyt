<script setup lang="ts">
// import DataTable from '@shared/components/ui/DataTable.vue';
// import TitleOverline from "@ipicyt/components/item/TitleOverline.vue";
import { dataT1 } from '@data/transparencia/acceso-informacion/transparencia';

const columnsT1 = [
  { key: '0', label: 'Horario de atención de la Unidad de Transparencia' },
  { key: '1', label: 'Teléfono y extensión' },
  { key: '2', label: 'Correo electrónico Oficial' },
  { key: '3', label: 'Domicilio Oficial de la Unidad de Transparencia' },
  { key: '4', label: 'Nombre del Responsable de atención y operación de la Unidad de Transparencia' },
  { key: '5', label: 'Cargo o función en la Unidad de Transparencia' }
];
</script>


<template>
    <section>
        <TitleOverline class="mb-8"><h2>Unidad de Transparencia</h2></TitleOverline>
        <TableGray 
            :columns="columnsT1" 
            :data="dataT1" 
        />
    </section>
</template>