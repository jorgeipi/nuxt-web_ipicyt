<script setup lang="ts">
import { getComiteLineaPath } from '@shared/helpers/acerca/getPath'
import { ButtonLink } from '@components/buttons'
</script>

<template>
    <div class="d-flex flex-column ga-6">
        <div><ButtonLink :href="getComiteLineaPath('DOF - Diario Oficial de la Federación_Lineamientos Comite de Etica_18112025.pdf')">
            Lineamientos para la operación de los Comités de Ética de la Administración Pública Federal
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('Proceso denuncias_atribuciones.pdf')">
            Procedimiento para someter quejas y/o denuncias ante CEyPCI del IPICYT, así como su seguimiento
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('Formato_denuncias_072022.pdf')">
            Formato para presentación de denuncias
        </ButtonLink></div>
        
        <div><ButtonLink :href="getComiteLineaPath('Manual de atención de denuncias en los CE.pdf')">
            Manual de atención de denuncias en los comités de ética
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('cartaCompromiso.pdf')">
            Carta compromiso y acuerdo de confidencialidad persona integrante CE
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('Posicionamiento cero tolerancia actos de corrupcion_firmaDG.pdf')">
            Posicionamiento de cero tolerancia a los actos de corrupción
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('DOF-Diario Oficial de la Federacion_Protocolo actuacion CE casos Discriminacion_22122023.pdf')">
            Protocolo de Actuación de los Comités de Ética en la Atención de Denuncias y Prevención de Actos de Discriminación
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('PRONTUARIO Difusion Digital.pdf')">
            Prontuario para lenguaje incluyente y no sexista
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('8.2.2 2024_Catálogo_Publicaciones_FINAL.pdf')">
            INMUJERES Catálogo de Publicaciones sobre "La Violencia hacia las Mujeres en México 2024"
        </ButtonLink></div>

        <div><ButtonLink :href="getComiteLineaPath('Manual de comunicacion NO sexista.pdf')">
            Manual de comunicación NO sexista, lenguaje incluyente
        </ButtonLink></div>
    </div>
</template>
