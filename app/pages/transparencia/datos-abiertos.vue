<script setup>
const { setPageConfig } = usePageConfig()
setPageConfig({
  showBanner: true,
  showMenu: true,
  menuItems: [
    { label: 'Protección de Datos personales', to: '/proteccion-de-datos-personales/bienvenida', order: 2 }
  ],
})

definePageMeta({
  layout: false,
}) 
</script>

<template>
    <NuxtLayout name="main">
        <template #banner>
            <LayoutBannerBase image="/imgs/transparencia/acceso-informacion/acceso-informacion-header.png">
            <h1 class="h1-banner">Transparencia: <span class="font-weight-regular">Datos Abiertos</span></h1>
            </LayoutBannerBase>
        </template>
        
        <div class="data-open">
            <h2>Transparencia: <span class="font-weight-regular">Datos Abiertos</span></h2>

            <div class="data-open__content my-18">
                <p class="mb-5">Para acceder a los Datos Abiertos del IPICYT visita:</p>
                <ButtonLink :href="'https://datos.gob.mx/dataset/?q=ipicyt'">
                    <p class="font-weight-bold">www.datos.gob.mx</p>
                </ButtonLink>
            </div>

            <div class="data-open__date">
                <p>Fecha última actualización: 26 de junio de 2024</p>
            </div>
        </div>
    </NuxtLayout>
</template>

<style lang="scss" scoped>
    .data-open{
        .data-open__content{
            // margin: 7.2rem 0 7.2rem 0;
        }
        .data-open__date {
            display: inline-block;
            border-top: 1px solid #CCCCCC;

            p {
                color: #848BA6;
                padding-top: 1rem;
            }
        }
    }
</style>