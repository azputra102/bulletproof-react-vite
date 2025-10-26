import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo';

export default function DiscussionsPage() {
  return (
    <>
      <Head
        title="Discussions"
        description="Manage and participate in discussions"
      />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Discussions
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage and participate in discussions
            </p>
          </div>
          <Button>
            Create Discussion
          </Button>
        </div>

        <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              No discussions yet
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              <p>
                Get started by creating your first discussion. You can share ideas, ask questions, and collaborate with others.
              </p>
            </div>
            <div className="mt-5">
              <Button>
                Create your first discussion
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
