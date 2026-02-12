<script setup>
// import { PersonalContacto } from '@/modules/personal/components'
import { usePersonales } from '@composables/personal/usePersonales';
import { ActionButton } from '@components/buttons'

const { personal, personalLoading } = usePersonales([
  { key: 'jefaPosgrado', cvepuesto: 614}
]);
</script>

<template>
        <div class="registro-grado-cedula">
            <div class="registro-grado-cedula__intro">
                <h2>
                    <strong class="font-weight-bold">Registro de Grado y Expedición de Cédula</strong> <br>
                    <span class="font-weight-regular">Emisión de grado electrónico - procedimiento 2025</span>
                </h2>
                <p>
                    Si requieres obtener la cédula electrónica de tu grado académico obtenido
                    en el IPICYT ante la SEP, es necesario que cuentes con tu grado
                    electrónico, para ello te proporcionamos el procedimiento a seguir para
                    gestionar dicho documento oficial a través del Departamento del Posgrado
                    del IPICYT:
                </p>
            </div>


            <div class="registro-grado-cedula__descarga py-12">
                <ActionButton class="mb-4" color="#2453F7" file="https://comunidad.ipicyt.edu.mx/graduados/files/2025/01/Grado-electr%C3%B3nico-2025.pdf">
                    <template #title>
                        <p class="button__title">Proceso para gestión de grado electrónico 2025 (pdf)</p>
                    </template>
                </ActionButton>

                <ActionButton color="#2453F7" file="https://comunidad.ipicyt.edu.mx/graduados/files/2024/03/formato_de_antecedentes_academicos-Graduados.doc">
                    <template #title>
                        <p class="button__title">Formato de antecedentes académicos (word)</p>
                    </template>
                </ActionButton>
            </div>

            <PersonalContacto v-if="!personalLoading && personal.jefaPosgrado" :personal="personal.jefaPosgrado" />
        </div>
</template>

<style scoped lang="scss">
.registro-grado-cedula {
    max-width: 587px;

    .registro-grado-cedula__intro{
        p{
            margin-top: 2rem;
        }
    }

    .button__title{
        text-decoration: underline;
    }
}
</style>
