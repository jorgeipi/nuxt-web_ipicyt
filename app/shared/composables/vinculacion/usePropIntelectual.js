import { usePersonales } from '@composables/personal/usePersonales';
import { onMounted, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { usePropIntelectualStore } from '@stores/vinculacion/propIntelectualStore';

export function usePropIntelectual() {
  const propIntelectualStore = usePropIntelectualStore();
  const { propiedadIntelectual , isLoading } = storeToRefs(propIntelectualStore);
  const { handlePropiedadIntelectual } = propIntelectualStore;

  const { personal, personalLoading } = usePersonales([
    { key: 'coordinador', cvepersonal: 1147, cvepuesto: 794 },
  ]);

  onMounted(async () => {
    if (Object.keys(propiedadIntelectual.value).length === 0) {
      await handlePropiedadIntelectual();
    }
  });

  const allLoading = computed(() => isLoading.value || personalLoading.value);
 
  return {
    propiedadIntelectual,
    personal,
    allLoading,
  };
}