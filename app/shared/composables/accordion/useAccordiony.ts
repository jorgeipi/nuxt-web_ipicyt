import { ref, nextTick } from 'vue'

// Estado global compartido entre todos los acordeones
const activeAccordionId = ref<string | null>(null)

export const useAccordion = () => {
  const toggle = (id: string) => {
    // Si el acordeón ya está abierto, lo cerramos
    // Si está cerrado, lo abrimos (y cerramos cualquier otro)
    activeAccordionId.value = activeAccordionId.value === id ? null : id
  }

  const isOpen = (id: string) => {
    return activeAccordionId.value === id
  }

  const close = () => {
    activeAccordionId.value = null
  }

  // Abrir acordeón específico (sin cerrar si ya está abierto)
  const open = (id: string) => {
    activeAccordionId.value = id
  }

  // Hacer scroll a un elemento específico
  const scrollToElement = async (id: string, options?: ScrollIntoViewOptions) => {
    // Esperar a que el DOM se actualice
    await nextTick()
    
    // Delay adicional para que termine la animación de apertura
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
    activeAccordionId,
    toggle,
    isOpen,
    close,
    open,
    scrollToElement
  }
}