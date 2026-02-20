<!-- components/layout/headers/HeaderSuperior.vue -->
<script setup lang="ts">
interface Props {
  isVisible?: boolean
}

defineProps<Props>()
</script>

<template>
  <header 
    class="header-superior"
    :class="{ 'header-superior--hidden': !isVisible }"
  >
    <div class="container">
      <div class="header-superior__content">
        <!-- Logo pequeño, enlaces rápidos, idioma, etc. -->
        <div class="header-superior__left">
          <span>Correo: contacto@ipicyt.edu.mx</span>
        </div>
        <div class="header-superior__right">
          <NuxtLink to="/en">English</NuxtLink>
          <NuxtLink to="/login">Portal</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-superior {
  background: var(--color-footer-red);
  color: var(--white);
  padding: 0.5rem 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &--hidden {
    transform: translateY(-100%);
    opacity: 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
  }

  &__right {
    display: flex;
    gap: 1rem;
    
    a {
      color: var(--white);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>