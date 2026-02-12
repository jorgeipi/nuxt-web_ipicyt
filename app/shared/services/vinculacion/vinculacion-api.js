import api from "@shared/services/api";

const apiPath = import.meta.env.VITE_API_PATH;
const resource = apiPath + "/vinculacion";

export const fetchPatentes = (options = {}) =>
  api.get(`${resource}/propiedad-intelectual`, options);

export const fetchDireccionVinculacion = (options = {} ) =>
  api.get(`${resource}/direccion-vinculacion`, options);
