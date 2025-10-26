import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo';

export default function UsersPage() {
  return (
    <>
      <Head
        title="Users"
        description="Manage application users"
      />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Users
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage application users
            </p>
          </div>
          <Button>
            Add User
          </Button>
        </div>

        <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              User Management
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              <p>
                This is where the user list and management features would be displayed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
