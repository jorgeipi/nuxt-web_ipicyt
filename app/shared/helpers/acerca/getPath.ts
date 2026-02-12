const baseUrl = import.meta.env.VITE_SOURCE;

export const createPathGetter = (basePath: string) => {
    return (path: string): string => {
        const normalizedBase = basePath.startsWith('/') ? basePath : `/${basePath}`;
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return `${baseUrl}${normalizedBase}${normalizedPath}`;
    };
};

export const getSecretariaSolictudPath = createPathGetter('/acerca/secretaria-academica/solicitud');
export const getSecretariaConvocatoriaPath = createPathGetter('/acerca/secretaria-academica/convocatoria');
export const getSecretariaReglamentoPath = createPathGetter('/acerca/secretaria-academica/reglamento');

export const getVisitasPath = createPathGetter('/acerca/visitas');

export const getComiteLineaPath = createPathGetter('/acerca/comite-etica/lineamientos')
export const getComiteCodigoPath = createPathGetter('/acerca/comite-etica/codigo-de-conducta')
export const getComiteConflictoPath = createPathGetter('/acerca/comite-etica/conflicto-de-interes')
export const getComitePrevencionPath = createPathGetter('/acerca/comite-etica/prevencion')
export const getComiteInformesPath = createPathGetter('/acerca/comite-etica/informes-ce-ipicyt')

export const getContraloriaApoyosPath = createPathGetter('/acerca/contraloria-social/apoyos')
export const getContraloriaDocsPath = createPathGetter('/acerca/contraloria-social/doc-normativos')
export const getContraloriaDifusionPath = createPathGetter('/acerca/contraloria-social/material-difusion')

export const getTransparenciaCInfoPath = createPathGetter('/acerca/transparencia-proactiva/catalogo-informacion')

export const getMuralPath = createPathGetter('/acerca/mural')

export const getDictamenes2025 = createPathGetter('/acerca/transparencia-proactiva/dictamenes/2025')
export const getDictamenes2024 = createPathGetter('/acerca/transparencia-proactiva/dictamenes/2024')
export const getDictamenes2023 = createPathGetter('/acerca/transparencia-proactiva/dictamenes/2023')
export const getDictamenes2022 = createPathGetter('/acerca/transparencia-proactiva/dictamenes/2022')
export const getDictamenes2021 = createPathGetter('/acerca/transparencia-proactiva/dictamenes/2021')
export const getDictamenes2020 = createPathGetter('/acerca/transparencia-proactiva/dictamenes/2020')

export const getPatrimonio2025Path = createPathGetter('');
