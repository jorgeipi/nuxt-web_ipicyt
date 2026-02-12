const baseUrl = import.meta.env.VITE_SOURCE;

export const createPathGetter = (basePath: string) => {
    return (path: string): string => {
        const normalizedBase = basePath.startsWith('/') ? basePath : `/${basePath}`;
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return `${baseUrl}${normalizedBase}${normalizedPath}`;
    };
};

export const getProteccionDatosAvisosPath = createPathGetter('/proteccion-de-datos/avisos');