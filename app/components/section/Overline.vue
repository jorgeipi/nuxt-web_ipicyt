<script setup lang="ts">
import { IconSuccessFillBlue } from '@components/icons';
</script>

<template>
  <div class="overline py-6">
    <div class="overline__list d-flex flex-row ga-5">
      <div class="overline__boxicon py-1">
        <slot name="icon">
          <IconSuccessFillBlue class="overline__icon"/>
        </slot>
      </div>
      <div class="overline__content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overline{
  border-top: 1px solid var(--color-black);
  &:last-of-type{
    border-bottom: 1px solid var(--color-black);
  }
  &__list{
  }
  &__boxicon{
  }
  &__icon{
  }
  &__content{
  }
}
</style>