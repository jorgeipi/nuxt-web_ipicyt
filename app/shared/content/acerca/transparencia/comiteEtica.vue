<script setup lang="ts">
import { getComiteCodigoPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getComiteCodigoPath('Código de conducta 2023_IPICYT_final.pdf')">
            Código de Conducta del IPICYT 2023
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteCodigoPath('DOF - CC_2024.pdf')">
            Código de Conducta, publicación DOF
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteCodigoPath('DOF - Codigo de Etica e Integridad para un Buen Gobierno APF_18112025.pdf')">
            Código de Etica, publicación DOF
        </ButtonLink></div>
        
        <div><ButtonLink :href="getComiteCodigoPath('Reglas de Integridad Para Ejercicio Funcion Publica2019.pdf')">
            Reglas de Integridad para el Ejercicio de la Función Pública
        </ButtonLink></div>
    </div>
</template>