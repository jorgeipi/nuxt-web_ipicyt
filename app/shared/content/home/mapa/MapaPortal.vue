<script setup>
import { useScreenResponsive } from "@composables/responsive/useScreenResponsive";
const { isTablet, isDesktop } = useScreenResponsive();
</script>

<template>
  <section class="mapasitio--routes">
    <template v-if="isDesktop">
      <div class="mapasitio--routes-list">
        <div class="elemento elemento-1 mapasitio--boxroutes">
          <h3 class="routes-title">Acerca</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'BienvenidaIPICYT' }">Bienvenida</router-link>
            <router-link class="routes-link" :to="{ name: 'SecretariaAcademica' }">Secretaría Académica</router-link>
            <router-link class="routes-link" :to="{ name: 'Comunicación Social' }">Comunicación Social</router-link>
            <router-link class="routes-link" :to="{ name: 'Retribucion' }">Retribución y compromiso social IPICYT</router-link>
            <router-link class="routes-link" :to="{ name: 'Visitas Guiadas' }">Visitas Guiadas</router-link>
            <router-link class="routes-link" :to="{ name: 'DirectorioIpicyt' }">Directorio</router-link>
            <router-link class="routes-link" :to="{ name: 'Infraestructura' }">Infraestructura</router-link>
            <router-link class="routes-link" :to="{ name: 'LocalizacionIpicyt' }">Localización</router-link>
            <router-link class="routes-link" :to="{ name: 'Comite de Etica' }">Comité de Ética</router-link>
            <router-link class="routes-link" :to="{ name: 'Contraloria Social' }">Contraloría Social</router-link>
            <router-link class="routes-link" :to="{ name: 'Normatividad' }">Normatividad</router-link>
            <router-link class="routes-link" :to="{ name: 'TransparecicaProactiva' }">Transparencia Proactiva</router-link>
            <router-link class="routes-link" :to="{ name: 'Mural Ipicyt' }">Mural Ipicyt</router-link>
          </div>
        </div>

        <div class="elemento elemento-2 mapasitio--boxroutes-wrap">
          <h3 class="routes-title">Investigación</h3>
          <div class="routes-list">
            <div class="routes-boxlinks">
              <h3 class="routes-subtitle">Divisiones de Investigación</h3>
              <div class="routes-links">
                <router-link class="routes-link" to='/biologia-molecular'>Biología Molecular</router-link>
                <router-link class="routes-link" to='/ciencias-ambientales'>Ciencias Ambientales</router-link>
                <router-link class="routes-link" to='/geociencias-aplicadas'>Geociencias Aplicadas</router-link>
                <router-link class="routes-link" to='/control-y-sistemas-dinamicos'>Control y Sistemas Dinámicos</router-link>
                <router-link class="routes-link" to='/materiales-avanzados'>Materiales Avanzados</router-link>
              </div>
            </div>
            <div class="routes-boxlinks">
              <h3 class="routes-subtitle">Laboratorios Nacionales</h3>
              <div class="routes-links">
                <router-link class="routes-link" :to="{ name: 'cnsLab' }">CNS: Centro Nacional de Supercómputo</router-link>
                <router-link class="routes-link" :to="{ name: 'lanbamaLab' }">LANBAMA: Laboratorio Nacional de Biotecnología Agrícola, Médica y Ambiental</router-link>
                <router-link class="routes-link" :to="{ name: 'linanLab' }">LINAN: Laboratorio Nacional de Investigaciones en Nanociencias y Nanotecnología</router-link>
              </div>
            </div>
            <div class="routes-boxlinks">
              <h3 class="routes-subtitle">Grupos de trabajo interinstitucionales</h3>
              <div class="routes-links">
                <router-link class="routes-link" :to="{ name: 'cienciaIngenieria' }">GCIC: Grupo de Ciencia e Ingeniería Computacionales</router-link>
                <router-link class="routes-link" :to="{ name: 'arsenic' }">ARAN: Arsenic Research and Action NetworkLEMUR: Laboratorio Extramuros</router-link>
                <router-link class="routes-link" :to="{ name: 'lemurLab' }">LEMUR: Laboratorio Extramuros</router-link>
                <router-link class="routes-link" :to="{ name: 'Risza' }">RISZA: Red Internacional para la Sostenibilidad de las Zonas Áridas</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="elemento elemento-3 mapasitio--boxroutes">
          <h3 class="routes-title">Posgrado</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'PosgradoProgramas' }">Programas de Posgrado</router-link>
            <router-link class="routes-link" :to="{ name: 'ConsejoAcademico' }">Consejo Académico de Posgrado</router-link>
            <router-link class="routes-link" :to="{ name: 'DiplomadosPosgrado' }">Diplomados Cursos y Talleres</router-link>
            <router-link class="routes-link" :to="{ name: 'CalendarioAcademico' }">Calendario Académico y Horarios de Clases</router-link>
            <router-link class="routes-link" :to="{ name: 'EstanciasAcademicas' }">Estancias Académicas Estudiantiles</router-link>
            <router-link class="routes-link" :to="{ name: 'BecasConahcyt' }">Becas de la SECIHTI</router-link>
            <router-link class="routes-link" :to="{ name: 'AspirantesExtrangeros' }">Aspirantes de Nacionalidad Extranjera</router-link>
            <router-link class="routes-link" :to="{ name: 'ServiciosPosgrado' }">Servicios de Posgrado</router-link>
            <router-link class="routes-link" :to="{ name: 'ConsejoEstudiantil' }">Consejo Estudiantil</router-link>
            <router-link class="routes-link" :to="{ name: 'NormatividadPosgrado' }">Normatividad del Posgrado Institucional</router-link>
            <router-link class="routes-link" :to="{ name: 'InfoPosgrado' }">Esto es Nuestro Posgrado</router-link>
            <router-link class="routes-link" :to="{ name: 'ConvocatoriasPosgrado' }">Convocatorias de Posgrado</router-link>
            <router-link class="routes-link" :to="{ name: 'prismatic' }">Prismatic</router-link>
            <router-link class="routes-link" :to="{ name: 'ContactoPosgrado' }">Contacto</router-link>
          </div>
        </div>

        <div class="elemento elemento-4 mapasitio--boxroutes">
          <h3 class="routes-title">Vinculación</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'direccion-de-vinculacion' }">Dirección de Vinculación</router-link>
            <router-link class="routes-link" :to="{ name: 'propiedadIntelectual' }">Propiedad Intelectual</router-link>
          </div>
        </div>

        <div class="elemento elemento-5">
          <div class="routes-title_boxlink">
            <router-link class="routes-title_link" :to="{ name: 'Noticias y Eventos' }">Noticias y Eventos</router-link>
          </div>
        </div>

        <div class="elemento elemento-6">
          <div class="routes-title_boxlink">
            <router-link class="routes-title_link" style="border-bottom: none;"
              :to="{ name: 'TransparecicaProactiva' }">Transparencia Proactiva</router-link>
          </div>
        </div>

        <div class="elemento elemento-10 mapasitio--boxroutes">
          <h3 class="routes-title">Servicios a la Comunidad</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'IgualdadGenero' }">Unidad para la Igualdad de Género</router-link>
            <router-link class="routes-link" :to="{ name: 'PrimerosAuxiliosPsicologicos' }">Primeros Auxilios Psicológicos</router-link>
            <router-link class="routes-link" :to="{ name: 'SaludOcupacional' }">Salud Ocupacional</router-link>
            <router-link class="routes-link" :to="{ name: 'ComisionSHMA' }">Comisión de Seguridad, Higiene y Medio Ambiente</router-link>
            <router-link class="routes-link" :to="{ name: 'ComiteDeSostenibilidad' }">Comité de Sostenibilidad</router-link>
          </div>
        </div>

        <div class="elemento elemento-7 mapasitio--boxroutes">
          <h3 class="routes-title">Transparencia</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'Acceso a la Información' }">Acceso a la Información</router-link>
            <router-link class="routes-link" :to="{ name: 'BienvenidaDP' }">Protección de Datos personales</router-link>
            <router-link class="routes-link" :to="{ name: 'Apertura Gubernamental' }">Apertura Gubernamental</router-link>
            <router-link class="routes-link" :to="{ name: 'GobiernoAbierto' }">Gobierno Abierto</router-link>
            <router-link class="routes-link" :to="{ name: 'DatosAbiertos' }">Datos Abiertos</router-link>
          </div>
        </div>

        <div class="elemento elemento-8 mapasitio--boxroutes">
          <h3 class="routes-title">Protección de Datos Personales</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'BienvenidaDP' }">Bienvenida</router-link>
            <router-link class="routes-link" :to="{ name: 'AvisosPrivacidad' }">Avisos de Privacidad Integrales</router-link>
            <router-link class="routes-link" :to="{ name: 'DatosContacto' }">Datos del Contacto de la Unidad de Transparencia</router-link>
            <router-link class="routes-link" :to="{ name: 'InformacionRelevante' }">Información relevante en materia de protección de datos personales</router-link>
          </div>
        </div>

        <div class="elemento elemento-9 mapasitio--boxroutes">
          <h3 class="routes-title">OIC-SECIHTI</h3>
          <div class="routes-links">
            <router-link class="routes-link" :to="{ name: 'oficina-de-representacion' }">OIC-SECIHTI, oficina de representación en el IPICYT</router-link>
            <router-link class="routes-link" :to="{ name: 'estructura-organica' }">Estructura Orgánica</router-link>
            <router-link class="routes-link" :to="{ name: 'denuncias' }">Denuncias</router-link>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="mapasitio--routes-list">

        <div class="column column-1">
          <div class="elemento elemento-1 mapasitio--boxroutes">
            <h3 class="routes-title">Acerca</h3>
            <div class="routes-links">
              <router-link class="routes-link" :to="{ name: 'BienvenidaIPICYT' }">Bienvenida</router-link>
              <router-link class="routes-link" :to="{ name: 'SecretariaAcademica' }">Secretaría Académica</router-link>
              <router-link class="routes-link" :to="{ name: 'Comunicación Social' }">Comunicación Social</router-link>
              <router-link class="routes-link" :to="{ name: 'Retribucion' }">Retribución y compromiso social IPICYT</router-link>
              <router-link class="routes-link" :to="{ name: 'Visitas Guiadas' }">Visitas Guiadas</router-link>
              <router-link class="routes-link" :to="{ name: 'DirectorioIpicyt' }">Directorio</router-link>
              <router-link class="routes-link" :to="{ name: 'Infraestructura' }">Infraestructura</router-link>
              <router-link class="routes-link" :to="{ name: 'LocalizacionIpicyt' }">Localización</router-link>
              <router-link class="routes-link" :to="{ name: 'Comite de Etica' }">Comité de Ética</router-link>
              <router-link class="routes-link" :to="{ name: 'Contraloria Social' }">Contraloría Social</router-link>
              <router-link class="routes-link" :to="{ name: 'Normatividad' }">Normatividad</router-link>
              <router-link class="routes-link" :to="{ name: 'TransparecicaProactiva' }">Transparencia Proactiva</router-link>
              <router-link class="routes-link" :to="{ name: 'Mural Ipicyt' }">Mural Ipicyt</router-link>
            </div>
          </div>

          <div class="elemento elemento-10 mapasitio--boxroutes">
            <h3 class="routes-title">Servicios a la Comunidad</h3>
            <div class="routes-links">
              <router-link class="routes-link" :to="{ name: 'IgualdadGenero' }">Unidad para la Igualdad de Género</router-link>
              <router-link class="routes-link" :to="{ name: 'PrimerosAuxiliosPsicologicos' }">Primeros Auxilios Psicológicos</router-link>
              <router-link class="routes-link" :to="{ name: 'SaludOcupacional' }">Salud Ocupacional</router-link>
              <router-link class="routes-link" :to="{ name: 'ComisionSHMA' }">Comisión de Seguridad, Higiene y Medio Ambiente</router-link>
              <router-link class="routes-link" :to="{ name: 'ComiteDeSostenibilidad' }">Comité de Sostenibilidad</router-link>
            </div>
          </div>
        </div>

        <div class="column column-2">
          <div class="elemento elemento-2 mapasitio--boxroutes-wrap">
            <h3 class="routes-title">Investigación</h3>
            <div class="routes-list">
              <div class="routes-boxlinks">
                <h3 class="routes-subtitle">Divisiones de Investigación</h3>
                <div class="routes-links">
                  <router-link class="routes-link" to='/biologia-molecular'>Biología Molecular</router-link>
                  <router-link class="routes-link" to='/ciencias-ambientales'>Ciencias Ambientales</router-link>
                  <router-link class="routes-link" to='/geociencias-aplicadas'>Geociencias Aplicadas</router-link>
                  <router-link class="routes-link" to='/control-y-sistemas-dinamicos'>Control y Sistemas Dinámicos</router-link>
                  <router-link class="routes-link" to='/materiales-avanzados'>Materiales Avanzados</router-link>
                </div>
              </div>
              <div class="routes-boxlinks">
                <h3 class="routes-subtitle">Laboratorios Nacionales</h3>
                <div class="routes-links">
                  <router-link class="routes-link" :to="{ name: 'cnsLab' }">CNS: Centro Nacional de Supercómputo</router-link>
                  <router-link class="routes-link" :to="{ name: 'lanbamaLab' }">LANBAMA: Laboratorio Nacional de Biotecnología Agrícola, Médica y Ambiental</router-link>
                  <router-link class="routes-link" :to="{ name: 'linanLab' }">LINAN: Laboratorio Nacional de Investigaciones en Nanociencias y Nanotecnología</router-link>
                </div>
              </div>
              <div class="routes-boxlinks">
                <h3 class="routes-subtitle">Grupos de trabajo interinstitucionales</h3>
                <div class="routes-links">
                  <router-link class="routes-link" :to="{ name: 'cienciaIngenieria' }">GCIC: Grupo de Ciencia e Ingeniería Computacionales</router-link>
                  <router-link class="routes-link" :to="{ name: 'arsenic' }">ARAN: Arsenic Research and Action NetworkLEMUR: Laboratorio Extramuros</router-link>
                  <router-link class="routes-link" :to="{ name: 'lemurLab' }">LEMUR: Laboratorio Extramuros</router-link>
                  <router-link class="routes-link" :to="{ name: 'Risza' }">RISZA: Red Internacional para la Sostenibilidad de las Zonas Áridas</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="row-bottom">
            <div class="elemento elemento-7 mapasitio--boxroutes">
              <h3 class="routes-title">Transparencia</h3>
              <div class="routes-links">
                <router-link class="routes-link" :to="{ name: 'Acceso a la Información' }">Acceso a la Información</router-link>
                <router-link class="routes-link" :to="{ name: 'BienvenidaDP' }">Protección de Datos personales</router-link>
                <router-link class="routes-link" :to="{ name: 'Apertura Gubernamental' }">Apertura Gubernamental</router-link>
                <router-link class="routes-link" :to="{ name: 'GobiernoAbierto' }">Gobierno Abierto</router-link>
                <router-link class="routes-link" :to="{ name: 'DatosAbiertos' }">Datos Abiertos</router-link>
              </div>
            </div>

            <div class="elemento elemento-8 mapasitio--boxroutes">
              <h3 class="routes-title">Protección de Datos Personales</h3>
              <div class="routes-links">
                <router-link class="routes-link" :to="{ name: 'BienvenidaDP' }">Bienvenida</router-link>
                <router-link class="routes-link" :to="{ name: 'AvisosPrivacidad' }">Avisos de Privacidad Integrales</router-link>
                <router-link class="routes-link" :to="{ name: 'DatosContacto' }">Datos del Contacto de la Unidad de Transparencia</router-link>
                <router-link class="routes-link" :to="{ name: 'InformacionRelevante' }">Información relevante en materia de protección de datos personales</router-link>
              </div>
            </div>

            <div class="elemento elemento-9 mapasitio--boxroutes">
              <h3 class="routes-title">OIC-SECIHTI</h3>
              <div class="routes-links">
                <router-link class="routes-link" :to="{ name: 'oficina-de-representacion' }">OIC-SECIHTI, oficina de representación en el IPICYT</router-link>
                <router-link class="routes-link" :to="{ name: 'estructura-organica' }">Estructura Orgánica</router-link>
                <router-link class="routes-link" :to="{ name: 'denuncias' }">Denuncias</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="column column-3">
          <div class="elemento elemento-3 mapasitio--boxroutes">
            <h3 class="routes-title">Posgrado</h3>
            <div class="routes-links">
              <router-link class="routes-link" :to="{ name: 'PosgradoProgramas' }">Programas de Posgrado</router-link>
              <router-link class="routes-link" :to="{ name: 'ConsejoAcademico' }">Consejo Académico de Posgrado</router-link>
              <router-link class="routes-link" :to="{ name: 'DiplomadosPosgrado' }">Diplomados Cursos y Talleres</router-link>
              <router-link class="routes-link" :to="{ name: 'CalendarioAcademico' }">Calendario Académico y Horarios de Clases</router-link>
              <router-link class="routes-link" :to="{ name: 'EstanciasAcademicas' }">Estancias Académicas Estudiantiles</router-link>
              <router-link class="routes-link" :to="{ name: 'BecasConahcyt' }">Becas de la SECIHTI</router-link>
              <router-link class="routes-link" :to="{ name: 'AspirantesExtrangeros' }">Aspirantes de Nacionalidad Extranjera</router-link>
              <router-link class="routes-link" :to="{ name: 'ServiciosPosgrado' }">Servicios de Posgrado</router-link>
              <router-link class="routes-link" :to="{ name: 'ConsejoEstudiantil' }">Consejo Estudiantil</router-link>
              <router-link class="routes-link" :to="{ name: 'NormatividadPosgrado' }">Normatividad del Posgrado Institucional</router-link>
              <router-link class="routes-link" :to="{ name: 'InfoPosgrado' }">Esto es Nuestro Posgrado</router-link>
              <router-link class="routes-link" :to="{ name: 'ConvocatoriasPosgrado' }">Convocatorias de Posgrado</router-link>
              <router-link class="routes-link" :to="{ name: 'prismatic' }">Prismatic</router-link>
              <router-link class="routes-link" :to="{ name: 'ContactoPosgrado' }">Contacto</router-link>
            </div>
          </div>
        </div>

        <div class="column column-4">
          <div class="elemento elemento-4 mapasitio--boxroutes">
            <h3 class="routes-title">Vinculación</h3>
            <div class="routes-links">
              <router-link class="routes-link" :to="{ name: 'direccion-de-vinculacion' }">Dirección de Vinculación</router-link>
              <router-link class="routes-link" :to="{ name: 'propiedadIntelectual' }">Propiedad Intelectual</router-link>
            </div>
          </div>

          <div class="elemento elemento-5">
            <div class="routes-title_boxlink">
              <router-link class="routes-title_link" :to="{ name: 'Noticias y Eventos' }">Noticias y Eventos</router-link>
            </div>
          </div>

          <div class="elemento elemento-6">
            <div class="routes-title_boxlink">
              <router-link class="routes-title_link" style="border-bottom: none;" :to="{ name: 'TransparecicaProactiva' }">Transparencia Proactiva</router-link>
            </div>
          </div>
        </div>
      </div>
    </template>

  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mapasitio--routes {
  width: 100%;
  // min-height: 100vh;
  // padding: 20px;
  // background: #f5f5f5;
  box-sizing: border-box;
  overflow: hidden;

  margin-bottom: 8.6rem;

  @include m.mobile {
    margin-bottom: 6rem;
  }
}

