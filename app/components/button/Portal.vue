<script setup lang="ts">
interface Props {
  url: string
}

const props = defineProps<Props>()

</script>

<template>
    <a class="button-portal" :href="url" target="_blank">
        <div class="button-portal__box">
            <slot></slot>
        </div>
    </a>
</template>

<style lang="scss" scoped>
.button-portal{
    position: relative;
    // margin-top: 2rem;
    color: var(--color-white);
    text-decoration: none;

    .button-portal__box{
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 581px;
        height: 56px;
        background-color: var(--color-secondary);
        box-shadow: var(--color-gray-light) 6px 8px;

        text-decoration: none;

        // p, h1, h2, h3, h4, h5, h6, a{
        //     color: var(--color-white);
        // }

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