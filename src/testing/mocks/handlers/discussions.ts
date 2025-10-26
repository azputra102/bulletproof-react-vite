import { http, HttpResponse } from 'msw';

export const discussionsHandlers = [
  // Get all discussions
  http.get('/discussions', ({ request }) => {
    const url = new URL(request.url);
    const page = url.searchParams.get('page') || '1';
    const limit = url.searchParams.get('limit') || '10';
    const search = url.searchParams.get('search') || '';

    const mockDiscussions = Array.from({ length: 30 }, (_, i) => ({
      id: String(i + 1),
      title: `Discussion ${i + 1}`,
      content: `This is the content of discussion ${i + 1}. It contains some interesting topics about technology and development.`,
      author: {
        id: String((i % 10) + 1),
        name: `User ${(i % 10) + 1}`,
        avatar: `https://avatars.githubusercontent.com/u/${(i % 10) + 1}?v=4`,
      },
      tags: ['technology', 'development', 'javascript'],
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 50),
      isLiked: Math.random() > 0.5,
      createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
      updatedAt: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
    }));

    const filteredDiscussions = mockDiscussions.filter(discussion =>
      discussion.title.toLowerCase().includes(search.toLowerCase()) ||
      discussion.content.toLowerCase().includes(search.toLowerCase()) ||
      discussion.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
    );

    const startIndex = (Number(page) - 1) * Number(limit);
    const endIndex = startIndex + Number(limit);
    const paginatedDiscussions = filteredDiscussions.slice(startIndex, endIndex);

    return HttpResponse.json({
      discussions: paginatedDiscussions,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total: filteredDiscussions.length,
        totalPages: Math.ceil(filteredDiscussions.length / Number(limit)),
      },
    });
  }),

  // Get discussion by ID
  http.get('/discussions/:id', ({ params }) => {
    const { id } = params;
    
    return HttpResponse.json({
      id: String(id),
      title: `Discussion ${id}`,
      content: `This is the detailed content of discussion ${id}. It contains comprehensive information about the topic being discussed.`,
      author: {
        id: '1',
        name: 'Test User',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      tags: ['technology', 'development', 'javascript'],
      likes: 42,
      comments: 15,
      isLiked: false,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    });
  }),

  // Create discussion
  http.post('/discussions', async ({ request }) => {
    const data = await request.json();
    
    return HttpResponse.json({
      id: '999',
      title: (data as any).title,
      content: (data as any).content,
      author: {
        id: '1',
        name: 'Test User',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      tags: (data as any).tags || [],
      likes: 0,
      comments: 0,
      isLiked: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }),

  // Update discussion
  http.patch('/discussions/:id', async ({ params, request }) => {
    const { id } = params;
    const data = await request.json();
    
    return HttpResponse.json({
      id: String(id),
      title: (data as any).title || `Discussion ${id}`,
      content: (data as any).content || `Updated content for discussion ${id}`,
      author: {
        id: '1',
        name: 'Test User',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      tags: (data as any).tags || ['technology', 'development'],
      likes: 42,
      comments: 15,
      isLiked: false,
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: new Date().toISOString(),
    });
  }),

  // Delete discussion
  http.delete('/discussions/:id', ({ params }) => {
    const { id } = params;
    
    return HttpResponse.json({
      message: `Discussion ${id} deleted successfully`,
    });
  }),

  // Like/Unlike discussion
  http.post('/discussions/:id/like', ({ params }) => {
    const { id } = params;
    
    return HttpResponse.json({
      id: String(id),
      likes: 43,
      isLiked: true,
    });
  }),

  http.delete('/discussions/:id/like', ({ params }) => {
    const { id } = params;
    
    return HttpResponse.json({
      id: String(id),
      likes: 42,
      isLiked: false,
    });
  }),
];
