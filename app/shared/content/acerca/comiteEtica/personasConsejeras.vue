<template>
    <div class="contenedor">

        <div class="item">
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">Dra. Lucia Mendoza Viveros</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Dra. Nguyen Esmeralda López Lozano</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '@/styles/base/mixins' as m;

    .contenedor{
        display: flex;
        flex-direction: column;
        max-width: 650px;
        padding-bottom: 2rem;
        .item{
            margin-top: 2rem;
            .cargo{
                h5{
                    color: black;
                }
            }
            .encargados{
                display: flex;
                .columna{
                    width: 400px;
                    @include m.mobile{

                    }
                    .nombre{
                        color: #0E149B;
                        text-decoration: underline;
                    }
                    .nombre:hover{
                        color: #393e8f;
                        cursor: pointer;
                    }
                    .puesto{
                        padding-top: 0%;
                    }
                }
            }
        }
    }
</style>