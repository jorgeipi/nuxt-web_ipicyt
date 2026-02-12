<script setup lang="ts">
import { getComiteCodigoPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'

import { AccordionLeft } from '@components/accordion'
import { getDictamenes2025, getDictamenes2024, getDictamenes2023, getDictamenes2022, getDictamenes2021, getDictamenes2020 } from '@shared/helpers/acerca/getPath'
</script>

<template>
    <div class="">
        <p class="mb-5">Aquí encontraras información Actas del Comité Externo de Evaluación, Carta de Observaciones,
            Estados financieros Dictaminados, etc.</p>
        <div class="d-flex flex-column ga-3">
            <AccordionLeft :id="`accordion-1`" class="dictamenes__acordeon pt-2" group="parent-1">
                <template #title>
                    <h6 class="dictamenes__titulo">Documentos 2025</h6>
                </template>
                <template #content>
                    <div class="dictamanes__content d-inline-flex flex-column ga-3">
                        <a class="dictamenes__link" :href="getDictamenes2025('Estados_Financieros_Dic25.pdf')" target="_blank">Informe Estados Financieros Diciembre</a>
                        <a class="dictamenes__link" :href="getDictamenes2025('Estados Financieros Mar25.pdf')" target="_blank">Informe Estados Financieros Marzo</a>
                        <a class="dictamenes__link" :href="getDictamenes2025('Estados Financieros JUN25.pdf')" target="_blank">Informe Estados Financieros Junio</a>
                        <a class="dictamenes__link" :href="getDictamenes2025('Estados Financieros SEPT25.pdf')" target="_blank">Informe Estados Financieros Septiembre</a>
                    </div>
                </template>
            </AccordionLeft>

            <AccordionLeft :id="`accordion-2`" class="dictamenes__acordeon pt-2" group="parent-1">
                <template #title>
                    <h6 class="dictamenes__titulo">Documentos 2024</h6>
                </template>
                <template #content>
                    <div class="dictamanes__content d-inline-flex flex-column ga-3">
                        <a class="dictamenes__link" :href="getDictamenes2024('Estados Financieros de Marzo 2024.pdf')" target="_blank">Informe Estados Financieros Marzo 2024</a>
                        <a class="dictamenes__link" :href="getDictamenes2024('')" target="_blank">Informe Estados Financieros Junio 2024</a>
                        <a class="dictamenes__link" :href="getDictamenes2024('Estados Financieros SEP24.pdf')" target="_blank">Informe Estados Financieros Septiembre 2024</a>
                    </div>
                </template>
            </AccordionLeft>

            <AccordionLeft :id="`accordion-3`" class="dictamenes__acordeon pt-2" group="parent-1">
                <template #title>
                    <h6 class="dictamenes__titulo">Documentos 2023</h6>
                </template>
                <template #content>
                    <div class="dictamanes__content d-inline-flex flex-column ga-3">
                        <a class="dictamenes__link" :href="getDictamenes2023('Estados Financieros Mar23 ok.pdf')" target="_blank">Informe Estados Financieros Marzo 2023</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('Edos Financieros JUN23ok.pdf')" target="_blank">Informe Estados Financieros Junio 2023</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('Edos Financieros SEP23 (1).pdf')" target="_blank">Informe Estados Financieros Septiembre 2023</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('INFORME FINANCIERO Y PRESUPUESTAL IPICYT.pdf')" target="_blank">Informe Financiero y Presupuestal</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('Acta Comite Evaluacion Externo 2024_Evaluacion 2023 IPICYT.pdf')" target="_blank">Acta Comité Evaluación Externo 2024_Evaluacion 2023 IPICYT</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('Cuenta Publica 2023.pdf')" target="_blank">Cuenta Pública 2023</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('Opinion Comisarios a Edos Fin Dictaminados 2023_IPICYT.pdf')" target="_blank">Opinión Comisarios a Edos Fin Dictaminados 2023_IPICYT</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('Opinion Comisarios al desempe%C3%B1o Institucional IAE_2023.pdf')" target="_blank">Opinión Comisarios al Desempeño Institucional IAE_2023</a>
                        <a class="dictamenes__link" :href="getDictamenes2023('2. Evaluacion desempe%C3%B1o 2023_CONAHCYT_30092024.pdf')" target="_blank">Evaluación Desempeño IPICYT_CONAHCYT</a>
                    </div>
                </template>
            </AccordionLeft>


            <AccordionLeft :id="`accordion-4`" class="dictamenes__acordeon pt-2" group="parent-1">
                <template #title>
                    <h6 class="dictamenes__titulo">Documentos 2022</h6>
                </template>
                <template #content>
                    <div class="dictamanes__content d-inline-flex flex-column ga-3">
                        <a class="dictamenes__link" :href="getDictamenes2022('ESTADOS FINANCIEROS_2022.pdf')" target="_blank">Estados Financieros 2022</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('Evaluacion_IPICYT_CONACYT.pdf')" target="_blank">Evaluación_IPICYT_CONACYT</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('Acta del CEE 2023-EVALUACION EJERCICIO 2022 .pdf`')" target="_blank">Acta del CEE 2023 - Evaluación Ejercicio 2022</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('Estados Financieros JUN22 Ok.pdf')" target="_blank">Informe Estados Financieros Junio 2022</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('Edos Financieros SEP22.pdf')" target="_blank">Informe Estados Financieros Septiembre 2022</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('IPICYT Dictamen Financiero y Presupuestal 2022.pdf')" target="_blank">Dictamen Financiero y Presupuestal 2022</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('IPICYT Opinion Informe Autoevaluacion Anual 090623.pdf')" target="_blank">Opinión Comisarios Anual 2022 IPICYT</a>
                        <a class="dictamenes__link" :href="getDictamenes2022('IPICYT Informe Estados Financieros 090623.pdf')" target="_blank">Informe Estados Financieros 2022 IPICYT</a>
                    </div>
                </template>
            </AccordionLeft>

            <AccordionLeft :id="`accordion-5`" class="dictamenes__acordeon pt-2" group="parent-1">
                <template #title>
                    <h6 class="dictamenes__titulo">Documentos 2021</h6>
                </template>
                <template #content>
                    <div class="dictamanes__content d-inline-flex flex-column ga-3">
                        <a class="dictamenes__link" :href="getDictamenes2021('ACTA CEE 2022_EVALUACION DEL EJERCICIO 2021.pdf')" target="_blank">Acta CEE</a>
                        <a class="dictamenes__link" :href="getDictamenes2021('CAR 2021 Calificacion_IPICYT.pdf')" target="_blank">Evaluación CAR 2021</a>
                        <a class="dictamenes__link" :href="getDictamenes2021('Dictamen Financiero y Presupuestal 2021.pdf')" target="_blank">Estados Financieros Dictaminados 2021</a>
                        <a class="dictamenes__link" :href="getDictamenes2021('Estados Financieros Marzo OK.pdf')" target="_blank">Informe Estados Financieros Marzo 2021</a>
                        <a class="dictamenes__link" :href="getDictamenes2021('Estados Financieros Junio.pdf')" target="_blank">Informe Estados Financieros Junio 2021</a>
                        <a class="dictamenes__link" :href="getDictamenes2021('Informe Estados Financieros 2021 IPICYT.pdf')" target="_blank">Informe Estados Financieros 2021 IPICYT</a>
                        <a class="dictamenes__link" :href="getDictamenes2021('Opinion Comisarios Anual 2021 IPICYT.pdf')" target="_blank">Opinión Comisarios Anual 2021 IPICYT</a>
                    </div>
                </template>
            </AccordionLeft>

            <AccordionLeft :id="`accordion-6`" class="dictamenes__acordeon pt-2" group="parent-1">
                <template #title>
                    <h6 class="dictamenes__titulo">Documentos 2020</h6>
                </template>
                <template #content>
                    <div class="dictamanes__content d-inline-flex flex-column ga-3">
                        <a class="dictamenes__link" :href="getDictamenes2020('Estados Financieros MARZO20 Transparencia.pdf')" target="_blank">Informe Estados Financieros Marzo 2020</a>
                        <a class="dictamenes__link" :href="getDictamenes2020('Estados Financieros JUNIO2020 Plataforma.pdf')" target="_blank">Informe Estados Financieros Junio 2020</a>
                        <a class="dictamenes__link" :href="getDictamenes2020('Estados Financieros SEP 2020 - ok.pdf')" target="_blank">Informe Estados Financieros Septiembre 2020</a>
                        <a class="dictamenes__link" :href="getDictamenes2020('Opinion Comisarios Estados Financieros 2020.pdf')" target="_blank">Opinión Comisarios Estados Financieros 2020</a>
                        <a class="dictamenes__link" :href="getDictamenes2020('Opinion Comisarios Informe de Autoevaluacion 2020.pdf')" target="_blank">Opinión Comisarios Informe de Autoevaluación 2020</a>
                        <a class="dictamenes__link" :href="getDictamenes2020('Dictame CEE-IPICYT Evaluacio Ejercicio 2020.pdf')" target="_blank">Dictamen CEE-IPICYT Evaluación Ejercicio 2020</a>
                        <a class="dictamenes__link" :href="getDictamenes2020('Evalaucion CAR IPICYT 2020.pdf')" target="_blank">Evaluación CAR IPICYT 2020</a>
                    </div>
                </template>
            </AccordionLeft>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dictamenes__acordeon{
    border-top: 1px solid var(--color-gray-light);
    
    .dictamenes__titulo{

    }

    .dictamanes__content{

    }

    .dictamenes__link{

        text-decoration: underline;
        color: var(--color-secondary);

        &:hover{
            cursor: pointer;
        }
    }
}
</style>
