import api from "@shared/services/api";

const apiPath = import.meta.env.VITE_API_PATH;
const resource = `${apiPath}/personal`;

export const getPersonal = (options = {}) =>
    api.get(`${resource}`, {
        params: {
            queries: options.queries ? JSON.stringify(options.queries) : '[]'
        },
        signal: options.signal
    });

export const getPersonalContacto = (options = {}) =>
    api.get(`${resource}/contacto`, options);

export const getPersonalResumen = (options = {}) =>
    api.get(`${resource}/resumen`, options);
