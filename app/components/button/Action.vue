<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { PDFIcon } from '@components/icons'

const router = useRouter()

interface Props {
  file?: string | null
  to?: string | Object | null
  target?: '_blank' | '_self' | '_parent' | '_top'
  color?: string
  icon?: Object
  active?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  file: null,
  to: null,
  target: '_blank',
  color: 'rgb(84, 143, 233)',
  icon: () => PDFIcon,
  active: false
})

const emit = defineEmits<{
  (e: 'click'): void
}>()

const cssVars = computed(() => ({
  '--action-btn-color': props.color
}))

const resolvedHref = computed(() => {
  if (props.to && props.target === '_blank') {
    const resolved = router.resolve(props.to)
    return resolved.href
  }
  return null
})

const componentType = computed(() => {
  if (props.to && props.target === '_blank') return 'a'
  if (props.to) return 'router-link'
  if (props.file) return 'a'
  return 'button'
})

const hrefValue = computed(() => {
  if (resolvedHref.value) return resolvedHref.value
  if (props.file) return props.file
  return undefined
})

const targetValue = computed(() => {
  if (props.target) return props.target
  if (props.file) return '_blank'
  return undefined
})

const handleClick = (e: Event) => {
  if (!props.file && !props.to) {
    e.preventDefault()
    emit('click')
  }
}
</script>

<template>
  <component 
    :is="componentType"
    :href="hrefValue"
    :to="(to && target !== '_blank') ? to : undefined"
    :target="targetValue"
    class="action-btn"
    :class="{ 'action-btn--active': active }"
    :style="cssVars"
    @click="handleClick"
  >
    <component :is="icon" class="action-btn__icon" />
    
    <div class="action-btn__title">
      <slot name='title'>
      </slot>
    </div>
  </component>
</template>

<style scoped lang="scss">
// BLOCK: action-btn
.action-btn {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  min-height: 50px;
  padding: 10px 20px;
  border: 2px solid var(--action-btn-color);
  text-decoration: none;
  transition: all ease 0.3s;
  background: transparent;
  cursor: pointer;
  
  &:hover {
    background-color: var(--action-btn-color);
    
    .action-btn__title {
      color: white;
    }
    
    .action-btn__icon {
      color: white;
    }
  }

  // MODIFIER: active (mantiene el color)
  &--active {
    background-color: var(--action-btn-color);
    
    .action-btn__title {
      color: white;
    }
    
    .action-btn__icon {
      color: white;
    }
  }

  // ELEMENT: title
  &__title {
    flex: 1;
    color: black;
    font-weight: 400;
    font-size: 1.8rem;
    text-align: start;
    // Sin estilos restrictivos, totalmente libre para el contenido del slot
  }
  
  // ELEMENT: icon
  &__icon {
    width: 21px;
    max-height: 21px;
    height: 21px;
    color: black;
    flex-shrink: 0;
  }
}
</style>