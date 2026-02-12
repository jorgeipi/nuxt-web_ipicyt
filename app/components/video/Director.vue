<script setup>
import { ref } from 'vue'
import { IconPlayFillBlue } from '@components/icons'
// import { VideoModal } from '@components/modal';
const props = defineProps({
    video: {
        type: Object,
        required: true,
    },
});

const videoModal = ref(null);
const openModal = () => {
    if (videoModal.value) {
        videoModal.value.open();
    }
};
</script>

<template>
    <div>
        <div class="bienvenida--boxvideo" @click="openModal">
            <div class="bienvenida--video">
                <IconPlayFillBlue class="bienvenida--video_icon" />
                <div class="bienvenida--boxvideo-info">
                    <p class="bienvenida--video-info"><strong>Mensaje del Director General</strong></p>
                    <p class="bienvenida--video-info">Duración: {{ video.duracion }}</p>
                </div>
            </div>
        </div>
        <VideoModal ref="videoModal" :video-url="video.video" :title="video?.alt || 'Video en reproducción'" />
    </div>
</template>

<style lang="scss">
@use '@/styles/base/mixins' as m;

.bienvenida--boxvideo {
    border-top: 1px solid var(--color-black);
    padding: 2.2rem 0rem;


    @include m.tablet {
        border-bottom: 1px solid var(--color-black);
        border-top: 1px solid var(--color-black);
        padding: 3.6rem 0rem;

        &:hover {
            cursor: pointer;

            .bienvenida--video {
                .bienvenida--video-info {
                    color: var(--color-secondary);
                    text-decoration: underline;
                }

                .bienvenida--video_icon {
                    circle {
                        fill: var(--color-black) !important;
                    }
                }
            }
        }
    }

    .bienvenida--video {
        // width: max-content;
        display: inline-flex;
        flex-direction: column;
        gap: 1.3rem;
        max-width: 133px;

        .bienvenida--video-info {
            font-size: 1.5rem;
            font-style: normal;
            line-height: 1.9rem;
        }

        .bienvenida--video_icon {
            width: 3.1rem;
            height: 3.1rem;
            flex-shrink: 0;
        }

        @include m.tablet {
            max-width: none;
            flex-direction: row;
            width: 100%;
        }

        &:hover {
            cursor: pointer;

            .bienvenida--video-info {
                color: var(--color-secondary);
                text-decoration: underline;
            }

            .bienvenida--video_icon {
                circle {
                    fill: var(--color-black) !important;
                }
            }
        }
    }
}
</style>