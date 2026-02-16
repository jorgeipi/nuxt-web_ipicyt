<template>
    <div class="propiedadIntelectual--title">
        <h1 class="title"><slot /></h1>
    </div>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.propiedadIntelectual--title{
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 0.1rem solid var(--color-gray-light);
    .title{
        display: inline-block;
        color: var(--color-black);
        text-align: center;
        font-size: 2.9rem!important;
        font-style: normal;
        font-weight: 400!important;
        line-height: normal;

        padding-top: 1.5rem;
        margin: 0;

        border-top: 5px solid var(--color-secondary);
    }
}
</style>
