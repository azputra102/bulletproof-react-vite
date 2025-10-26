import { apiClient } from '@/lib/api-client';

export interface Discussion {
  id: string;
  title: string;
  content: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  tags: string[];
  likes: number;
  comments: number;
  isLiked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DiscussionsResponse {
  discussions: Discussion[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface DiscussionsQuery {
  page?: number;
  limit?: number;
  search?: string;
  tag?: string;
}

export interface CreateDiscussionData {
  title: string;
  content: string;
  tags: string[];
}

export const discussionsApi = {
  getDiscussions: async (query: DiscussionsQuery = {}): Promise<DiscussionsResponse> => {
    const params = new URLSearchParams();
    
    if (query.page) params.append('page', query.page.toString());
    if (query.limit) params.append('limit', query.limit.toString());
    if (query.search) params.append('search', query.search);
    if (query.tag) params.append('tag', query.tag);
    
    return apiClient.get(`/discussions?${params.toString()}`);
  },

  getDiscussion: async (id: string): Promise<Discussion> => {
    return apiClient.get(`/discussions/${id}`);
  },

  createDiscussion: async (data: CreateDiscussionData): Promise<Discussion> => {
    return apiClient.post('/discussions', data);
  },

  updateDiscussion: async (id: string, data: Partial<CreateDiscussionData>): Promise<Discussion> => {
    return apiClient.patch(`/discussions/${id}`, data);
  },

  deleteDiscussion: async (id: string): Promise<void> => {
    return apiClient.delete(`/discussions/${id}`);
  },

  likeDiscussion: async (id: string): Promise<{ likes: number; isLiked: boolean }> => {
    return apiClient.post(`/discussions/${id}/like`);
  },

  unlikeDiscussion: async (id: string): Promise<{ likes: number; isLiked: boolean }> => {
    return apiClient.delete(`/discussions/${id}/like`);
  },
};
