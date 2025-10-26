import { http, HttpResponse } from 'msw';

export const authHandlers = [
  // Login
  http.post('/auth/login', async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string };
    
    if (email === 'test@example.com' && password === 'password') {
      return HttpResponse.json({
        user: {
          id: '1',
          email: 'test@example.com',
          name: 'Test User',
          avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
          role: 'user',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
        token: 'mock-jwt-token',
      });
    }
    
    return HttpResponse.json(
      { message: 'Invalid credentials' },
      { status: 401 }
    );
  }),

  // Register
  http.post('/auth/register', async ({ request }) => {
    const { email, name } = await request.json() as { 
      email: string; 
      password: string; 
      name: string; 
    };
    
    return HttpResponse.json({
      user: {
        id: '2',
        email,
        name,
        role: 'user',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      token: 'mock-jwt-token',
    });
  }),

  // Get current user
  http.get('/auth/me', () => {
    return HttpResponse.json({
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      role: 'user',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
    });
  }),

  // Logout
  http.post('/auth/logout', () => {
    return HttpResponse.json({ message: 'Logged out successfully' });
  }),

  // Refresh token
  http.post('/auth/refresh', () => {
    return HttpResponse.json({
      user: {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
        role: 'user',
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: '2024-01-01T00:00:00Z',
      },
      token: 'new-mock-jwt-token',
    });
  }),

  // Forgot password
  http.post('/auth/forgot-password', async ({ request }) => {
    const { email } = await request.json() as { email: string };
    
    return HttpResponse.json({
      message: `Password reset link sent to ${email}`,
    });
  }),

  // Reset password
  http.post('/auth/reset-password', async ({ request }) => {
    const { token } = await request.json() as { 
      token: string; 
      password: string; 
    };
    
    if (!token) {
      return HttpResponse.json(
        { message: 'Invalid or expired token' },
        { status: 400 }
      );
    }
    
    return HttpResponse.json({
      message: 'Password reset successfully',
    });
  }),

  // Update profile
  http.patch('/auth/profile', async ({ request }) => {
    const data = await request.json() as Partial<{
      id: string;
      email: string;
      name: string;
      avatar?: string;
      role: string;
      createdAt: string;
      updatedAt: string;
    }>;
    
    return HttpResponse.json({
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      role: 'user',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: new Date().toISOString(),
      ...data,
    });
  }),

  // Change password
  http.patch('/auth/change-password', async ({ request }) => {
    const { currentPassword } = await request.json() as { 
      currentPassword: string; 
      newPassword: string; 
    };
    
    if (currentPassword !== 'password') {
      return HttpResponse.json(
        { message: 'Current password is incorrect' },
        { status: 400 }
      );
    }
    
    return HttpResponse.json({
      message: 'Password changed successfully',
    });
  }),
];
