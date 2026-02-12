<script setup>
import { ref, onMounted } from 'vue';
import { getMuralPath } from '@shared/helpers/acerca/getPath'

const videoRef = ref(null);
const isPaused = ref(false);
const isHovering = ref(false);
const cursorPosition = ref({ x: 0, y: 0 });

const handleMouseMove = (event) => {
    const rect = videoRef.value.getBoundingClientRect();
    cursorPosition.value = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

const handleMouseEnter = () => {
    isHovering.value = true;
};

const handleMouseLeave = () => {
    isHovering.value = false;
};

const togglePlayPause = () => {
    if (videoRef.value) {
        if (isPaused.value) {
            videoRef.value.play();
            isPaused.value = false;
        } else {
            videoRef.value.pause();
            isPaused.value = true;
        }
    }
};

onMounted(() => {
    // Asegurar que el video se reproduzca automáticamente
    if (videoRef.value) {
        videoRef.value.play().catch(error => {
            console.log('Autoplay was prevented:', error);
        });
    }
});
</script>

<template>
    <section class="mural--boxvideo" aria-labelledby="mural-title">
        <div class="mural--video_container">
            <div 
                class="mural--video_wrapper"
                @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave"
                @mousemove="handleMouseMove"
                @click="togglePlayPause"
            >
                <video
                    ref="videoRef"
                    class="mural--video"
                    :src="getMuralPath('video-mural.mp4')"
                    autoplay
                    loop
                    muted
                    playsinline
                >
                    Tu navegador no soporta el elemento de video.
                </video>

                <!-- Botón de pause que sigue al cursor (solo visible cuando está reproduciendo) -->
                <div 
                    v-if="isHovering && !isPaused"
                    class="mural--video_cursor"
                    :style="{
                        left: `${cursorPosition.x}px`,
                        top: `${cursorPosition.y}px`
                    }"
                >
                    <div class="mural--video_button">
                        <svg 
                            class="mural--video_icon"
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2"
                        >
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                    </div>
                </div>

                <!-- Botón estático en la esquina inferior derecha -->
                <div class="mural--video_staticbutton">
                    <div class="mural--video_button">
                        <svg 
                            v-if="!isPaused" 
                            class="mural--video_icon"
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2"
                        >
                            <rect x="6" y="4" width="4" height="16"></rect>
                            <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>
                        <svg 
                            v-else 
                            class="mural--video_icon"
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2"
                        >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                </div>

                <!-- Título en desktop (dentro del video) -->
                <div class="mural--video_titleoverlay">
                    <h3 class="mural--video_title">Lapso de tiempo: 46 días en 1 minuto</h3>
                </div>
            </div>

            <!-- Título en mobile (debajo del video) -->
            <div class="mural--video_titlemobile">
                <h3 class="mural--video_title">Lapso de tiempo: 46 días en 1 minuto</h3>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.mural--boxvideo {
    width: min(587px, 100%);
    .mural--video_container {
        width: 100%;
    }

    .mural--video_wrapper {
        position: relative;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        
        .mural--video {
            width: 100%;
            height: auto;
            display: block;
        }

        // Botón que sigue al cursor
        .mural--video_cursor {
            position: absolute;
            pointer-events: none;
            z-index: 20;
            transform: translate(-50%, -50%);
            transition: opacity 0.2s ease;
            
            .mural--video_button {
                width: 40px;
                height: 40px;
                background: rgba(var(--color-black), 0.7);
                backdrop-filter: blur(10px);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(var(--color-black), 0.3);
                border: 2px solid var(--color-white);
                
                .mural--video_icon {
                    width: 20px;
                    height: 20px;
                    color: var(--color-white);
                }
            }
        }

        // Botón estático en la esquina inferior derecha
        .mural--video_staticbutton {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            z-index: 15;
            pointer-events: none;
            
            .mural--video_button {
                width: 40px;
                height: 40px;
                background: rgba(var(--color-black), 0.7);
                backdrop-filter: blur(10px);
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(var(--color-black), 0.3);
                border: 2px solid var(--color-white);
                transition: transform 0.2s ease, opacity 0.2s ease;
                
                .mural--video_icon {
                    width: 20px;
                    height: 20px;
                    color: var(--color-white);
                }
            }

            // Ajuste para mobile
            @media (max-width: 767px) {
                bottom: 1rem;
                right: 1rem;
                
                .mural--video_button {
                    width: 50px;
                    height: 50px;
                    
                    .mural--video_icon {
                        width: 25px;
                        height: 25px;
                    }
                }
            }
        }

        // Título superpuesto (desktop)
        .mural--video_titleoverlay {
            position: absolute;
            bottom: 2rem;
            left: 2rem;
            z-index: 10;
            display: block;
            
            @media (max-width: 767px) {
                display: none;
            }
            
            .mural--video_title {
                color: var(--color-white);
                text-shadow: 0 0 6px var(--color-black);
                font-size: 18px;
                font-style: italic;
                font-weight: 400;
                line-height: normal;
            }
        }
    }

    // Título debajo del video (mobile)
    .mural--video_titlemobile {
        display: none;
        padding-top: 8px;
        
        @media (max-width: 767px) {
            display: block;
        }
        
        .mural--video_title {
            color: var(--color-black);
            font-size: 15px;
            font-style: italic;
            font-weight: 400;
            line-height: normal;
        }
    }
}
</style>