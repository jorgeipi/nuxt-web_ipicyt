<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: string | Object
  href?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  disabled?: boolean
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  href: undefined,
  target: '_blank',
  disabled: false,
  color: 'var(--color-secondary)'
})

const componentType = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) {
    return { to: props.to }
  }
  if (props.href) {
    return {
      href: props.href,
      target: props.target,
      rel: props.target === '_blank' ? 'noopener noreferrer' : undefined
    }
  }
  return {}
})

const cssVars = computed(() => ({
  '--button-link-color': props.color
}))
</script>

<template>
  <component
    :is="componentType"
    v-bind="linkProps"
    class="button-link"
    :class="{ 'button-link--disabled': disabled }"
    :style="cssVars"
    :disabled="disabled && componentType === 'button'"
  >
    <span class="button-link__content">
      <slot>
        Botón
      </slot>
    </span>
  </component>
</template>

<style scoped lang="scss">
// BLOCK: button-link
.button-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 1rem 3rem;
  // margin-top: 2rem;
  background-color: var(--button-link-color);
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  text-decoration: none;
  // transition: background-color 0.3s ease;

  &:hover:not(.button-link--disabled) {
    background-color: var(--color-black);
  }

  &:focus-visible {
    outline: 2px solid var(--button-link-color);
    outline-offset: 2px;
  }

  // MODIFIER: disabled
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  // ELEMENT: content
  &__content {
    font-size: 1.5rem;
    line-height: 1.5;
    color: var(--color-white);
    font-weight: 500;
    // text-align: center;

    @media (max-width: 768px) {
      font-size: 1.4rem;
      padding: 0.5rem 0;
    }
  }
}
</style>