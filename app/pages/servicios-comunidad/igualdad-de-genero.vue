<script setup>
import { onMounted, ref, computed } from 'vue';
import { usePersonales } from '@composables/personal/usePersonales';
import { fetchPersonal } from '@shared/helpers/personal/fetchPersonal';
import introImg from "/imgs/servicios-comunidad/igualdad-de-genero/introIgualdad.png";

const repreLoading = ref(false);
const representantes = ref(null);
const consejeras = ref(null);

const { personal, personalLoading } = usePersonales([
  { key: 'representante', cvepersonal: 1193 },
  { key: 'consejera', cvepersonal: 3898 },
]);
const isLoading = computed(() => personalLoading.value || repreLoading.value);

onMounted(async () => {
  repreLoading.value = true;

  representantes.value = await fetchPersonal([
    { cvepersonal: 206, },
    { cvepersonal: 297, },
    { cvepersonal: 2338, },
    { cvepersonal: 339, },
    { cvepersonal: 4079, },
  ]);

  consejeras.value = await fetchPersonal([
    { cvepersonal: 91 },
  ]);

  repreLoading.value = false;
});
</script>

<template>
  <div class="igualdad" v-if="!isLoading">
    <div class="igualdad__intro">
      <img class="igualdad__logo" :src="introImg" alt="" />
      <h2>Unidad para la Igualdad de Género</h2>
      <p>
        <b>El objetivo general de la Unidad para la Igualdad de Género es
          transversalizar e institucionalizar la perspectiva de género para
          lograr la igualdad sustantiva entre hombres y mujeres desde la
          interseccionalidad</b>, es decir, desde el reconocimiento de que las desigualdades sistémicas
        tienen un origen en la superposición de diferentes factores, que van
        desde el género, etnia, clase social entre otros.
      </p>
      <p>
        <b>Realizamos acciones que permitan la incorporación de la perspectiva
          de género en todas las áreas institucionales, desde la cultura, la
          planeación, presupuestación y evaluación de las políticas
          institucionales. También coadyuvamos en la recopilación de información
          que sirva como indicadores del avance en el cumplimiento de las
          políticas de género.</b>
        Contribuimos a la armonización de los reglamentos administrativos del
        IPICYT, a fin de que estén alineados con las leyes estatales, nacionales
        e internacionales en materia de derechos humanos de las mujeres, no
        violencia, no discriminación e igualdad de género.
      </p>
      <h2>¿Quiénes la conforman?</h2>
      <p>
        La Unidad para la Igualdad de Género esta conformada por una persona
        representante que se apoya en un comité.
        <b>La persona representante es designada por el titular del IPICYT y el
          comité se constituye de personas voluntarias de la comunidad
          académica, administrativa y estudiantil sin ningún tipo de
          antecedentes de violencia</b>, que cuentan con capacitaciones en materia de género y/o han realizado
        activismo en este sentido. Actualmente la UIG esta constituida por:
      </p>
    </div>

    <div class="igualdad__conforman">
      <div class="igualdad__item">
        <PersonalRepresentantes v-if="personal.representante" :personal="personal.representante">
          <template #resumen>
            <strong>Representante</strong> de la Unidad para la Igualdad de Género y Persona certificada en atención de
            primer contacto a víctimas de violencia de género.
          </template>
        </PersonalRepresentantes>

        <div class="igualdad__academico">
          <h2>Personal Académico</h2>
          <template v-if="representantes && Object.keys(representantes).length">
            <div class="igualdad__boxpersonal d-flex flex-column">
              <!-- <router-link class="name igualdad-personal" v-for="persona in representantes" :key="persona.cvepersonal"
                :to="{ name: 'CurricularResumen', params: { nombre: persona.nombre_corto } }">
                {{ persona.nombre }}
              </router-link> -->
              <router-link class="resalte igualdad__link" v-for="persona in representantes" :key="persona.cvepersonal" to="/">
                {{ persona.nombre }}
              </router-link>
            </div>
          </template>
        </div>
      </div>

      <div class="igualdad__item">
        <PersonalRepresentantes v-if="personal.consejera" :personal="personal.consejera">
          <template #resumen>
            <strong>Persona consejera</strong> certificada para la atención a casos de acoso y hostigamiento sexual.
          </template>
        </PersonalRepresentantes>

        <div class="personalNombres">
          <h2>Personal Administrativo</h2>
          <template v-if="consejeras && Object.keys(consejeras).length">
            <div class="igualdad__boxpersonal">
              <!-- <router-link class="name igualdad-personal" v-for="persona in consejeras" :key="persona.cvepersonal"
                :to="{ name: 'CurricularResumen', params: { nombre: persona.nombre_corto } }">
                {{ persona.nombre }}
              </router-link> -->
              <router-link class="resalte igualdad__link" v-for="persona in consejeras" :key="persona.cvepersonal" to="/">
                {{ persona.nombre }}
              </router-link>
            </div>
          </template>

          <div class="mt-7">
            <h2>Estudiantes</h2>
            <p>Erandi Litzey Robles López</p>
            <p>David Rendón Sauz</p>
          </div>
        </div>

      </div>
    </div>


    <div class="igualdad__servicios mt-10">
      <h3>Servicios a la comunidad:</h3>

      <SectionOverline>
        <template #content>
          <div class="d-flex flex-column ga-7">
            <h2 class="igualdad-servicios__title">Servicios de orientación y recepción de denuncias</h2>
            <p>
              Ofrecemos servicios de orientación sobre violencias de género y las
              formas de atención dentro de la institución y también canalizamos a
              otras entidades en caso necesario. Nuestra atención es completamente
              confidencial, se ofrece en un espacio privado y seguro. Atendemos
              mediante cita previa comunicándote con:
            </p>
            <div>
              <template v-if="personal.representante">
                <router-link class="resalte igualdad__link" to="/">
                  <strong>{{ personal.representante.nombre }}</strong>
                </router-link>
                <!-- <router-link class="name"
                  :to="{ name: 'CurricularResumen', params: { nombre: personal.representante.nombre_corto } }">
                  <strong>{{ personal.representante.nombre }}</strong>
                </router-link> -->
                <p>unidadigualdadgenero@ipicyt.edu.mx</p>
                <p>{{ personal.representante.email }}</p>
                <p>Tel.: {{ personal.representante.telefono }}, Ext. {{ personal.representante.extension }}</p>
              </template>
            </div>
            <div>
              <template v-if="personal.consejera">
                <!-- <router-link class="name"
                  :to="{ name: 'CurricularResumen', params: { nombre: personal.consejera.nombre_corto } }">
                  <strong>{{ personal.consejera.nombre }}</strong>
                </router-link> -->
                <router-link class="resalte igualdad__link" to="/">
                  <strong>{{ personal.consejera.nombre }}</strong>
                </router-link>
                <p>unidadigualdadgenero@ipicyt.edu.mx</p>
                <p>{{ personal.consejera.email }}</p>
                <p>Tel.: {{ personal.consejera.telefono }}, Ext. {{ personal.consejera.extension }}</p>
              </template>
            </div>
            <div>
              <p class="resalte">
                <b>Oficina de atención a la comunidad</b> (previa cita mediante
                correo electrónico):
              </p>
              <p>Oficina DN3-026, 3er. nivel, Edificio Delta</p>
              <p>
                Instituto Potosino de Investigación Científica y Tecnológica A.C.
              </p>
              <p>Cam. a la Presa de San José 2055</p>
              <p>Lomas 4ta. Secc., CP. 78216</p>
              <p>San Luis Potosí, S.L.P.</p>
            </div>
          </div>
        </template>
      </SectionOverline>

      <SectionOverline>
          <template #content>
            <div class="d-flex flex-column ga-7">
              <h2 class="igualdad-servicios__title">Capacitaciones y campañas de sensibilización</h2>
              <p>
                Ofrecemos capacitaciones para reconocer los diferentes tipos de
                violencias considerados en la Ley General de Acceso a las Mujeres a
                una Vida Libre de Violencias y en materia de prevención al
                Hostigamiento y Acoso sexual a integrantes de la comunidad.
              </p>
              <p>
                Realizamos campañas de sensibilización de acuerdo a las necesidades
                institucionales a través de correo electrónico, redes sociales y
                materiales impresos.
              </p>
              <p>
                <b>Si requieres una capacitación especial o tienes una petición
                  particular sobre algún tema que consideres necesario abordar en
                  nuestras campañas de sensibilización, por favor escribe o
                  comunicate a:</b>
              </p>
              <div>
                <p>
                  <a href="mailto:unidadigualdadgenero@ipicyt.edu.mx"
                    class="resalte igualdad__link"><b>unidadigualdadgenero@ipicyt.edu.mx</b></a>
                </p>
                <p>
                  <a href="mailto:nguyen.lopez@ipicyt.edu.mx" class="resalte igualdad__link"><b>nguyen.lopez@ipicyt.edu.mx</b></a>
                </p>
                <p class="resalte"><b>Teléfono +52 (444) 8342000, Ext. 3203</b></p>
              </div>
            </div>
          </template>
      </SectionOverline>
      
      <SectionOverline>
          <template #content>
            <div class="d-flex flex-column ga-7">
              <h2 class="igualdad-servicios__title">Diagnóstico y plan de transversalización de la perspectiva de género</h2>
              <p>
                Dentro de las funciones de la Unidad para la Igualdad de Género esta
                la de recolectar información de la comunidad IPICYT para la
                generación de un diagnóstico que permita mejorar, diseñar e
                implementar mecanismos institucionales para responder y prevenir la
                violencia de género, así como promover la inclusión en el Instituto.
              </p>
            </div>
          </template>
      </SectionOverline>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;


.igualdad {
   max-width: 609px;
	.igualdad__intro{
      .igualdad__logo {
        max-width: 100%;
        min-height: 107px;
        height: auto;
        padding-bottom: 3rem;
        display: block;
        object-fit: contain;
      }
      h3{
        color: var(--color-black);
      }
      p{
        padding: 1rem 0 1rem 0;
      }
	}
	
	.igualdad__conforman{
    display: flex;
    padding-top: 2rem;
    column-gap: 5rem;
    
    @include m.mobile {
      flex-direction: column;
      row-gap: 3rem;
    }
		.igualdad__item {
       flex: 1;

       display: flex;
       flex-direction: column;
       gap: 5rem;

       justify-content: space-between;

       :deep(.personalRepresentante-img){
        width: 128px!important;
        height: 128px!important;
       }

      :deep(.personalRepresentante-info) {
        .nombre {
          &:hover {
            font-weight: inherit;
          }
        }
      }
		}
	}
	
	.igualdad__servicios{
		.igualdad-servicios__title {
      color: var(--color-secondary);
		}
	}
}

.igualdad__link {
  &:hover {
    font-weight: inherit;
    text-decoration: none;
  }
}

.resalte{
  color: var(--color-accent);
}
</style>