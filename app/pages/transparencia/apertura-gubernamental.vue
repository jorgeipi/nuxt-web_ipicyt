<script setup>
// import btn_blue from "@ipicyt/components/button/general/btn_blue.vue";
// import AcordeonGeneral from "@ipicyt/components/item/AcordeonGeneral.vue";
// import { items } from "../data/aperturaGubernamental";

// const basePath = import.meta.env.VITE_IMG_PATH_SOURCE + '/transparencia/aperturaGubernamental'; 

import { ButtonLink } from '@components/buttons';
import { getAperturaGubernamentalPath } from '@shared/helpers/transparencia/getPath';
import { AccordionLeft } from '~/shared/components/accordion';
</script>

<template>
    <div class="apertura-gubernamental">
        <h2>Transparencia: <span class="font-weight-regular">Apertura Gubernamental</span></h2>

        <div class="d-flex flex-column ga-5 mb-18">
            <TitleOverline><h2>Información socialmente útil</h2></TitleOverline>

            <p>Aquí encontraras información básica del IPICYT como antecedentes de creación, disposiciones legales, objeto,
                atribuciones, funciones, etc.</p>

            <ButtonLink :href="getAperturaGubernamentalPath('Manual_Orgz_IPICYT_FINAL.pdf')" :color="'var(--color-text-subtle)'">
                <p>Manual de Organización del Instituto Potosino de Investigación Científica y Tecnológica, A.C.</p>
            </ButtonLink>

            <ButtonLink :href="getAperturaGubernamentalPath('Acta Constitutiva Protocolizacion IJC 2021.pdf')" :color="'var(--color-text-subtle)'">
                <p>Acta Constitutiva o Instrumento Jurídico de Creación del Instituto Potosino de Investigación Científica
                    y Tecnológica, A.C.</p>
            </ButtonLink>
        </div>

        <div class="d-flex flex-column ga-5">
            <TitleOverline><h2>Servicios y trámites de IPICYT</h2></TitleOverline>

            <div class="">
                <AccordionLeft>
                    <template #title>
                        Solicitud de admisión al posgrado
                    </template>
                    <template #content>
                    <ul class="pl-5">
                        <li><span class="font-weight-bold">Descripción Del Objetivo Del Servicio: </span>Ofrecer a la ciudadanía información para cursar estudios de posgrado en investigación científica en áreas como Biología Molecular, Matemáticas Aplicadas, Materiales Avanzados, Geociencias Aplicadas y Ciencias Ambientales.</li>
                        <li><span class="font-weight-bold">Modalidad del servicio: </span> Presencial</li>
                        <li><span class="font-weight-bold">Requisitos: </span> <a class="color-secondary">Formulario</a></li>
                    </ul>
                    </template>
                </AccordionLeft>
            </div>
        </div>

        <!-- 
        <AcordeonGeneral v-for="(item, index) in items" :key="index" :title="item.title" :id="index.toString()">
            <ul>
                <li v-for="(i, j) in item.info" :key="j">
                    <span class="bold"> {{ i.descripcion + ' ' }}</span>
                    <span v-if="i.parrafo" v-html="i.parrafo"></span>
                    <a class="resalte" :href="i.url" v-else>
                        {{ i.urlname ? i.urlname : i.url }}
                    </a>

                </li>
            </ul>
        </AcordeonGeneral> -->
    </div>
</template>

<style>
.apertura-gubernamental{
    max-width: 609px;
}
.apertura {
    margin-bottom: 5rem;
    max-width: 609px;
    h1 {
        font-size: 2.9rem;
        color: black;
        line-height: 32px;
        margin-bottom: 3rem;
    }

    ul {
        margin: 2rem 4rem;

        li {
            padding: 0.5rem 0 0.5rem 0;
        }
    }
}
</style>