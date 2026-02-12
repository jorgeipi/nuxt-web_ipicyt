<script setup lang="ts">
// import DataTable from '@shared/components/ui/DataTable.vue';
// import TitleOverline from "@ipicyt/components/item/TitleOverline.vue";
import { dataT2 } from '@data/transparencia/acceso-informacion/transparencia';

const columnsT2 = [
  { key: 'nombre', label: 'Nombre' },
  { key: 'cargo', label: 'Cargo' },
  { key: 'cargoComite', label: 'Cargo en Comité' },
  { key: 'correo', label: 'Correo Electrónico' },
  { key: 'telefono', label: 'Teléfono' },
  { key: 'direccion', label: 'Dirección' }
];
</script>

<template>
    <section>
        <TitleOverline class="mb-8"><h2>Comité de Transparencia</h2></TitleOverline>
        <TableGray 
            :columns="columnsT2" 
            :data="dataT2" 
        />
    </section>
</template>