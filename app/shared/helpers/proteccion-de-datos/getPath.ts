const baseUrl = import.meta.env.VITE_SOURCE;

export const createPathGetter = (basePath: string) => {
    return (path: string): string => {
        const normalizedBase = basePath.startsWith('/') ? basePath : `/${basePath}`;
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return `${baseUrl}${normalizedBase}${normalizedPath}`;
    };
};

export const getDatosAvisosPath = createPathGetter('/proteccion-de-datos/avisos');

export const getDatosInfoPoliticasPath = createPathGetter('/proteccion-de-datos/informacion/politicas'); 
export const getDatosInfoInfografiasPath = createPathGetter('/proteccion-de-datos/informacion/infografias'); 
export const getDatosInfoProcedimientoPath = createPathGetter('/proteccion-de-datos/informacion/procedimiento');
export const getDatosInfoGuiaPath = createPathGetter('/proteccion-de-datos/informacion/guia');

