<!-- layers/home/components/mapasitio/CardMap.vue -->
<script setup lang="ts">
// ✅ Ya no necesitas estos imports:
// import { ref } from 'vue'  ← Auto-importado por Nuxt
// import { NuxtLink } from '#components'  ← Auto-importado
// import type { MapaSitioItem } from '../../composables/useMapaSitio'  ← Auto-importado

interface Props {
  link: MapaSitioItem
}

const props = defineProps<Props>()
const imgSrc = ref(props.link.image)

const handleMouseEnter = () => {
  imgSrc.value = props.link.hoverImage
}

const handleMouseLeave = () => {
  imgSrc.value = props.link.image
}
</script>

<template>
  <article 
    class="card-map"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <header class="card-header">
      <div class="card-image">
        <picture>
          <img 
            class="image" 
            :src="imgSrc" 
            :alt="`Ícono relacionado con ${link.title}`" 
          />
        </picture>

        <h2 class="title">
          {{ link.title }}
        </h2>
      </div>
    </header>

    <main class="card-content">
      <section class="card-body">
        <!-- Lista de enlaces -->
        <ul v-if="link.list" class="list">
          <li 
            v-for="(extraText, index) in link.extra_text" 
            :key="index" 
            :class="['list-item', extraText]"
          >
            <NuxtLink 
              :to="link.listUrl![index]" 
              class="item" 
              :aria-label="`Ir a ${link.list[index]}`"
            >
              <span v-html="link.list[index]" />
            </NuxtLink>
          </li>
        </ul>

        <!-- Texto simple -->
        <NuxtLink 
          v-else 
          class="paragraph" 
          :to="link.href" 
          :aria-label="`Ir a ${link.text}`"
        >
          {{ link.text }}
        </NuxtLink>
      </section>

      <footer class="card-footer">
        <div v-if="link.title === 'Posgrados'" class="box-enlace_entrar">
          <NuxtLink 
            class="card-enlace_entrar" 
            :to="link.href" 
            aria-label="Entrar a la sección Posgrados"
          >
            Entrar
          </NuxtLink>
        </div>
      </footer>
    </main>
  </article>
</template>

<style lang="scss" scoped>
// @use '@styles/base/variables' as v;
// @use '@styles/base/mixins' as m;

.card-map {
  background-color: #EFEFEF;
  max-width: 27.6rem;
  width: 100%;
  min-height: 38.6rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: filter 0.3s ease;

  // @include m.tablet {
  //   max-width: 31.1rem;
  // }

  .card-header {
    .card-image {
      width: 100%;
      height: 12.7rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      picture {
        width: 100%;
        height: 100%;

        .image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }
      }

      .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: 0;
        color: #FFF;
        text-align: center;
        font-size: 2.2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
  }

  .card-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    background-color: #EFEFEF;

    &:hover {
      filter: brightness(0.9);

      .card-body {
        .paragraph {
          // color: v.$strong-blue3;
          text-decoration: underline;
        }
      }

      .card-footer {
        .box-enlace_entrar {
          .card-enlace_entrar {
            // color: v.$black;
            text-decoration: underline;
          }
        }
      }
    }

    .card-body {
      .list {
        padding: 0;
        margin: 0 0 0 2rem;
        list-style: none;

        .list-item {
          position: relative;
          margin-bottom: 1.5rem;

          .item {
            // color: v.$black;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 400;
            line-height: 1.9rem;

            &:hover {
              // color: v.$strong-blue3;
              text-decoration: underline;
            }
          }
        }
      }

      .paragraph {
        // color: v.$black;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: 2.2rem;
      }
    }

    .card-footer {
      .box-enlace_entrar {
        position: relative;
        display: flex;
        align-items: center;

        .card-enlace_entrar {
          // color: v.$strong-blue3;
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 700;
          line-height: 2.2rem;
          padding-left: 3rem;
          position: relative;
        }

        &::before {
          content: "";
          display: inline-block;
          height: 0.8rem;
          width: 0.8rem;
          background-color: hsl(227, 93%, 55%);
          margin-right: -1.5rem;
        }
      }
    }
  }
}
</style>