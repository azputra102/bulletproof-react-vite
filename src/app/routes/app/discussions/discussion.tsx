import { useParams } from 'react-router';
import { Head } from '@/components/seo';

export default function DiscussionPage() {
  const { discussionId } = useParams();

  return (
    <>
      <Head
        title={`Discussion ${discussionId}`}
        description="Discussion details and comments"
      />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Discussion {discussionId}
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Discussion details and comments
          </p>
        </div>

        <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Discussion Content
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500 dark:text-gray-400">
              <p>
                This is where the discussion content would be displayed.
                Discussion ID: {discussionId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
