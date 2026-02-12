<script setup>
</script>

<template>
    <div class="oic--denuncias">
        <main class="denuncias--main">
            <section class="denuncias--intro" aria-labelledby="titulo-intro">
                <h2 id="titulo-intro" class="denuncias--title">Denuncias</h2>
                <p>Si usted requiere denunciar hechos presuntamente irregulares en los que se encuentren involucrados servidores públicos adscritos al IPICYT, así como personas físicas o morales que manejen o apliquen recursos públicos o que participen en contrataciones públicas de carácter federal puede presentar su denuncia a través de los siguientes medios:</p>
            </section>
        </main>
    </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

.oic--denuncias {
    .denuncias--main {
        width: 60.9rem;

        // margin-right: 2.4rem;
        @include m.desktop {
            margin: 0 auto;
        }

        @include m.tablet {
            width: min(60.9rem, 100%);
        }

        .denuncias--title,
        .denuncias-subtitle {
            color: var(--color-black);
            font-family: "Noto Sans";
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            font-weight: bold;
        }

        .denuncias--title{
            margin: 0rem;
            span{
                font-weight: normal;
            }
        }

        .denuncias-subtitle{
            margin-bottom: 2rem;
        }

        .denuncias--intro {
            display: flex;
            flex-direction: column;
            row-gap: 3rem;

            margin-bottom: 3rem;

            #titulo-intro{
                margin-bottom: 4rem;
            }
        }
    }
}
</style>