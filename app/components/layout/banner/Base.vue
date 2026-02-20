<script setup lang="ts">
interface Props {
  image?: string
  alt?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  variant?: 'default' | 'centered' | 'left' | 'right' | 'full'
  overlay?: boolean | 'light' | 'dark' | 'gradient'
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: 'Banner',
  height: 'auto',
  minHeight: '200px',
  variant: 'centered',
  overlay: false,
})

const slots = useSlots()
const hasContent = computed(() => !!slots.default)
const hasImage = computed(() => !!props.image)

const bannerStyles = computed(() => ({
  minHeight: props.height !== 'auto' ? props.height : props.minHeight,
  maxHeight: props.maxHeight,
  backgroundColor: props.backgroundColor,
}))

const contentStyles = computed(() => ({
  minHeight: props.height !== 'auto' ? props.height : props.minHeight,
  maxHeight: props.maxHeight,
}))

const overlayStyles = computed(() => {
  if (props.overlay === 'light') {
    return { background: 'rgba(255, 255, 255, 0.3)' }
  }
  if (props.overlay === 'dark') {
    return { background: 'rgba(0, 0, 0, 0.5)' }
  }
  if (props.overlay === 'gradient') {
    return { 
      background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%)' 
    }
  }
  return {}
})
</script>


<template>
  <section 
    v-if="hasContent" 
    class="banner"
    :class="[
      `banner--${variant}`,
      { 'banner--has-image': hasImage }
    ]"
    :style="bannerStyles"
  >
    <!-- Imagen de fondo (opcional) -->
    <div v-if="image" class="banner__background">
      <img :src="image" :alt="alt" />
      <div v-if="overlay" class="banner__overlay-filter" :style="overlayStyles" />
    </div>
    
    <!-- Contenido totalmente personalizable -->
    <div class="banner__content" :style="contentStyles">
        <slot />
    </div>
  </section>
</template>


<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;

  // Imagen de fondo
  &__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  &__overlay-filter {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  // Contenido
  &__content {
    // background-color: red;
    height: 100%;
    position: relative;
    z-index: 1;
    width: 100%;
    padding: 4rem;
  }

  // Variantes de alineación
  &--centered {
    text-align: center;
    
    .banner__content {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &--left {
    text-align: left;
    
    .banner__content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  &--right {
    text-align: right;
    
    .banner__content {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }

  &--full {
    .banner__content {
      padding: 0;
      
      .container {
        max-width: 100%;
        padding: 0;
      }
    }
  }

  // Sin imagen de fondo
  &:not(.banner--has-image) {
    background: var(--container-bg);
  }
}

// Responsive
@media (max-width: 768px) {
  .banner {
    &__content {
      // padding: 1.5rem 0;
    }
  }
}
</style>