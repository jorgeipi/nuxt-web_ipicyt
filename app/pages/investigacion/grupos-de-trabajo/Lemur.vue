<script setup>

import { useLemur } from '../composables/useLemur';
import LineaDeTiempo from "../modal/LineaDeTiempo.vue";
import Mobile from '../components/Mobile.vue';
import Desktop from '../components/Desktop.vue';

const {
  showModal,
  isMobile,
  personal_coordinadores,
  personalOrdenado,
  personalLoading,
  personal
} = useLemur();

</script>

<template>
  <div class="displayCenter container">
    <LineaDeTiempo :show="showModal" @close="showModal = false" />
    <div v-if="!isMobile && personal_coordinadores" class="lemur">
      <Desktop :personal="personal_coordinadores" :personalOrdenado="personalOrdenado" v-model:showModal="showModal"
        :personal_contacto="personal" :personalLoading="personalLoading" />
    </div>
    <div v-if="isMobile && personal_coordinadores" class="lemur">
      <Mobile :personal="personal_coordinadores" :personalOrdenado="personalOrdenado" v-model:showModal="showModal"
        :personal_contacto="personal" :personalLoading="personalLoading" />
    </div>
  </div>
</template>