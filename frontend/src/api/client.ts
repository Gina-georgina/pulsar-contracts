import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const MAX_RETRIES = 2;

function createClient(): AxiosInstance {
  const client = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api',
    timeout: 10_000,
  });

  client.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  client.interceptors.response.use(
    (res) => res,
    async (error) => {
      const config = error.config as AxiosRequestConfig & { _retries?: number };
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
      }
      if (!error.response && (config._retries ?? 0) < MAX_RETRIES) {
        config._retries = (config._retries ?? 0) + 1;
        if (import.meta.env.DEV) console.warn(`Retrying request (${config._retries})`, config.url);
        return client(config);
      }
      if (import.meta.env.DEV) console.error('API error', error.response?.status, error.config?.url);
      return Promise.reject(error);
    }
  );

  return client;
}

export const apiClient = createClient();
