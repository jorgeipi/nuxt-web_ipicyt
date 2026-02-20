import { useSidebarMenu } from "./useSidebarMenu"
import { useBreadcrumbs } from "./useBreadcrumbs"

export interface BannerConfig {
  image?: string
  height?: string
  overlay?: {
    title?: string
    subtitle?: string
    image?: string
    position?: 'left' | 'center' | 'right'
  }
}

export interface MenuItem {
  label: string
  to: string
  children?: MenuItem[]
  order?: number
}

export interface BreadcrumbItem {
  label: string
  to?: string
}

export interface PageConfig {
  showBanner: boolean
  banner?: BannerConfig
  showMenu: boolean | 'auto' // 'auto' detecta automáticamente
  menuItems?: MenuItem[] // Items personalizados (se combinan con los auto-generados)
  breadcrumbs?: BreadcrumbItem[] | 'auto' // 'auto' genera automáticamente
}

export const usePageConfig = () => {
  const pageConfig = useState<PageConfig>('pageConfig', () => ({
    showBanner: false,
    showMenu: 'auto', // Por defecto, auto-detectar
    breadcrumbs: 'auto', // Por defecto, auto-generar
  }))

  const setPageConfig = (config: Partial<PageConfig>) => {
    pageConfig.value = { ...pageConfig.value, ...config }
  }
  
  /**
   * Obtiene breadcrumbs (auto o personalizados)
   */
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const { getBreadcrumbs: getAutoBreadcrumbs } = useBreadcrumbs()
    
    if (pageConfig.value.breadcrumbs === 'auto') {
      return getAutoBreadcrumbs()
    }
    
    if (Array.isArray(pageConfig.value.breadcrumbs)) {
      return pageConfig.value.breadcrumbs
    }
    
    return []
  }
  
  /**
   * Obtiene items del menú (auto o personalizados)
   */
  const getMenuItems = (): MenuItem[] => {
    const { getMenuItems: getAutoMenuItems } = useSidebarMenu()
    
    return getAutoMenuItems(pageConfig.value.menuItems)
  }
  
  /**
   * Determina si mostrar el menú
   */
  const shouldShowMenu = (): boolean => {
    const { shouldShowMenu: autoShouldShow } = useSidebarMenu()
    
    if (pageConfig.value.showMenu === 'auto') {
      return autoShouldShow()
    }
    
    return pageConfig.value.showMenu === true
  }

  return {
    pageConfig: readonly(pageConfig),
    setPageConfig,
    getBreadcrumbs,
    getMenuItems,
    shouldShowMenu,
  }
}