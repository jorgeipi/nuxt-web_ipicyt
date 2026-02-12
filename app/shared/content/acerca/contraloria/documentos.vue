<script setup lang="ts">
import { getContraloriaDocsPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getContraloriaDocsPath('Guía Operativa_CSIPICYT.pdf')">
            Guía operativa
        </ButtonLink></div>

        <div><ButtonLink :href="getContraloriaDocsPath('Esquema_CSIPICYT.pdf')">
            Esquema de la Contraloría Social
        </ButtonLink></div>

        <div><ButtonLink :href="getContraloriaDocsPath('PATCS_IPICYT2024.pdf')">
            Programa Anual de Trabajo de Contraloría Social (PATCS)
        </ButtonLink></div>
    </div>
</template>