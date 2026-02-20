<script setup lang="ts">
import { useScrollHeader } from '@composables/layout/useScrollHeader'

const { 
  isHeaderSuperiorVisible, 
  isHeaderInferiorSticky,
  isBreadcrumbSticky,
  stickyHeaderHeight,
  headerInferiorHeight,
} = useScrollHeader()

const { 
  pageConfig, 
  getBreadcrumbs, 
  getMenuItems, 
  shouldShowMenu 
} = usePageConfig()

// Computed properties para usar en el template
const breadcrumbs = computed(() => getBreadcrumbs())
const menuItems = computed(() => getMenuItems())
const showMenu = computed(() => shouldShowMenu())
</script>

<template>
  <div class="layout-default">
    <LayoutHeaderSuperior :is-visible="isHeaderSuperiorVisible" />
    <LayoutHeaderInferior :is-sticky="isHeaderInferiorSticky" />
    
    <!-- Breadcrumb automático -->
    <LayoutNavigationBreadcrumb 
      :items="breadcrumbs"
      :is-sticky="isBreadcrumbSticky"
      :top-offset="headerInferiorHeight"
    />
    
    <slot name="banner" />

    <main class="layout-default__main">
      <div class="container">
        <div class="layout-default__content">

          <slot name="menu">
            <LayoutNavigationMenuLateral 
              v-if="showMenu"
              :items="menuItems"
              :sticky-top="stickyHeaderHeight"
            />
          </slot>
          
          <div class="layout-default__page">
            <slot />
          </div>
        </div>
      </div>
    </main>

    <LayoutFooterPrimary />
    <LayoutFooterSecondary />
  </div>
</template>


<style lang="scss" scoped>
.layout-default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1;
    padding: 2rem 0;
    
    // Agregar padding-top cuando los elementos están sticky
    // para evitar que el contenido quede oculto
    .breadcrumb--sticky ~ .container & {
      padding-top: calc(2rem + 40px); // 40px = altura del breadcrumb
    }
  }

  &__content {
    display: flex;
    gap: 2rem;
    align-items: flex-start;
  }

  &__page {
    flex: 1;
    min-width: 0;
  }
}

.banner-content {
  text-align: center;
  color: var(--white);

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
}

// Responsive
@media (max-width: 768px) {
  .layout-default {
    &__content {
      flex-direction: column;
    }
  }
}
</style>