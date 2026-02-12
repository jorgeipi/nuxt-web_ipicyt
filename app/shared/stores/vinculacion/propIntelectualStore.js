import { defineStore } from "pinia";
import { fetchPatentes } from '@shared/services/vinculacion/vinculacion-api';
import { reportError } from '@shared/utils/logger';

export const usePropIntelectualStore = defineStore("propiedad-intelectual", {
    state: () => ({
        propiedadIntelectual: [],
        isLoading: false,
        abortController: null,
    }),

    getters: {
        tiposPropiedadIntelectual: (state) => state.propiedadIntelectual,
        
        todasLasPatentes: (state) => {
            const patentes = [];
            state.propiedadIntelectual.forEach(tipo => {
                tipo.subcategorias.forEach(subcategoria => {
                    Object.values(subcategoria.patentes).forEach(patente => {
                        patentes.push(patente);
                    });
                });
            });
            return patentes;
        }
    },

    actions: {
        resetPropiedadIntelectual() {
            this.propiedadIntelectual = [];
            this.isLoading = false;
            this.abortController = null;
        },

        async handlePropiedadIntelectual() {
            if (this.abortController) {
                this.abortController.abort();
            }
            this.abortController = new AbortController();

            this.isLoading = true;
            try {
                const { data } = await fetchPatentes({
                    signal: this.abortController.signal,
                });
                this.propiedadIntelectual = data.propiedad_intelectual;
            } catch (error) {
                if (error.name !== 'AbortError') {
                    reportError(error, `handlePropiedadIntelectual`);
                }
            } finally {
                this.isLoading = false;
            }
        },

        obtenerPatentesPorTipoYSubcategoria(nombreTipo, tituloSubcategoria) {
            const tipo = this.propiedadIntelectual.find(t => t.nombre === nombreTipo);
            if (!tipo) return {};
            
            const subcategoria = tipo.subcategorias.find(s => s.titulo === tituloSubcategoria);
            return subcategoria ? subcategoria.patentes : {};
        }
    },
});