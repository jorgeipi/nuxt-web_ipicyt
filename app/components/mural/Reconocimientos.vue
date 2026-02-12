<template>
    <div class="mural--reconocimientos">
        <div class="mural--reconocimientos_boxtitle">
            <h3 class="mural--reconocimientos_title">Reconocimientos Destacados</h3>
        </div>

        <div class="mural--reconocimientos_list">
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Invitado <span>1er Encuentro International de Arte
                        2024.</span> Sayulita, Nayarit.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Invitado <span>Proyecto Maíz de Fragmentación /Zita
                        Colectivo.</span> CDMX, México.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección <span>CowParade 2024.</span> Reforma, CDMX.
                </p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Premio por Trayectoria Internacional <span>Proyección
                        Cultural Coatzacoalcos 2024.</span></p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección <span>International Art Circle Wolfgangsee
                        2024.</span> Austria.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección <span>International Art Circle Spring
                        2023.</span> Goritizia, Eslovenia.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección <span>CowParade 2022.</span> Reforma, CDMX.
                </p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Ganador Medalla al Mérito Cultural <span>Don Roberto
                        Gonzalez Gálvez 2022.</span></p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Reconocimiento a Legado Cultural <span>Claustro
                        Doctoral Hispano HC. 2022.</span></p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Reconocimiento Trayectoria Profesional <span>Worlwide
                        Knowledge Summit 2021.</span></p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección Simposio Internacional Artes plásticas
                    <span>KupuIart 2021.</span> CDMX-Mor.
                </p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Segundo lugar. Colorea tu vida con JAC Motors 2019.
                    CDMX.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección. <span>MEXICRANEOS 2019.</span> Reforma,
                    CDMX.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Finalista Internacional <span>Custom Vans Culture
                        2019,</span> 60 mil participantes.</p>
            </div>
            <div class="mural--reconocimientos_boxitem">
                <p class="mural--reconocimientos_item">Selección Simposio Internacional de Artes plásticas
                    <span>KupuIart 2018.</span> CDMX.
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.mural--reconocimientos {

    .mural--reconocimientos_boxtitle {
        width: min(790px, 100%);
        margin: 0 auto;
        margin-bottom: 3rem;

        .mural--reconocimientos_title {
            color: var(--color-black);
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 700;
            line-height: 22px;
            /* 122.222% */
        }
    }

    .mural--reconocimientos_list {
        // display: flex;
        // align-items: center;
        // justify-content: center;
        margin: 0 auto;
        // display: inline-flex;
        // flex-direction: column;
        width: min(1195px, 100%);

        .mural--reconocimientos_boxitem {
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid var(--color-gray-light);
            padding: 0.5rem 0;

            .mural--reconocimientos_item {
                color: var(--color-black);
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px;
                width: min(790px, 100%);

                span {
                    color: var(--color-secondary)
                }
            }
        }
    }
}
</style>