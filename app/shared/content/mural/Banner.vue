<script setup>
import { ref } from 'vue';
import { IconExpand } from '@components/icons';
import { getMuralPath } from '@shared/helpers/acerca/getPath'

const modalRef = ref(null);
const openModal = () => {
    modalRef.value?.open();
};
</script>

<template>
    <section class="mural--boxbanner" aria-labelledby="mural-title">
        <figure class="mural--banner"> <!--JDRM-->
            <img 
                class="mural--banner_img" 
                :src="getMuralPath('mural-banner.png')" 
                alt="Fotomontaje del mural IPICYT: Ciencia, Tecnología y Sociedad, creado con técnica Trencadis por Rich Arnauda" 
            />
            <figcaption class="mural--banner_info">
                <div class="mural--banner_info-boxcontent">
                    <div class="mural--banner_info-content">
                        <h1 id="mural-title" class="mural--banner_info-title">Fotomontaje del Mural
                            IPICYT:<br /><strong>Ciencia, Tecnología y Sociedad</strong></h1>
                        <p class="mural--banner_info-text">Área: 186 m²</p>
                        <p class="mural--banner_info-text">Técnica: Trencadis</p>
                        <p class="mural--banner_info-text">Artista: <strong>Rich Arnauda</strong></p>
                    </div>
                    <button 
                        class="patentes--resumen-boxicon" 
                        @click="openModal" 
                        aria-haspopup="dialog"
                        aria-label="Ampliar fotomontaje del mural IPICYT: Ciencia, Tecnología y Sociedad"
                    >
                        <IconExpand class="patentes--resumen-icon" aria-hidden="true" />
                    </button>
                </div>
            </figcaption>
        </figure>

        <ModalImageScale2 ref="modalRef" :img="getMuralPath('mural-banner.png')" class="mural--banner_modal"aria-label="Vista ampliada del mural IPICYT" />
    </section>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mural--banner_modal{
    img{
        object-position: 72% center;
    }
}

.mural--banner {
    max-height: 889px;
    height: 889px;
    display: flex;
    // background-color: red;
    position: relative;

    .mural--banner_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 72% center;
    }

    .mural--banner_info {
        top: 0;
        left: 0;
        max-width: 790px;
        height: 100%;
        width: 100%;
        padding: 80px;

        position: absolute;
        background: rgba(var(--color-black) 0.44);

        display: flex;
        align-items: center;
        justify-content: end;

        .mural--banner_info-boxcontent {
            .mural--banner_info-content {
                max-width: 307px;
                display: flex;
                flex-direction: column;
                gap: 2.5rem;

                .mural--banner_info-title {
                    color: var(--color-white);
                    font-family: "Noto Sans";
                    font-size: 32px;
                    font-style: italic;
                    font-weight: 400;
                    line-height: normal;
                    text-align: start;

                    border-bottom: 1px solid var(--color-white);
                    padding-bottom: 20px;

                    strong {
                        font-style: normal;
                    }
                }

                .mural--banner_info-text {
                    color: var(--color-white);
                    text-align: start;
                    font-size: 32px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    border-bottom: 1px solid var(--color-white);

                    padding-bottom: 2.5rem;

                    &:last-of-type {
                        border-bottom: none;
                    }
                }
            }

            .patentes--resumen-boxicon {
                border: 1px solid;
                background-color: var(--color-white);
                display: inline-block;
                // padding: 0.45rem;

                width: 31px;
                height: 31px;
                flex-shrink: 0;
                display: flex;
                align-items: center;
                justify-content: center;

                .patentes--resumen-icon {
                    // width: 10.632px;
                    // height: 10.632px;
                    flex-shrink: 0;
                }

                &:hover {
                    background-color: var(--color-black);
                    cursor: pointer;

                    .patentes--resumen-icon {
                        path {
                            stroke: var(--color-white) !important;
                        }
                    }
                }
            }
        }
    }
}
</style>