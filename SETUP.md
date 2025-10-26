# 🚀 Setup Guide - Bulletproof React Vite

## Prerequisites

- Node.js 18+
- npm/yarn/pnpm

## Installation

```bash
# Install dependencies
npm install
```

## Running the Application

### 1. Start Mock API Server (Terminal 1)

```bash
npm run run-mock-server
```

Server will run at: `http://localhost:3001`

### 2. Start Development Server (Terminal 2)

```bash
npm run dev
```

Application will run at: `http://localhost:9999`

## 🔐 Authentication

### Mock User Credentials

**Email:** `test@example.com`  
**Password:** `password`

### Login Flow

1. Open `http://localhost:9999`
2. Click "Get Started" or navigate to `http://localhost:9999/auth/login`
3. Login with the credentials above
4. After login, you will be redirected to `/app/dashboard`

### Protected Routes

All routes under `/app/*` are protected:
- `/app/dashboard` - Dashboard
- `/app/discussions` - Discussions
- `/app/users` - Users  
- `/app/profile` - Profile

If not logged in, you will be automatically redirected to `/auth/login`

## 🧪 Testing

### Manual Testing

**Test 1: Protected Routes**
```
1. Open http://localhost:9999/app/dashboard (without logging in)
   → Should redirect to /auth/login
```

**Test 2: Login**
```
1. Open http://localhost:9999/auth/login
2. Login with: test@example.com / password
   → Should redirect to /app/dashboard
   → localStorage "is-logged-in" should be set
```

**Test 3: Logout**
```
1. Login first
2. Click "Sign out" button
   → localStorage cleared
   → Redirect to home
   → Cannot access /app/* without login
```

### Check Auth State

Open Browser DevTools → Application → Local Storage → `http://localhost:9999`

Should see: `is-logged-in = true`

## 📁 Project Structure

```
bulletproof-react-vite/
├── src/
│   ├── app/                 # Application layer
│   │   ├── routes/         # Route components
│   │   ├── provider.tsx    # App providers with AuthLoader
│   │   └── router.tsx      # Router with ProtectedRoute
│   ├── components/         # Shared components
│   │   ├── ui/            # UI components
│   │   └── layouts/       # Layouts (with logout)
│   ├── features/          # Feature modules
│   ├── lib/               # Libraries
│   │   ├── api-client.ts  # Axios with CORS support
│   │   ├── auth.tsx       # Auth hooks (localStorage-based)
│   │   └── protected-route.tsx  # Route protection
│   └── config/            # Configuration
├── mock-server.ts         # Mock API server
└── package.json
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server (port 9999)
npm run run-mock-server  # Start mock API (port 3001)

# Build
npm run build           # Build for production
npm run preview         # Preview production build

# Quality
npm run lint            # Run ESLint
npm run check-types     # TypeScript type checking
npm run test            # Run tests (Vitest)
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage

# Component Development
npm run storybook       # Start Storybook
npm run build-storybook # Build Storybook

# Code Generation
npm run generate        # Generate component with Plop
```

## 🎯 Key Features

✅ **Authentication**
- localStorage-based auth
- Protected routes
- Auto-redirect on 401
- Logout functionality

✅ **Error Handling**
- Error boundaries
- API error notifications
- Network error handling

✅ **Developer Experience**
- Hot Module Replacement (HMR)
- TypeScript strict mode
- ESLint + Prettier
- Path aliases (@/*)

✅ **Testing**
- Vitest for unit tests
- Testing Library for component tests
- MSW for API mocking
- Playwright for E2E tests

✅ **Component Development**
- Storybook integration
- Component documentation
- Interactive component playground

✅ **Production Ready**
- Code splitting
- Lazy loading
- Optimized builds
- Clean architecture

## 🐛 Troubleshooting

### "Network Error" on API calls

**Problem:** Mock server is not running

**Solution:**
```bash
# Make sure mock server is running
npm run run-mock-server

# Check if server is up
curl http://localhost:3001/auth/me
```

### Cannot access /app/* routes

**Problem:** Not logged in

**Solution:**
1. Login with `test@example.com / password`
2. Check localStorage in DevTools
3. Refresh page

### Port already in use

**Problem:** Port 9999 or 3001 is already in use

**Solution:**
```bash
# Kill process on port
lsof -ti:9999 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Blank white screen

**Problem:** React error or authentication issue

**Solution:**
1. Open DevTools (F12) and check Console for errors
2. Clear localStorage and refresh
3. Check network tab for failed requests
4. Restart dev server: `npm run dev`

### MSW conflicts with mock server

**Problem:** Both MSW and mock server trying to handle requests

**Solution:**
- MSW is disabled by default in this project
- Use the mock server instead (running on port 3001)
- MSW is only used for unit tests

## 📚 Learn More

- [Bulletproof React](https://github.com/alan2207/bulletproof-react)
- [Vite Documentation](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Run tests & lint
5. Submit PR

## 📄 License

MIT License
