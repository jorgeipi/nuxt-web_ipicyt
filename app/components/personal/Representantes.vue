<script setup>
defineProps({
    personal: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="personalRepresentante">
        <!-- <router-link class="personalRepresentante-img" :to="{ name: 'CurricularResumen', params: { nombre: personal.nombre_corto } }">
            <img class="img" :src="personal.foto" :alt="personal.nombre" lazyload="true">
        </router-link> -->
        <router-link class="personalRepresentante-img" to="/">
            <img class="img" :src="personal.foto" :alt="personal.nombre" lazyload="true">
        </router-link>
        <div class="personalRepresentante-info">
            <!-- <router-link class="nombre" v-if="personal.nombre_corto"
                :to="{ name: 'CurricularResumen', params: { nombre: personal.nombre_corto } }">
                <strong>{{ personal.nombre }}</strong>
            </router-link> -->

            <router-link class="nombre" v-if="personal.nombre_corto" to="/">
                <strong>{{ personal.nombre }}</strong>
            </router-link>
        </div>
        <div class="personalRepresentante-resumen">
            <p class="resumen">
                <slot name="resumen"></slot>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/base/mixins' as m;

.personalRepresentante {
    max-width: 30rem;

    // margin-right: 2rem;

    @include m.tablet {
        max-width: 100%;
        // margin-bottom: 2rem;
        margin-right: 0rem;
    }

    &:hover {
        .personalRepresentante-img {
            .img {}
        }

    }

    .personalRepresentante-img {
        // margin-bottom: 2rem;
        display: inline-flex;
        width: 18rem;
        height: 18rem;

        .img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            flex-shrink: 0;
            object-fit: cover;
            &:hover {
                cursor: pointer;
                filter: brightness(0.9);
            }
        }
    }

    .personalRepresentante-info {
        // margin-bottom: 1rem;

        p {
            color: var(--color-black);
            font-family: "Noto Sans";
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding: 0;
        }

        .nombre {
            display: inline-block;
            margin-bottom: 1rem;
            color: var(--color-accent);
            text-decoration: underline !important;

            &:hover {
                cursor: pointer;
            }
        }
    }

    .personalRepresentante-resumen {}
}
</style>