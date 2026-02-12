import { reportError } from '@shared/utils/logger';
import { getPersonal } from '@shared/services/personal/personal-api';
import { personalSinError } from './fetchPersonalSinError';

/**
 * Realiza una solicitud para obtener personal.
 * Devuelve resultados sin errores, sea array u objeto.
 * @param {Array} queries - Lista de parámetros de búsqueda
 * @param {AbortSignal} [signal] - Opcional: para abortar la petición
 * @returns {Promise<Array|Object|null>}
 */
export async function fetchPersonal(queries = [], signal) {
  const abortController = new AbortController();

  try {
    const response = await getPersonal({
      queries,
      signal: signal || abortController.signal,
    });

    const data = response.data;
    if (!data) return null;
    let result;

    if (Array.isArray(data)) {
      result = data.filter(p => !p?.error);
    } else {
      result = personalSinError(data);
      for (const [key, value] of Object.entries(data)) {
        if (value && value.error) {
          reportError(new Error(value.error), `Error individual en persona clave: ${key}`);
        }
      }
    }

    return result;
  } catch (error) {
    if (error.name !== 'AbortError') {
      reportError(error, "Error global en fetchPersonal");
    }
    return null;
  }
}