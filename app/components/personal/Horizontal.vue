<script setup>
import { defineProps } from 'vue';
import preview from '/imgs/preview/previewImage.png';

const props = defineProps({
    persona: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="personal-horizontal">
        <img class="personal--img" :src="persona.foto || preview" :alt="persona.nombre || 'Foto de persona'" />
        <div class="personal--content">
            <p class="puesto">{{ persona.nombrepuesto }}</p>
            <!-- <router-link class="linknombre" v-if="persona.nombre_corto"
                :to="{ name: 'CurricularResumen', params: { nombre: persona.nombre_corto } }">
                {{ persona.nombre }}
            </router-link> -->
            <router-link class="linknombre" v-if="persona.nombre_corto"
                to="/">
                {{ persona.nombre }}
            </router-link>
            <p class="email">{{ persona.email }}</p>
            <p class="telefono" v-if="persona.telefono">Tel. {{ persona.telefono }}</p>
            <p class="telefono_ext" v-if="persona.extension">Ext. {{ persona.extension }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.personal-horizontal {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
    width: 100%;

    @include m.mobilexs {
        gap: 2rem;
        flex-direction: column;

        .personal--img {}
    }

    .personal--img {
        width: 138px;
        height: 138px;
        flex-shrink: 0;

        object-fit: cover;
        border-radius: 50%;
    }

    .personal--content {
        p {
            color: var(--color-black);
            font-family: "Noto Sans";
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
        }

        .linknombre {
            color: var(--color-secondary);
            list-style: none;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.2rem;

            display: inline-block;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
                font-weight: 700;
            }
        }

        .puesto {
            font-weight: bold;
        }

        .email {
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-skip-ink: auto;
            text-decoration-thickness: auto;
            text-underline-offset: auto;
            text-underline-position: from-font;
            word-break: break-all;
        }

        .puesto,
        .nombre,
        .email,
        .telefono,
        .telefono_ext {
        }
    }
}
</style>