<script setup>
import btn_blue from "@ipicyt/components/button/general/btn_blue.vue";
import AcordeonGeneral from "@ipicyt/components/item/AcordeonGeneral.vue";
import TitleOverline from "@ipicyt/components/item/TitleOverline.vue";
import { items } from "../data/aperturaGubernamental";

import { onMounted } from "vue";
import { setTopImg } from "@shared/helpers/setTopImg";
import { transparenciaTopImages } from "@modules/transparencia/data/topImages";
const { topImg, topTitle } = transparenciaTopImages.aperturaGubernamental;
const basePath = import.meta.env.VITE_IMG_PATH_SOURCE + '/transparencia/aperturaGubernamental'; 

onMounted(() => {
    setTopImg(topImg, topTitle);
});
</script>

<template>
    <div class="apertura">
        <h1>Transparencia: <span style="font-weight: 400;">Apertura Gubernamental</span></h1>
        <TitleOverline>{{ "Información socialmente útil" }}</TitleOverline>
        <p>Aquí encontraras información básica del IPICYT como antecedentes de creación, disposiciones legales, objeto,
            atribuciones, funciones, etc.</p>
        <btn_blue style="background-color: #848BA6"
            :url="`${basePath}/Manual_Orgz_IPICYT_FINAL.pdf`">
            <h4>Manual de Organización del Instituto Potosino de Investigación Científica y Tecnológica, A.C.</h4>
        </btn_blue>
        <btn_blue style="background-color: #848BA6"
            :url="`${basePath}/Acta%20Constitutiva%20Protocolizacion%20IJC%202021.pdf`">
            <h4>Acta Constitutiva o Instrumento Jurídico de Creación del Instituto Potosino de Investigación Científica
                y Tecnológica, A.C.</h4>
        </btn_blue>
        <TitleOverline style="margin-top: 7.2rem;">{{ "Servicios y trámites de IPICYT" }}</TitleOverline>
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
        </AcordeonGeneral>
    </div>
</template>

<style>
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