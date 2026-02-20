<script setup lang="ts">
interface Props {
  url: string
}

const props = defineProps<Props>()

</script>

<template>
    <a class="button-portal" :href="url" target="_blank">
        <div class="button-portal__box d-flex flex-row align-center justify-center pa-2 ga-5">
                <slot></slot>
        </div>
    </a>
</template>

<style lang="scss" scoped>
.button-portal{
    position: relative;
    color: var(--color-white);
    text-decoration: none;

    .button-portal__box{
        background-color: var(--color-secondary);
        box-shadow: var(--color-gray-light) 6px 8px;

        text-decoration: none;

        &:hover{
            background-color: var(--color-black);
        }

        @media(max-width: 480px){
            padding-left: 1rem;
        }
    }

    &:hover{
        cursor: pointer;
    }
} 
</style>