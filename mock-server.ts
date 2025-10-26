import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3001;

// CORS configuration to allow credentials
app.use(cors({
  origin: 'http://localhost:9999',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

// Mock data
const users = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'jane@example.com',
    name: 'Jane Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const discussions = [
  {
    id: '1',
    title: 'Welcome to Bulletproof React Vite!',
    body: 'This is a sample discussion to demonstrate the application structure.',
    authorId: '1',
    author: users[0],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Auth endpoints
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'test@example.com' && password === 'password') {
    const user = users[0];
    
    // Set cookie for authentication
    res.cookie('auth-token', 'mock-jwt-token', {
      httpOnly: true,
      secure: false, // set true in production with HTTPS
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });
    
    res.json({ user });
  } else {
    res.status(401).json({
      message: 'Invalid credentials',
    });
  }
});

app.post('/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  
  const newUser = {
    id: (users.length + 1).toString(),
    email,
    name,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  users.push(newUser);
  
  // Set cookie for authentication
  res.cookie('auth-token', 'mock-jwt-token', {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000,
  });
  
  res.json({ user: newUser });
});

app.get('/auth/me', (req, res) => {
  const token = req.cookies['auth-token'];
  
  if (token === 'mock-jwt-token') {
    res.json(users[0]);
  } else {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
});

app.post('/auth/logout', (req, res) => {
  res.clearCookie('auth-token');
  res.json({ message: 'Logged out successfully' });
});

// Discussions endpoints
app.get('/discussions', (req, res) => {
  res.json(discussions);
});

app.get('/discussions/:id', (req, res) => {
  const discussion = discussions.find(d => d.id === req.params.id);
  
  if (discussion) {
    res.json(discussion);
  } else {
    res.status(404).json({
      message: 'Discussion not found',
    });
  }
});

app.post('/discussions', (req, res) => {
  const { title, body } = req.body;
  
  const newDiscussion = {
    id: (discussions.length + 1).toString(),
    title,
    body,
    authorId: '1',
    author: users[0],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  discussions.push(newDiscussion);
  
  res.json(newDiscussion);
});

// Users endpoints
app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}`);
});
