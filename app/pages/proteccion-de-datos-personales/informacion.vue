<script setup lang="ts">
import { tables } from "@data/proteccion-de-datos/tables";

import { ArrowDFGray } from '@components/icons'
import { getDatosInfoPoliticasPath, getDatosInfoInfografiasPath, getDatosInfoProcedimientoPath, getDatosInfoGuiaPath } from "@shared/helpers/proteccion-de-datos/getPath";
</script>

<template>
    <div class="dpInformacion">

        <div class="dpInformacion__intro mb-8">
            <h2 class="mb-12">Protección de Datos Personales:<span class="font-weight-regular">Información relevante en
                    materia de protección de datos personales</span></h2>
            <BlueTitle>
                Anexo 8. Formatos obligatorios para la publicación de medios de verificación documentales dentro del
                apartado virtual “Protección de Datos Personales”
            </BlueTitle>
        </div>


        <div class="dpInformacion__formatos mb-20 d-flex flex-column ga-8">
            <AccordionLeft class="dpInformacion__formatos-accordion pt-5" v-for="(table, index) in tables" :key="index"
                :id="table.title">
                <template #icon>
                    <ArrowDFGray />
                </template>
                <template #title>
                    <h6 class="dpInformacion__formatos-titulo">{{ table.title }}</h6>
                </template>
                <template #content>
                    <div class="tableContainer">
                        <TableGray class="mb-12" th-size="1.5rem" thead-color="#848ba6">
                            <template #body-above>
                                <tbody v-if="table.intro" class="intro-header">
                                    <tr>
                                        <td colspan="2">Ejercicio (año) del que se presenta la información:</td>
                                        <td>{{ table.intro[0] }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Fecha de publicación de la información:</td>
                                        <td>{{ table.intro[1] }}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Fecha de la última actualización:</td>
                                        <td>{{ table.intro[2] }}</td>
                                    </tr>
                                </tbody>
                            </template>
                            <template #thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Criterio</th>
                                    <th>Medio de verificacíon</th>
                                </tr>
                            </template>
                            <template #tbody>
                                <tr v-for="(row, i) in table.info" :key="i">
                                    <td data-label="No.">{{ row[0] }}</td>
                                    <td data-label="Criterio" v-html="row[1]"></td>
                                    <td data-label="Medio de verificación" class="link"
                                        v-if="row[2] && row[2].includes('http')">
                                        <a :href="row[2]" target="_blank" rel="noopener">Da Clic Aquí</a>
                                    </td>
                                    <td data-label="Medio de verificación"
                                        v-else-if="row[2] && row[2].includes('nolink:')">
                                        {{ row[2].replace('nolink:', '') }}
                                    </td>
                                    <td data-label="Medio de verificación" class="link" v-else-if="row[2]">
                                        <!-- <router-link :to="{ name: row[2] }">Da Clic Aquí</router-link> -->
                                        <router-link to="/">Da Clic Aquí</router-link>
                                    </td>
                                    <td data-label="Medio de verificación" v-else>
                                        No aplica
                                    </td>
                                </tr>
                            </template>
                        </TableGray>
                    </div>
                </template>
            </AccordionLeft>
        </div>

        <div class="dpInformacion__normatividad d-flex flex-column ga-8">
            <AccordionRight id="normatividad">
                <template #title>
                    <h2 class="dpInformacion__normatividad-titulo">Normatividad</h2>
                </template>
                <template #content>
                    <div class="d-inline-flex flex-column ga-7">
                        <ButtonLink href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LGPDPPSO.pdf" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Ley General de Protección de Datos Personales en Posesión de los Sujetos Obligados</p>
                        </ButtonLink>
                        <ButtonLink href="https://www.dof.gob.mx/nota_detalle.php?codigo=5511540&fecha=26/01/2018#gsc.tab=0" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Acuerdo mediante el cual se aprueban los Lineamientos Generales de Protección de Datos Personales</p>
                        </ButtonLink>
                        <ButtonLink href="https://www.dof.gob.mx/nota_detalle.php?codigo=5605789&fecha=25/11/2020#gsc.tab=0" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Acuerdo mediante el cual se aprueba la adición de un Título Décimo a los Lineamientos Generales de Protección de Datos Personales Políticas de Privacidad</p>
                        </ButtonLink>
                    </div>
                </template>
            </AccordionRight>

            <AccordionRight id="politicas-de-privacidad">
                <template #title>
                    <h2 class="dpInformacion__normatividad-titulo">Políticas de Privacidad</h2>
                </template>
                <template #content>
                    <div class="d-inline-flex flex-column ga-7">
                        <ButtonLink :href="getDatosInfoPoliticasPath('Politicas de Privacidad-2021.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">2021</p>
                        </ButtonLink>
                        <ButtonLink :href="getDatosInfoPoliticasPath('Politicas de Privacidad-2022.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">2022</p>
                        </ButtonLink>
                    </div>
                </template>
            </AccordionRight>

            <AccordionRight id="infografias">
                <template #title>
                    <h2 class="dpInformacion__normatividad-titulo">Infografías</h2>
                </template>
                <template #content>
                    <div class="d-inline-flex flex-column ga-7">
                        <div><ButtonLink :href="getDatosInfoInfografiasPath('Infografia 1 Instrumentos Tecnicos de Evaluacion.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Instrumentos Técnicos de Evaluación</p>
                        </ButtonLink></div>

                        <div><ButtonLink :href="getDatosInfoInfografiasPath('Infografia 2 Medios de verificacion documentales para la evaluacion del desempeño.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Medios de verificación documentales para la evaluación del desempeño</p>
                        </ButtonLink></div>

                        <div><ButtonLink :href="getDatosInfoInfografiasPath('Infografia 3 Dudas frecuentes del proceso de evaluacion del desempeño.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Dudas frecuentes del proceso de evaluación del desempeño</p>
                        </ButtonLink></div>

                        <div><ButtonLink :href="getDatosInfoInfografiasPath('Infografia 4 Reglas generales de evaluacion.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Reglas generales de evaluación</p>
                        </ButtonLink></div>

                        <div><ButtonLink :href="getDatosInfoInfografiasPath('Infografia 5 Formatos para la evaluacion del desempeño (Anexo 8).pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Formatos para la evaluación del desempeño (Anexo 8)</p>
                        </ButtonLink></div>
                    </div>
                </template>
            </AccordionRight>

            <AccordionRight id="procedimiento">
                <template #title>
                    <h2 class="dpInformacion__normatividad-titulo">Procedimiento y formato de presentación de denuncia</h2>
                </template>
                <template #content>
                    <div class="d-inline-flex flex-column ga-7">
                        <div><ButtonLink :href="getDatosInfoProcedimientoPath('Procedimiento y formato para la presentacion de denuncia.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Procedimiento y formato de presentación de denuncia</p>
                        </ButtonLink></div>
                    </div>
                </template>
            </AccordionRight>


            <AccordionRight id="guia-robo-identidad">
                <template #title>
                    <h2 class="dpInformacion__normatividad-titulo">Guía para prevenir el robo de identidad</h2>
                </template>
                <template #content>
                    <div class="d-inline-flex flex-column ga-7">
                        <div><ButtonLink :href="getDatosInfoGuiaPath('Guia_para_prevenir_el_robo_de_identidad.pdf')" color="var(--color-text-subtle)">
                            <p class="font-weight-bold">Guía para prevenir el robo de identidad</p>
                        </ButtonLink></div>
                    </div>
                </template>
            </AccordionRight>
        </div>

    </div>
</template>

<style scoped lang="scss">
.dpInformacion {
    .dpInformacion__formatos {
        &-accordion {
            border-top: 1px solid var(--color-gray-light);
        }
    }

    max-width: 609px;

    .link {
        a {
            color: var(--color-secondary) !important;
            font-weight: 700;
        }
    }

    .tableContainer {
        margin-top: 2rem;
    }
}
</style>