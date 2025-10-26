import { http, HttpResponse } from 'msw';

export const usersHandlers = [
  // Get all users
  http.get('/users', ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    const limit = url.searchParams.get('limit') || '10';
    const search = url.searchParams.get('search') || '';

    const mockUsers = Array.from({ length: 50 }, (_, i) => ({
      id: String(i + 1),
      email: `user${i + 1}@example.com`,
      name: `User ${i + 1}`,
      avatar: `https://avatars.githubusercontent.com/u/${i + 1}?v=4`,
      role: i < 5 ? 'admin' : 'user',
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      updatedAt: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    }));

    const filteredUsers = mockUsers.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );

    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

    return HttpResponse.json({
      users: paginatedUsers,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: filteredUsers.length,
        totalPages: Math.ceil(filteredUsers.length / Number(limit)),
      },
    });
  }),

  // Get user by ID
  http.get('/users/:id', ({ params }) => {
    const { id } = params;
    
    return HttpResponse.json({
      id: String(id),
      email: `user${id}@example.com`,
      name: `User ${id}`,
      avatar: `https://avatars.githubusercontent.com/u/${id}?v=4`,
      role: Number(id) <= 5 ? 'admin' : 'user',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    });
  }),

  // Update user
  http.patch('/users/:id', async ({ params, request }) => {
    const { id } = params;
    const data = await request.json() as Record<string, unknown>;
    
    return HttpResponse.json({
      id: String(id),
      email: `user${id}@example.com`,
      name: `User ${id}`,
      avatar: `https://avatars.githubusercontent.com/u/${id}?v=4`,
      role: 'user',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: new Date().toISOString(),
      ...data,
    });
  }),

  // Delete user
  http.delete('/users/:id', ({ params }) => {
    const { id } = params;
    
    return HttpResponse.json({
      message: `User ${id} deleted successfully`,
    });
  }),
];
