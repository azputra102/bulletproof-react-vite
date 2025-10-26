import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo';
import { paths } from '@/config/paths';

export default function DashboardPage() {
  return (
    <>
      <Head
        title="Dashboard"
        description="Welcome to your Bulletproof React Vite application!"
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Welcome to your Bulletproof React Vite application!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-md bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">D</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Discussions
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      Manage discussions
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
              <div className="text-sm">
                <Link to={paths.app.discussions.getHref()}>
                  <Button variant="outline" size="sm">
                    View discussions
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-md bg-green-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">U</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Users
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      Manage users
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
              <div className="text-sm">
                <Link to={paths.app.users.getHref()}>
                  <Button variant="outline" size="sm">
                    View users
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-md bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">P</span>
                  </div>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                      Profile
                    </dt>
                    <dd className="text-lg font-medium text-gray-900 dark:text-white">
                      Manage profile
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3 dark:bg-gray-700">
              <div className="text-sm">
                <Link to={paths.app.profile.getHref()}>
                  <Button variant="outline" size="sm">
                    View profile
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
