<script setup lang="ts">
import { ArrowDFGreen, HandRFBlueIcon } from '@components/icons'
import { info } from '@data/home/salas/info.js'
import { AccordionLeft } from '@components/accordion'
</script>

<template>
    <div class="displayCenter">
        <div class="salas">
            <div class="salas__credencial">
                <div class="salas__credencial-box">
                    <HandRFBlueIcon class="salas__credencial-icon"/>
                    <p class="salas__credencial-text">
                        Selecciona el edificio del cual deseas ver la disponibilidad y/o apartar el recinto:
                    </p>
                </div>
            </div>
        
            <div class="salas__acordeones-container">
                <AccordionLeft 
                    v-for="(edificio, index) in info" 
                    :key="index"
                    :id="`accordion-${index}`"
                    class="salas__acordeon-item"
                >
                    <template #icon>
                        <ArrowDFGreen />
                    </template>
                    <template #title>
                        <h6 class="salas__edificio-titulo">{{ edificio.Edificio }}</h6>
                    </template>
                    <template #content>
                        <table class="salas__reservas">
                            <thead>
                                <tr>
                                    <th>Recinto</th>
                                    <th>
                                        Para apartar, <br> 
                                        comunicarse con
                                    </th>
                                    <th>Extensión</th>
                                    <th>Correo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, dataIndex) in edificio.data" :key="dataIndex">
                                    <td data-label="Recinto">
                                        <a :href="data.url" target="_blank" rel="noopener noreferrer">
                                            {{ data.recinto }}
                                        </a>
                                    </td>
                                    <td data-label="Para apartar, comunicarse con">
                                        <span 
                                            v-for="(titular, i) in data.titular" 
                                            :key="i"
                                        >
                                            {{ titular }}
                                        </span>
                                    </td>
                                    <td data-label="Extensión">
                                        <span 
                                            v-for="(ext, i) in data.ext" 
                                            :key="i"
                                        >
                                            {{ ext }}
                                        </span>
                                    </td>
                                    <td data-label="Correo">
                                        <span 
                                            v-for="(correo, i) in data.correo" 
                                            :key="i"
                                        >
                                            {{ correo }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </template>
                </AccordionLeft>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// BLOCK: salas
.salas {
    max-width: 789px;
    width: 100%;

    // ELEMENT: credencial
    &__credencial {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90px;
        background-color: #eeeded;
        margin-bottom: 7.2rem;
        border-radius: 10px;
        padding: 2rem;

        @media (max-width: 720px) {
            flex-direction: column;
            height: auto;
            padding: 2rem 1rem;
        }
    }

    &__credencial-box {
        display: inline-flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    &__credencial-icon {
        width: 43.75px;
        height: 50px;
        flex-shrink: 0;
        transform: rotate(90deg);

        // @media (max-width: 720px) {
        //     height: 55px;
        //     width: auto;
        // }
    }

    &__credencial-text {
        flex: 1;
        text-align: start;
        display: inline-flex;
    }

    // ELEMENT: acordeones-container
    &__acordeones-container {
        // Sin estilos adicionales, solo para agrupar
    }

    // ELEMENT: acordeon-item
    &__acordeon-item {
        border-top: 1px solid var(--color-gray-light);
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;

        &:last-child {
            border-bottom: 1px solid var(--color-gray-light);
        }
    }

    // ELEMENT: edificio-titulo
    &__edificio-titulo {
        margin: 0;
        color: black;
        font-weight: 600;
        font-size: 2.2rem;
    }

    // ELEMENT: reservas (tabla)
    &__reservas {
        width: 100%;
        border-collapse: collapse;
        margin-top: 4.2rem;

        th,
        td {
            padding: 2.5rem 1rem 2.5rem 1rem;
            vertical-align: top;
        }

        th {
            text-align: left;
            font-weight: bold;
            color: #2453F7;
        }

        td {
            border-top: 1px solid #ddd;
            height: auto;

            span {
                display: table;
                margin-bottom: 2rem;
            }

            a {
                color: #2453F7;
                text-decoration: underline;

                &:hover {
                    font-weight: bold;
                    color: black;
                }
            }
        }

        // Responsive: Mobile
        @media screen and (max-width: 768px) {
            thead {
                display: none;
            }

            tbody {
                tr {
                    display: block;
                    width: 100%;
                    margin-bottom: 4rem;
                    border: 1px solid #ccc;
                }

                td {
                    display: flex;
                    flex-direction: row;
                    align-items: stretch;
                    width: 100%;
                    padding: 0;
                    border-top: 1px solid #eee;
                    word-break: break-word;
                    hyphens: auto;
                    -webkit-hyphens: auto;
                    -moz-hyphens: auto;
                    -ms-hyphens: auto;

                    &::before {
                        content: attr(data-label);
                        display: inline-block;
                        width: 115px;
                        min-width: 115px;
                        padding: 1rem;
                        background-color: #848BA6;
                        color: white;
                        font-weight: bold;
                        box-sizing: border-box;
                        margin-right: 1rem;
                    }

                    > * {
                        padding: 1rem;
                        width: 60%;
                        box-sizing: border-box;
                        background-color: white;
                    }

                    &:last-child {
                        border-bottom: none;
                    }

                    span {
                        margin-right: 2rem;
                    }
                }
            }
        }
    }
}
</style>