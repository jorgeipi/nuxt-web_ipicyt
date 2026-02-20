import { menusConfig, type MenuItem, type MenuConfig } from '~/config/menus'

export const useSidebarMenu = () => {
  const route = useRoute()
  
  /**
   * Obtiene el grupo/sección actual desde la ruta
   * Ejemplo: /investigacion/divisiones/biologia-molecular -> busca en este orden:
   * 1. investigacion/divisiones/biologia-molecular
   * 2. investigacion/divisiones
   * 3. investigacion
   */
  const getCurrentSection = (): string | null => {
    const pathSegments = route.path.split('/').filter(Boolean)
    
    if (pathSegments.length === 0) return null
    
    // Intentar coincidencias de más específico a más general
    for (let i = pathSegments.length; i > 0; i--) {
      const sectionPath = pathSegments.slice(0, i).join('/')
      if (menusConfig[sectionPath]) {
        return sectionPath
      }
    }
    
    // Si no hay coincidencia exacta, usar el primer segmento
    return pathSegments[0]
  }
  
  /**
   * Obtiene el menú configurado para la sección actual
   */
  const getMenuForCurrentSection = (): MenuConfig | null => {
    const section = getCurrentSection()
    if (!section) return null
    
    return menusConfig[section] || null
  }
  
  /**
   * Combina menú automático con items personalizados
   */
  const getMenuItems = (customItems?: MenuItem[]): MenuItem[] => {
    const sectionMenu = getMenuForCurrentSection()
    
    // Si hay items personalizados Y menú de sección, combinarlos
    if (customItems && sectionMenu) {
      return [...sectionMenu.items, ...customItems].sort((a, b) => {
        return (a.order || 999) - (b.order || 999)
      })
    }
    
    // Si solo hay items personalizados
    if (customItems) {
      return customItems
    }
    
    // Si solo hay menú de sección
    if (sectionMenu) {
      return sectionMenu.items
    }
    
    return []
  }
  
  /**
   * Verifica si el menú debe mostrarse
   */
  const shouldShowMenu = (): boolean => {
    const section = getCurrentSection()
    return section !== null && menusConfig[section] !== undefined
  }
  
  return {
    getCurrentSection,
    getMenuForCurrentSection,
    getMenuItems,
    shouldShowMenu,
  }
}