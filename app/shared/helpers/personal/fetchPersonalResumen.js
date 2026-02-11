import { reportError } from '@shared/utils/logger';
import { getPersonalResumen } from '@shared/services/personal/personal-api';

/**
 * Obtiene el resumen de un contacto sin mantener estado reactivo.
 * @param {Object} params - Parámetros de la petición (e.g., { cvepersonal: 123 })
 * @param {AbortSignal} [signal] - Opcional: controlador para cancelar la solicitud
 * @returns {Promise<Object|null>} - Datos del resumen o null si hay error
 */
export async function fetchPersonalResumen(params = {}, signal) {
  const abortController = new AbortController();

  try {
    const response = await getPersonalResumen({
      params,
      signal: signal || abortController.signal,
    });

    if (response.data?.error) {
      reportError(new Error(response.data.error), `Error en fetchPersonalResumen`);
      return null;
    }

    return response.data;
  } catch (error) {
    if (error.name !== 'AbortError') {
      reportError(error, `Error en fetchPersonalResumen`);
    }
    return null;
  }
}

