<script setup lang="ts">
import { getComiteConflictoPath } from '@shared/helpers/acerca/getPath'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getComiteConflictoPath('conflictometro-UEIPPCI.pdf')">
            Conflictómetro UEIPPCI
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteConflictoPath('GU_A_PARA_LA_IDENTIFICACI_N_Y_GESTI_N_DE_CONFLICTOS_DE_INTERESES.PDF.pdf')">
            Guía para la Identificación y Gestión de Conflictos de Interés
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteConflictoPath('presentacion-identificacion-y-prevencion-conflictos-de-intereses.pdf')">
            Presentación, Identificación y Prevención de Conflictos de Intereses
        </ButtonLink></div>
    </div>
</template>