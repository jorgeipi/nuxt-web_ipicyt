<script setup lang="ts">
import { usePageConfig } from '@composables/layout/usePageConfig'
import { useScrollHeader } from '@composables/layout/useScrollHeader'

const { isHeaderSuperiorVisible, isHeaderInferiorSticky } = useScrollHeader()
const { pageConfig } = usePageConfig()
</script>

<template>
  <div class="layout-simple">
    <HeaderSuperior :is-visible="isHeaderSuperiorVisible" />
    <HeaderInferior :is-sticky="isHeaderInferiorSticky" />
    <Breadcrumb :items="pageConfig.breadcrumbs || []" />
    
    <BannerBase
      v-if="pageConfig.showBanner && pageConfig.banner"
      :image="pageConfig.banner.image"
      :height="pageConfig.banner.height"
    >
      <template v-if="pageConfig.banner.overlay" #overlay>
        <div class="banner-content">
          <h1 v-if="pageConfig.banner.overlay.title">
            {{ pageConfig.banner.overlay.title }}
          </h1>
        </div>
      </template>
    </BannerBase>

    <main class="layout-simple__main">
      <div class="container">
        <slot />
      </div>
    </main>

    <FooterPrimary />
    <FooterSecondary />
  </div>
</template>

<style lang="scss" scoped>
.layout-simple {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__main {
    flex: 1;
    padding: 2rem 0;
  }
}

.banner-content {
  text-align: center;
  color: var(--white);

  h1 {
    font-size: 3rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
}
</style>