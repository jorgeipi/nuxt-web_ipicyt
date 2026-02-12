<script setup lang="ts">
import { tables } from "@data/proteccion-de-datos/tables";
import { buttons } from "@data/proteccion-de-datos/buttons";

import { AccordionLeft, AccordionRight } from '@components/accordion';
import { ArrowDFGray } from '@components/icons'
import { Table } from '@components/table'
import { ButtonLink } from '@components/buttons'
import { BlueTitle } from "@components/title";
</script>

<template>
    <div class="dpInformacion">

        <div class="dpInformacion__intro mb-8">
            <h2 class="mb-12">Protección de Datos Personales:<span class="font-weight-regular">Información relevante en materia de protección de datos personales</span></h2>
            <BlueTitle>
                Anexo 8. Formatos obligatorios para la publicación de medios de verificación documentales dentro del apartado virtual “Protección de Datos Personales”
            </BlueTitle>
        </div>


        <div class="dpInformacion__formatos mb-20 d-flex flex-column ga-8">
            <AccordionLeft class="dpInformacion__formatos-accordion pt-5" v-for="(table, index) in tables" :key="index" :id="table.title">
                <template #icon>
                    <ArrowDFGray />
                </template>
                <template #title>
                    <h6 class="dpInformacion__formatos-titulo">{{ table.title }}</h6>
                </template>
                <template #content>
                    <div class="tableContainer">
                        <Table>
                            <table>
                                <tbody v-if="table.intro" class="intro-header">
                                    <tr>
                                        <td colspan="2">Ejercicio (año) del que se presenta la información:</td>
                                        <td>{{table.intro[0]}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Fecha de publicación de la información:</td>
                                        <td>{{table.intro[1]}}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">Fecha de la última actualización:</td>
                                        <td>{{table.intro[2]}}</td>
                                    </tr>
                                </tbody>
                                <thead class="header-main">
                                    <tr>
                                        <th>No.</th>
                                        <th>Criterio</th>
                                        <th>Medio de verificacíon</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(row, i) in table.info" :key="i">
                                    <td data-label="No.">{{ row[0] }}</td>
                                    <td data-label="Criterio" v-html="row[1]"></td>
                                    <td data-label="Medio de verificación" class="link" v-if="row[2] && row[2].includes('http')">
                                        <a :href="row[2]" target="_blank" rel="noopener">Da Clic Aquí</a>
                                    </td>
                                    <td data-label="Medio de verificación" v-else-if="row[2] && row[2].includes('nolink:')">
                                        {{row[2].replace('nolink:', '')}}
                                    </td>
                                    <td data-label="Medio de verificación" class="link" v-else-if="row[2]">
                                        <!-- <router-link :to="{ name: row[2] }">Da Clic Aquí</router-link> -->
                                        <router-link to="/">Da Clic Aquí</router-link>
                                    </td>
                                    <td data-label="Medio de verificación" v-else>
                                        No aplica
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Table>
                    </div>
                </template>
            </AccordionLeft>
        </div>

        <div class="dpInformacion__normatividad d-flex flex-column ga-8">
            <AccordionRight v-for="(item, index) in buttons" :key="index" :id="item.title">
                <template #title>
                    <h2 class="dpInformacion__normatividad-titulo">{{ item.title }}</h2>
                </template>
                <template #content>
                    <div class="d-flex flex-column ga-7">
                        <div v-for="(button, i) in item.buttons" :key="i">
                            <ButtonLink :href="button.url" color="var(--color-text-subtle)">
                                {{ button.text }}
                            </ButtonLink>
                        </div>
                    </div>
                </template>
            </AccordionRight>
        </div>

    </div>
</template>

<style scoped lang="scss">
.dpInformacion{
    .dpInformacion__formatos{
        &-accordion{
            border-top: 1px solid var(--color-gray-light);
        }
    }
    max-width: 609px;
    .link{
        a{
            color: var(--color-secondary) !important;
            font-weight: 700;
        }
    }
    .tableContainer{
        margin-top: 2rem;
    }
}
</style>