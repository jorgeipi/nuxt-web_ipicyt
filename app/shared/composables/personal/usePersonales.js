import { ref, onMounted } from 'vue';
import { fetchPersonalContacto } from '@shared/helpers/personal/fetchPersonalContacto';
import { fetchPersonalResumen } from '@shared/helpers/personal/fetchPersonalResumen';
import { reportError } from '@shared/utils/logger';
import { PersonalTipo } from '@shared/constants/personal/personal-tipo';

export function usePersonales(personas = []) {
  const personal = ref({});
  const personalLoading = ref(true);

  function buildParams(persona) {
    const { cvepersonal, cvepuesto, cvedepto, ...rest } = persona;

    if (!cvepersonal && !cvepuesto) {
      reportError(new Error(`Se requiere cvepersonal o cvepuesto en el contacto "${persona.key}"`), 'usePersonalesOneByOne');
      return;
    }

    if (cvedepto && !cvepersonal && !cvepuesto) {
      reportError(new Error(`cvedepto no puede enviarse solo sin cvepersonal o cvepuesto (en "${persona.key}")`), 'usePersonalesOneByOne');
      return;
    }

    const params = {};
    if (cvepersonal) params.cvepersonal = cvepersonal;
    if (cvepuesto) params.cvepuesto = cvepuesto;
    if (cvedepto) params.cvedepto = cvedepto;

    return { ...params, ...rest };
  }

  onMounted(async () => {
    try {
      const results = await Promise.all(
        personas.map((persona) => {
          const tipo = persona.tipo || PersonalTipo.CONTACTO;

          const fetcherMap = {
            [PersonalTipo.CONTACTO]: fetchPersonalContacto,
            [PersonalTipo.RESUMEN]: fetchPersonalResumen,
            // [PersonalTipo.COMPLETO]: otroFetcher
          };

          const fetcher = fetcherMap[tipo];

          if (!fetcher) {
            throw new Error(`Tipo de personal no soportado: ${tipo}`);
          }

          const params = buildParams(persona);

          return fetcher(params).then((data) => [persona.key, data]);
        })
      );

      personal.value = Object.fromEntries(results);
    } catch (error) {
      reportError(error, 'usePersonalesOneByOne');
    } finally {
      personalLoading.value = false;
    }
  });

  return {
    personal,
    personalLoading,
  };
}