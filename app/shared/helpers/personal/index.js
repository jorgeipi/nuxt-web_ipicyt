export const personalSinError = (personal) => {
    if (!personal || typeof personal !== 'object') return {};
    
    // Si es un array, filtrar directamente
    if (Array.isArray(personal)) {
        return personal.filter(persona => !persona?.error);
    }
    
    // Si es un objeto, mantener la lógica actual
    return Object.fromEntries(
        Object.entries(personal).filter(([_, value]) => !value?.error)
    );
};
