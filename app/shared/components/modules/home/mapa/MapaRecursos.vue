<script setup>
import BorderBlueTitle2 from './BorderBlueTitle2.vue';
</script>

<template>
    <section class="mapasitio--recursos">
        <div class="mapasitio--recursos-list">
            <div class="mapasitio--recurso">
                <BorderBlueTitle2 class="recurso--bluetitle">Recursos para Comunidades IPICYT</BorderBlueTitle2>
                <div class="recurso--links">
                    <a class="recurso--link" href="https://biblioteca.ipicyt.edu.mx/eg/opac/home" target="_blank">Biblioteca</a>
                    <router-link class="recurso--link" :to="{ name: 'DirectorioIpicyt' }">Directorio</router-link>
                    <router-link class="recurso--link" :to="{ name: 'DisponibilidadSalas' }">Disponibilidad de salas</router-link>
                    <router-link class="recurso--link" :to="{ name: 'Ipibus' }">IPIBUS</router-link>
                    <a class="recurso--link" href="https://www.ipicyt.edu.mx/IM/" target="_blank">Portal de pagos</a>
                    <a class="recurso--link" href="https://sigpi.ipicyt.edu.mx/" target="_blank">Sistema para la Gestión de los Procesos Institucionales</a>
                    <a class="recurso--link" href="https://soporte.ipicyt.edu.mx/login" target="_blank">Soporte técnico en T.I.</a>
                    <router-link class="recurso--link" :to="{ name: 'ValidacionFacturas' }">Validación de facturas</router-link>
                </div>
            </div>
            <div class="mapasitio--recurso">
                <BorderBlueTitle2 class="recurso--bluetitle">Recursos para el Alumnado</BorderBlueTitle2>
                <div class="recurso--links">
                    <a class="recurso--link" href="https://intranet.ipicyt.edu.mx:8443/alumno/login/auth;jsessionid=ECE738553B78E25D7A667BF2469E7F50" target="_blank">Intranet Alumnos</a>
                    <router-link class="recurso--link" :to="{ name: 'DisponibilidadSalas' }">Disponibilidad de salas</router-link>
                    <router-link class="recurso--link" :to="{ name: 'CalendarioAcademico' }">Calendario Académico y Horarios de Clases</router-link>
                </div>
            </div>
            <div class="mapasitio--recurso">
                <BorderBlueTitle2 class="recurso--bluetitle">Recursos para Graduadas y Graduados</BorderBlueTitle2>
                <div class="recurso--links">
                    <router-link class="recurso--link" :to="{ name: 'SeguimientoGraduados' }">Programa Institucional de Seguimiento a Graduados</router-link>
                    <router-link class="recurso--link" :to="{ name: 'gradoExpedicionCedula' }">Registro de Grado y Expedición de Cédula</router-link>
                    <a class="recurso--link" href="https://www.ipicyt.edu.mx/pdfs/recursos/Carta%20de%20Retribucio%CC%81n_Graduadas%20y%20Graduados.pdf" target="_blank">Carta de Retribución Social</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mapasitio--recursos {
    .mapasitio--recursos-list {
        display: flex;
        flex-direction: row;
        // align-items: center;
        // justify-content: center;
        column-gap: 2rem;
        row-gap: 3rem;
        flex-wrap: wrap;

        .mapasitio--recurso {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 38.5rem;
            width: 100%;

            @include m.mobile {
                max-width: none;
                width: 100%;
                gap: 1rem;
            }

            .recurso--bluetitle {
                display: flex;
                align-items: start;
                justify-content: start;
                min-height: 10rem;

                @include m.mobile {
                    min-height: 8rem;
                }
            }

            .recurso--links {
                display: inline-flex;
                flex-direction: column;
                gap: 2rem;
                max-width: 18.1rem;

                .recurso--link {
                    display: inline-flex;

                    color: var(--color-secondary)!important;
                    font-size: 1.5rem;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 2.2rem;

                    &:hover {
                        cursor: pointer;
                        color: var(--color-secondary)!important;
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>