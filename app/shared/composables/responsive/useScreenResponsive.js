// composables/useScreenResponsive.ts
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

export function useScreenResponsive() {
  const breakpoints = {
    mobilexs: 368,
    mobile: 480,
    tablet: 768,
    desktop: 992,
    desktopXL: 1200
  }

  const screenWidth = ref(window.innerWidth)

  function handleResize() {
    screenWidth.value = window.innerWidth
  }

  onMounted(() => window.addEventListener('resize', handleResize))
  onBeforeUnmount(() => window.removeEventListener('resize', handleResize))

  const isMobileXs = computed(() => screenWidth.value <= breakpoints.mobilexs)
  const isMobile = computed(() => screenWidth.value <= breakpoints.mobile)
  const isTablet = computed(() => screenWidth.value <= breakpoints.tablet)
  const isDesktop = computed(() => screenWidth.value <= breakpoints.desktop)
  const isDesktopXL = computed(() => screenWidth.value > breakpoints.desktop)
  const isDesktopXL_ = computed(() => screenWidth.value > breakpoints.desktopXL)

  const bp = computed(() => {
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
    bp // <- importante
  }
}