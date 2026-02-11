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
    class="accordion-item-right" 
    :class="{ 'accordion-item-right--open': isExpanded }"
  >
    <button 
      class="accordion-item-right__header" 
      @click="handleToggle"
      :aria-expanded="isExpanded"
      type="button"
    >
      <div class="accordion-item-right__title">
        <slot name="title">
          Título del acordeón
        </slot>
      </div>
      <div 
        class="accordion-item-right__icon"
        :class="{ 'accordion-item-right__icon--rotated': isExpanded }"
        :style="{ width: iconSize, height: iconSize }"
      >
        <slot name="icon">
          <IconArrowDownFillBlue />
        </slot>
      </div>
    </button>
    <transition name="accordion-right">
      <div 
        v-show="isExpanded" 
        class="accordion-item-right__content"
      >
        <div class="accordion-item-right__content-inner">
          <slot name="content">
            Contenido del acordeón
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
// BLOCK: accordion-item-right
.accordion-item-right {
  width: 100%;
  // border-top: 1px solid var(--color-gray-light);
}

// ELEMENT: header
.accordion-item-right__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  text-align: left;
  
  &:focus-visible {
    outline: 2px solid var(--color-primary, #182654);
    outline-offset: 2px;
  }
}

// ELEMENT: title
.accordion-item-right__title {
  // flex: 1;
  display: inline-flex;
  // border-top: 5px solid var(--color-secondary);
  padding-top: 1rem;
  max-width: 75%;
}

// ELEMENT: icon
.accordion-item-right__icon {
  flex-shrink: 0;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;
}

// MODIFIER: icon rotated
.accordion-item-right__icon--rotated {
  transform: rotate(90deg);
}

// ELEMENT: content
.accordion-item-right__content {
  overflow: hidden;
}

.accordion-item-right__content-inner {
  padding-top: 3rem;
}

// TRANSITIONS
.accordion-right-enter-active,
.accordion-right-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.accordion-right-enter-from,
.accordion-right-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>