<script setup>
import Placeholder from "./Placeholder.vue";
</script>

<template>
    <div class="page-skeleton">
        <div class="page-skeleton__header">
            <div class="page-skeleton__header_image">
                <Placeholder height="100%" borderRadius="50%" />
            </div>
            <div class="page-skeleton__header_text">
                <Placeholder class="header" height="2.5rem" width="60%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="80%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="90%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="70%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="80%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="70%" borderRadius="0.5rem" />
            </div>
        </div>

        <div class="page-skeleton__content">
            <Placeholder class="header" height="2rem" width="30%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
        </div>

        <div class="page-skeleton__header">
            <div class="page-skeleton__header_image">
                <Placeholder height="100%" borderRadius="50%" />
            </div>
            <div class="page-skeleton__header_text">
                <Placeholder class="header" height="2.5rem" width="60%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="80%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="90%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="70%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="80%" borderRadius="0.5rem" />
                <Placeholder class="text" height="1.5rem" width="70%" borderRadius="0.5rem" />
            </div>
        </div>

        <div class="page-skeleton__content">
            <Placeholder class="header" height="2rem" width="30%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
            <Placeholder class="text" height="1.5rem" width="100%" borderRadius="0.5rem" />
        </div>

    </div>
</template>

<style scoped lang="scss">
.page-skeleton {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 0;
    flex-direction: column;
    gap: 3rem;

    .page-skeleton__header {
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        flex-direction: row;

        .page-skeleton__header_image {
            width: 18.1rem;
            height: 18.1rem;
        }

        .page-skeleton__header_text {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            // justify-content: center;

            .header {
                margin-bottom: 3rem;
            }

            .text {
                margin-bottom: 0.5rem;
            }
        }
    }

    .page-skeleton__content {
        .header {
            margin-bottom: 3rem;
        }

        .text {
            margin-bottom: 0.5rem;
        }
    }
}
</style>