<script setup>
// import { useCurricularNavigation } from '@composables/curricular/useCurricular';
import { usePersonales } from '@composables/personal/usePersonales';
import { AccordionLeft, AccordionRight } from "@components/accordion";

import { CSHyMArecursos } from "@data/servicios-comunidad/cshyma.js";
import { miembrosBrigadas, alumnos } from "@data/servicios-comunidad/brigadas.js"

import comisionImg from "/imgs/servicios-comunidad/comision-de-seguridad/comisionIntro.png";
import MapaIpicyt from "/imgs/servicios-comunidad/comision-de-seguridad/Mapa_ipicyt.png";

// const { curricularNombre } = useCurricularNavigation();

const { personal, personalLoading } = usePersonales([
  { key: 'coordinadora', cvepuesto: 800 }
]);
</script>


<template>
  <div class="comision">
    <div class="comsion__intro">
      <div><img class="comision__logo" :src="comisionImg" alt="comisionImg"></div>
      <section class="d-flex flex-column ga-5 mb-8">
        <h2>¿Qué hace la Comisión de Seguridad, Higiene y Medio Ambiente?</h2>
        <p>
          Desarrollar posturas y lineamientos Institucionales en materia de
          seguridad, salud, higiene y medio ambiente, manteniendo un entorno
          seguro para la comunidad del IPICyT, basados en normatividad oficial en
          la materia.
        </p>
      </section>
    </div>

    <section class="d-flex flex-column ga-8">
      <AccordionRight id="objetivos-funciones">
        <template #title>
          <h3>Objetivos y Funciones</h3>
        </template>
        <template #content>

          <div class="mb-5">
            <h6 class="mb-5 color-secondary">Objetivos</h6>
            <ul class="pl-5">
              <li>
                Investigar las causas de los accidentes y enfermedades ocurridos
                dentro de las instalaciones del IPICYT.
              </li>
              <li>
                Proponer medidas para prevenir los accidentes y enfermedades de
                trabajo, basadas en la normatividad en la materia.
              </li>
              <li>
                Dar seguimiento a la instauración de las medidas propuestas por la
                comisión para prevenir los riesgos de trabajo.
              </li>
            </ul>
          </div>

          <div>
            <h6 class="mb-5 color-secondary">Funciones</h6>
            <ul class="pl-5">
              <li>
                Reunirse para analizar los asuntos relacionados a la seguridad e
                higiene del IPICYT y darles seguimiento.
              </li>
              <li>
                Atender las observaciones de la comunidad del IPICYT relacionadas a
                actos y condiciones inseguras.
              </li>
              <li>
                Hacer los recorridos trimestrales de verificación en todas las
                instalaciones del IPICYT con base en un programa anual.
              </li>
              <li>
                Levantar el acta respectiva a cada verificación e informar a la
                comunidad sobre las observaciones.
              </li>
              <li>
                Investigar los incidentes, accidentes y enfermedades de trabajo que
                se susciten al interior del Instituto para tomar precauciones y
                evitar incidentes en el futuro.
              </li>
              <li>
                Dar seguimiento a las causas de los riesgos de trabajo que se tengan
                en el Instituto
              </li>
            </ul>
          </div>
        </template>
      </AccordionRight>

      <AccordionRight id="miembros">
        <template #title>
          <h3>Miembros: Comisión y Brigadas</h3>
        </template>
        <template #content>
          <div class="comision__miembros-acordeones d-flex flex-column ga-8">
            <AccordionLeft class="acordeon pt-5" :id="'a5'" group="parent-1">
              <template #title>
                <h6>Miembros de la CSHyMA</h6>
              </template>
              <template #content>
                <div class="miembros__contenedor">
                  <div class="item" v-for="(items, index) in CSHyMArecursos.miembrosCSHyMA" :key="index">
                    <div class="cargo">
                      <h6>{{ items.cargo }}</h6>
                    </div>
                    <div class="encargados">
                      <div class="columna" v-for="(i, j) in items.encargados" :key="j">

                        <p v-if="i.nombre === 'Antonio De León Rodríguez' || i.nombre === 'Por definir'">
                          {{ i.nombramiento + ' ' + i.nombre }}
                        </p>

                        <p v-else class="nombre" @click="curricularNombre(i.nombre)">
                          {{ i.nombramiento + ' ' + i.nombre }}
                        </p>

                        <p class="puesto">{{ i.puesto }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </AccordionLeft>

            <AccordionLeft class="acordeon pt-5" :id="index.toString()" v-for="(items, index) in miembrosBrigadas"
              :key="index" group="parent-1">
              <template #title>
                <h6>{{ items.cargo }}</h6>
              </template>
              <template #content>
                <div class="miembros__contenedor">
                  <div class="item">
                    <div class="encargados">
                      <div class="columna" v-for="(i, j) in items.encargados" :key="j">
                        <!-- <p class="nombre" v-if="!alumnos.includes(i)" @click="curricularNombre(i)" >{{ i }}</p> -->
                        <p class="nombre" v-if="!alumnos.includes(i)">{{ i }}</p>
                        <p v-else>{{ i }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
            </AccordionLeft>
          </div>
        </template>
      </AccordionRight>

      <AccordionRight id="puntos-reunion">
        <template #title>
          <h3>Puntos de Reunión, Rutas de Evacuación y Escaleras de Emergencia</h3>
        </template>
        <template #content>
          <img class="puntos-reunion__logo" :src="MapaIpicyt" alt="" style="margin-top: 1rem;">
        </template>
      </AccordionRight>

      <AccordionRight id="verificaciones">
        <template #title>
          <h3>Fechas de Verificaciones Trimestrales de la CSHyMA 2025</h3>
        </template>
        <template #content>
          <div class="d-flex flex-column ga-5">
            <div>
              <h6 class="color-secondary mb-5">1. Primera verificación trimestral:</h6>
              <p><span style="font-weight: bold;">10 al 14 de marzo 2025</span></p>
            </div>

            <div>
              <h6 class="color-secondary mb-5">2. Segunda verificación trimestral:</h6>
              <p><span style="font-weight: bold;">09 al 13 de junio 2025</span></p>
            </div>

            <div>
              <h6 class="color-secondary mb-5">3. Tercera verificación trimestral:</h6>
              <p><span style="font-weight: bold;">8 al 12 de septiembre 2025</span></p>
            </div>

            <div>
              <h6 class="color-secondary mb-5">4. Cuarta verificación trimestral:</h6>
              <p><span style="font-weight: bold;">1 al 5 de diciembre 2025</span></p>
            </div>
          </div>
        </template>
      </AccordionRight>
    </section>

    <PersonalContacto class="mt-12" v-if="!personalLoading && personal.coordinadora"
      :personal="personal.coordinadora" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.comision {
  max-width: 609px;

  .comsion__intro {

    .comision__logo {
      max-width: 100%;
      min-height: 107px;
      height: auto;
      padding-bottom: 3rem;
      display: block;
      object-fit: contain;
    }
  }
}

.comision__miembros-acordeones {
  .acordeon {
    border-top: 1px solid var(--color-gray-light);
  }
}

.miembros__contenedor {
  display: grid;
  margin-top: 2rem;
  gap: 2rem;

  .item {
    display: grid;
    gap: 1rem;

    .cargo {
      h5 {
        color: var(--color-black);
      }
    }

    .encargados {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      @include m.mobile {
        grid-template-columns: repeat(1, 1fr);
      }

      .columna {
        width: 400px;

        .nombre {
          color: var(--color-accent);
          text-decoration: underline;
        }

        .nombre:hover {
          color: var(--color-primary-soft);
          cursor: pointer;
        }

        .puesto {
          padding-top: 0%;
        }
      }
    }
  }
}

.puntos-reunion__logo{
  width: 100%;
}
</style>