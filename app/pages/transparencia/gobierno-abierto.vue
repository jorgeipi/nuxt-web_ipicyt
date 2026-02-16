<script setup>
import { EyeIcon } from "@components/Icons"
</script>

<template>
    <div class="gobierno-abierto">
        <h2 class="mb-8">Transparencia: <span class="font-weight-regular">Gobierno Abierto</span></h2>

        <div class="gobierno-abierto__content">
            <EyeIcon class="gobierno-abierto__icon" />
            <div>
                <p>El Instituto Potosino de Investigación Científica y Tecnológica, A.C. (IPICYT), no se encuentra
                    dentro del Plan de Acción de la Alianza para el Gobierno Abierto (AGA).</p>
                <p>La acción no aplica en tanto que la Institución no ha adquirido compromisos en el contexto de la AGA
                    (<a href="https://portal-transparencia.funcionpublica.gob.mx/gobierno-abierto/mexico-en-la-%20alianza-para-el-gobierno-abierto/"
                        class="color-secondary link">México en la AGA</a>)</p>
            </div>
        </div>
        <div class="gobierno-abierto__date">
            <p>Fecha última actualización: 08 de Julio de 2024</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.gobierno-abierto {
    max-width: 609px;

    &__icon{
        flex-shrink: 0;
                    width: 68px;
            height: 52px;
    }

    .gobierno-abierto__content {
        margin: 7.2rem 0 7.2rem 0;
        background-color: #EEEDED;
        border-radius: 10px;
        width: 100%;
        height: 182px;
        display: flex;
        gap: 2.4rem;
        padding: 3rem;
        justify-content: center;


        @media (max-width:720px) {
            height: auto;
            flex-direction: column;
        }
    }

    .gobierno-abierto__date {
        display: inline-block;
        border-top: 1px solid #CCCCCC;

        p {
            color: #848BA6;
            padding-top: 1rem;
        }
    }

}

.link{
    &:hover{
        font-weight: inherit;
        color: var(--color-black)!important;
        text-decoration: none;
    }
}
</style>