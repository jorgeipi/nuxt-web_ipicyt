<script setup>
import ipicyt_logo from '/imgs/home/facturas/logo_IPICYT_facturas.svg';
import ipicyt_footer from '/imgs/home/facturas/logo_IPICYT_facturas-footer.svg';
</script>

<template>
    <div class="container displayCenter">
        <div class="validacion-facturas">
            <img 
                :src="ipicyt_logo" 
                alt="IPICYT Logo" 
                class="validacion-facturas__logo"
            >
            
            <h2 class="validacion-facturas__titulo">
                Validación de Facturas (Proveedores)
            </h2>
            
            <div class="validacion-facturas__iframe-container">
                <iframe 
                    ref="myIframe" 
                    src="https://facturacionnuevo2.ipicyt.edu.mx/validaciones" 
                    frameborder="0"
                    class="validacion-facturas__iframe"
                    title="Sistema de validación de facturas"
                ></iframe>
            </div>
            
            <img 
                :src="ipicyt_footer" 
                alt="IPICYT Footer Logo" 
                class="validacion-facturas__footer-logo"
            >
        </div>
    </div>
</template>

<style scoped lang="scss">
// BLOCK: validacion-facturas
.validacion-facturas {
    max-width: 608px;
    width: 100%;
    display: grid;
    gap: 2.5rem;
    padding: 5rem 0;

    // ELEMENT: logo
    &__logo {
        // width: 100%;
        height: auto;
    }

    // ELEMENT: titulo
    &__titulo {
        margin: 0;
        // text-align: center;
        // color: var(--color-primary, #182654);
    }

    // ELEMENT: iframe-container
    &__iframe-container {
        width: 100%;
        position: relative;
    }

    // ELEMENT: iframe
    &__iframe {
        width: 100%;
        height: 400px;
        border: none;
    }

    // ELEMENT: footer-logo
    &__footer-logo {
        // width: 100%;
        height: auto;
    }
}
</style>
