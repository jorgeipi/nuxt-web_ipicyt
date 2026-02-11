<script setup>
import { IconArrowRFBlue, IconCredencial, IconIPIBUS, GoogleLocationIcon, HandRFBlueIcon } from '@components/icons'
</script>

<template>
    <div class="displayCenter">
        <div class="ipibus">
            <!-- CREDENCIAL SECTION -->
            <div class="ipibus__credencial">
                <IconCredencial class="ipibus__credencial-icon" />
                <p class="ipibus__credencial-text">
                    El Ipibus es un transporte <strong>exclusivo para personal del IPICYT</strong> con credencial y código QR vigentes
                </p>
            </div>

            <!-- HORARIOS Y RUTAS SECTION -->
            <div class="ipibus__horarios-rutas">
                <h2 class="ipibus__title mb-8">Horarios y rutas</h2>
                <div class="ipibus__rutas-container">
                    
                    <!-- RUTA 1 -->
                    <div class="ipibus__ruta-item">
                        <div class="ipibus__salida">
                            <p><strong>Parque de Morales</strong></p>
                            <IconArrowRFBlue class="ipibus__arrow-icon" />
                            <p><strong>IPICYT</strong></p>
                        </div>
                        
                        <div class="ipibus__horarios">
                            <p><strong>Lunes a Viernes</strong></p>
                            <p>8:45 am</p>
                            <p>9:15 am.</p>
                        </div>
                        
                        <IconIPIBUS class="ipibus__bus-icon" />
                        
                        <div class="ipibus__punto-recogida">
                            <p><strong>Punto de recogida:</strong></p>
                            <p>Avenida Venustiano Carranza casi esquina con Dr. Carlos Canseco González, Frente a escuela de Medicina.</p>
                        </div>
                        
                        <a href="https://www.google.com/maps/place/..." class="ipibus__maps-link">
                            <div class="ipibus__maps">
                                <GoogleLocationIcon class="ipibus__maps-icon" />
                                <p class="ipibus__maps-text">Ver en Google Maps</p>
                            </div>
                        </a>
                    </div>

                    <!-- RUTA 2 -->
                    <div class="ipibus__ruta-item">
                        <div class="ipibus__salida">
                            <p><strong>IPICYT</strong></p>
                            <IconArrowRFBlue class="ipibus__arrow-icon" />
                            <p><strong>Parque de Morales</strong></p>
                        </div>
                        
                        <div class="ipibus__horarios">
                            <p><strong>Lunes a Jueves</strong></p>
                            <p>2:15 pm</p>
                            <p>5:15 pm.</p>
                            <p>7:15 pm.</p>
                        </div>
                        
                        <div class="ipibus__horarios">
                            <p><strong>Viernes</strong></p>
                            <p>2:15 pm</p>
                            <p>3:15 pm.</p>
                        </div>
                        
                        <IconIPIBUS class="ipibus__bus-icon" />
                        
                        <div class="ipibus__punto-recogida">
                            <p><strong>Punto de recogida:</strong></p>
                            <p>Estacionamiento de Grava, entre Edificio Alfa y Delta.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- REGLAMENTO SECTION -->
            <div class="ipibus__reglamento">
                <h2 class="ipibus__title mb-8">Reglamento</h2>
                
                <div class="ipibus__regla">
                    <HandRFBlueIcon class="ipibus__regla-icon" />
                    <p class="ipibus__regla-text">No está permitido ingerir alimentos dentro del autobús.</p>
                </div>
                
                <div class="ipibus__regla">
                    <HandRFBlueIcon class="ipibus__regla-icon" />
                    <p class="ipibus__regla-text">Es necesario que cuentes con Credencial Institucional y QR activo para el control de ingreso.</p>
                </div>
                
                <div class="ipibus__regla">
                    <HandRFBlueIcon class="ipibus__regla-icon" />
                    <p class="ipibus__regla-text">El operador del IPIBUS permitirá el ascenso cerca del Edificio Alfa y el descenso en el interior del instituto, cerca al Estacionamiento de Grava.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
// BLOCK: ipibus
.ipibus {
    max-width: 790px;
}

// ELEMENT: credencial
.ipibus__credencial {
    display: flex;
    align-items: center;
    gap: 3rem;
    background-color: var(--color-background-paper);
    border-radius: 10px;
    padding: 2rem;
    width: 100%;
    // height: 130px;
    min-height: 130px;

    @media (max-width: 720px) {
        gap: 1rem;
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }
}

.ipibus__credencial-icon {
    width: 81px;
    height: 74px;
    flex-shrink: 0;
    // @media (max-width: 720px) {
    //     height: 55px;
    // }
}

// ELEMENT: horarios-rutas
.ipibus__horarios-rutas {
    margin-top: 6rem;
}

.ipibus__rutas-container {
    display: flex;
    width: 100%;
    gap: 2rem;

    @media (max-width: 720px) {
        flex-direction: column;
    }
}

.ipibus__ruta-item {
    border: 1px solid var(--color-text-subtle);
    border-radius: 10px;
    padding: 2rem;
    width: 386px;
    height: 440px;

    @media (max-width: 720px) {
        width: 100%;
        margin-bottom: 2rem;
    }
}

.ipibus__salida {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.ipibus__horarios {
    margin-bottom: 2rem;
}

.ipibus__bus-icon {
    width: 54px;
    height: 44px;
    margin-bottom: 3rem;
}

.ipibus__punto-recogida {
    margin-bottom: 1rem;
}

.ipibus__maps-link {
    text-decoration: none;
}

.ipibus__maps {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 3rem;

    @media (max-width: 720px) {
        margin-top: 2rem;
    }
}

.ipibus__maps-icon {
    width: 32px;
    height: 32px;
}

.ipibus__maps-text {
    color: var(--color-secondary);
    font-weight: 700;
}

// ELEMENT: reglamento
.ipibus__reglamento {
    margin-top: 6rem;
}

.ipibus__regla {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 1.5rem;
}

.ipibus__regla-icon {
    width: 26px;
    height: 23px;
    flex-shrink: 0;
}

// ELEMENT: title (compartido)
.ipibus__title {
    // Agrega estilos para el título si es necesario
}
</style>