.mapasitio--routes-list {
  display: flex;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;

  // Responsive: cambiar a columna en móviles
  @media (max-width: 768px) {
    flex-direction: column;
  }

  @include m.desktop{
    flex-direction: column;
  }
}

.mapasitio--boxroutes {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .routes-title {
    color: var(--color-black);
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .routes-links {
    display: inline-flex;
    flex-direction: column;
    gap: 2rem;

    padding-bottom: 4rem;

    border-bottom: 1px solid var(--color-black);

    .routes-link {
      display: inline-flex;
      color: var(--color-secondary);
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.2rem;

      &:hover{
        text-decoration: underline;
      }
    }
  }
}

.mapasitio--boxroutes-wrap {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .routes-title {
    color: var(--color-black);
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .routes-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 2rem;

    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-black);

    .routes-boxlinks {
      max-width: 180px;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @include m.mobile {
        max-width: none;
      }

      .routes-subtitle {
        color: var(--color-black);
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      .routes-links {
        display: inline-flex;
        flex-direction: column;
        gap: 2rem;

        .routes-link {
          display: inline-flex;
          color: var(--color-secondary);
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;

            &:hover{
              text-decoration: underline;
            }
        }
      }
    }
  }
}

.routes-title_boxlink {
  width: 100%;

  padding-bottom: 4rem;
  border-bottom: 1px solid var(--color-black);

  .routes-title_link {
    color: var(--color-black);
    display: inline-flex;
    font-family: "Noto Sans";
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;

    &:hover{
      text-decoration: underline;
    }
  }
}

.column {
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  row-gap: 4rem;
  box-sizing: border-box;
  min-width: 0;
}

.column-1 {
  flex: 0 0 16.666%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
}

.column-2 {
  flex: 0 0 50%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
}

.column-3 {
  flex: 0 0 16.666%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
}

.column-4 {
  flex: 0 0 16.666%;

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
}

.row-bottom {
  display: flex;
  gap: 10px;
  box-sizing: border-box;
  min-width: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .elemento {
    flex: 1;
    min-width: 0;
  }
}

.elemento {
  // padding: 1rem;
  border-radius: 8px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  box-sizing: border-box;
  min-width: 0;
  overflow: hidden;

  h3 {
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: 600;
    word-wrap: break-word;
  }

  p {
    margin: 5px 0;
    line-height: 1.6;
    word-wrap: break-word;
  }
}
</style>