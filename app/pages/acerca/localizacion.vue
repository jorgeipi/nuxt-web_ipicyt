<script setup lang="ts">
import { ref } from 'vue';
import { IconPhoneFillBlue } from '@components/icons'
// import localicacionImg from '/imgs/acerca/localizacion.png';
const map = ref(null);

const goToGoogleMaps = () => {
  const searchQuery = 'Instituto Potosino de Investigación Científica y Tecnológica A.C.';
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
  window.open(url, '_blank');
};

// defineOptions({
//   name: 'LocalizacionIpicyt',
//   components: {
//     LocaleMap
//   }
// });
</script>

<template>
  <div class="localizacion">
    <h2>Instituto Potosino de Investigación Científica y Tecnológica, A.C.</h2>
    <div class="loc_container">
      <div class="loc_contacto">
        <p><span style="font-weight: bold;">Nos ubicamos en:</span></p>
        <p>Camino a la Presa San José 2055</p>
        <p>Lomas 4a. Sección, C.P. 78216</p>
        <p>San Luis Potosí, S.L.P., México</p>
        <p>Tel.: +52 (444) 8342000</p>
      </div>
      <button class="btn_maps" @click="goToGoogleMaps">Ver en Google Maps</button>
    </div>
    <!-- <router-link :to="{ name: 'DirectorioIpicyt'}" class="a_dir"> -->
    <router-link to="/" class="a_dir">
      <div class="loc_directorio">
        <!-- <img src="/imgs/icons/telefonoIcon.png" alt="tel"> -->
         <IconPhoneFillBlue />
        <p class="ml-2 font-weight-semibold">Directorio telefónico</p>
      </div>
    </router-link>

    <!-- <div class="Localemap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d29562.582765757616!2d-101.04785237002852!3d22.151779604765917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x842a9f2d2151d5cf%3A0xea03106826ff33ef!2sParque%20%22De%20Morales%22%20Juan%20H.%20S%C3%A1nchez%2C%20Polanco%2C%20Parque%20Juan%20H.%20Sanchez%2C%20San%20Luis%20Potos%C3%AD%2C%20S.L.P.!3m2!1d22.1512484!2d-101.0167531!4m5!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica%20A.C.%2C%20Cam.%20a%20la%20Presa%20de%20San%20Jos%C3%A9%202055%2C%20Lomas%204ta%20Secc%2C%2078216%20San%20Luis%2C%20S.L.P.!3m2!1d22.1496887!2d-101.0357868!5e0!3m2!1ses!2smx!4v1683917177859!5m2!1ses!2smx"
        width="100%" height="400" style="border:0;" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div> -->

    <!-- Envuelve el mapa en ClientOnly -->
    <ClientOnly>
      <div class="Localemap">
        <LocaleMap />
      </div>
      <template #fallback>
        <div class="Localemap" style="display: flex; align-items: center; justify-content: center; background: #f0f0f0;">
          <p>Cargando mapa...</p>
        </div>
      </template>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;
.localizacion{
    h3{
        color: var(--color-black);
    }
    .loc_container{
        display: flex;
        margin-top: 2rem;
        max-width: 690px;
        align-items: center;
        justify-content: space-between;
        @include m.mobile{
            flex-direction: column;
            align-items: start;
        }
        .btn_maps{
            width: 202px;
            height: 36px;
            background-color: var(--color-dca);
            border: 0px;
            font-weight: 700;
            font-size: 1.4rem;
            font-family: "Montserrat", sans-serif;
            color: var(--color-white);
            border-radius: 50px;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            -ms-border-radius: 50px;
            -o-border-radius: 50px;
            @include m.mobile{
                margin-top: 2rem;
            }
        }
        .btn_maps:hover{
            cursor: pointer;
        }
    }
    .a_dir{
        display: flex;
        max-width: 20rem;
        text-decoration: none;
    }
    .loc_directorio{
        display: flex;
        align-items: center;
        margin-top: 2rem;
        img{
            width: 3rem;
            height: 3rem;
        }
    }
    .Localemap{
        margin-top: 3rem;
        margin-bottom: 3rem;
        max-width: 699px;
        max-height: 437px;
    }
}
</style>