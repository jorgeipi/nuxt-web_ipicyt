<script setup>
import { ref, watch, onMounted, onBeforeUnmount, defineExpose } from 'vue';
import { IconX } from '@components/icons'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  titulo: {
    type: String,
    required: true
  },
  resumen: {
    type: String,
    required: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['update:modelValue', 'open', 'close']);

const isOpen = ref(props.modelValue);

watch(() => props.modelValue, (val) => {
  isOpen.value = val;
});

// Agregar immediate: true para que se ejecute en el montaje inicial
watch(isOpen, (val) => {
  emit('update:modelValue', val);
  emit(val ? 'open' : 'close');
  document.body.style.overflow = val ? 'hidden' : '';
}, { immediate: true }); // ← Agregar esta opción

const close = () => {
  if (props.closeOnClickOutside) {
    isOpen.value = false;
  }
};

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.closeOnEsc && isOpen.value) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.body.style.overflow = '';
});

defineExpose({
  open: () => (isOpen.value = true),
  close,
});
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen" class="globalmodal-overlay text-modal-overlay" @click.self="close" role="dialog" aria-modal="true">
      <div class="globalmodal-box">
        <div class="globalmodal-container text-modal-container">
          <button class="globalmodal-close" @click="close" aria-label="Cerrar modal">
            <IconX class="text-modal_button-close_icon" />
          </button>
          
          <section class="text-modal_body">
            <div class="text-modal_boxtitle">
              <h6 class="text-modal_title">
                {{ titulo }}
              </h6>
            </div>
            <div class="text-modal-boxcontent">
              <p class="text-modal_content">
                {{ resumen }}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.globalmodal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 99999;
  isolation: isolate;

  .globalmodal-box {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 40px;

    .globalmodal-container {
      position: relative;
      border-radius: 25px;
      max-width: 789px;
      max-height: 90vh;
      background: var(--color-white);
      padding: 65px 115px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      @include m.tablet {
        padding: 50px 60px;
        max-width: 90vw;
      }

      @include m.mobile {
        padding: 40px 30px;
        max-width: 95vw;
      }

      .globalmodal-close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 29px;
        height: 29px;
        background-color: var(--color-black);
        color: var(--color-white);
        border: none;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 99999;

        .text-modal_button-close_icon {
          width: 25px;
          height: 25px;
        }
      }

      &.text-modal-container {
        // Estilos específicos para el modal de texto
      }
    }
  }
}

.text-modal_body {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .text-modal_boxtitle {
    .text-modal_title {
      color: var(--color-secondary);
      font-family: "Noto Sans";
      font-size: 15px;
      font-style: normal;
      font-weight: 700;
      line-height: 22px;
      /* 146.667% */
    }
  }

  .text-modal-boxcontent {
    max-height: 330px;
    overflow-y: auto;
    padding-right: 2rem;

    .text-modal_content {
      color: var(--color-black);
      font-family: "Noto Sans";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }
}
</style>