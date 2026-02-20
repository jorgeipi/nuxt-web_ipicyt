<script setup>
import riszalogo from '/imgs/research/grupos/RISZA/RISZA-logo.png';
import { usePersonales } from "@composables/personal/usePersonales";
import { SuccessRingIcon, RISZAIcon } from "@components/icons";


const { personal, personalLoading } = usePersonales([
    { key: "coordinadoraRisza", cvepuesto: 596, cvepersonal: 34 },
]);

const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
})

definePageMeta({
  layout: false,
})
</script>

<template>
    <NuxtLayout name="main">
        <template #banner>
                <LayoutBannerBase
                    image="/imgs/research/grupos/RISZA/RISZA-banner.png"
                    height="200px"
                    variant="centered"
                >
                        <h1 class="h1-banner">Red Internacional para la Sostenibilidad de las Zonas Áridas (RISZA)</h1>
                </LayoutBannerBase>
        </template>

        <div class="research-group" v-if="!personalLoading">

            <section class="research-group__intro mb-12">
                <PersonalAcademico v-if="personal.coordinadoraRisza" :personal="{
                    ...personal.coordinadoraRisza,
                    nombrepuesto:
                        'Coordinadora de la Red Internacional para la Sostenibilidad de las Zonas Áridas',
                }" />

                <div class="research-group__intro--info">
                    <img class="research-group__logo mb-8" :src="riszalogo" alt="risza_logo" />

                    <div class="mb-8">
                        <p>
                            La <strong>Red Internacional para la Sostenibilidad de las Zonas Áridas (RISZA)</strong>
                            fue fundada en abril de 2017 como Red Temática de CONACYT, con el
                            compromiso de co-generar conocimiento relevante y aportar soluciones
                            a los grandes retos que enfrentan las zonas áridas y sus pobladores,
                            en consonancia con los
                            <strong>Objetivos de Desarrollo Sostenible (ODS).</strong> RISZA impulsa un
                            proceso colectivo - enfatizando la intergeneracionalidad y temas de
                            género - que integra a personas de la academia de las ciencias
                            naturales, sociales y humanidades, así como a actores de los
                            sectores público y privado, asociaciones civiles, comunidades
                            locales y pueblos Indígenas.
                        </p><br />
                        <p>
                            Como red abierta e incluyente, RISZA promueve de manera colectiva y
                            participativa la transformación hacia una gestión basada en
                            guardanía, la relacionalidad, la responsabilidad y el cuidado
                            profundo (stewardship), con el fin de incidir en políticas públicas
                            y fortalecer el desarrollo sostenible de las zonas áridas a nivel
                            nacional e internacional.
                        </p>
                    </div>

                    <ButtonPortal :url="'https://risza.mx'">
                        <!-- <img :src="riszaIcon" alt="riszaIcon" /> -->
                        <RISZAIcon class="flex-shrink-0" />
                        <p class="font-weight-bold">Red Internacional para la Sostenibilidad de las Zonas Áridas (RISZA)</p>
                    </ButtonPortal>
                </div>
            </section>

            <section class="research-group__acordiones">
                <h2 class="mb-5">Objetivos</h2>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon class="color-secondary" />
                    </template>

                    <template #content>
                        <div class="d-flex flex-column ga-8">
                            <h2 class="color-secondary">Membresía abierta:</h2>
                            <p>
                                Cuenta con más de 600 integrantes nacionales e internacionales de diversos sectores. Es una
                                red
                                inclusiva que invita a una participación amplia y voluntaria de la sociedad <a
                                    href="https://risza.mx/register" class="resalte"><b>(regístrate aquí).</b></a>
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon class="color-secondary" />
                    </template>

                    <template #content>
                        <div class="d-flex flex-column ga-8">
                            <h2 class="color-secondary">Co-creación de Observatorios Participativos Socio-Ecológicos (OPSEs)
                            </h2>

                            <p>Innovación social para proteger, con cuidado y responsabilidad, la diversidad biológica y
                                cultural
                                como pilares del desarrollo sostenible en las zonas áridas. Actualmente existen ocho OPSEs
                                en México
                                (por ejemplo <a href="https://opsemapimi.risza.mx/" class="resalte"><b>OPSE Mapimí</b></a>,
                                <a href="https://opsecuauhtemoc.risza.mx/" class="resalte"><b>OPSE Cuauhtémoc</b></a>, <a
                                    href="https://opsetokio.risza.mx/" class="resalte"><b>OPSE El
                                        Tokio</b></a>, <a href="https://opsecomcaac.risza.mx/" class="resalte"><b>OPSE
                                        Comcaac</b></a>, <a href="https://opseguadalupe.risza.mx/" class="resalte"><b>OPSE
                                        Valle de
                                        Guadalupe</b></a>).
                                Consulta la guía para co-crear un OPSE <a
                                    href="https://publicaciones.institutomora.edu.mx/omp/index.php/EIM/catalog/view/131/65/1255"
                                    class="resalte"><b>aqui.</b></a></p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon class="color-secondary" />
                    </template>

                    <template #content>
                        <div class="d-flex flex-column ga-8">
                            <h2 class="color-secondary">Co-producción de conocimiento</h2>

                            <p>
                                A través de los OPSEs, RISZA fomenta comunidades de aprendizaje transdisciplinarias que
                                generan
                                conocimiento útil, nutren ambientes de transformación y reconocen la pluralidad de
                                intereses,
                                experiencias, habilidades y valores.
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon class="color-secondary" />
                    </template>

                    <template #content>
                        <div class="d-flex flex-column ga-8">
                            <h2 class="color-secondary">Repositorio Participativo del Desierto</h2>
                            <p>
                                Este <a href="https://repositorio.risza.mx/" class="resalte"><b>espacio virtual</b></a>
                                ubicado en el
                                Centro Nacional de Supercómputo, está diseñado para fortalecer
                                comunidades de aprendizaje vinculadas a los OPSEs. Ofrece un entorno seguro donde cada
                                miembro
                                autorizado gestiona la privacidad de la información que comparte y consulta.
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon class="color-secondary" />
                    </template>

                    <template #content>
                        <div class="d-flex flex-column ga-8">
                            <h2 class="color-secondary">Formación de recursos humanos</h2>
                            <p>
                                RISZA capacita en sistemas socio-ecológicos desde el enfoque de sistemas adaptativos
                                complejos, para
                                abordar problemas socioambientales vinculados al cambio climático, el cambio de uso de suelo
                                y la
                                pérdida de biodiversidad en los sistemas productivos, los modos de vida, la seguridad
                                hídrica y
                                alimentaria y la seguridad humana en las zonas áridas y semiáridas.
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza borderbottom">
                    <template #icon>
                        <SuccessRingIcon class="color-secondary" />
                    </template>

                    <template #content>
                        <div class="d-flex flex-column ga-8">
                            <h2 class="color-secondary">
                                Comunicación, movilidad y transferencia de conocimientos
                            </h2>
                            <p>
                                La red impulsa la difusión, el intercambio de métodos y técnicas, y la evaluación de
                                iniciativas
                                mediante la colaboración entre sus miembros y alianzas a nivel local, regional, nacional e
                                internacional.
                            </p>
                        </div>
                    </template>
                </SectionOverline>
            </section>

            <section class="research-group__contacto mt-12">
                <PersonalContacto v-if="personal.coordinadoraRisza" :personal="personal.coordinadoraRisza" />
            </section>

        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.research-group {
    max-width: 790px;
    &__intro {
        display: flex;
        @include m.tablet {
            flex-direction: column;
        }
        &--info {
            margin-left: 3.2rem;
            @include m.tablet {
                margin-left: 0rem;
            }
        }
    }

    &__logo {
        max-width: 100%;
        min-height: 110px;
        height: auto;
        display: block;
        object-fit: contain;
    }
}
</style>
