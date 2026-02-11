import { reportError } from '@shared/utils/logger';
import { getPersonalContacto } from '@shared/services/personal/personal-api';

/**
 * Hace una solicitud de contacto individual sin mantener estado global
 * @param {Object} params - Parámetros de búsqueda (e.g., { cvepersonal: 123 })
 * @param {AbortSignal} [signal] - Opcional: AbortController para cancelar la solicitud
 * @returns {Promise<Object|null>} - Datos del contacto o null en error
 */
export async function fetchPersonalContacto(params = {}, signal) {
  const abortController = new AbortController();

  try {
    const response = await getPersonalContacto({
      params,
      signal: signal || abortController.signal,
    });

    if (response.data?.error) {
      reportError(new Error(response.data.error), `Error en fetchPersonalContacto`);
      return null;
    }

    return response.data;
  } catch (error) {
    if (error.name !== 'AbortError') {
      reportError(error, `Error en fetchPersonalContacto`);
    }
    return null;
  }
}