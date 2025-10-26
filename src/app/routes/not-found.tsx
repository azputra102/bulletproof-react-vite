import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo';
import { paths } from '@/config/paths';

export default function NotFoundPage() {
  return (
    <>
      <Head
        title="Page Not Found"
        description="The page you're looking for doesn't exist."
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-600">404</h1>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
          <Link to={paths.home.getHref()}>
            <Button>
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
