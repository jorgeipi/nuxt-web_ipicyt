<script setup>
import { IconSuccessFillBlue } from '@components/icons'
import { defineProps } from 'vue'

const props = defineProps({
    titulo: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="OIC-funcion">
        <IconSuccessFillBlue class="icon" />
        <div class="funcion-text">
            <h2 class="title">{{ titulo }}</h2>
            <p class="content">{{ content }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.OIC-funcion {
    padding: 32px 0px;
    border-top: 1px solid;

    // &:first-of-type {
    //     border-top: 1px solid;
    // }

    &:last-of-type {
        padding-bottom: 0rem;
    }

    display: flex;
    flex-direction: row;
    align-items: start;
    // justify-content: center;
    column-gap: 2rem;

    .icon {
        margin-top: 0.1rem;
        width: 22.81px;
        height: 22.812px;
        flex-shrink: 0;
    }

    .funcion-text {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;

        .title {
            color: var(--color-secondary);
            font-size: 22px;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;
            /* 100% */
        }

        .content {
            color: var(--color-black);
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 22px;
        }
    }
}
</style>