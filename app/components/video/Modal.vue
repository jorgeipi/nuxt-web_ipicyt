<script setup>
import { ref, watch, onMounted, onBeforeUnmount, computed, defineExpose } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  videoUrl: {
    type: String,
    required: true,
    validator: (value) => value.startsWith('http'),
  },
  title: {
    type: String,
    default: 'Video'
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
const isYouTubeVideo = computed(() => props.videoUrl.includes('youtu'));

watch(() => props.modelValue, (val) => {
  isOpen.value = val;
});

watch(isOpen, (val) => {
  emit('update:modelValue', val);
  emit(val ? 'open' : 'close');
  document.body.style.overflow = val ? 'hidden' : '';
});

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

defineExpose({ open: () => isOpen.value = true, close });
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen" class="globalmodal-overlay" @click.self="close" role="dialog" aria-modal="true">
      <div class="globalmodal-box">
        <div class="globalmodal-container video-container">
          <button class="globalmodal-close" aria-label="Cerrar modal" @click="close">
            &times;
          </button>

          <iframe v-if="isYouTubeVideo" class="modal--video_youtube" :src="videoUrl" :title="title" frameborder="0"
            allowfullscreen loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>

            <video
              v-else
              ref="videoRef"
              controls
              controlslist="nodownload"
              autoplay
            >
              <source :src="videoUrl" type="video/mp4">
              Tu navegador no soporta videos HTML5.
            </video>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
@use '@/styles/base/mixins' as m;

.globalmodal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--color-black), 0.7);
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
  }

  .globalmodal-container {
    position: relative;
    border-radius: 1rem;
    max-width: 80vw;
    max-height: 90vh;
    height: 90vh;
    display: flex;

    @include m.mobile {
      max-width: 100vw;
      max-height: 100vh;
      width: 100%;
      height: 60%;
    }

    .globalmodal-close {
      position: absolute;
      top: -25px;
      right: -25px;
      background: none;
      border: none;
      font-size: 2.4rem;
      cursor: pointer;
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: var(--color-white);
      border-radius: 50%;
    }

    &.video-container {
      // padding: 3rem;
      aspect-ratio: 80 / 60;
      display: flex;
      justify-content: center;
      align-items: center;

      .modal--video_youtube {
        width: 100%;
        height: 100%;
      }

      video {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
  }
}
</style>