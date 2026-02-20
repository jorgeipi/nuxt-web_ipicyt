<!-- components/layout/headers/HeaderInferior.vue -->
<template>
  <header 
    class="header-inferior"
    :class="{ 'header-inferior--sticky': isSticky }"
  >
    <div class="container">
      <div class="header-inferior__content">
        <div class="header-inferior__logo">
          <NuxtLink to="/">
            <img src="/imgs/logos/completo/logoCompleto.svg" alt="IPICYT" />
          </NuxtLink>
        </div>
        
        <nav class="header-inferior__nav">
          <NuxtLink to="/investigacion">Investigación</NuxtLink>
          <NuxtLink to="/posgrado">Posgrado</NuxtLink>
          <NuxtLink to="/vinculacion">Vinculación</NuxtLink>
          <NuxtLink to="/acerca">Acerca de</NuxtLink>
        </nav>

        <div class="header-inferior__search">
          <button aria-label="Buscar">🔍</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
interface Props {
  isSticky?: boolean
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.header-inferior {
  background: var(--color-primary);
  border-bottom: 1px solid var(--border-light);
  padding: 1rem 0;
  transition: all 0.3s ease;
  z-index: 100; // Mayor z-index para estar encima

  &--sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }

  &__logo {
    img {
      height: 50px;
    }
  }

  &__nav {
    display: flex;
    gap: 2rem;
    flex: 1;

    a {
      color: var(--dark-text);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
      
      &:hover {
        color: var(--primary);
      }

      &.router-link-active {
        color: var(--primary);
      }
    }
  }

  &__search {
    button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: var(--gray-100);
      }
    }
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

// Responsive
@media (max-width: 768px) {
  .header-inferior {
    &__nav {
      display: none; // Ocultar en móvil, agregar menú hamburguesa
    }
  }
}
</style>