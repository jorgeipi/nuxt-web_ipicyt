import { ref, watch } from 'vue';
import { fetchPersonalContacto } from '@modules/personal/helpers/fetchPersonalContacto';
import { fetchPersonalResumen } from '@modules/personal/helpers/fetchPersonalResumen';
import { reportError } from '@shared/utils/logger';
import { PersonalTipo } from '@modules/personal/constants/personal-tipo';

export function usePersonalesReactive(personasRef) {
  const personal = ref({});
  const personalLoading = ref(true);
  const error = ref(null);
  const hasErrors = ref({});

  function buildParams(persona) {
    try {
      const { cvepersonal, cvepuesto, cvedepto, ...rest } = persona;

      if (!cvepersonal && !cvepuesto) {
        const errorMsg = `Se requiere cvepersonal o cvepuesto en el contacto "${persona.key}"`;
        reportError(new Error(errorMsg), 'buildParams');
        return null;
      }

      if (cvedepto && !cvepersonal && !cvepuesto) {
        const errorMsg = `cvedepto no puede enviarse solo sin cvepersonal o cvepuesto (en "${persona.key}")`;
        reportError(new Error(errorMsg), 'buildParams');
        return null;
      }

      const params = {};
      if (cvepersonal) params.cvepersonal = cvepersonal;
      if (cvepuesto) params.cvepuesto = cvepuesto;
      if (cvedepto) params.cvedepto = cvedepto;

      return { ...params, ...rest };
    } catch (err) {
      reportError(err, 'buildParams');
      return null;
    }
  }

  async function loadPersonales(personas) {
    if (!personas || Object.keys(personas).length === 0) {
      personalLoading.value = true;
      return;
    }

    try {
      personalLoading.value = true;
      error.value = null;
      hasErrors.value = {};
      personal.value = {};

      const requests = personas.map(async (persona) => {
        try {
          const tipo = persona.tipo || PersonalTipo.CONTACTO;
          const fetcher = tipo === PersonalTipo.CONTACTO 
            ? fetchPersonalContacto 
            : fetchPersonalResumen;

          const params = buildParams(persona);
          if (!params) {
            throw new Error(`Parámetros inválidos para ${persona.key}`);
          }

          const data = await fetcher(params);
          if (!data) {
            throw new Error(`No se recibieron datos para ${persona.key}`);
          }

          return {
            key: persona.key,
            data: Array.isArray(data) ? data : [data],
            error: null
          };
        } catch (err) {
          reportError(err, `Error procesando persona ${persona.key}`);
          return {
            key: persona.key,
            data: null,
            error: err.message
          };
        }
      });

      const results = await Promise.all(requests);
      
      results.forEach(result => {
        if (result.error) {
          hasErrors.value[result.key] = result.error;
        } else {
          personal.value[result.key] = result.data;
        }
      });

    } catch (err) {
      error.value = err.message;
      reportError(err, 'loadPersonales');
    } finally {
      personalLoading.value = false;
    }
  }

  loadPersonales(personasRef.value);
  
  watch(personasRef, (newPersonas) => {
    loadPersonales(newPersonas);
  }, { deep: true });

  return {
    personal,
    personalLoading,
    error,
    hasErrors
  };
}