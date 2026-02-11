<script setup>
import { IconPhoneFillBlue } from '@components/icons';

defineProps({
    personal: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="ipicyt--contacto">
        <IconPhoneFillBlue class="ipicyt--contacto__icon" />
        <div class="ipicyt--contacto__info">
            <p id="contacto--title">Contacto:</p>
            <p id="contacto--nombre" v-if="personal.nombre"><strong>{{ personal.nombre }}</strong></p>
            <p id="contacto--puesto" v-if="personal.nombrepuesto">{{ personal.nombrepuesto }}</p>
            <p id="contacto--email" v-if="personal.email">{{ personal.email }}</p>
            <p id="contacto--telefono" v-if="personal.telefono_completo && personal.extension">Tel. {{ personal.telefono_completo }}, Ext. {{ personal.extension }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.ipicyt--contacto{
    display: inline-flex;
    flex-direction: column;
    @include m.mobile{
        width: 100%;
    }
    p{
        color: var(--color-black);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.2rem;

        word-break: break-word; 
    }

    .ipicyt--contacto__info{
        margin-top: 1.3rem;

        #contacto--email{
            text-decoration: underline;
            &:hover{
                cursor: pointer;
            }
        }
    }
}
</style>