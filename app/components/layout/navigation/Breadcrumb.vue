<script setup lang="ts">
interface BreadcrumbItem {
  label: string
  to?: string
}

interface Props {
  items: BreadcrumbItem[]
  isSticky?: boolean
  topOffset?: number
}

withDefaults(defineProps<Props>(), {
  isSticky: false,
  topOffset: 70, // Altura del header inferior por defecto
})
</script>

<template>
  <nav 
    v-if="items.length > 0" 
    class="breadcrumb"
    :class="{ 'breadcrumb--sticky': isSticky }"
  >
    <div class="container">
      <ol class="breadcrumb__list">
        <li 
          v-for="(item, index) in items" 
          :key="index"
          class="breadcrumb__item"
        >
          <NuxtLink 
            v-if="item.to" 
            :to="item.to"
            class="breadcrumb__link"
          >
            {{ item.label }}
          </NuxtLink>
          <span v-else class="breadcrumb__current">
            {{ item.label }}
          </span>
          <span v-if="index < items.length - 1" class="breadcrumb__separator">/</span>
        </li>
      </ol>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.breadcrumb {
  background: var(--color-primary-dark);
  padding: 0.75rem 0;
  min-height: 40px;
  transition: all 0.3s ease;
  z-index: 99; // Un nivel menos que el header inferior (que es 100)

  &--sticky {
    position: fixed;
    top: v-bind('`${topOffset}px`'); // Posición debajo del header inferior
    left: 0;
    right: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: slideDown 0.3s ease;
  }

  &__list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0.5rem;
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  &__link {
    color: var(--primary);
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }

  &__current {
    color: var(--light-text);
    font-size: 0.9rem;
  }

  &__separator {
    color: var(--light-text);
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
</style>