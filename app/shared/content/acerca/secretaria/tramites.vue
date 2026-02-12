<script setup lang="ts">
import { ButtonLink } from '@components/buttons'
import { getSecretariaSolictudPath, getSecretariaConvocatoriaPath, getSecretariaReglamentoPath } from '@shared/helpers/acerca/getPath'
</script>

<template>
    <div class="secretaria__tramites ga-5">
        <div>
            <ButtonLink :href="getSecretariaSolictudPath('Solicitud_de_incorporacion_2022.pdf')" color="#9747ff">
                1. Incorporación Posdoctorante / Técnico de Proyecto: PDF
            </ButtonLink>
        </div>

        <div>
            <ButtonLink :href="getSecretariaSolictudPath('Solicitud_de_Recontratacion_2022-1.pdf')" color="#9747ff">
                2. Recontratación Posdoctorante / Técnico de Proyecto: PDF
            </ButtonLink>
        </div>


        <div>
            <ButtonLink :href="getSecretariaConvocatoriaPath('Convocatoria de Becas 2025.pdf')">
                Convocatoria de Becas y Apoyos Especiales 2025.pdf
            </ButtonLink>
        </div>

        <div>
            <ButtonLink :href="getSecretariaConvocatoriaPath('Convocatoria_de_Becas_2024.pdf')">
                Convocatoria de Becas y Apoyos Especiales 2024.pdf
            </ButtonLink>
        </div>

        <div>
            <ButtonLink :href="getSecretariaConvocatoriaPath('Convocatoria_de_Becas_2023.pdf')">
                Convocatoria de Becas y Apoyos Especiales 2023.pdf
            </ButtonLink>
        </div>

        <div>
            <ButtonLink :href="getSecretariaConvocatoriaPath('Convocatoria_de_Becas_2022.pdf')">
                Convocatoria de Becas y Apoyos Especiales 2022.pdf
            </ButtonLink>
        </div>

        <div>
            <ButtonLink :href="getSecretariaConvocatoriaPath('Convocatoria_de_Becas_2021.pdf')">
                Convocatoria de Becas y Apoyos Especiales 2021.pdf
            </ButtonLink>
        </div>

        <div>
            <ButtonLink
                :href="getSecretariaConvocatoriaPath('Convocatoria_de_Becas_y_Apoyos_para_la_Formación_de_Recursos_Humanos_2020.pdf')">
                Humanos 2020.pdf
            </ButtonLink>
        </div>

        <div>
            <ButtonLink
                :href="getSecretariaReglamentoPath('Reglamento-de-Becas-y-Apoyos-para-la-Formacion-de-Recursos-Humanos-del-IPICYT.pdf')">
                Reglamento de Becas y Apoyos Especiales
            </ButtonLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.secretaria__tramites {
    display: inline-flex;
    flex-direction: column;
}
</style>