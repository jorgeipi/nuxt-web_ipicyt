<script setup>
import { MapaPortal, MapaRecursos, BorderBlueTitle } from '../components/mapa';
</script>

<template>
    <div class="ipicyt--mapasitio container">
        <section class="mapasitio--intro">
            <BorderBlueTitle class="intro--bluetitle">Mapa del Sitio Web IPICYT</BorderBlueTitle>
        </section>
        <MapaPortal />
        <MapaRecursos />
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.ipicyt--mapasitio {
    margin-top: 8rem;
    margin-bottom: 16.7rem;

    .mapasitio--intro {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10rem;

        
        @include m.mobile{
            margin-bottom: 6rem;
        }

        .intro--bluetitle {
            align-self: center;
            max-width: 790px;
            width: min(790px, 100%);
        }
    }
}
</style>