<script setup>
import { onMounted } from 'vue';
import succes_icon from "/imgs/icons/success_icon.png";
import btn_portal from "@ipicyt/components/button/general/btn_portal.vue";
import { OverlineSection } from "@ipicyt/components/sections";
import arsenicName from "/imgs/grupos/arsenic/arsenicName.png";
import arsenicIcon from "/imgs/grupos/arsenic/arsenicIcon.png";

import { PersonalAcademico, PersonalContacto } from '@ipicyt/modules/personal/components'
import { usePersonales } from '@ipicyt/modules/personal/composables/usePersonales';

import { setTopImg } from "@shared/helpers/setTopImg";
import { gruposTopImages } from "../data/topImages";
const { topImg, topTitle } = gruposTopImages.arsenic;
onMounted(() => {
  setTopImg(topImg, topTitle);
})

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadoraArsenic', cvepuesto: 596, cvepersonal: 297},
]);
</script>

<template>
  <div class="displayCenter container">
    <div class="laboratorio" v-if="!personalLoading">
      <div class="introSeccion">

        <PersonalAcademico v-if="personal.coordinadoraArsenic" :personal="{
          ...personal.coordinadoraArsenic,
          nombrepuesto: 'Coordinador(a) de Arsenic Research and Action Network'
        }" />
        <div class="introInfo">
          <img :src="arsenicName" alt="lanbama_name" />
          <p>
            <b>ARAN (Arsenic Research and Action Network)</b> es una red global de
            expertos en arsénico que trabajan colaborativamente para desarrollar
            soluciones a los desafíos relacionados con este contaminante. Nuestra
            misión es mitigar sus efectos negativos en la salud y el medio
            ambiente mediante investigación, tecnología e innovación con un
            enfoque multidisciplinario.
            <b
              >Abordamos la contaminación en alimentos, suelo, sedimentos y agua,
              impulsando acciones con impacto positivo en la sociedad.</b
            >
            En nuestro
            <a class="portal" href="https://aran.ipicyt.edu.mx">portal web</a> encontrarás
            información sobre nuestros proyectos, artículos, tesis publicadas y
            registros fotográficos de nuestras actividades. Te invitamos a conocer
            más sobre ARAN y unirte a nuestros esfuerzos en la lucha contra la
            contaminación por arsénico.
          </p>
          <btn_portal :url="'https://aran.ipicyt.edu.mx'">
            <img :src="arsenicIcon" alt="cienciaIcon" />
            <h3>Arsenic Research and Action Network</h3>
          </btn_portal>
        </div>
      </div>
      <h3>Objetivos</h3>
      <OverlineSection :imgicon="succes_icon"> 
        <h5>Apoyar el desarrollo de una comunidad de investigación bien capacitada que pueda contribuir a mitigar la exposición, el riesgo y la contaminación por arsénico.</h5>
      </OverlineSection>
      <OverlineSection :imgicon="succes_icon"> 
        <h5>Transferir nuevas habilidades y generar nuevos conocimientos para impactar en el bienestar de las comunidades.</h5>
      </OverlineSection>
      <OverlineSection :imgicon="succes_icon">
        <h5>Fortalecer la excelencia en la investigación en los países socios que apoyan a investigadores, grupos de investigación y redes mediante capacitación, colaboración, visitas recíprocas y la transferencia de conocimientos y habilidades entre socios.</h5>
      </OverlineSection>
      <OverlineSection :imgicon="succes_icon">
        <h5>Establecer vínculos a largo plazo para garantizar mejoras sostenibles en la capacidad de investigación a largo plazo.</h5>
      </OverlineSection>
      <OverlineSection :imgicon="succes_icon">
        <h5>Fomentar y promover el establecimiento de alianzas efectivas entre múltiples partes interesadas.</h5>
      </OverlineSection>
      <OverlineSection :imgicon="succes_icon" class="borderbottom">
        <h5>Movilizar conocimiento, capacidad técnica, tecnología y recursos para implementar soluciones.</h5>
      </OverlineSection>
      <section class="laboratorio_contacto">
        <PersonalContacto v-if="personal.coordinadoraArsenic" :personal="personal.coordinadoraArsenic" />
      </section>
    </div>
  </div>
</template>