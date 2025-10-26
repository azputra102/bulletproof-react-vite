import { Button } from '@/components/ui/button';

interface MainErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export const MainErrorFallback = ({
  error,
  resetErrorBoundary,
}: MainErrorFallbackProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Oops! Something went wrong
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          We&apos;re sorry, but something unexpected happened. Please try again.
        </p>
        {import.meta.env.DEV && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300">
              Error Details (Development)
            </summary>
            <pre className="mt-2 overflow-auto rounded bg-gray-100 p-2 text-xs text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
        <Button onClick={resetErrorBoundary} className="mt-4">
          Try Again
        </Button>
      </div>
    </div>
  );
};
