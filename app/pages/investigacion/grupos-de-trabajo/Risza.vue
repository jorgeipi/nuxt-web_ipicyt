<script setup>
import succes_icon from "/imgs/icons/success_icon.png";
// import btn_portal from "@ipicyt/components/button/general/btn_portal.vue";
import { SectionOverline } from "@ipicyt/components/sections";
import riszaName from "/imgs/grupos/risza/risza_name.svg";
import riszaIcon from "/imgs/grupos/risza/risza_icon.svg";

import { usePersonales } from "@ipicyt/modules/personal/composables/usePersonales";
import { SuccessRingIcon } from "@components/icons";

const { personal, personalLoading } = usePersonales([
    { key: "coordinadoraRisza", cvepuesto: 596, cvepersonal: 34 },
]);
</script>

<template>
    <div class="displayCenter container">
        <div class="laboratorio" v-if="!personalLoading">

            <section class="introSeccion">
                <PersonalAcademico v-if="personal.coordinadoraRisza" :personal="{
                    ...personal.coordinadoraRisza,
                    nombrepuesto:
                        'Coordinadora de la Red Internacional para la Sostenibilidad de las Zonas Áridas',
                }" />
                <div class="introInfo">
                    <img :src="riszaName" alt="risza_name" />

                    <div>
                        <p>
                            La
                            <b>Red Internacional para la Sostenibilidad de las Zonas Áridas
                                (RISZA)</b>
                            fue fundada en abril de 2017 como Red Temática de CONACYT, con el
                            compromiso de co-generar conocimiento relevante y aportar soluciones
                            a los grandes retos que enfrentan las zonas áridas y sus pobladores,
                            en consonancia con los
                            <b>Objetivos de Desarrollo Sostenible (ODS).</b> RISZA impulsa un
                            proceso colectivo - enfatizando la intergeneracionalidad y temas de
                            género - que integra a personas de la academia de las ciencias
                            naturales, sociales y humanidades, así como a actores de los
                            sectores público y privado, asociaciones civiles, comunidades
                            locales y pueblos Indígenas.
                        </p>
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
                        <img :src="riszaIcon" alt="riszaIcon" />
                        <h3>
                            Red Internacional para la Sostenibilidad de las Zonas Áridas
                            (RISZA)
                        </h3>
                    </ButtonPortal>
                </div>
            </section>

            <section>
                <h3>Objetivos</h3>
                
                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon />
                    </template>

                    <template #content>
                        <div>
                            <h2>Membresía abierta:</h2>
                            <p>
                                Cuenta con más de 600 integrantes nacionales e internacionales de diversos sectores. Es una red
                                inclusiva que invita a una participación amplia y voluntaria de la sociedad <a href="https://risza.mx/register"
                                class="resalte"><b>(regístrate aquí).</b></a>
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon />
                    </template>

                    <template #content>
                        <h2>Co-creación de Observatorios Participativos Socio-Ecológicos (OPSEs)</h2>

                        <p>Innovación social para proteger, con cuidado y responsabilidad, la diversidad biológica y cultural
                            como pilares del desarrollo sostenible en las zonas áridas. Actualmente existen ocho OPSEs en México
                            (por ejemplo <a href="https://opsemapimi.risza.mx/" class="resalte"><b>OPSE Mapimí</b></a>, <a
                                href="https://opsecuauhtemoc.risza.mx/" class="resalte"><b>OPSE Cuauhtémoc</b></a>, <a
                                href="https://opsetokio.risza.mx/" class="resalte"><b>OPSE El
                                    Tokio</b></a>, <a href="https://opsecomcaac.risza.mx/" class="resalte"><b>OPSE
                                    Comcaac</b></a>, <a href="https://opseguadalupe.risza.mx/" class="resalte"><b>OPSE Valle de
                                    Guadalupe</b></a>).
                            Consulta la guía para co-crear un OPSE <a
                                href="https://publicaciones.institutomora.edu.mx/omp/index.php/EIM/catalog/view/131/65/1255"
                                class="resalte"><b>aqui.</b></a></p>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon />
                    </template>

                    <template #content>
                        <div>
                            <h5>Co-producción de conocimiento</h5>

                            <p>
                                A través de los OPSEs, RISZA fomenta comunidades de aprendizaje transdisciplinarias que generan
                                conocimiento útil, nutren ambientes de transformación y reconocen la pluralidad de intereses,
                                experiencias, habilidades y valores.
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon />
                    </template>

                    <template #content>
                        <div>
                            <h5>Repositorio Participativo del Desierto</h5>
                            <p>
                                Este <a href="https://repositorio.risza.mx/" class="resalte"><b>espacio virtual</b></a> ubicado en el
                                Centro Nacional de Supercómputo, está diseñado para fortalecer
                                comunidades de aprendizaje vinculadas a los OPSEs. Ofrece un entorno seguro donde cada miembro
                                autorizado gestiona la privacidad de la información que comparte y consulta.
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza">
                    <template #icon>
                        <SuccessRingIcon />
                    </template>

                    <template #content>
                        <div>
                            <h5>Formación de recursos humanos</h5>
                            <p>
                                RISZA capacita en sistemas socio-ecológicos desde el enfoque de sistemas adaptativos complejos, para
                                abordar problemas socioambientales vinculados al cambio climático, el cambio de uso de suelo y la
                                pérdida de biodiversidad en los sistemas productivos, los modos de vida, la seguridad hídrica y
                                alimentaria y la seguridad humana en las zonas áridas y semiáridas.
                            </p>
                        </div>
                    </template>
                </SectionOverline>

                <SectionOverline :imgicon="succes_icon" class="objetivos-risza borderbottom">
                    <template #icon>
                        <SuccessRingIcon />
                    </template>

                    <template #content>
                        <div>
                            <h5>
                                Comunicación, movilidad y transferencia de conocimientos
                            </h5>
                            <p>
                                La red impulsa la difusión, el intercambio de métodos y técnicas, y la evaluación de iniciativas
                                mediante la colaboración entre sus miembros y alianzas a nivel local, regional, nacional e
                                internacional.
                            </p>
                        </div>
                    </template>
                </SectionOverline>
            </section>

            <section class="laboratorio_contacto">
                <PersonalContacto v-if="personal.coordinadoraRisza" :personal="personal.coordinadoraRisza" />
            </section>
            
        </div>
    </div>
</template>

<style>
.objetivos-risza {
    h5 {
        font-size: 2.2rem;
    }

    p {
        padding-top: 2rem;
    }
}
</style>
