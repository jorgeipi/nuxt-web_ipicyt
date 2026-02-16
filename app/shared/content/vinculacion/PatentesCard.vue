<script setup>
import { IconDowloadFillWhite, IconExpand } from '@components/icons';

const props = defineProps({
    patente: { type: Object, required: true },
});

const emit = defineEmits(['showResumen']);

const handleResumenClick = () => {
    emit('showResumen', props.patente);
};
</script>

<template>
    <div class="patentes--acordeon-card">
        <p class="patentes--acordeon-titulo">{{ patente.titulo }}</p>

        <div class="patentes--acordeon-info">
            <p class="acordeon_info solicitud" v-if="patente.solicitud">{{ patente.solicitud }}</p>
            <p class="acordeon_info registro" v-if="patente.registro"><strong>Registro: </strong>{{ patente.registro }}</p>
            <p class="acordeon_info estatus" v-if="patente.status"><strong>Estatus: </strong>{{ patente.status }}</p>
            <p class="acordeon_info titulo" v-if="patente.titulo_patente"><strong>Título: </strong>{{ patente.titulo_patente }}</p>
            <p class="acordeon_info area" v-if="patente.area"><strong>Área: </strong>{{ patente.area }}</p>
            <p class="acordeon_info expediente" v-if="patente.expediente"><strong>Expediente: </strong>{{ patente.expediente }}</p>
            <p class="acordeon_info clase" v-if="patente.clase"><strong>Clase: </strong>{{ patente.clase }}</p>
            <div 
                class="patentes--resumen" 
                v-if="patente.resumen" 
                @click="handleResumenClick"
            >
                <div class="patentes--resumen-boxicon">
                    <IconExpand class="patentes--resumen-icon" />
                </div>
                <p class="patentes--resumen--nombre">Resumen</p>
            </div>
        </div>

        <div class="patentes--acordeon-boxbutton" v-if="patente.pdf">
            <ButtonLink class="patentes--acordeon-button" :href="patente.pdf">
                <div class="d-flex flex-row align-center justify-center">
                    <p class="font-weight-regular">PDF</p>
                    <IconDowloadFillWhite class="patentes--acordeon-icon" />
                </div>
            </ButtonLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.patentes--acordeon-card {
    width: min(100%, 24.3rem);
    .patentes--acordeon-titulo {
        color: var(--color-secondary);

        font-family: "Noto Sans";
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.2rem;

        margin-bottom: 2.8rem;

        @include m.tablet {
            margin-bottom: 1rem;
        }
    }

    .patentes--acordeon-info {
        margin-bottom: 2.8rem;

        @include m.tablet {
            margin-bottom: 1rem;
        }

        .acordeon_info {
            color: var(--color-black);
            font-family: "Noto Sans";
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 2.2rem;
        }
    }

    .patentes--acordeon-button {
        color: var(--color-white);
        margin: 0rem;
        padding: 0.7rem 2rem;

        .patentes--acordeon-icon {
            margin-left: 0.5rem;
        }
    }
}


.patentes--resumen {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    gap: 1rem;

    .patentes--resumen-boxicon {
        border: 1px solid var(--color-black);
        display: inline-block;
        // padding: 0.45rem;

        width: 20px;
        height: 20px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .patentes--resumen-icon {
            width: 10.632px;
            height: 10.632px;
            flex-shrink: 0;
        }
    }

    .patentes--resumen--nombre {
        color: var(--color-secondary);
        font-family: "Noto Sans";
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 146.667% */
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-skip-ink: auto;
        text-decoration-thickness: auto;
        text-underline-offset: auto;
        text-underline-position: from-font;

    }

    &:hover {
        cursor: pointer;

        :deep(.patentes--resumen-boxicon) {
            background-color: var(--color-black);
            .patentes--resumen-icon {
                path {
                    stroke: var(--color-white) !important;
                }
            }
        }

        .patentes--resumen--nombre{
            color: var(--color-black);
        }
    }
}
</style>