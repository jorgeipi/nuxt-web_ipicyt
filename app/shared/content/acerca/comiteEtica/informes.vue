<script setup lang="ts">
import { getComiteInformesPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">

        <div>
            <p class="mb-5"><strong>2025</strong></p>
            <div class="d-flex flex-column ga-6">
                <div><ButtonLink :href="getComiteInformesPath('2025/PAT_2025_firmado.pdf')">
                    Informe Anual de Actividades 2025
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2025/Informe Anual CE 2025.pdf')">
                    Programa Anual de Trabajo 2025
                </ButtonLink></div>
            </div>
        </div>


        
        <div>
            <p class="mb-5"><strong>2024</strong></p>
            <div class="d-flex flex-column ga-6">
                <div><ButtonLink :href="getComiteInformesPath('2024/IAA_CE_2024_firmado.pdf')">
                    Informe Anual de Actividades 2024
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2024/5.3 PAT_CE_2024.pdf')">
                    Programa Anual de Trabajo 2024
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2024/Cedula Def Eva Integr 2024.pdf')">
                    Cédula Definitiva de la Evaluación Integral
                </ButtonLink></div>
            </div>
        </div>

        <div>
            <p class="mb-5"><strong>2023</strong></p>

            <div class="d-flex flex-column ga-6">
                <div><ButtonLink :href="getComiteInformesPath('2023/1. Informe Anual Actividades 2023_firmado.pdf')">
                    Informe Anual de Actividades 2023
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2023/PAT 2023_firmado.pdf')">
                    Programa Anual de Trabajo 2023
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2023/1. 20240325 Cédula_Eval_Anual_Definitiva_2023_IPICYT.pdf')">
                    Cédula Definitiva de la Evaluación Integral
                </ButtonLink></div>
            </div>
        </div>


        <div>
            <p class="mb-5"><strong>2022</strong></p>

            <div class="d-flex flex-column ga-6">
                <div><ButtonLink :href="getComiteInformesPath('2022/IAA_CE_2022_firmado.pdf')">
                    Informe Anual de Actividades 2022
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2022/PAT_CE_firmas todos_31032022_OK.pdf')">
                    Programa Anual de Trabajo 2022
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2022/20230411 Cedula_Eval_Anual_Definit_2022_IPICYT.pdf')">
                    Cédula Definitiva de la Evaluación Integral
                </ButtonLink></div>
            </div>
        </div>


        <div>
            <p class="mb-5"><strong>2021</strong></p>

            <div class="d-flex flex-column ga-6">
                <div><ButtonLink :href="getComiteInformesPath('2021/PAT 2021_.pdf')">
                    Informe Anual de Actividades 2021
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2021/IAA_CEyPCI_2021.pdf')">
                    Programa Anual de Trabajo 2021
                </ButtonLink></div>

                <div><ButtonLink :href="getComiteInformesPath('2021/20220413 Cédula_Eval_ Anual_Def_ 2021_IPICYT.pdf')">
                    Cédula Definitiva de la Evaluación Integral
                </ButtonLink></div>
            </div>
        </div>
    </div>
</template>