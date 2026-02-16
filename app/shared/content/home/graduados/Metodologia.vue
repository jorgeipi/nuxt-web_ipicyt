<script setup>
import posgradoIpicyt from "/imgs/home/graduados/posgrado_metodologia.png";
</script>

<template>
  <div class="metodologia ga-5">

    <div>
      <p>
        El diseño de este programa, fue desarrollado por el Departamento de
        Posgrado que depende de la Secretaría Académica; en primera instancia se
        detectó la necesidad de generar una serie de actividades que habilitaran
        la permanente comunicación con las graduadas y graduados, a través de la
        difusión de una agenda de actividades académicas al interior del IPICYT,
        como cursos, talleres y conferencias, sin embargo el objetivo principal
        fue lograr un seguimiento eficaz que permitiera al Instituto conocer la
        trayectoria y ubicación laboral que nuestras egresadas y egresados
        lograban posterior a la obtención de su grado una vez que se involucran en
        el mundo laboral, esta información permitiría al Instituto conocer el
        grado de éxito, pertinencia y ejercicio de sus conocimientos derivados de
        sus estudios de posgrado aplicados y enfocados efectivamente.
      </p>
      <b>Para lograr la creación de un programa de seguimiento integral se
        desarrollaron dos grandes actividades:</b>
      <div class="div_img my-5">
        <img :src="posgradoIpicyt" alt="posgradoIpicyt" />
      </div>
    </div>

    <div>
      <h2 class="metodologia__title inciso_a mb-2">a) Programa de Comunicación hacia Graduados y Graduadas</h2>
      <p>
        Consiste en una serie de actividades y servicios permanentes que tienen
        como objetivo mantener informado al graduado y vinculado hacia el
        Instituto, las actividades que se desarrollan se clasifican en cuatro
        direcciones:
      </p>

      <div class="my-5">
        <ol>
          <li>
            <b>Agenda de eventos académicos.-</b>Es la difusión de cursos, talleres,
            conferencias y congresos con temas afines a las líneas de investigación
            de nuestros posgrados.
          </li>
          <li>
            <b>Difusión de trayectoria de graduados.-</b>Es una serie de actividades
            entre las que se encuentran: boletines, videos, notas periodísticas y
            otros medios de difusión que tienen como objetivo dar a conocer premios,
            reconocimientos o trayectorias exitosas que los graduados del IPICYT han
            logrado.
          </li>
          <li>
            <b>Servicio a graduados.-</b>Difusión de vacantes laborales, becas de
            diversos organismos y servicios como emisión de cédulas de grado ante la
            Dirección General de Profesiones de la SEP.
          </li>
          <li>
            <b>Manejo de redes sociales.-</b>Administración de página de Facebook
            denominada “comunidad de graduados IPICYT”, que tiene como seguidores a
            los graduados del IPICYT y es una estrategia adicional de contacto,
            comunicación e integración.
          </li>
        </ol>
      </div>


    </div>

    <div>
      <h2 class="metodologia__title inciso_b mb-2">b) Seguimiento a la Trayectoria de los Graduados y Graduadas</h2>
      <p>
        Una de las actividades que representaban un mayor reto era el desarrollar
        un programa permanente de seguimiento que asegura el contar con la
        información de la ubicación laboral actual de cada uno de los graduados,
        para ello se desarrollaron tres instrumentos a fin de facilitar el rastreo
        y seguimiento periódico
      </p>

      <div class="my-5">
        <ol>
          <li>
            <b>Formato de Seguimiento a graduados.-</b>Es un formato con datos
            personales y de posible ubicación laboral con que cuente el estudiante,
            este documento lo realiza el alumno como parte del proceso
            administrativo de graduación, es requisito del expediente de documentos
            finales a entregar.
          </li>
          <li>
            <b>Monitoreo de Movilidad Laboral.-</b>Contacto con el graduado para
            conocer la ubicación laboral actual, canales utilizados: correo
            electrónico, llamada telefónica, uso de redes sociales.
          </li>
          <li>
            <b>Sistema de seguimiento.-</b>El contacto personal con las y los
            graduados se realiza en apego a una metodología de parámetros de
            semaforización, en el que toda persona graduada es etiquetada con un
            color: verde, rojo y amarillo, cada color representa la periodicidad con
            la cual se le contactará
          </li>
        </ol>
      </div>


      <p>
        <span class="rojo font-weight-bold">ROJO: </span>Son las personas graduadas que no tienen
        aún una ocupación, no se les ha localizado o están por definir una
        actividad (desempleados(as), no localizados(as), en situación especial)
        <b>Contacto Permanente</b>
      </p>
      <p>
        <span class="amarillo font-weight-bold">AMARILLO: </span>Son las personas graduadas que en apego a la
        información que brindaron previamente, reflejan una actividad temporal o
        con una vigencia establecida, por lo que cambiarán de actividad en un
        período de corto a mediano plazo (ejemplo: realizando estancia
        posdoctoral, iniciando el doctorado, cubriendo una plaza temporal)
        <b>Contacto Regular / Semestral, según casos que corresponda</b>
      </p>
      <p>
        <span class="verde font-weight-bold">VERDE: </span>Son las personas graduadas que por su información
        denotan alto grado de estabilidad laboral (investigadores en CPI, IES,
        propietarios(as) de negocios o empresas, docentes con base)
        <b>Contacto Esporádico</b>
      </p>
      <p>
        La información obtenida se captura en el módulo especial de graduados(as)
        del Sistema de Posgrado del IPICYT, por lo que la información se
        automatiza y brinda la generación de reportes según los campos que se
        requieran, entre los que se encuentran:
      </p>

      <div class="my-5">
        <ol type="a">
          <li>
            ) Sector en el que se emplean
            <ol>
              <li>Académico (Medio superior / Superior)</li>
              <li>Gubernamental</li>
              <li>Privado</li>
              <li>Estancia Posdoctoral</li>
            </ol>
          </li>
          <li>) En búsqueda de empleo</li>
          <li>) Por integrarse a un doctorado</li>
          <li>) Realizando otra actividad</li>
          <li>
            ) Graduados(as) de maestría estudiando el doctorado (en IPICYT / en otra
            institución)
          </li>
          <li>) Graduados(as) de doctorado pertenecientes al SNII.</li>
        </ol>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.metodologia {
  display: flex;
  flex-direction: column;

  ol, ul {
    padding-left: 2rem;
  }

          .inciso_a {
            color: #16809c;
        }

        .inciso_b {
            color: #6b338a;
        }

        .rojo {
            color: var(--color-error);
        }

        .amarillo {
            color: var(--color-warning);
        }

        .verde {
            color: var(--color-success);
        }

  &__title {
    color: var(--color-primary);
  }
}
</style>