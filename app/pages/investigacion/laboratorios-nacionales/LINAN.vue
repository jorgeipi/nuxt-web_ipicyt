<script setup>
import { onMounted } from 'vue';
import linan_icon from "/imgs/laboratorios/linan/linanIcon.png";
import linan_name from "/imgs/laboratorios/linan/linan_name.png";
import succes_icon from "/imgs/icons/success_icon.png";
import btn_portal from "@ipicyt/components/button/general/btn_portal.vue";
import { OverlineSection } from "@ipicyt/components/sections";

import { PersonalAcademico, PersonalContacto } from '@ipicyt/modules/personal/components'
import { usePersonales } from '@ipicyt/modules/personal/composables/usePersonales';

import { setTopImg } from "@shared/helpers/setTopImg";
import { laboratoriosTopImages } from "../data/topImages";
import { items } from "../data/linan";
const { topImg, topTitle } = laboratoriosTopImages.linan;

onMounted(() => {
  setTopImg(topImg, topTitle);
})

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorLINAN', cvepuesto: 602},
]);


</script>

<template>
  <div class="displayCenter container">
    <div class="laboratorio" v-if="!personalLoading">
      <div class="introSeccion">
        <PersonalAcademico v-if="personal.coordinadorLINAN" :personal="personal.coordinadorLINAN" />
        <div class="introInfo">
          <img :src="linan_name" alt="linan_name" />
          <p class="parrafo">
            El Laboratorio Nacional de Investigaciones en Nanociencias y
            Nanotecnología es un laboratorio interinstitucional que ofrece
            servicios de alta calidad en análisis y caracterización de materiales
            para el desarrollo de la nanociencia y la nanotecnología.
            <span class="bold"
              >Cuenta con infraestructura altamente especializada que permite el
              estudio, descripción y análisis de múltiples materiales en la escala
              micrométrica y nanométrica.</span
            >
            Los servicios de caracterización que otorga el LINAN son reconocidos a
            nivel nacional e internacional por su confiabilidad y están
            respaldados por el personal especializado a cargo.
          </p>
          <p class="parrafo">
            El LINAN pertenece a los Laboratorios Nacionales de la Secretaría de
            Ciencia, Humanidades, Tecnología e Innovación
            <span class="bold">(Secihti)</span> por lo que busca incidir en la
            generación de capacidades científicas, tecnológicas y de innovación a
            nivel nacional.
          </p>
          <btn_portal :url="'https://linan.ipicyt.edu.mx/'">
            <img :src="linan_icon" alt="cns" />
            <h3>Visita el portal del LINAN</h3>
          </btn_portal>
        </div>
      </div>
      <h3>Servicios del LINAN</h3>
      <OverlineSection
        v-for="(item, index) in items"
        :key="index"
        :imgicon="succes_icon"
        :class="{ borderbottom: index === items.length - 1 }"
      >
        <h3>{{ item.title }}</h3>
        <p class="parrafo">{{ item.parrafo }}</p>
      </OverlineSection>
      <section class="laboratorio_contacto">
        <PersonalContacto v-if="personal.coordinadorLINAN" :personal="personal.coordinadorLINAN" />
      </section>
    </div>
  </div>
</template>
