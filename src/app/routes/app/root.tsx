import { Outlet } from 'react-router';
import { DashboardLayout } from '@/components/layouts';

export default function AppRoot() {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
}

export function ErrorBoundary() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Something went wrong
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
