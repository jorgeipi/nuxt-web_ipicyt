import { useSidebarMenu } from "@composables/layout/useSidebarMenu"
import { useBreadcrumbs } from "@composables/layout/useBreadcrumbs"

export interface BannerConfig {
  show: boolean
  image?: string
  height?: string
  minHeight?: string
  variant?: 'default' | 'centered' | 'left' | 'right' | 'full'
  overlay?: boolean | 'light' | 'dark' | 'gradient'
  backgroundColor?: string
  // Ya no necesitamos overlay.title y overlay.subtitle
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
  showMenu: boolean
  menuItems?: MenuItem[]
  breadcrumbs?: BreadcrumbItem[] | 'auto'
}


export const usePageConfig = () => {
  const pageConfig = useState<PageConfig>('pageConfig', () => ({
    showBanner: false,
    showMenu: false,
    breadcrumbs: 'auto',
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
    // const { shouldShowMenu: autoShouldShow } = useSidebarMenu()
    
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