<script setup lang="ts">
import { getAccesoInfoIndicePath } from '@shared/helpers/transparencia/getPath';
</script>

<template>
<AccordionRight id="indice-expedientes">
    <template #title>
        <h2>Índice de Expedientes Reservados</h2>
    </template>
    <template #content> 

        <div class="mb-5">
            <p><span class="font-weight-bold">Clave de Sujeto obligado:</span>53110</p>
            <p><span class="font-weight-bold">Sujeto obligado:</span> Instituto Potosino de Investigación Científica y Tecnológica, A.C.</p>
            <p><span class="font-weight-bold">Periodo del Índice:</span> Del 01/07/2024 al 31/12/2024</p>
            <p><span class="font-weight-bold">Fecha de actualización (dd/mm/aaaa):</span> 17/01/2025</p>
        </div>
        
        <div class="d-flex flex-wrap ga-5">
            <ButtonLink :href="getAccesoInfoIndicePath('IECR 1er sem 2025.xlsx')" :color="'var(--color-text-subtle)'">
                <p>Primer Semestre 2025</p>
            </ButtonLink>

            <ButtonLink :href="getAccesoInfoIndicePath('IECR 2do sem 2025.xlsx')" :color="'var(--color-text-subtle)'">
                <p>Segundo Semestre 2025</p>
            </ButtonLink>
        </div>
    </template>
</AccordionRight>
</template>