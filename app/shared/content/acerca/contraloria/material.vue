<script setup lang="ts">
import { getContraloriaDifusionPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getContraloriaDifusionPath('CARTEL _ Contraloría Social_ 40 x 70 cm (1).jpg')">
            Contraloría Social: ¿Qué es, qué hace y quiénes la conforman?
        </ButtonLink></div>

        <div><ButtonLink href="https://www.gob.mx/buengobierno/acciones-y-programas/informe-general-de-resultados-de-contraloria-social-2024?state=published">
            Informe General de Resultados de Contraloría Social 2024
        </ButtonLink></div>
    </div>
</template>