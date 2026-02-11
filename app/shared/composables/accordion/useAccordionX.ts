import { ref } from 'vue'

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

  return {
    activeAccordionId,
    toggle,
    isOpen,
    close
  }
}