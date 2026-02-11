<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAccordion } from '@composables/accordion/useAccordion'
import { IconArrowDownFillBlue } from '@components/icons' 

interface Props {
  id: string
  iconSize?: string
  group?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: '2.5rem',
  group: 'default'
})

const route = useRoute()
const { toggle, isOpen, open, scrollToElement } = useAccordion(props.group) // 🆕 Pasar grupo

const isExpanded = computed(() => isOpen(props.id))

const handleToggle = async () => {
  const wasOpen = isExpanded.value
  toggle(props.id)
  
  if (!wasOpen) {
    await scrollToElement(props.id)
  }
}

const checkAndOpenFromHash = async () => {
  const hash = route.hash.substring(1)
  
  if (hash && hash === props.id) {
    open(props.id)
    await scrollToElement(props.id)
  }
}

onMounted(() => {
  checkAndOpenFromHash()
})

watch(() => route.hash, () => {
  checkAndOpenFromHash()
})
</script>

<template>
  <div 
    :id="props.id"
    class="accordion-item" 
    :class="{ 'accordion-item--open': isExpanded }"
  >
    <!-- resto del template sin cambios -->
    <button 
      class="accordion-item__header" 
      @click="handleToggle"
      :aria-expanded="isExpanded"
      type="button"
    >
      <div 
        class="accordion-item__icon"
        :class="{ 'accordion-item__icon--rotated': isExpanded }"
        :style="{ width: iconSize, height: iconSize }"
      >
        <slot name="icon">
          <IconArrowDownFillBlue />
        </slot>
      </div>
      
      <div class="accordion-item__title">
        <slot name="title">
          Título del acordeón
        </slot>
      </div>
    </button>

    <transition name="accordion">
      <div 
        v-show="isExpanded" 
        class="accordion-item__content"
      >
        <div class="accordion-item__content-inner">
          <slot name="content">
            Contenido del acordeón
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
// BLOCK: accordion-item
.accordion-item {
  width: 100%;
}

// ELEMENT: header
.accordion-item__header {
  display: flex;
  // align-items: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  
  // &:hover {
  //   opacity: 0.8;
  // }

  &:focus-visible {
    outline: 2px solid var(--color-primary, #182654);
    outline-offset: 2px;
  }
}

// ELEMENT: icon
.accordion-item__icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

// MODIFIER: icon rotated
.accordion-item__icon--rotated {
  transform: rotate(-90deg);
}

// ELEMENT: title
.accordion-item__title {
  flex: 1;
}

// ELEMENT: content
.accordion-item__content {
  overflow: hidden;
}

.accordion-item__content-inner {
  // padding-left: calc(2.5rem + 2rem); // iconSize + gap
  padding-top: 3rem;
}

// TRANSITIONS
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>