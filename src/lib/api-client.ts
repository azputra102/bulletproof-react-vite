import Axios, { InternalAxiosRequestConfig } from 'axios';
import { useNotificationsStore } from '@/components/ui/notifications';
import { env } from '@/config/env';
import { paths } from '@/config/paths';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;
  return config;
}

export const apiClient = Axios.create({
  baseURL: env.VITE_API_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);
apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    useNotificationsStore.getState().addNotification({
      type: 'error',
      title: 'Error',
      message,
    });

    if (error.response?.status === 401) {
      const searchParams = new URLSearchParams(window.location.search);
      const redirectTo =
        searchParams.get('redirectTo') || window.location.pathname;
      
      // Prevent infinite redirect loop
      if (!window.location.pathname.includes('/auth/login')) {
        window.location.href = paths.auth.login.getHref(redirectTo);
      }
    }

    return Promise.reject(error);
  },
);
