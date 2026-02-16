<script setup>
import { catalogoInformacion, dictamenes } from '@shared/content/acerca/transparencia';

// import AcordeonItem from "@ipicyt/components/item/AcordeonItem.vue";
// import AcordeonGeneral from "@ipicyt/components/item/AcordeonGeneral.vue"
// import {dictamenes,patrimonio,archivo , comiteEticaRecursos} from "../data";

import pdf_icon from '/imgs/about/transparencia-proactiva/icons/icono_pdf.png';
import xls_icon from '/imgs/about/transparencia-proactiva/icons/icono_xls.png';
import doc_icon from '/imgs/about/transparencia-proactiva/icons/icono_doc.png';
import zip_icon from '/imgs/about/transparencia-proactiva/icons/icono_ZIP.png';

import { personasIntegrantes } from '@shared/content/acerca/comiteEtica';

</script>

<template>
    <div class="transparencia-proactiva">
        <h2 class="mb-5">Transparencia Proactiva</h2>

        <div class="transparencia-proactiva__acordeones d-flex flex-column ga-7 pb-7">
            <AccordionRight id="catalogo-interes">
                <template #title>
                    <h3>Catálogo de Interés Público</h3>
                </template>
                <template #content>
                    <div class="d-flex flex-column ga-5">
                        <p>Cumplimiento al Art. 70 fracción XLVIII de la Ley General de Transparencia y Acceso a la Información Pública.</p>
                        <p><strong>Becas</strong></p>
                        <p>Los programas de Posgrado del IPICYT están reconocidos en el Sistema Nacional de Posgrados (SNP) de la Secretaría de Ciencia, Humanidades, Tecnología e Innovación, lo que le permite a los aspirantes nacionales y extranjeros admitidos e inscritos ser candidatos para obtener una beca académica.</p>
                        <router-link class="link" :to="{ name: 'acerca-secretaria-academica', hash: '#tramites' }">
                            Más Información
                        </router-link>
                    </div>
                </template>
            </AccordionRight>

            <AccordionRight id="catalogo-informacion">
                <template #title>
                    <h3>Catálogo de Información de Interés Público de Personas Físicas y Morales</h3>
                </template>
                <template #content>
                    <catalogoInformacion />
                </template>
            </AccordionRight>

            <AccordionRight id="dictamenes">
                <template #title>
                    <h3>Dictámenes</h3>
                </template>
                <template #content>
                    <dictamenes />
                </template>
            </AccordionRight>

            <AccordionRight id="patrimonio">
                <template #title>
                    <h3>Patrimonio IPICYT</h3>
                </template>
                <template #content>
                    <p>Hola</p>
                </template>
            </AccordionRight>

            <AccordionRight id="comite-etica">
                <template #title>
                    <h3>Comité de Ética</h3>
                </template>
                <template #content>
                    <personasIntegrantes />
                </template>
            </AccordionRight>
            
            <AccordionRight id="archivo">
                <template #title>
                    <h3>Archivo</h3>
                </template>
                <template #content>
                    <p>Hola</p>
                </template>
            </AccordionRight>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.transparencia-proactiva {
    max-width: 810px;

    .link {
        color: var(--color-secondary);
        font-weight: 500;
        &:hover{
            text-decoration: none;
            color: var(--color-black);
            font-weight: 500;
        }
    }
}
</style>