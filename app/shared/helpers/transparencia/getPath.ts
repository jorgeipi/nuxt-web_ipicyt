const baseUrl = import.meta.env.VITE_SOURCE;

export const createPathGetter = (basePath: string) => {
    return (path: string): string => {
        const normalizedBase = basePath.startsWith('/') ? basePath : `/${basePath}`;
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;
        return `${baseUrl}${normalizedBase}${normalizedPath}`;
    };
};

export const getAccesoInfoDenunciasPath = createPathGetter('/transparencia/acceso-informacion/denuncias');
export const getAccesoInfoIndicePath = createPathGetter('/transparencia/acceso-informacion/indice-expedientes');
export const getAccesoInfoCalendarioPath = createPathGetter('/transparencia/acceso-informacion/calendario-institucional');
export const getAperturaGubernamentalPath = createPathGetter('/transparencia/apertura-gubernamental');