<script setup>
import { IconSuccessFillBlue } from '@components/icons';
</script>

<template>
    <div class="comunicacion-social__list-item">
        <div class="box-item">
            <IconSuccessFillBlue class="comunicacion-social__list-icon" />
            <div class="comunicacion-social__list-header">
                <h2 class="comunicacion-social__list-title">
                    <slot name="title">
                    </slot>
                </h2>
                <p class="comunicacion-social__list-email">
                    <slot name="email">
                    </slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// @use '@styles/base/variables' as v;
@use '@/styles/base/mixins' as m;

@mixin text-styleCS($color, $font-size, $font-weight, $line-height) {
    color: $color;
    font-size: $font-size;
    font-style: normal;
    font-weight: $font-weight;
    line-height: $line-height;
}

@include m.mobile {
    .comunicacion-social__list-title {
        font-size: 1.8rem !important;
        line-height: normal !important;
        margin-bottom: 0.5rem !important;
    }

    .comunicacion-social__list-email {
        font-size: 1.4rem !important;
        line-height: normal !important;
        text-wrap: wrap !important;
    }
}

.comunicacion-social__list-item {
    min-height: 11.5rem;
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid var(--color-black);

    &:first-of-type {
        border-top: 0.1rem solid var(--color-black);
    }

    .box-item {
        display: flex;
        flex-direction: row;
        min-height: 6.6rem;

        .comunicacion-social__list-header {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;

            .comunicacion-social__list-email {
                @include text-styleCS(var(--color-secondary), 1.4rem, 600, 2.2rem);
                margin: 0;
                margin-top: 1rem;
                display: inline-flex;
                gap: 1rem;
                flex-direction: column
            }

            .comunicacion-social__list-title {
                @include text-styleCS(var(--color-black), 2.1rem, 700, 2.2rem);
                margin: 0;
            }
        }

        .comunicacion-social__list-icon {
            width: 2.5rem;
            height: 100%;
            flex-shrink: 0;
            margin-right: 1.7rem;

            .img {
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
            }
        }
    }
}
</style>