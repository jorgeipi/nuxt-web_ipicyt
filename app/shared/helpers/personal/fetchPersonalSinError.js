export const personalSinError = (personal) => {
    if (!personal || typeof personal !== 'object') return {};
    
    if (Array.isArray(personal)) {
        return personal.filter(persona => !persona?.error);
    }
    
    return Object.fromEntries(
        Object.entries(personal).filter(([_, value]) => !value?.error)
    );
};