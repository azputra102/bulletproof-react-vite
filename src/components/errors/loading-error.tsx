import * as React from 'react';
import { Spinner } from '@/components/ui/spinner';

interface LoadingErrorProps {
  isLoading?: boolean;
  error?: Error | null;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const LoadingError: React.FC<LoadingErrorProps> = ({
  isLoading,
  error,
  children,
  fallback,
}) => {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      fallback || (
        <div className="flex min-h-[200px] flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Error Loading Content
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {error.message || 'An unexpected error occurred.'}
            </p>
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
};
