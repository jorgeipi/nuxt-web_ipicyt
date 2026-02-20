export interface MenuItem {
  label: string
  to: string
  icon?: string
  children?: MenuItem[]
  order?: number
}

export interface MenuConfig {
  title?: string
  items: MenuItem[]
}

export const menusConfig: Record<string, MenuConfig> = {
  'investigacion/grupos-de-trabajo': {
    title: 'Grupos de trabajo interinstitucionales',
    items: [
      { label: 'Grupo de Ciencias e Ingeniería Computacionales', 
        to: '/investigacion/grupos-de-trabajo/cienciaIngenieria', order: 1 },
      { label: 'ARAN (Arsenic Research and Action Network)', 
        to: '/investigacion/grupos-de-trabajo/arsenic', order: 2 },
      { label: 'Red Internacional para la Sostenibilidad de las Zonas Áridas (RISZA)', 
        to: '/investigacion/grupos-de-trabajo/risza', order: 3 },
    ]
  },
  
  'acerca': {
    title: 'Acerca',
    items: [
      { label: 'Bienvenida', to: 'bienvenida', order: 1 },
      { label: 'Secretaría Académica', to: 'secretaria-academica', order: 2 },
      { label: 'Comunicación Social', to: 'comunicacion-social', order: 2 },
      { label: 'Retribución y compromiso social IPICYT', to: '/', order: 3 },
      { label: 'Visitas Guiadas', to: 'visitas-guiadas', order: 4 },
      { label: 'Directorio', to: '/', order: 5 },
      { label: 'Infraestructura', to: 'infraestructura', order: 6 },
      { label: 'Localización', to: 'localizacion', order: 7 },
      { label: 'Comité de Ética', to: 'comite-de-etica', order: 8 },
      { label: 'Contraloría Social', to: 'contraloria-social', order: 9 },
      { label: 'Normatividad', to: '/', order: 10 },
      { label: 'Transparencia Proactiva', to: 'transparencia-proactiva', order: 11 },
      { label: 'Mural Ipicyt', to: 'mural-ipicyt', order: 12 },
    ]
  },

  'oic-secihti': {
    title: 'OIC-SECIHTI',
    items: [
      { label: 'OIC-SECIHTI, oficina de representación en el IPICYT', 
        to: 'oficina-de-representacion', order: 1 },
      { label: 'Estructura Orgánica', 
        to: 'estructura-organica', order: 2 },
      { label: 'Denuncias', 
        to: 'denuncias', order: 3 },
    ]
  },

  'proteccion-de-datos-personales': {
    title: 'Protección de Datos Personales',
    items: [
      { label: 'Bienvenida', 
        to: 'bienvenida', order: 1 },
      { label: 'Avisos de Privacidad Integrales', 
        to: 'avisos', order: 2 },
      { label: 'Datos del Contacto de la Unidad de Transparencia', 
        to: 'contacto', order: 3 },
      { label: 'Información relevante en materia de protección de datos personales', 
        to: 'informacion', order: 4 },
    ]
  },

  'transparencia': {
    title: 'Transparencia',
    items: [
      { label: 'Acceso a la Información', 
        to: 'acceso-a-la-informacion', order: 1 },
      { label: 'Apertura Gubernamental', 
        to: 'apertura-gubernamental', order: 3 },
      { label: 'Gobierno Abierto', 
        to: 'gobierno-abierto', order: 4 },
      { label: 'Datos Abiertos', 
        to: 'datos-abiertos', order: 5 },
    ]
  },

  'servicios-comunidad': {
    title: 'Servicios a la comunidad',
    items: [
      { label: 'Unidad para la Igualdad de Género', 
        to: 'comision-SHMA', order: 1 },
      { label: 'Primeros Auxilios Psicológicos', 
        to: 'apertura-gubernamental', order: 2 },
      { label: 'Salud Ocupacional', 
        to: 'gobierno-abierto', order: 3 },
      { label: 'Comisión de Seguridad, Higiene y Medio Ambiente', 
        to: 'datos-abiertos', order: 4 },
      { label: 'Comisión de Seguridad, Higiene y Medio Ambiente', 
        to: 'datos-abiertos', order: 4 },
    ]
  },
}