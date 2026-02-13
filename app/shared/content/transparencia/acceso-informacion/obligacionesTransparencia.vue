<script setup>
import { AccordionRight } from '@components/accordion'
import { ButtonLink } from '@components/buttons'
import { getAccesoInfoDenunciasPath } from '@shared/helpers/transparencia/getPath'
import { dataDenuncias, columnsDenuncias } from '@data/transparencia/acceso-informacion/denuncias';
</script>

<template>
    <AccordionRight id="obligaciones-transparencia">
        <template #title>
            <h2>Obligaciones de Trasparencia</h2>
        </template>

        <template #content>

            <div class="d-flex flex-column ga-18">
                <div><p>Aquí podrás consultar el directorio, currícula de personas servidoras
                        públicas, contrataciones, sueldos, presupuestos, entre otra información
                        del Intituto Potosino de Investigación Científica y Tecnológica, A.C</p>
                    <ButtonLink class="mt-5" :color="'var(--color-text-subtle)'"
                        href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio">
                        <p>Sistema de Portales de Obligaciones de Transparencia IPICYT</p>
                    </ButtonLink>
                </div>

                <div class="d-flex flex-column ga-5">
                    <h2>Obligaciones de Trasparencia</h2>
                    <p>Consulta las denuncias presentadas por las personas ante el Instituto
                        Nacional de Transparencia, Acceso a la Información y Protección de Datos
                        Personales (Transparencia para el Pueblo) en contra del Instituto Potosino de Investigación
                        Científica y Tecnológica, A.C. (IPICYT) por incumplimiento y/o por falta
                        de actualización de las Obligaciones de Transparencia previstas en los
                        artículos 70 a 83 de la Ley General de Transparencia y Acceso a la
                        Información Pública y 69 a 76 de la Ley Federal de Transparencia y Acceso
                        a la Información Pública desde el año 2021.</p>

                    <div class="d-flex flex-wrap ga-5">
                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias 2021.xlsx')">
                            <p>Denuncias Ejercicio 2021</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias_2022.xlsx')">
                            <p>Denuncias Ejercicio 2022</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias_2023.xlsx')">
                            <p>Denuncias Ejercicio 2023</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias_2024.xlsx')">
                            <p>Denuncias Ejercicio 2024</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias tecer trimestre 2025.xlsx')">
                            <p>Denuncias tecer trimestre 2025</p>
                        </ButtonLink>

                        <ButtonLink :color="'var(--color-text-subtle)'"
                            :href="getAccesoInfoDenunciasPath('Denuncias cuarto trimestre 2025.xlsx')">
                            <p>Denuncias cuarto trimestre 2025</p>
                        </ButtonLink>
                    </div>
                </div>

                <div>
                    <p><span class="font-weight-bold">Denuncias ejercicio 2025</span><a class="color-secondary" :href="getAccesoInfoDenunciasPath(`Denuncias_2025.xlsx`)">(descargar tabla)</a></p>
                    <TableGray class="small" :columns="columnsDenuncias" :data="dataDenuncias" />
                </div>

            </div>
        </template>
    </AccordionRight>
</template>

<style lang="scss" scoped>
.small {
    font-size: 12px!important;
}
</style>