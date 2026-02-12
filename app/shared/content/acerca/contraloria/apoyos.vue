<script setup lang="ts">
import { getContraloriaApoyosPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getContraloriaApoyosPath('Reglamento_de_Becas_y_Apoyos_Especiales_para_la_formacion_de_recursos humanos_del_IPICYT_vigente.pdf')">
            Reglamento de Becas vigente
        </ButtonLink></div>
    </div>
</template>