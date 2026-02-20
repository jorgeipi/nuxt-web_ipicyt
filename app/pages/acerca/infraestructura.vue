<script setup>
import { usePersonales } from '@composables/personal/usePersonales';

const { personal, personalLoading } = usePersonales([
  { key: 'mantenimiento', cvepuesto: 530},
]);

const edificios = [
  {
    edificio: 'Alfa',
    construccion: '5,009 m²',
    terreno: '1,607 m²'
  },
  {
    edificio: 'Beta',
    construccion: '3,972 m²',
    terreno: '1,331 m²'
  },
  {
    edificio: 'Gama',
    construccion: '1,617 m²',
    terreno: '546 m²'
  },
  {
    edificio: 'Delta',
    construccion: '1,629 m²',
    terreno: '1,733 m²'
  },
  {
    edificio: 'Centro Nacional de Supercómputo',
    construccion: '1,598 m²',
    terreno: '1,091 m²'
  },
  {
    edificio: 'Administración',
    construccion: '3,025 m²',
    terreno: '1,014 m²'
  },
  {
    edificio: 'Épsilon',
    construccion: '2,231 m²',
    terreno: '704 m²'
  },
  {
    edificio: 'Posgrado',
    construccion: '3,060 m²',
    terreno: '659 m²'
  },
  {
    edificio: 'Laboratorio de Prototipos',
    construccion: '871 m²',
    terreno: '889 m²'
  },
  {
    edificio: 'Laboratorio de Hidrocarburos',
    construccion: '1,5522 m²',
    terreno: '775 m²'
  }
];

const infraestructuras = [
  {
    infraestructura: 'Invernaderos',
    construccion: '1,077 m²',
    terreno: '2,250 m²'
  },
  {
    infraestructura: 'Cancha deportiva',
    construccion: '765 m²',
    terreno: '765 m²'
  },
  {
    infraestructura: 'Vialidades y estacionamientos',
    construccion: '17,326 m²',
    terreno: '17,326 m²'
  }
];

const { setPageConfig } = usePageConfig()
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
            <LayoutBannerBase image="/imgs/about/infraestructura/infraestructura-header.png">
            <h1 class="h1-banner">Infraestructura</h1>
            </LayoutBannerBase>
        </template>

        <div class="infraestructura" v-if="!personalLoading">
            <!-- <div class="dto_gral">
                <h2>Datos Generales</h2>
            </div> -->
            <h2>Datos Generales</h2>
            <div class="dto_gral">
                <h3><span style="color: #2453f7;">73,542 m²</span></h3>
                <p>de superficie total de terreno</p>
            </div>
            <div class="dto_gral">
                <h3><span style="color: #2453f7;">10 edificios</span></h3>
                <p>para actividades de investigación, docencia y administrativas</p>
            </div>
            <div class="table_content">
                <h2>Edificios</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Edificio</th>
                            <th>m² de construcción</th>
                            <th>m² de terreno</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(edificio, index) in edificios" :key="index">
                            <td>{{ edificio.edificio }}</td>
                            <td>{{ edificio.construccion }}</td>
                            <td>{{ edificio.terreno }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="table_content">
                <h2>Infraestructura secundaria</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Área</th>
                            <th>m² de construcción</th>
                            <th>m² de terreno</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(infraestructura, index) in infraestructuras" :key="index">
                            <td>{{ infraestructura.infraestructura }}</td>
                            <td>{{ infraestructura.construccion }}</td>
                            <td>{{ infraestructura.terreno }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PersonalContacto class="infraestructura__contacto" v-if="personal.mantenimiento" :personal="personal.mantenimiento" />
        </div>
    </NuxtLayout>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.infraestructura{
  max-width: 808px;
    h3{
        color: var(--color-black);
        margin: 0%;
    }
    .dto_gral{
        display: flex;
        max-width: 808px;
        height: 8rem;
        border-bottom: 1px solid var(--color-black);
        align-items: center;
        p{
            margin: 0%;
            padding-left: 1.5rem;
            font-size: 1.5rem;
        }
        @include m.mobile{
            flex-direction: column;
            margin-top: 2rem;
            text-align: center;
        }
    }
    .table_content{
        margin-top: 5rem;
    }
    table {
        width: 100%;
        height: 50px;
        border-collapse: collapse;
        margin-bottom: 1rem;
        margin-top: 2rem !important;
        // @include m.desktopXL{
        //     width: 600px;
        // }
        // @include m.desktop{
        //     width: 550px;
        // }
        @include m.tablet{
            width: 400px;
        }
        @include m.mobile{
            width: 290px;
        }
    }
    tbody{
        border-bottom: 1px solid var(--color-black);
        border-left: 1px solid var(--color-black);
        border-right: 1px solid var(--color-black);

    }

    th, td {
        width: 153px;
        height: 40px;
        text-align: left;
        padding-left: 5px;
        font-size: 1.4rem;
        @include m.mobile{
            font-size: 1.5rem;
            height: 50px;
            max-width: 11rem;
        }
    }
    td{
        border-bottom: 1px solid var(--color-black);
        padding: 0.5rem;
    }

    th {
        background-color: var(--color-secondary);
        font-weight: 600;
        color: var(--color-white);
        border-right: 1px solid var(--color-white);
        line-height: 1.5rem;
    }

    .infraestructura__contacto{
        margin-top: 4.5rem;
    }
}

</style>