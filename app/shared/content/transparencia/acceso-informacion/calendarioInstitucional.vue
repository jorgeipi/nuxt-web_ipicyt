<script setup lang="ts">
    import { AccordionRight } from '@components/accordion';
    import { ButtonLink } from '@components/buttons';
    import { getAccesoInfoCalendarioPath } from '@shared/helpers/transparencia/getPath';
</script>

<template>
    <AccordionRight id="calendario-institucional">
        <template #title>
            <h2>Calendario Institucional</h2>
        </template>

        <template #content>
            <ButtonLink :href="getAccesoInfoCalendarioPath('Calendario_2026_autorizado_IPICYTAC.pdf')" :color="'var(--color-text-subtle)'">
                <p>Calendario Institucional</p>
            </ButtonLink>
        </template>
    </AccordionRight>
</template>