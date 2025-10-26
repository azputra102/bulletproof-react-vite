export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Discussion {
  id: string;
  title: string;
  body: string;
  authorId: string;
  author: User;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  id: string;
  body: string;
  authorId: string;
  author: User;
  discussionId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Team {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiError {
  message: string;
  statusCode: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
