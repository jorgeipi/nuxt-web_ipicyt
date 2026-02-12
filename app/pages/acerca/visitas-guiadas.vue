<script setup>
// import { PersonalContacto } from '@/modules/personal/components'
import { usePersonales } from '@composables/personal/usePersonales';
import { getVisitasPath } from '@shared/helpers/acerca/getPath'
import { PDFIcon } from '@components/icons'

const { personal, personalLoading } = usePersonales([
  { key: 'axuliar', cvepuesto: 593 }
]);
</script>

<template>
    <div class="visitasGuiadas ga-15" v-if="!personalLoading">
        <div class="visitasGuiadas__header">
            <h2 class="visitasGuiadas__header-title mb-5">
                Agenda tu visita guiada
            </h2>
            <p class="visitasGuiadas__header-paragraph">
                Solicitamos que para agendar una visita guiada consulte el <span class="link-underline">reglamento de
                    visitas</span> y envíe un oficio de petición para la <strong>LDG. Ma. del Rocío
                    Perales Ruiz </strong>
                <span class="secondary font-weight-semibold">(rocio.perales@ipicyt.edu.mx),</span> <strong>Jefa de Comunicación
                    Social.</strong>
            </p>
        </div>

        <a class="visitasGuiadas__item" target="_blank" :href="getVisitasPath('reglamentovisitas2026.pdf')" >
            <div class="visitasGuiadas__item-box">
                <div class="visitasGuiadas__item-image">
                    <img class="img" src="/imgs/about/visitas/reglamento.png" alt="">
                </div>
                <div class="visitasGuiadas__item-title">
                    <PDFIcon class="icon mr-2"/>
                    <div class="title">
                        Reglamento de visitas guiadas
                    </div>
                </div>
            </div>
        </a>

        <div class="visitasGuiadas__objetivos">
            <h2 class="visitasGuiadas__ojetivos-title mb-7">
                Objetivos
            </h2>
            <ul class="visitasGuiadas__objetivos-list pl-5">
                <li class="visitasGuiadas__objetivos-item">
                    <p class="objetivo"><span class="font-weight-semibold">Divulgar las líneas de investigación del IPICYT</span>
                        hacia la sociedad en general y los estudiantes en particular.</p>
                </li>
                <li class="visitasGuiadas__objetivos-item">
                    <p class="objetivo">Propiciar el contacto entre los estudiantes de los diferentes niveles educativos
                        y los investigadores del IPICYT, fomentando la <span class="font-weight-semibold">orientación vocacional
                            temprana.</span></p>
                </li>
                <li class="visitasGuiadas__objetivos-item">
                    <p class="objetivo"><span class="font-weight-semibold">Apoyar los contenidos de los diferentes programas de
                            educación</span> con información actualizada y precisa.</p>
                </li>
            </ul>
        </div>

        <div class="visitasGuiadas__paraquienes">
            <h2 class="title mb-7">¿Para quién es?</h2>
            <ul class="visitasGuiadas__paraquienes-list pl-5 font-weight-semibold">
                <li class="item">
                    Niveles básicos de educación (primaria, secundaria y preparatorias)
                </li>
                <li class="item">
                    Licenciaturas e ingenierías
                </li>
                <li class="item">
                    Instituciones privadas y gubernamentales
                </li>
            </ul>
        </div>

        <PersonalContacto v-if="personal.axuliar" :personal="personal.axuliar" />
    </div>
</template>


<style scoped lang="scss">
@use '@/styles/base/mixins' as m;

.visitasGuiadas {
    max-width: 58.7rem;
    display: flex;
    flex-direction: column;

    .visitasGuiadas__header{
        .secondary{
            color: var(--color-secondary);
        }
    }

    .visitasGuiadas__objetivos{
        &-list{
            
        }
        &-item{
                margin-bottom: 1rem;
            }
    }

    .visitasGuiadas__paraquienes{
        &-list{
            color: var(--color-secondary); 
            .item{
                margin-bottom: 1rem;
            }               
        }
    }

    .visitasGuiadas__item {
        min-height: 121px;
        border-top: 1px solid var(--color-black);
        border-bottom: 1px solid var(--color-black);
        display: flex;
        align-items: center;
        text-decoration: none!important;

        .visitasGuiadas__item-box {
            display: flex;
            align-items: center;

            @include m.mobile {
                padding: 2rem 0;

                .icon-box {
                    margin-right: 1rem;
                    width: 3rem;
                    height: 3rem;
                    .img{

                    }
                }

                .title{
                    font-size: 1.5rem!important;
                }
            }

            .visitasGuiadas__item-image {
                height: 9.1rem;
                width: 9.1rem;
                border-radius: 50%;
                margin-right: 3rem;
                overflow: hidden;

                .img {
                    height: 100%;
                    width: 100%;
                    object-fit: cover;
                    color: var(--color-black);
                }
                @include m.mobile{
                    height: inherit !important;
                    margin-right: 1rem;
                }               
            }

            .visitasGuiadas__item-title {
                display: flex;
                align-items: center;
                justify-content: center;

                .icon {
                    color: var(--color-gray);
                }

                .title {
                    color: var(--color-black);
                    font-size: 22px;
                    line-height: 22px;
                    font-weight: 500;
                    @include m.mobile{
                        max-width: 150px;
                    }
                }
                @include m.mobile{
                    align-items: center;
                }
            }
        }


        &:hover{
            cursor: pointer;
            .title{
                font-weight: 600 !important;
            }
            .visitasGuiadas__item-image{
                height: 9.5rem;
                width: 9.5rem;
            }
        }
    }
}
</style>