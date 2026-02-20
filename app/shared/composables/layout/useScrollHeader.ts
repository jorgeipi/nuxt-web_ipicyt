// composables/useScrollHeader.ts
export const useScrollHeader = () => {
  const isHeaderSuperiorVisible = ref(true)
  const isHeaderInferiorSticky = ref(false)
  const isBreadcrumbSticky = ref(false)
  const scrollY = ref(0)
  
  // Alturas de los componentes
  const headerSuperiorHeight = ref(40) // Ajustar según tu diseño
  const headerInferiorHeight = ref(70)
  const breadcrumbHeight = ref(40)
  
  // Altura total del header sticky (header inferior + breadcrumb)
  const stickyHeaderHeight = computed(() => {
    return headerInferiorHeight.value + breadcrumbHeight.value
  })

  const handleScroll = () => {
    if (!process.client) return
    
    scrollY.value = window.scrollY
    
    // Umbral para ocultar header superior
    const hideThreshold = headerSuperiorHeight.value
    
    // Ocultar header superior después del umbral
    isHeaderSuperiorVisible.value = scrollY.value < hideThreshold
    
    // Header inferior y breadcrumb se vuelven sticky después de que el superior desaparece
    isHeaderInferiorSticky.value = scrollY.value >= hideThreshold
    isBreadcrumbSticky.value = scrollY.value >= hideThreshold
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isHeaderSuperiorVisible,
    isHeaderInferiorSticky,
    isBreadcrumbSticky,
    scrollY,
    stickyHeaderHeight,
    headerInferiorHeight,
    breadcrumbHeight,
  }
}