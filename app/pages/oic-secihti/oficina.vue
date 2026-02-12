<script setup>
// import { onMounted } from 'vue';
import { oicfunciones } from '@data/oic/oic-secihti';
// import FuncionOIC from '../components/FuncionOIC.vue';

// import { useResponsiveOicTitle } from '../composables/useResponsiveOicTitle';
// const { initResponsiveTitle } = useResponsiveOicTitle();
// onMounted(() => {
//     initResponsiveTitle();
// })

definePageMeta({
  path: '/oic-secihti/oficina-de-representacion',
})
</script>

<template>
    <div class="oic--inicio">
        <main class="inicio--main">
            <section class="inicio--intro" aria-labelledby="titulo-intro">
                <h2 id="titulo-intro" class="inicio--title">
                    Órgano Interno de Control en la Secretaría de Ciencia, Humanidades, Tecnología e Innovación.<br />
                    <span class="subtitle">
                        Oficina de Representación en el Instituto Potosino de Investigación Científica y Tecnológica A.C.
                    </span>
                </h2>

                <div class="inicio-question" aria-labelledby="pregunta-que-es">
                    <h2 id="pregunta-que-es" class="inicio-subtitle">¿Qué es?</h2>
                    <p>La Oficina de Representación del OIC en la Secihti en el IPICYT, es la encargada de representar al OIC en este instituto, llevando a cabo funciones de prevención y detección de posibles actos de corrupción.</p>
                </div>

                <div class="inicio-objetivo" aria-labelledby="titulo-objetivo">
                    <h2 id="titulo-objetivo" class="inicio-subtitle">Objetivo</h2>
                    <p>
                        El Órgano Interno de Control en el IPICYT se encarga de ejecutar el sistema de control interno y evaluación gubernamental. Así mismo, tiene como propósito controlar que los procesos y procedimientos que realizan los servidores públicos se encuentren apegados a los principios de legalidad, honradez, lealtad, imparcialidad y eficiencia, así como a los objetivos sustantivos de la entidad, para en el caso de no ser así, es quien posee la autoridad para atender, tramitar y resolver las quejas o denuncias presentadas contra presuntas irregularidades administrativas cometidas dentro de este marco.
                        <br/><br/>
                        El objetivo principal del Órgano Interno de Control (OIC) es asegurarse de que la administración pública funcione de manera eficiente, honesta y transparente. Esto se logra a través de la supervisión, control y evaluación de los procesos y procedimientos de la administración pública, con el fin de detectar y prevenir posibles actos de corrupción, así como de mejorar la gestión gubernamental.
                    </p>
                </div>
            </section>

            <section class="inicio--funciones" aria-labelledby="titulo-funciones">
                <h2 id="titulo-funciones" class="inicio-subtitle">El OIC tiene varias funciones clave:</h2>
                <div class="inicio--funciones_box" role="list">
                    <OicFuncion
                        v-for="(funcion, idx) in oicfunciones"
                        :key="idx"
                        :titulo="funcion.titulo"
                        :content="funcion.contenido"
                        role="listitem"
                    />
                </div>
            </section>

            <section class="inicio--cierre">
                <p>En resumen, el OIC es fundamental para la construcción de un buen gobierno y el combate a la corrupción, trabajando en la prevención, detección y sanción de posibles irregularidades, así como en la mejora de la gestión pública. </p>
                <div class="inicio-question" aria-labelledby="pregunta-dirigido">
                    <h2 id="pregunta-dirigido" class="inicio-subtitle">¿A quién va dirigido?</h2>
                    <p>Va dirigido a todos los Servidores Públicos que conforman el Instituto Potosino de Investigación Científica y Tecnológica, A.C., así como a todos los usuarios de los servicios que presta el IPICYT.</p>
                </div>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.oic--inicio {
    .inicio--main {
        width: 60.9rem;

        // margin-right: 2.4rem;
        @include m.desktop {
            margin: 0 auto;
        }

        @include m.tablet {
            width: min(60.9rem, 100%);
        }

        .inicio--title,
        .inicio-subtitle {
            color: var(--color-black);
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            font-weight: bold;
        }

        .inicio--title{
            margin: 0rem;
            span{
                font-weight: normal;
            }
        }

        .inicio-subtitle{
            margin-bottom: 2rem;
        }

        .inicio--intro {
            display: flex;
            flex-direction: column;
            row-gap: 3rem;

            margin-bottom: 3rem;

            #titulo-intro{
                margin-bottom: 4rem;
            }
        }

        .inicio--funciones {
            margin-bottom: 3rem;
            .inicio--funciones_box {
            }
        }

        .inicio--cierre{
            display: flex;
            flex-direction: column;
            row-gap: 3rem;
        }
    }
}
</style>