<script setup>
import { onMounted } from 'vue'
import AOS from "aos";
const props = defineProps({
    img: {
        type: String,
        require: true
    }
});

onMounted(() => {
    AOS.init({
      once: false,
      mirror: true,
      duration: 750,
      easing: 'ease-in-out',
    });
});
</script>

<template>
    <div class="mural--mean_concepto">
        <div class="mural--mean_concepto-boximg" data-aos="zoom-in">
            <img :src="img" class="mural--mean_concepto-img"></img>
        </div>
        <div class="mural--mean_concepto-boxtext" data-aos="fade-left">
            <p class="mural--mean_concepto-text">
                <slot></slot>
            </p>
        </div>
        <hr />
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mural--mean_concepto {
    // display: flex;
    // flex-direction: row;
    // align-items: stretch;
    // /* Cambia center por stretch */
    // justify-content: center;
    // gap: 8rem;

    display: grid;
    grid-template-columns: 1fr 699px;
    column-gap: 8rem;

    @include m.desktop{
        display: flex;
        flex-direction: column;
        .mural--mean_concepto-boximg{
            margin-bottom: 3rem;
        }
    }

    // display: flex;
    // flex-direction: row;

    .mural--mean_concepto-boximg {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 274px;
        min-width: 130px;
        flex-shrink: 0;

        .mural--mean_concepto-img {
            max-width: 100%;
            height: auto;
            flex-shrink: 0;
        }
    }

    .mural--mean_concepto-boxtext {
        // background-color: yellow;
        flex: 1;
        display: flex;
        align-items: center;
        /* Opcional: centra el texto verticalmente */
        // padding-bottom: 3rem;
        // border-bottom: 1px solid lightgray;

        .mural--mean_concepto-text {
            width: 100%;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 36px;
            /* 200% */
        }
    }

    hr {
        max-width: 586px;
        grid-column: 2;
        color: #CCCCCC;
        background-color: #CCCCCC;
        border-top: 1px solid #ccc;
        margin: 30px 0;
        // height: 0.5px;

    }

    &.withouthr{
        hr{
            display: none!important;
        }
    }

}
</style>