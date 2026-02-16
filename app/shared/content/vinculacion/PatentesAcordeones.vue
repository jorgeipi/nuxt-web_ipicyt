<script setup>
import TextModal from './TextModal.vue';
import PatentesCard from './PatentesCard.vue';
import { ref } from 'vue';

const props = defineProps({
    propiedadIntelectual: { type: Array, required: true },
});

const isTextModalOpen = ref(false);
const currentPatente = ref(null);
const patentesToArray = (patentesObj) => {
    if (!patentesObj) return [];
    return Object.entries(patentesObj).map(([key, value]) => ({
        id: key,
        ...value
    }));
};

const handleShowResumen = (patente) => {
    currentPatente.value = patente;
    isTextModalOpen.value = true;
};
</script>

<template>
    <div>
        <div class="patentes--boxacordeones" v-for="(tipo, tipoIndex) in propiedadIntelectual" :key="tipoIndex">
            <div class="patentes-boxsubtitle">
                <h2 class="patentes-boxsubtitle__subtitle">{{ tipo.nombre }}</h2>
            </div>

            <div class="patentes--acordeones">
                <AccordionRightV2
                    class="patentes-acordeon pt-3  pb-5"
                    v-for="(subcategoria, subIndex) in tipo.subcategorias" 
                    :key="subIndex" 
                    :id="`${tipoIndex}-${subIndex}`"
                >
                    <template #title>
                        <h3 class="patentes--acordeones__title">{{ subcategoria.titulo }}</h3>
                    </template>

                    <template #content>
                        <div class="patentes--acordeones__content">
                            <PatentesCard 
                                v-for="patente in patentesToArray(subcategoria.patentes)" 
                                :key="patente.id"
                                :patente="patente" 
                                @show-resumen="handleShowResumen"
                            />
                        </div>
                    </template>
                </AccordionRightV2>
            </div>
        </div>

        <TextModal 
            v-if="currentPatente"
            :modelValue="isTextModalOpen"
            @update:modelValue="isTextModalOpen = $event"
            :titulo="currentPatente.titulo || 'Resumen de la patente'"
            :resumen="currentPatente.resumen || 'No hay resumen disponible'"
        />
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;
.patentes-boxsubtitle{
    .patentes-boxsubtitle__subtitle{
        color: var(--color-secondary);
        font-family: "Noto Sans";
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: 2.2rem;

        padding-bottom: 2rem;
    }
}

.patentes--boxacordeones{
    margin-top: 7.2rem;

    .patentes--acordeones{

        .patentes-acordeon{
            border-top: 1px solid var(--color-gray-light);
            &:last-of-type{
                border-bottom: 1px solid var(--color-gray-light);
            }
        }

        .patentes--acordeones__content{
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(24.3rem, 1fr));
                gap: 3rem;
            
                margin: 0rem;
                margin-top: 6rem;
            
                @include m.tablet{
                    place-items: center;
                    row-gap: 5rem;
                }
            
                @include m.mobile{
                    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
                }
        }

        .patentes--acordeones__title{
            color: var(--color-black);
    
            font-family: "Noto Sans";
            font-size: 22px!important;
            font-style: normal;
            font-weight: 400!important;
            line-height: 22px;
        }
    }
}
</style>