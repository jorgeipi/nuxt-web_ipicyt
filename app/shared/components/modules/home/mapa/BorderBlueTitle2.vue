<template>
    <div class="mural--mean_bluetitle">
        <h3 class="mural--mean_title">
            <slot></slot>
        </h3>
    </div>
</template>

<style lang="scss" scoped>
.mural--mean_bluetitle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 5px solid var(--color-secondary);
    width: 100%;

    .mural--mean_title {
        width: 100%;
        color: var(--color-black);
        text-align: start;
        font-size: clamp(22px, 5vw, 29px);
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: inline-block;
        padding-top: 1.5rem;
    }
}
</style>