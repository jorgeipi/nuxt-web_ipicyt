<script setup lang="ts">
import { AccordionRight } from '@components/accordion';
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <AccordionRight id="informeGubernamental">
        <template #title>
            <h2>Informe de Gestión Gubernamental</h2>
        </template>

        <template #content>
            <ButtonLink href="https://www.plataformadetransparencia.org.mx/Inicio" :color="'var(--color-text-subtle)'">
                <p>Informe de Gestión Gubernamental</p>
            </ButtonLink>
        </template>
    </AccordionRight>
</template>