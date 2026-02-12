<script setup>
import { ref } from 'vue'
import preview from '/imgs/preview/logo_IPICYT_nombre-blue.png'

const props = defineProps({
  personal: {
    type: Object,
    required: true
  }
})

const hasError = ref(false)
const onError = (e) => {
  e.target.src = preview
  hasError.value = true
}
</script>

<template>
    <div class="personalAcademico">
        <!-- <router-link class="personalAcademico-img" :to="{ name: 'CurricularResumen', params: { nombre: personal.nombre_corto } }"> -->
        <router-link class="personalAcademico-img" to="/">
            <img
                class="img"
                :class="{ 'img-error': hasError }"
                :src="personal.foto"
                :alt="personal.nombre"
                loading="lazy"
                @error="onError"
            />
        </router-link>
        <div class="personalAcademico-info">
            <!-- <router-link class="nombre" v-if="personal.nombre_corto"
                :to="{ name: 'CurricularResumen', params: { nombre: personal.nombre_corto } }">
                {{ personal.nombre }}
            </router-link> -->
            <router-link class="nombre" v-if="personal.nombre_corto" to="/">
                {{ personal.nombre }}
            </router-link>
            <p class="cargo">{{ personal.nombrepuesto }}</p>
        </div>
        <div class="personalAcademico-resumen" v-if="personal.resumen">
            <p class="resumen">{{ personal.resumen }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '@/styles/base/mixins' as m;

.personalAcademico {
    display: flex;
    flex-direction: column;
    max-width: 18rem;

    // margin-right: 2rem;
    gap: 2rem;

    @include m.tablet {
        max-width: 100%;
        margin-bottom: 2rem;
        margin-right: 0rem;
    }

    .personalAcademico-img {
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

            &.img-error{
                object-fit: contain!important;
            }
        }
    }

    .personalAcademico-info {
        // margin-bottom: 2rem;

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
            margin-bottom: 1rem;

            color: var(--color-secondary);
            list-style: none;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.2rem;
            // font-weight: 700;
            text-decoration: underline;

            display: inline-block;

            &:hover {
                cursor: pointer;
                // text-decoration: underline;
                font-weight: 700;
            }
        }
        
        .cargo{
            // font-weight: 700;
        }
    }

    .personalAcademico-resumen {}
}
</style>