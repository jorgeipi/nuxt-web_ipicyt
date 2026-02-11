<script setup>
// import AcordeonItem from "@ipicyt/components/item/AcordeonItem.vue";
import { AccordionRight } from '@components/accordion'
import { ArrowDFGreen, IconArrowDownFillBlue } from '@components/icons'
import { Introduccion, Metodologia, Objetivo, Resultados } from "@components/modules/home/graduados";

const sections = {
    0: Introduccion,
    1: Objetivo,
    2: Metodologia,
    3: Resultados,
};
</script>

<template>
    <div class="seguimiento-graduados">
        <div class="intro">
            <h2 class="mb-8">
                Programa Institucional de Seguimiento a Graduados y Graduadas del
                Instituto Potosino de Investigación Científica y Tecnológica, IPICYT
            </h2>
            <p class="mb-10">
                El programa institucional de “Seguimiento a Graduados y Graduadas” del
                Posgrado del Instituto Potosino de Investigación Científica y
                Tecnológica, A.C, se lleva a cabo desde el año 2004, desde entonces este
                programa ha ido logrando una madurez que al día de hoy genera una agenda
                de actividades permanentes de enlace entre los más de 900 graduados y el
                IPICYT, a la par se cuenta con un modelo de trabajo metódico que ha
                logrado el seguimiento de nuestros graduados, generando indicadores de
                gran valía para los informes instituciones, datos como movilidad e
                historial laboral y ubicación en el SNI, es sólo alguna de la
                información que nuestra metodología genera, por lo que el programa de
                seguimiento a graduados es una de las actividades más representativas
                del posgrado.
            </p>
        </div>

        <div class="seguimiento-graduados__acordeones ga-8">
            <AccordionRight v-for="(component, index) in Object.entries(sections)" :key="index"
                :id="['introduccion', 'objetivo', 'metofologia', 'resultados'][index]">
                <template #icon>
                    <IconArrowDownFillBlue />
                </template>
                <template #title>
                    <h3>{{ ['Introducción', 'Objetivo', 'Metodología', 'Resultados'][index] }}</h3>
                </template>
                <template #content>
                    <component :is="component[1]" />
                </template>
            </AccordionRight>
        </div>
    </div>
</template>

<style scoped lang="scss">
.seguimiento-graduados {
    max-width: 609px;
    margin: 0 auto;

    // .metodologia {
    //     ol, ul {
    //         padding-left: 2.5rem;
    //     }

    //     .div_img {
    //         display: flex;
    //         justify-content: center;

    //         img {
    //             padding: 4rem 0;
    //             max-width: 586px;
    //             width: -webkit-fill-available;
    //         }
    //     }

    //     .inciso_a {
    //         color: #16809c;
    //     }

    //     .inciso_b {
    //         color: #6b338a;
    //     }

    //     .rojo {
    //         color: #ff0000;
    //     }

    //     .amarillo {
    //         color: #ffc005;
    //     }

    //     .verde {
    //         color: #1b8001;
    //     }
    // }

    // .resultados {
    //     .footer {
    //         display: flex;
    //         margin-top: 4rem;

    //         img {
    //             margin-right: 2rem;
    //             width: 91px;
    //             height: 91px;
    //         }

    //         @media (max-width: 720px) {
    //             flex-direction: column;
    //             padding-bottom: 2rem;
    //         }
    //     }
    // }
}

.seguimiento-graduados__acordeones{
    display: flex;
    flex-direction: column;
}
</style>
