<script setup>
// import { Concepto, BlueTitle, Reconocimientos, Agradecimientos, Banner2, MuralData, MuralVideo } from '../components/mural'
import { getMuralPath } from '@shared/helpers/acerca/getPath';
</script>

<template>
    <div class="acerca--mural">
        <main class="mural--main">
            <section class="mural--intro" aria-labelledby="titulo-intro">
                <div class="mural--content">
                    <p class="mural--content_info">
                        <strong>El Mural IPICYT:</strong> Ciencia, Tecnología y Sociedad, nace del interés de los
                        académicos y administrativos del Instituto por plasmar de manera artística y monumental el papel
                        de la ciencia en la comunidad y a partir de la visión de los artistas de México.
                        <br /><br />
                        Una convocatoria publicada en Noviembre de 2024 reunió 51 propuestas de 14 estados de la
                        república mexicana, de las cuales se eligió a un ganador.
                    </p>
                </div>
            </section>

            <section class="mural--data">
                <MuralBanner2 />
                <div class="mural--metadata">
                    <MuralData />
                    <MuralVideo />
                </div>
            </section>

            <section class="mural--mean">
                <div class="mural--mean_boxtitle">
                    <MuralBlueTitle>Significado y composición</MuralBlueTitle>

                    <p>Una obra que refleja la esencia del instituto y su visión a futuro.
                        <br /><strong>“Rich Arnauda”</strong>
                    </p>
                </div>

                <div class="mural--mean_conceptos">
                    <MuralConcepto :img="getMuralPath('concepto1.png')">
                        El mural se inspira en los trazos del logotipo conmemorativo de los 25 años del IPICYT.
                    </MuralConcepto>
                    <MuralConcepto :img="getMuralPath('concepto2.png')">
                        <strong>En su parte superior, un monolito o calendario simboliza la fuerza perdurable de nuestras culturas ancestrales.</strong> Desde una esfera central surge el movimiento visual que conecta toda la composición.
                    </MuralConcepto>
                    <MuralConcepto :img="getMuralPath('concepto3.png')">
                        <strong>Cinco figuras humanas representan las áreas de investigación del Instituto y, a la vez, la diversidad de la humanidad en género, cultura e ideología.</strong> A su alrededor flotan planetas, minerales, células y átomos, reflejando la conexión constante entre el conocimiento y el universo.
                    </MuralConcepto>
                    <MuralConcepto :img="getMuralPath('concepto4.png')" class="withouthr">
                        Las figuras emergen de los cuatro elementos <strong>—Aire, Agua, Tierra y Fuego—</strong> representados en un estilo gráfico prehispánico que alude a la totalidad del cosmos y a la armonía entre ciencia, naturaleza y espíritu.
                    </MuralConcepto>
                </div>
            </section>

            <section class="mural--trayectoria">
                <MuralBlueTitle class="mural--trayectoria_title">¿Quién es <strong>Rich Arnauda ?</strong></MuralBlueTitle>

                <div class="mural--biografia">
                    <div class="mural--biografia_content">
                        <h3 class="mural--biografia_content-title">Artista Plástico de 30 años de trayectoria</h3>
                        <p class="mural--biografia_content-info">
                            Estudió artes en el CEDART del Instituto Nacional de Bellas Artes de México y más adelante
                            tomó cursos y clases privadas con reconocidos maestros en artes plásticas, dibujo, pintura,
                            acuarela, trencadis, historia del arte, bioconstrucción, etc. <strong>En 2008, con su primer
                                exposición en Barcelona inicia de manera profesional su carrera como pintor.</strong>
                            Actualmente es
                            también escultor y muralista. Desde entonces ha expuesto su trabajo en <strong>México,
                                Barcelona,
                                Suiza, Bélgica, Eslovenia, Nueva York, Austria,</strong> y realizado obra pública
                            (murales, fuentes,
                            pisos y esculturas) en los estados de Morelos, Estado de México, Puebla, Michoacán y CDMX.
                        </p>
                    </div>

                    <div class="mural--biografia_boximg">
                        <img class="mural--biografia_img" :src="getMuralPath('rich.png')" alt="">
                    </div>
                </div>

                <MuralReconocimientos />
            </section>

            <section class="mural--patrocinadores">
                <!-- JDRM -->
                <MuralBlueTitle class="mural--patrocinadores-title">Patrocinadores</MuralBlueTitle>

                <div class="mural--patrocinadores-fleximgs">
                    <div class="mural--patrocinadores-boximg">
                        <img class="mural--patrocinadores-img" :src="getMuralPath('mural_patrocinadores.svg')"
                            alt="Logotipos de los patrocinadores del mural IPICYT: Ciencia, Tecnología y Sociedad" />
                    </div>
                    <div class="mural--patrocinadores-boximg">
                        <img class="mural--patrocinadores-img" :src="getMuralPath('mural_patrocinadores2.svg')"
                            alt="Logotipos de los patrocinadores del mural IPICYT: Ciencia, Tecnología y Sociedad" />
                    </div>
                    <br></br>
                    <div class="mural--patrocinadores-boximg">
                        <img class="mural--patrocinadores-img" :src="getMuralPath('mural_patrocinador-ormart.svg')"
                            alt="Logotipos de los patrocinadores del mural IPICYT: Ciencia, Tecnología y Sociedad" />
                    </div>
                    <div class="mural--patrocinadores-boximg">
                        <img class="mural--patrocinadores-img" :src="getMuralPath('mural_patrocinador-ac-solutions.svg')"
                            alt="Logotipos de los patrocinadores del mural IPICYT: Ciencia, Tecnología y Sociedad" />
                    </div>
                    <div class="mural--patrocinadores-boximg">
                        <img class="mural--patrocinadores-img" :src="getMuralPath('mural_patrocinador-ascade.svg')"
                            alt="Logotipos de los patrocinadores del mural IPICYT: Ciencia, Tecnología y Sociedad" />
                    </div>
                </div>

            </section>

            <section class="mural--agradecimientos">
                <MuralBlueTitle class="mural--agradecimientos_title"><strong>Gracias a toda la comunidad de trabajadores,
                        estudiantes y egresados que han cooperado con su donativo</strong> (aparición por orden
                    alfabético)</MuralBlueTitle>

                <MuralAgradecimientos />
            </section>
        </main>
    </div>
