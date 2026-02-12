<script setup>
import { btn_blue } from '@ipicyt/components/button';
import { onMounted } from "vue";
import { setTopImg } from "@shared/helpers/setTopImg";
import { transparenciaTopImages } from "@modules/transparencia/data/topImages";
const { topImg, topTitle } = transparenciaTopImages.datosAbiertos;

onMounted(() => {
    setTopImg(topImg, topTitle);
});
</script>

<template>
    <div class="datosAbiertos">
        <h1>Transparencia: <span style="font-weight: 400;">Datos Abiertos</span></h1>
        <div class="datos">
            <p>Para acceder a los Datos Abiertos del IPICYT visita:</p>
            <btn_blue :url="'https://datos.gob.mx/dataset/?q=ipicyt'">
                <h4>www.datos.gob.mx</h4>
            </btn_blue>
        </div>
        <div class="date">
            <p>Fecha última actualización: 26 de junio de 2024</p>
        </div>
    </div>
</template>

<style>
    .datosAbiertos{
        h1{
            font-size: 2.9rem;
            color: black;
            line-height: 32px;
        }
        .datos{
            margin: 7.2rem 0 7.2rem 0;
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