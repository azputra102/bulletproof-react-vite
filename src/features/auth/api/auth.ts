import { apiClient } from '@/lib/api-client';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  name: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiClient.post('/auth/login', credentials);
  },

  register: async (data: RegisterCredentials): Promise<AuthResponse> => {
    return apiClient.post('/auth/register', data);
  },

  logout: async (): Promise<void> => {
    return apiClient.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<User> => {
    return apiClient.get('/auth/me');
  },

  refreshToken: async (): Promise<AuthResponse> => {
    return apiClient.post('/auth/refresh');
  },

  forgotPassword: async (email: string): Promise<void> => {
    return apiClient.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token: string, password: string): Promise<void> => {
    return apiClient.post('/auth/reset-password', { token, password });
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    return apiClient.patch('/auth/profile', data);
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<void> => {
    return apiClient.patch('/auth/change-password', {
      currentPassword,
      newPassword,
    });
  },
};
