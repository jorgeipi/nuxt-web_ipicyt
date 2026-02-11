// composables/accordion/useAccordion.ts
import { ref, nextTick } from 'vue'

// Estado global: Map de grupos, cada grupo tiene su acordeón activo
const accordionGroups = ref<Map<string, string | null>>(new Map())

export const useAccordion = (groupId: string = 'default') => {
  
  // Obtener/inicializar el grupo
  const getActiveId = () => {
    if (!accordionGroups.value.has(groupId)) {
      accordionGroups.value.set(groupId, null)
    }
    return accordionGroups.value.get(groupId)
  }

  const setActiveId = (id: string | null) => {
    accordionGroups.value.set(groupId, id)
  }

  const toggle = (id: string) => {
    const current = getActiveId()
    setActiveId(current === id ? null : id)
  }

  const isOpen = (id: string) => {
    return getActiveId() === id
  }

  const close = () => {
    setActiveId(null)
  }

  const open = (id: string) => {
    setActiveId(id)
  }

  const scrollToElement = async (id: string, options?: ScrollIntoViewOptions) => {
    await nextTick()
    await new Promise(resolve => setTimeout(resolve, 150))
    
    const element = document.getElementById(id)
    if (element) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        ...options
      }
      element.scrollIntoView(scrollOptions)
    }
  }

  return {
    toggle,
    isOpen,
    close,
    open,
    scrollToElement
  }
}