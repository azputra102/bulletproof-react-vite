import { apiClient } from '@/lib/api-client';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt: string;
}

export interface UsersResponse {
  users: User[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface UsersQuery {
  page?: number;
  limit?: number;
  search?: string;
}

export const usersApi = {
  getUsers: async (query: UsersQuery = {}): Promise<UsersResponse> => {
    const params = new URLSearchParams();
    
    if (query.page) params.append('page', query.page.toString());
    if (query.limit) params.append('limit', query.limit.toString());
    if (query.search) params.append('search', query.search);
    
    return apiClient.get(`/users?${params.toString()}`);
  },

  getUser: async (id: string): Promise<User> => {
    return apiClient.get(`/users/${id}`);
  },

  updateUser: async (id: string, data: Partial<User>): Promise<User> => {
    return apiClient.patch(`/users/${id}`, data);
  },

  deleteUser: async (id: string): Promise<void> => {
    return apiClient.delete(`/users/${id}`);
  },
};
