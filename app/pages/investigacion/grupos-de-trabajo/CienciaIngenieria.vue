<script setup>
import { onMounted } from 'vue';
import succes_icon from "/imgs/icons/success_icon.png";
import btn_portal from "@ipicyt/components/button/general/btn_portal.vue";
import { OverlineSection } from "@ipicyt/components/sections";
import grupoCiencia from "/imgs/grupos/cienciaIngenieria/grupoCiencia.png";
import cienciaIcon from "/imgs/grupos/cienciaIngenieria/cienciaIngenieriaIcon.png";

import { PersonalAcademico, PersonalContacto } from '@ipicyt/modules/personal/components'
import { usePersonales } from '@ipicyt/modules/personal/composables/usePersonales';

import { setTopImg } from "@shared/helpers/setTopImg";
import { gruposTopImages } from "../data/topImages";
const { topImg, topTitle } = gruposTopImages.cienciaIngenieria;
onMounted(() => {
  setTopImg(topImg, topTitle);
})

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadorGCIC', cvepuesto: 16, cvepersonal: 21 },
  { key: 'asistenteJefe', cvepuesto: 653 },
  { key: 'asistenteTecnico', cvepuesto: 147 }
]);

</script>


<template>
  <div class="displayCenter container">
  <div class="laboratorio " v-if="!personalLoading">
    <div class="introSeccion">
      <PersonalAcademico v-if="personal.coordinadorGCIC" :personal="{
        ...personal.coordinadorGCIC,
        nombrepuesto: 'Coordinador del Grupo de Ciencia e Ingeniería Computacionales'
      }" />
      <div class="introInfo">
        <img :src="grupoCiencia" alt="lanbama_name" />
        <p>
          El <b>Grupo de Ciencias e Ingeniería Computacionales</b> tiene como
          principal misión realizar investigación en las diversas áreas de la
          ciencia y sus aplicaciones tecnológicas, y de innovación haciendo uso
          de métodos computacionales de frontera para la solución de problemas
          diversos de impacto social, económico y humanístico.
        </p>
        <p>
          Ofrecer un posgrado multidisciplinario, para formar recursos humanos
          de alta calidad en el área de aplicaciones de cómputo de alto
          rendimiento, manejo de grandes cantidades de datos y métodos de
          modernos de aprendizaje por medio de supercomputadoras. Así como la
          formación de recursos humanos incluyendo un alto compromiso social y
          riguroso comportamiento ético.
        </p>
        <p>
          Su visión es ser un referente nacional e internacional en solución de
          problemas complejos en las diversas áreas del conocimiento y sus
          aplicaciones, así como en la formación de recursos humanos en áreas
          estratégicas y prioritarias en el país para los sectores privado,
          gubernamental y académico. Fortalecer la vinculación con esos sectores
          mediante la oferta de capacitación y actualización continua
        </p>
        <btn_portal :url="'https://cic.mhc.ipicyt.edu.mx'">
          <img :src="cienciaIcon" alt="cienciaIcon" />
          <h3>Portal del Grupo de Ciencia e Ingeniería Computacionales</h3>
        </btn_portal>
      </div>
    </div>
    <h3>Servicios del GCIC</h3>
    <OverlineSection :imgicon="succes_icon">
      <h4>Diplomado en Inteligencia Artificial Aplicada</h4>
      <p>
        El objetivo de este diplomado es, facilitar a los profesionales y
        estudiantes participantes la adquisición los conceptos teóricos y
        prácticos para poner en práctica algoritmos básicos de la IA, en
        particular, del aprendizaje de máquina y aprendizaje profundo. Con ello,
        se pretende que los estudiantes adquieran los conocimientos que les
        permitan elaborar desarrollos tecnológicos, proyectos empresariales o
        investigaciones académicas con herramientas básicas de IA a través de
        técnicas del uso de sistemas de computación de alto rendimiento.
      </p>
    </OverlineSection>
    <OverlineSection :imgicon="succes_icon">
      <h4>
        Diplomado en Inteligencia Artificial para la Informática de la Salud
      </h4>
      <p>
        El objetivo de este diplomado es, proporcionar a los estudiantes
        participantes conocimientos teóricos y prácticos de la IA que les
        permitan elaborar proyectos que resuelvan problemas específicos en su
        práctica profesional o temas relacionados con investigaciones
        científicas en Ciencias de la Salud.
      </p>
    </OverlineSection>
    <OverlineSection :imgicon="succes_icon" class="borderbottom">
      <h4>Escuelas Nacionales de Supercómputo (ENS)</h4>
      <p>
        En las ENS se ofrecen e imparten programas académicos en las modalidades
        presencial y virtual, para contribuir a la formación y especialización
        de recursos humanos de alta especialidad en México, orientados a su
        aplicación en desarrollo en el uso, operación, gestión y administración
        de herramientas tecnológicas, con énfasis en técnicas de cómputo de alto
        rendimiento aplicadas a la solución de problemas sociales de alto
        impacto.
      </p>
      <p>
        Los programas académicos construyen andamiajes para la colaboración y la
        convergencia de las comunidades académica y tecnológica que permiten el
        uso eficaz y eficiente de los recursos públicos del CNS. En particular,
        las Escuelas Nacionales de Supercómputo abordarán la solución de
        problemas relacionados con la salud humana (Biomedicina Molecular
        Informática), Análisis de Series de Tiempo de Señales Biomédicas,
        Soluciones para la Remoción de Contaminantes del Agua, y Métodos pare el
        Seguimiento y Monitoreo de Fenómenos Naturales Asociados al Cambio
        Climático.
      </p>
    </OverlineSection>

    <section class="laboratorio_contacto">
      <PersonalContacto v-if="personal.asistenteJefe" :personal="personal.asistenteJefe" />
      <PersonalContacto v-if="personal.asistenteTecnico" :personal="personal.asistenteTecnico" />
    </section>
  </div>
  </div>
</template>

