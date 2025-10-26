# Bulletproof React Vite 🛡️ ⚛️

A simple, scalable, and powerful architecture for building production ready React applications with Vite.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with concurrent features
- 🔷 **TypeScript** - Type safety out of the box
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧭 **React Router** - Declarative routing
- 🔄 **React Query** - Powerful data synchronization
- 🏪 **Zustand** - Simple state management
- 🧪 **Vitest** - Fast unit testing
- 📚 **Storybook** - Component development
- 🔒 **Authentication** - Built-in auth system
- 🎯 **Error Boundaries** - Graceful error handling
- 📱 **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bulletproof-react-vite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the mock API server (Terminal 1):
```bash
npm run run-mock-server
# or
yarn run-mock-server
# or
pnpm run-mock-server
```

4. Start the development server (Terminal 2):
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:9999](http://localhost:9999) in your browser.

**Login Credentials:**
- Email: `test@example.com`
- Password: `password`

## Project Structure

```
src/
├── app/                    # Application layer
│   ├── routes/            # Route components
│   │   ├── app/          # Protected app routes
│   │   │   ├── dashboard.tsx
│   │   │   ├── profile.tsx
│   │   │   ├── users.tsx
│   │   │   └── discussions/
│   │   ├── auth/         # Auth routes (login, register)
│   │   ├── landing.tsx
│   │   └── not-found.tsx
│   ├── provider.tsx       # App providers
│   ├── router.tsx         # Router configuration
│   └── router-utils.ts    # Router utilities
├── components/            # Shared components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   │   ├── button/       # Button component
│   │   ├── input/        # Input component
│   │   ├── label/        # Label component
│   │   ├── card/         # Card component
│   │   ├── badge/        # Badge component
│   │   ├── dialog/       # Dialog component
│   │   ├── switch/       # Switch component
│   │   ├── spinner/      # Spinner component
│   │   └── notifications/ # Toast notifications
│   ├── layouts/          # Layout components
│   ├── errors/           # Error components
│   └── seo/              # SEO components (Head)
├── features/             # Feature-based modules
│   ├── auth/            # Authentication feature
│   │   ├── api/         # Auth API calls
│   │   ├── components/  # Auth components
│   │   └── hooks/       # Auth hooks
│   ├── discussions/     # Discussions feature
│   │   ├── api/         # Discussions API calls
│   │   ├── components/  # Discussion components
│   │   └── hooks/       # Discussion hooks
│   ├── users/           # Users feature
│   │   ├── api/         # Users API calls
│   │   ├── components/  # User components
│   │   └── hooks/       # User hooks
│   ├── comments/        # Comments feature (stub)
│   └── teams/           # Teams feature (stub)
├── lib/                 # Reusable libraries
│   ├── api-client.ts    # Axios client configuration
│   ├── auth.tsx         # Authentication logic (react-query-auth)
│   ├── protected-route.tsx # Protected route wrapper
│   └── react-query.ts   # React Query configuration
├── config/              # Configuration files
│   ├── env.ts           # Environment variables
│   └── paths.ts         # Route paths configuration
├── hooks/               # Custom hooks
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
│   ├── cn.ts            # Class name utility (clsx + tailwind-merge)
│   └── format.ts        # Formatting utilities
└── testing/             # Test utilities and mocks
    ├── mocks/           # MSW mock handlers
    │   └── handlers/    # API mock handlers
    ├── test-utils.tsx   # Testing utilities
    └── setup-tests.ts   # Test setup
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run check-types` - Run TypeScript type checking
- `npm run storybook` - Start Storybook
- `npm run build-storybook` - Build Storybook

## Architecture Principles

This project follows the Bulletproof React architecture principles:

1. **Feature-based organization** - Code is organized by features, not by file types
2. **Unidirectional data flow** - Data flows in one direction through the application
3. **Separation of concerns** - Clear boundaries between different parts of the application
4. **Type safety** - Full TypeScript support with strict configuration
5. **Error handling** - Comprehensive error boundaries and error handling
6. **Testing** - Unit tests, integration tests, and E2E tests
7. **Performance** - Optimized for performance with code splitting and lazy loading

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Bulletproof React](https://github.com/alan2207/bulletproof-react) - Original architecture inspiration
- [Vite](https://vitejs.dev/) - Build tool
- [React](https://reactjs.org/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