</template>

<style lang="scss">
@use '@/styles/base/mixins' as m;

.acerca--mural {
    overflow-x: hidden;

    .mural--main {
        display: flex;
        flex-direction: column;
        gap: 10rem;

        .mural--intro {
            display: flex;
            flex-direction: column;
            gap: 6.3rem;

            overflow-x: hidden;

            .mural--content {
                display: flex;
                flex-direction: column;
                gap: 6.5rem;
                max-width: 790px;
                margin: 0 auto;


                @include m.tablet {
                    padding: 0 40px;
                }

                .mural--content_info {
                    color: #000;
                    // font-family: "Noto Sans";
                    text-align: center;
                    font-size: 18px;
                    font-style: normal;
                    line-height: 36px;
                    /* 200% */
                }
            }
        }

        .mural--data{
            display: flex;
            flex-direction: column;
            gap: 7.2rem;
            max-width: 1195px;
            margin: 0 auto;
            width: min(1195px, 100%);

            @include m.tablet {
                padding: 0 40px;
                gap: 3.6rem;
            }

            .mural--metadata {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
                gap: 2rem;

                @include m.tablet{
                    gap: 2.7rem;
                }
            }
        }

        .mural--mean {
            display: flex;
            flex-direction: column;
            gap: 128px;

            @include m.tablet {
                padding: 0 40px;
            }

            .mural--mean_boxtitle {
                display: flex;
                flex-direction: column;
                gap: 3.8rem;
                max-width: 790px;
                margin: 0 auto;

                p {
                    color: #000;
                    text-align: center;
                    font-family: "Noto Sans";
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 36px;
                    /* 200% */

                    strong {
                        font-style: italic;
                    }
                }
            }

            .mural--mean_conceptos {
                max-width: 1052px;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                // gap: 6rem;
            }
        }

        .mural--trayectoria {
            display: flex;
            flex-direction: column;
            gap: 6.5rem;
            // max-width: 790px;
            // margin: 0 auto;
            // width: min(790px, 100%);


            @include m.tablet {
                padding: 0 40px;
            }

            .mural--trayectoria_title {
                max-width: 790px;
                margin: 0 auto;
                width: min(790px, 100%);
            }

            .mural--biografia {
                display: flex;
                flex-direction: row;
                gap: 2rem;
                max-width: 790px;
                margin: 0 auto;
                width: min(790px, 100%);

                @include m.tablet {
                    flex-direction: column;
                }

                .mural--biografia_content {
                    display: flex;
                    flex-direction: column;
                    gap: 2.4rem;

                    .mural--biografia_content-title {
                        color: var(--color-secondary);
                        font-size: 1.8rem;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 36px;
                        /* 200% */
                    }

                    .mural--biografia_content-info {
                        color: #000;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 28px;
                        /* 186.667% */
                    }
                }

                .mural--biografia_boximg {
                    max-width: 387px;
                    min-width: 200px;
                    // height: 387px;
                    max-height: 387px;
                    border-radius: 50%;
                    flex-shrink: 0;

                    .mural--biografia_img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        border-radius: 50%;
                        flex-shrink: 0;
                    }
                }
            }

            .mural--reconocimientos {}
        }

        .mural--patrocinadores {
            display: flex;
            flex-direction: column;
            gap: 6rem;
            max-width: 1195px;
            margin: 0 auto;
            width: min(1195px, 100%);


            @include m.tablet {
                padding: 0 40px;
            }

            .mural--patrocinadores-title {
                align-self: center;
                max-width: 790px;
                width: min(790px, 100%);
            }

            .mural--patrocinadores-fleximgs {
                display: inline-flex;
                padding-left: 3.673px;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                column-gap: 90.906px;
                row-gap: 98px;

                @include m.tablet{
                    row-gap: 40px;
                }

                @include m.mobile{
                    row-gap: 20px;
                }

                .mural--patrocinadores-boximg {
                    display: inline-flex;
                    max-height: 95px;

                    .mural--patrocinadores-img {
                        max-width: 551px;
                        width: 100%;
                        object-fit: contain;
                    }
                }
            }
        }

        .mural--agradecimientos {
            display: flex;
            flex-direction: column;
            gap: 6rem;
            max-width: 1195px;
            margin: 0 auto;
            width: min(1195px, 100%);


            @include m.tablet {
                padding: 0 40px;
            }

            .mural--agradecimientos_title {
                padding: 0 3rem;
            }
        }
    }
}
</style>