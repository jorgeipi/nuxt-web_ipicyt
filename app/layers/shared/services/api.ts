import axios, { type AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
//   timeout: 30_000,
//   withXSRFToken: true,
//   withCredentials: true,
})

export default api