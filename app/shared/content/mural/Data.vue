<script setup>
import { getMuralPath } from '@shared/helpers/acerca/getPath'
</script>

<template>
    <section class="mural--boxdata" aria-labelledby="mural-title">
        <figure class="mural--cricket">
            <img class="mural--cricket_img" :src="getMuralPath('cricket.png')" alt="Cricket" />
        </figure>
        <div class="mural--data_boxinfo">
            <div class="mural--data_boxtitle">
                <h3 class="mural--data_title">Mural IPICYT: Ciencia, Tecnología y Sociedad</h3>
            </div>
            <div class="mural--data_info">
                <div class="mural--data_item">
                    <p class="mural--data_text"><strong>Área: </strong>11.3 x 16.5 mts (186 m²)</p>
                </div>
                <div class="mural--data_item">
                    <p class="mural--data_text"><strong>Técnica: </strong>Trencadís</p>
                </div>
                <div class="mural--data_item">
                    <p class="mural--data_text"><strong>Artista: </strong></p> <a class="mural--data_link" target="_blank"
                        href="https://rich.arnauda.com/">Rich Arnauda</a>
                </div>
                <div class="mural--data_item">
                    <p class="mural--data_text"><strong>Voluntarios: </strong>Más de 70</p>
                </div>
                <div class="mural--data_item">
                    <p class="mural--data_text"><strong>Tiempo de realización: </strong>46 días</p>
                </div>
                <div class="mural--data_item">
                    <p class="mural--data_text"><strong>Inauguración: </strong>24 noviembre 2025</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mural--boxdata {
    position: relative;
    width: min(587px, 100%);
    position: relative;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.80) 66.73%, rgba(255, 255, 255, 0.30) 100%), url(<path-to-image>) lightgray -101.587px -23.153px / 183.019% 114.201% no-repeat;

    @include m.tablet {
        border-right: 1px solid rgba(var(--color-black), 0.5);
        border-left: 1px solid rgba(var(--color-black), 0.5);
    }

    .mural--cricket {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        z-index: 1;

        .mural--cricket_img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 72% center;
        }
    }

    .mural--data_boxinfo {
        position: relative;
        z-index: 10;
        min-height: 329px;
        padding-top: 24px;
        padding-bottom: 14px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;

        @include m.tablet {
            min-height: 373px;
            padding-right: 25px;
            padding-left: 25px;
        }

        .mural--data_boxtitle {
            display: flex;
            align-items: start;
            padding: 0px 33px 0px 33px;

            .mural--data_title {
                color: var(--color-secondary);
                text-align: center;
                font-size: 2.3rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;

                @include m.tablet {
                    font-size: 2.2rem;
                }
            }
        }

        .mural--data_info {
            .mural--data_item {
                border-bottom: 1px solid var(--color-gray-normal);
                padding: 8px 33px;

                &:last-of-type {
                    border-bottom: none;
                }

                display: flex;
                flex-direction: row;
                align-items: start;
                gap: 5px;

                .mural--data_text {
                    // padding: 0 33px;
                    color: var(--color-black);
                    font-size: 18px;
                    font-style: normal;
                    line-height: 22px;

                    @include m.tablet {
                        font-size: 15px;
                    }
                }

                .mural--data_link{
                    color: var(--color-secondary);
                    font-size: 18px;
                    font-style: normal;
                    font-weight: 400;
                    text-decoration-line: underline;
                    text-decoration-style: solid;
                    text-decoration-skip-ink: none;
                    text-decoration-thickness: auto;
                    text-underline-offset: auto;
                    text-underline-position: from-font;
                     @include m.tablet {
                        font-size: 15px;
                    }
                }
            }
        }
    }
}
</style>