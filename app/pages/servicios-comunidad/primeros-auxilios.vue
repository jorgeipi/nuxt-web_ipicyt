<script setup>
import auxIntro from '/imgs/servicios-comunidad/primeros-auxilios-psicologicos/auxiliosIntro.png';

definePageMeta({
  path: '/servicios-comunidad/primeros-auxilios-psicologicos',
})
</script>

<template>
  <div class="AuxPsi">
    <div class="AuxPsi__intro mb-5">
      <img class="AuxPsi__logo" :src="auxIntro" alt="">
      <h2 class="mb-5">Primeros Auxilios Psicológicos</h2>
      <p>
        Son una intervención psicológica a corto plazo para atender crisis
        emocionales, con el objetivo de restablecer la estabilidad personal a
        nivel físico y emocional.
      </p>
    </div>

    <div class="AuxPsi__content">
        <SectionOverline>
            <template #content>
                <div class="d-flex flex-column ga-4">
                    <h2 class="AuxPsi-content__title">Atención y horarios</h2>
                    <p>
                        Psic. Diego Gael Ortega Camacho:
                        <span style="font-weight: bold"
                        ><br />psicologia@ipicyt.edu.mx <br>
                        Lunes a Jueves de 14 a 19 hrs <br>
                        Viernes de 9 a 14 hrs</span
                        >
                    </p>
                    <p>
                        Psic. Mariel Montes:
                        <span style="font-weight: bold"
                        ><br />mariel.montes@ipicyt.edu.mx
                        <br /> Lunes a viernes 9 a 14 hrs.</span>
                    </p>
                    <p>Ext. 4088</p>
                </div>
            </template>
        </SectionOverline>

        <SectionOverline>
            <template #content>
                <div class="d-flex flex-column ga-4">
                    <h2 class="AuxPsi-content__title">¿Qué hacemos?</h2>
                    <ul>
                        <li>Orientación psicológica</li>
                        <li>Contención emocional</li>
                        <li>Psicoeducación</li>
                        <li>Canalización</li>
                    </ul>
                </div>
            </template>
        </SectionOverline>

        <SectionOverline>
            <template #content>
                <div class="d-flex flex-column ga-4">
                    <h2 class="AuxPsi-content__title">¿Cómo lo hacemos?</h2>
                    <p>
                        Trabajamos en el desarrollo de habilidades personales, sociales y
                        cognitivas que permitan a las personas el afrontamiento de
                        distintos tipos de situaciones que puedan afectar su estado físico
                        y emocional, promoviendo así una mejor calidad de vida.
                    </p>
                </div>
            </template>
        </SectionOverline>

        <SectionOverline>
            <template #content>
                <div class="d-flex flex-column ga-4">
                    <h2 class="AuxPsi-content__title">¿A quién atendemos?</h2>
                    <p>A toda la comunidad IPICYT:</p>
                    <ul>
                        <li>Estudiantes</li>
                        <li>Profesores</li>
                        <li>Investigadores</li>
                        <li>Personal Administrativo</li>
                        <li>Becarios (Practicantes Profesionales y Servidores Sociales)</li>
                        <li>Proveedores de servicio (Intendencia y Vigilancia)</li>
                    </ul>
                </div>
            </template>
        </SectionOverline>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.AuxPsi {
    max-width: 609px;
    .AuxPsi__intro {
        .AuxPsi__logo {
            max-width: 100%;
            min-height: 107px;
            height: auto;
            padding-bottom: 3rem;
            display: block;
            object-fit: contain;
        }
    }

    .AuxPsi__content{
        .AuxPsi-content__title {
            color: var(--color-secondary);
        }
    }
}
</style>