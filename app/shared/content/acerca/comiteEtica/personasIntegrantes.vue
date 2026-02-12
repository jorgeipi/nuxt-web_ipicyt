<template>
    <div class="contenedor">
        <div class="item">
            <div class="cargo">
                <h6>Presidencia</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">C.P.C Ulises Rodrigo Morales Salcedo</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Mtra. Ivonne Lizette Cuevas Vélez</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Dirección de Área</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">Dra. Lina Raquel Riego Ruiz</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Ing. Alejandro Vázquez Bulman</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Subdirección de Área</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">Mtra. Elvia Leticia Capetillo Montejano</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Mtro. Luis Fernando Herrera</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Jefatura de Área</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">L.D.G. Ma. del Rocío Perales Ruíz</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Mtro. Omar Rodriguez González</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Área académica</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">Dr. Ángel Gabriel Alpuche Solís</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Dra. Irene Beatriz Castaño Navarro</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Área Técnica</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">Dra. en C. Gladis Judith Labrada Delgado</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">M. en C. Irwin Allen Díaz Díaz</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Área Administrativa</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">Gabriela Pérez Assaf</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">L. Arch. Lorena Alonso Méndez</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Secretaría Ejecutiva</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <p class="nombre">L.RH. Laura Nallely Rodríguez López</p>
                    <p class="puesto">Titular</p>
                </div>

                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">Lic. Juana Guadalupe Hernández Bravo</p>
                    <p class="puesto">Suplente</p>
                </div>
            </div>
        </div>

        <div class="item">
            <div class="cargo">
                <h6>Jefe de la oficina de representación del OIC del SECIHTI en el IPICYT</h6>
            </div>
            <div class="encargados">
                <div class="columna">
                    <!-- <p class="nombre" @click="curricularCve(i.nombre)">C.P.C Ulises Rodrigo Morales Salcedo</p> -->
                    <p class="nombre">C.P. Arturo Avila Esparza</p>
                    <p class="puesto">Representante</p>
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