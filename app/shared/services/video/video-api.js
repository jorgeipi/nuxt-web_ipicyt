import api from "@shared/services/api";

const apiPath = import.meta.env.VITE_API_PATH;
const resource = apiPath + '/videos';

export const fetchVideoById= (id, options = {}) => 
    api.get(`${resource}/${id}`, options);
