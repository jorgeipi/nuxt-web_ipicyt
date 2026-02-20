// composables/useScreenResponsive.ts
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface Breakpoints {
  mobilexs: number
  mobile: number
  tablet: number
  desktop: number
  desktopXL: number
}

export function useScreenResponsive() {
  const breakpoints: Breakpoints = {
    mobilexs: 368,
    mobile: 480,
    tablet: 768,
    desktop: 992,
    desktopXL: 1200
  }

  // ✅ Valor inicial seguro para SSR
  const screenWidth = ref<number>(import.meta.client ? window.innerWidth : 0)

  function handleResize(): void {
    screenWidth.value = window.innerWidth
  }

  onMounted(() => {
    screenWidth.value = window.innerWidth // ✅ Sincroniza al montar
    window.addEventListener('resize', handleResize)
  })

  onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

  const isMobileXs = computed<boolean>(() => screenWidth.value <= breakpoints.mobilexs)
  const isMobile = computed<boolean>(() => screenWidth.value <= breakpoints.mobile)
  const isTablet = computed<boolean>(() => screenWidth.value <= breakpoints.tablet)
  const isDesktop = computed<boolean>(() => screenWidth.value <= breakpoints.desktop)
  const isDesktopXL = computed<boolean>(() => screenWidth.value > breakpoints.desktop)
  const isDesktopXL_ = computed<boolean>(() => screenWidth.value > breakpoints.desktopXL)

  const bp = computed<Breakpoint>(() => {
    const w = screenWidth.value
    if (w <= breakpoints.mobilexs) return 'xs'
    if (w <= breakpoints.mobile) return 'sm'
    if (w <= breakpoints.tablet) return 'md'
    if (w <= breakpoints.desktop) return 'lg'
    return 'xl'
  })

  return {
    screenWidth,
    isMobileXs,
    isMobile,
    isTablet,
    isDesktop,
    isDesktopXL,
    isDesktopXL_,
    bp
  }
}