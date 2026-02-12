<script setup lang="ts">
import { getTransparenciaCInfoPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div>
        <p class="mb-10">Cumplimiento al Artículo 75 de la Ley Federal de Transparencia y Acceso a la Información Pública.</p>
        <div class="d-flex flex-column ga-6">
            <div><ButtonLink :href="getTransparenciaCInfoPath('3. Anexos_2_3_4_5_6_7_Dictamen_Int_Pub_2020_PFYM.xlsx')" :color="'var(--color-text-subtle)'">
                Ejercicio 2020
            </ButtonLink></div>

            <div><ButtonLink :href="getTransparenciaCInfoPath('3. Anexo 1.pdf')" :color="'var(--color-text-subtle)'">
                Ejercicio 2021
            </ButtonLink></div>

            <div><ButtonLink :href="getTransparenciaCInfoPath('2. Anexo_A_Catalogo_Inf_Pub_2022_PFYM.xlsx')" :color="'var(--color-text-subtle)'">
                Ejercicio 2022
            </ButtonLink></div>
        </div>
    </div>
</template>