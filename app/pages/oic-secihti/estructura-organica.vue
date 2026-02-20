<script setup>
import { onMounted, ref, computed } from 'vue';
import { fetchPersonal } from '@shared/helpers/personal/fetchPersonal';

const { isMobile } = useScreenResponsive()
const { setPageConfig } = usePageConfig()

const personal = ref(null);
const loading = ref(false);
const ordenPersonal = [3596, 3812, 3952, 434, 436];

onMounted(async () => {
  loading.value = true;
  
  personal.value = await fetchPersonal([
    { cvepersonal: 3596, cvepuesto: 802, type: 'contacto' },
    { cvepersonal: 3812, cvepuesto: 662, type: 'contacto' },
    { cvepersonal: 3952, cvepuesto: 378 },
    { cvepersonal: 434, cvepuesto: 138 },
    { cvepersonal: 436, cvepuesto: 138 },
  ]);

  loading.value = false;
});

const personalOrdenado = computed(() => {
  if (!personal.value) return [];

  const personalArray = Array.isArray(personal.value)
    ? personal.value
    : Object.values(personal.value);

  return ordenPersonal
    .map(cve => personalArray.find(p => p.cvepersonal == cve))
    .filter(Boolean);
});

setPageConfig({
  showBanner: true,
  showMenu: true,
})

definePageMeta({
  layout: false,
}) 
</script>

<template>
    <NuxtLayout name="main">
        <template #banner>
            <LayoutBannerBase image="/imgs/oic/denuncias/oic-header.png" height="230px" maxHeight="230px">
                <h1 v-if="isMobile" class="h1-banner">OIC-SECHITI<br><span class="font-weight-light text-h2">Órgano Interno de Control en la Secretaría de Ciencia, Humanidades, Tecnología e Innovación</span></h1>
                <h1 v-else class="h1-banner">Órgano Interno de Control en la Secretaría de Ciencia, Humanidades, Tecnología e Innovación <br><span class="font-weight-light text-h2">Órgano Interno de Control en la Secretaría de Ciencia, Humanidades, Tecnología e Innovación</span></h1>
            </LayoutBannerBase>
        </template>

        <div class="oic--estructura">
            <main class="estructura--main">

                <TransitionGroup name="fade">
                <template v-if="loading">
                    <SkeletonPage />
                </template>

                <template v-else-if="personal && typeof personal === 'object' && Object.keys(personal).length">
                    <section class="estructura--intro">
                        <h2 id="titulo-intro" class="inicio--title">
                            Estructura Orgánica
                        </h2>

                        <p>Estructura Orgánica y ocupacional para el Órgano Interno de Control en el Instituto Potosino de
                            Investigación Cientifica y Tecnologica A.C. (IPICYT).
                        </p>
                    </section>

                    <section class="estructura--personal">
                        <div class="estructura--persona_box"
                            v-if="personal && typeof personal === 'object' && Object.keys(personal).length">
                            <PersonalHorizontal v-for="persona in personalOrdenado" :key="persona.cvepersonal" :persona="persona" />
                        </div>
                    </section>
                </template>

                <template v-else>
                    <section class="estructura--intro">
                        <h1 id="titulo-intro" class="inicio--title">
                            Estructura Orgánica
                        </h1>

                        <p>Estructura Orgánica y ocupacional para el Órgano Interno de Control en el Instituto Potosino de
                            Investigación Cientifica y Tecnologica A.C. (IPICYT).
                        </p>
                    </section>
                </template>
                </TransitionGroup>
            </main>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.oic--estructura {
    .estructura--main {
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
            font-family: "Noto Sans";
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            font-weight: bold;
        }

        .inicio--title {
            margin: 0rem;

            span {
                font-weight: normal;
            }
        }

        .inicio-subtitle {
            margin-bottom: 2rem;
        }

        .estructura--intro {
            display: flex;
            flex-direction: column;
            row-gap: 3rem;

            margin-bottom: 3rem;

            #titulo-intro {
                margin-bottom: 4rem;
            }
        }

        .estructura--personal {
            .estructura--persona_box {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(39.5rem, 1fr));

                &>* {
                    position: relative;
                    padding: 3rem 0;

                    &::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: var(--color-gray);
                    }
                }

                &>*:nth-last-child(-n+2)::after {
                    display: none;
                }

                @include m.tablet {
                    &>*:nth-last-child(-n+2)::after {
                        display: block;
                    }
                    &>*:last-child::after {
                        display: none;
                    }
                }

                &>*:first-child {
                    grid-column: 1 / -1;
                }

                @include m.tablet {
                    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
                    place-items: center;
                }
            }
        }
    }
}
</style>