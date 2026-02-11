<template>
    <div class="mural--mean_bluetitle">
        <h2 class="mural--mean_title">
            <slot></slot>
        </h2>
    </div>
</template>

<style lang="scss" scoped>
.mural--mean_bluetitle {
    display: flex;
    // align-items: center;
    // justify-content: center;
    border-top: 1px solid var(--color-gray-light);
    // max-width: 790px;
    width: 100%;

    .mural--mean_title {
        color: var(--color-black);
        // text-align: center;
        font-family: "Noto Sans";
        // font-size: clamp(22px, 5vw, 29px);
        max-width: 457px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: inline-block;
        border-top: 3px solid var(--color-secondary);
        padding-top: 1rem;
    }
}
</style>