import { configureAuth } from 'react-query-auth';
import { apiClient } from './api-client';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

const getUser = async () => {
  return await apiClient.get('/auth/me');
};

const logout = async () => {
  return await apiClient.post('/auth/logout');
};

const loginWithEmailAndPassword = async (data: LoginCredentials) => {
  return await apiClient.post('/auth/login', data);
};

const registerWithEmailAndPassword = async (data: RegisterCredentials) => {
  return await apiClient.post('/auth/register', data);
};

const authConfig = {
  userFn: async () => {
    // Check if user is logged in via localStorage
    const isLoggedIn = localStorage.getItem('is-logged-in') === 'true';
    if (!isLoggedIn) {
      return null; // Return null instead of throwing error
    }
    return {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      role: 'user',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    };
  },
  loginFn: async (data: LoginCredentials) => {
    const response = await loginWithEmailAndPassword(data);
    // Store login state in localStorage
    localStorage.setItem('is-logged-in', 'true');
    return response.user;
  },
  registerFn: async (data: RegisterCredentials) => {
    const response = await registerWithEmailAndPassword(data);
    // Store login state in localStorage
    localStorage.setItem('is-logged-in', 'true');
    return response.user;
  },
  logoutFn: async () => {
    localStorage.removeItem('is-logged-in');
    return await logout();
  },
};

export const { useLogin, useRegister, useLogout, useUser, AuthLoader } =
  configureAuth(authConfig);
