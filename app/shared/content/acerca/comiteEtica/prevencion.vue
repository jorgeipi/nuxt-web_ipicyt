<script setup lang="ts">
import { getComitePrevencionPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getComitePrevencionPath('DOF Protocolo HyAS.pdf')">
            Protocolo para Hostigamiento y Acoso Sexual
        </ButtonLink></div>

        <div><ButtonLink :href="getComitePrevencionPath('Pronunciamiento Cero Tolerancia.pdf')">
            Pronunciamiento Cero tolerancia al HSyAS
        </ButtonLink></div>
    </div>
</template>