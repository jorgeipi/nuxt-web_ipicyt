<script setup>
import gobiernoAicon from "/imgs/icons/gobiernoAbierto_icon.png"

import { onMounted } from "vue";
import { setTopImg } from "@shared/helpers/setTopImg";
import { transparenciaTopImages } from "@modules/transparencia/data/topImages";
const { topImg, topTitle } = transparenciaTopImages.gobiernoAbierto;

onMounted(() => {
    setTopImg(topImg, topTitle);
});

</script>

<template>
    <div class="gobiernoAbierto">
        <h1>Transparencia: <span style="font-weight: 400;">Gobierno Abierto</span></h1>
        <div class="gobierno">
            <img :src="gobiernoAicon" alt="gobiernoAicon">
            <div>
                <p>El Instituto Potosino de Investigación Científica y Tecnológica, A.C. (IPICYT), no se encuentra
                    dentro del Plan de Acción de la Alianza para el Gobierno Abierto (AGA).</p>
                <p>La acción no aplica en tanto que la Institución no ha adquirido compromisos en el contexto de la AGA
                    (<a href="https://portal-transparencia.funcionpublica.gob.mx/gobierno-abierto/mexico-en-la-%20alianza-para-el-gobierno-abierto/"
                        class="resalte">México en la AGA</a>)</p>
            </div>
        </div>
        <div class="date">
            <p>Fecha última actualización: 08 de Julio de 2024</p>
        </div>
    </div>
</template>

<style>
.gobiernoAbierto {
    max-width: 609px;
    h1 {
        font-size: 2.9rem;
        color: black;
        line-height: 32px;
    }

    .gobierno {
        margin: 7.2rem 0 7.2rem 0;
        background-color: #EEEDED;
        border-radius: 10px;
        width: 100%;
        height: 182px;
        display: flex;
        padding: 3rem;
        justify-content: center;

        img {
            width: 68px;
            height: 52px;
            margin-right: 2.5rem;
        }

        @media (max-width:720px) {
            height: auto;
            flex-direction: column;
        }
    }

    .date {
        display: inline-block;
        border-top: 1px solid #CCCCCC;

        p {
            color: #848BA6;
            padding-top: 1rem;
        }
    }

}
</style>