<script setup lang="ts">
interface MenuItem {
  label: string
  to: string
  children?: MenuItem[]
}

interface Props {
  items: MenuItem[]
  stickyTop?: number
}

const props = withDefaults(defineProps<Props>(), {
  stickyTop: 120, // Por defecto: header inferior (70px) + breadcrumb (40px) + padding (10px)
})

const route = useRoute()

const isActive = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}
</script><!-- components/layout/navigation/MenuLateral.vue -->

<template>
  <aside class="menu-lateral">
    <nav 
      class="menu-lateral__nav"
      :style="{ top: `${stickyTop}px` }"
    >
      <ul class="menu-lateral__list">
        <li 
          v-for="(item, index) in items" 
          :key="index"
          class="menu-lateral__item"
        >
          <NuxtLink 
            :to="item.to"
            class="menu-lateral__link"
            :class="{ 'menu-lateral__link--active': isActive(item.to) }"
          >
            {{ item.label }}
          </NuxtLink>
          
          <!-- Submenú -->
          <ul v-if="item.children && item.children.length" class="menu-lateral__submenu">
            <li 
              v-for="(child, childIndex) in item.children" 
              :key="childIndex"
              class="menu-lateral__subitem"
            >
              <NuxtLink 
                :to="child.to"
                class="menu-lateral__sublink"
                :class="{ 'menu-lateral__sublink--active': isActive(child.to) }"
              >
                {{ child.label }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
.menu-lateral {
  width: 250px;
  flex-shrink: 0;

  &__nav {
    position: sticky;
    // El top se define dinámicamente vía style binding
    max-height: calc(100vh - var(--sticky-top, 120px) - 2rem);
    overflow-y: auto;
    padding: 1rem 0;
    
    // Scrollbar personalizado
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: var(--gray-100);
      border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 3px;

      &:hover {
        background: var(--dark-primary);
      }
    }
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 0.5rem;
  }

  &__link {
    display: block;
    padding: 0.75rem 1rem;
    color: var(--dark-text);
    text-decoration: none;
    border-left: 3px solid transparent;
    transition: all 0.2s;
    border-radius: 0 4px 4px 0;

    &:hover {
      background: var(--light-primary);
      border-left-color: var(--primary);
    }

    &--active {
      background: var(--light-primary);
      border-left-color: var(--primary);
      color: var(--primary);
      font-weight: 600;
    }
  }

  &__submenu {
    list-style: none;
    padding: 0;
    margin: 0;
    padding-left: 1rem;
  }

  &__subitem {
    margin-bottom: 0.25rem;
  }

  &__sublink {
    display: block;
    padding: 0.5rem 1rem;
    color: var(--light-text);
    text-decoration: none;
    font-size: 0.9rem;
    border-radius: 0 4px 4px 0;
    transition: all 0.2s;

    &:hover {
      color: var(--primary);
      background: var(--light-primary);
    }

    &--active {
      color: var(--primary);
      font-weight: 500;
      background: var(--light-primary);
    }
  }
}

// Responsive
@media (max-width: 768px) {
  .menu-lateral {
    width: 100%;
    margin-bottom: 2rem;

    &__nav {
      position: relative;
      top: 0 !important;
      max-height: none;
    }
  }
}
</style>