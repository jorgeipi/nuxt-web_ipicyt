<script setup>
// import VideoDirector from '../components/VideoDirector.vue';
import { useVideo } from "@composables/video/useVideo";
import { PersonalTipo } from "@shared/constants/personal/personal-tipo";
// import { PersonalAcademico, PersonalContacto } from "@/modules/personal/components";
import { usePersonales } from "@shared/composables/personal/usePersonales";
import { computed } from "vue";

const { personal, personalLoading } = usePersonales([
  { key: "director", cvepuesto: 11, tipo: PersonalTipo.RESUMEN },
  { key: "asistente", cvepuesto: 61 },
]);

const { video, isLoading, error } = useVideo(6);

const isGeneralLoading = computed(() => personalLoading.value || isLoading.value);
</script>

<template>
  <div id="stiky" class="bienvenida" v-if="!isGeneralLoading">

    <div class="bienvenida--director">
      <PersonalAcademico
        class="bienvenida--personal"
        v-if="personal.director"
        :personal="{
          ...personal.director,
          nombre: personal.director.nombre_corto,
          resumen:
            'Biólogo por la Universidad Autónoma de Nuevo León y Doctor en Ciencias con especialidad en Biología Celular por CINVESTAV.',
        }"
      />

      <VideoDirector v-if="video" :video="video" />
    </div>

    <div class="contenido">
      <h2 class="mb-5">Mensaje del Director General</h2>
      <div class="parrafo">
        <p>
          Es un gran honor y una alta responsabilidad dirigir el Instituto Potosino de Investigación
          Científica y Tecnológica, un referente de la investigación científica y el desarrollo
          tecnológico en México, cuyo principal activo es la comunidad que lo integra: una
          sinergia de personal académico de talla internacional, estudiantes de posgrado de
          excelencia y personal administrativo altamente comprometido y capacitado. El trabajo
          de esta comunidad nos consolida como uno de los principales Centros Públicos de
          Investigación del país.
        </p>
        <br />
        <p>
          Tras un primer periodo con grandes logros, producto del trabajo de toda la comunidad,
          acepté con renovado compromiso la ratificación como Director General del Instituto
          para el periodo 2024-2027. La confianza depositada por la Secretaría de Ciencia,
          Humanidades, Tecnología e Innovación en nuestro trabajo nos impulsa a enfrentar los
          desafíos futuros con mayor determinación.
        </p>
        <br />
        <p>
          Nuestra misión es clara: generar conocimiento de frontera, aplicarlo a la solución de los
          grandes problemas nacionales y formar las siguientes generaciones de líderes en ciencia
          y tecnología. Para ello, impulsamos la multidisciplina como nuestra fortaleza esencial y
          fomentamos el trabajo en equipos colaborativos que aborden los retos actuales con una
          visión de sostenibilidad y bienestar social.
        </p>
        <br />
        <p>
          Les invito a revisar nuestra historia como Centro Público de Investigación, a conocer a
          nuestros expertos y sus proyectos, y a descubrir cómo, mediante la fortaleza que da la
          unidad, trabajamos por un futuro mejor.
        </p>
        <br />
        <b>Luis Antonio Salazar Olivo</b>
      </div>

      <!--<ButtonVideo class="bienvenida_buttonVideo">Mensaje del Director General</ButtonVideo>-->
      <PersonalContacto
        v-if="!personalLoading && personal.asistente"
        :personal="personal.asistente"
      />
    </div>
  </div>
</template>



<style scoped lang="scss">
@use '@/styles/base/mixins' as m;

.bienvenida {
    display: flex;
    column-gap: 1.8rem;

    @include m.tablet {
        flex-direction: column;
    }

    // h3,
    // h4 {
    //     padding: 2rem 0rem 2rem 0rem;
    // }

    .contenido {
        max-width: 609px;

        h3 {
            color: var(--color-black);
        }

        .parrafo {
            margin-bottom: 3.7rem;
        }
    }

    .bienvenida--director{
        display: flex;
        flex-direction: column;

        .bienvenida--personal{
            margin-bottom: 2rem;

            @include m.tablet{
                // border-bottom: 1px solid black;
            }
        }
    }
}
</style>