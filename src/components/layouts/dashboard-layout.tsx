import * as React from 'react';
import { Link, useNavigate } from 'react-router';
import { paths } from '@/config/paths';
import { useLogout } from '@/lib/auth';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const logout = useLogout();

  const handleLogout = async () => {
    await logout.mutateAsync({});
    navigate(paths.home.getHref());
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link
                  to={paths.app.dashboard.getHref()}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Bulletproof React
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link
                  to={paths.app.dashboard.getHref()}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to={paths.app.discussions.getHref()}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Discussions
                </Link>
                <Link
                  to={paths.app.users.getHref()}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Users
                </Link>
                <Link
                  to={paths.app.profile.getHref()}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  Profile
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleLogout}
                disabled={logout.isPending}
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-white dark:ring-gray-600 dark:hover:bg-gray-600"
              >
                {logout.isPending ? 'Signing out...' : 'Sign out'}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};
