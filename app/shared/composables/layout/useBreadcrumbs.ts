export interface BreadcrumbItem {
  label: string
  to?: string
}

// Mapeo de slugs a nombres legibles
const routeLabels: Record<string, string> = {
  // Secciones principales
  'investigacion': 'Investigación',
  'posgrado': 'Posgrado',
  'vinculacion': 'Vinculación',
  'acerca': 'Acerca de',
  
  // Subsecciones de investigación
  'divisiones': 'Divisiones',
  'grupos': 'Grupos de Trabajo',
  'biologia-molecular': 'Biología Molecular',
  'ciencias-ambientales': 'Ciencias Ambientales',
  'control-sistemas-dinamicos': 'Control y Sistemas Dinámicos',
  'geociencias-aplicadas': 'Geociencias Aplicadas',
  'materiales-avanzados': 'Materiales Avanzados',
  
  // Otras secciones
  'investigadores': 'Investigadores',
  'proyectos': 'Proyectos',
  'publicaciones': 'Publicaciones',
  'laboratorios': 'Laboratorios Nacionales',
  'convocatorias': 'Convocatorias',
  'programas': 'Programas',
  
  // Agregar más según necesites...
}

export const useBreadcrumbs = () => {
  const route = useRoute()
  
  /**
   * Genera breadcrumbs automáticamente desde la ruta actual
   */
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = route.path.split('/').filter(Boolean)
    
    // Siempre empezar con "Inicio"
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', to: '/' }
    ]
    
    // Si estamos en la home, solo mostrar "Inicio"
    if (pathSegments.length === 0) {
      return breadcrumbs
    }
    
    // Construir breadcrumbs para cada segmento
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      
      // El último segmento no tiene link (es la página actual)
      const isLast = index === pathSegments.length - 1
      
      breadcrumbs.push({
        label: routeLabels[segment] || formatSegment(segment),
        to: isLast ? undefined : currentPath
      })
    })
    
    return breadcrumbs
  }
  
  /**
   * Formatea un segmento de URL a texto legible
   * Ejemplo: "biologia-molecular" -> "Biología Molecular"
   */
  const formatSegment = (segment: string): string => {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  
  /**
   * Breadcrumbs personalizados + automáticos
   */
  const getBreadcrumbs = (customBreadcrumbs?: BreadcrumbItem[]): BreadcrumbItem[] => {
    if (customBreadcrumbs && customBreadcrumbs.length > 0) {
      return customBreadcrumbs
    }
    return generateBreadcrumbs()
  }
  
  return {
    generateBreadcrumbs,
    getBreadcrumbs,
  }
}