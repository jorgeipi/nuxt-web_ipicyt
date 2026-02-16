<script setup>
import { getMuralPath } from '@shared/helpers/acerca/getPath'
</script>

<template>
    <section class="mural--boxbanner" aria-labelledby="mural-title">
        <figure class="mural--banner"> <!--JDRM-->
            <img 
                class="mural--banner_img" 
                :src="getMuralPath('mural-banner1.png')" 
                alt="Fotomontaje del mural IPICYT: Ciencia, Tecnología y Sociedad, creado con técnica Trencadis por Rich Arnauda" 
            />
        </figure>
    </section>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mural--banner {
    // max-height: 889px;
    // height: 889px;
    display: flex;
    height: auto;
    min-height: 340px;
    // background-color: red;
    position: relative;

    .mural--banner_img {
        width: 100%;
        // height: auto;
        object-fit: cover;
        object-position: 72% center;
    }
}
</style>