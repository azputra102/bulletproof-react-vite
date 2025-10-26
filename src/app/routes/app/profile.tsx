import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo';

export default function ProfilePage() {
  return (
    <>
      <Head
        title="Profile"
        description="Manage your account settings and preferences"
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Profile
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Profile Information
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              <p>
                This is where the user profile information and settings would be displayed.
              </p>
            </div>
            <div className="mt-5">
              <Button>
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
