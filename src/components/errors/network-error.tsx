import * as React from 'react';
import { Button } from '@/components/ui/button';

interface NetworkErrorProps {
  error?: Error;
  onRetry?: () => void;
  onGoHome?: () => void;
}

export const NetworkError: React.FC<NetworkErrorProps> = ({
  error,
  onRetry,
  onGoHome,
}) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Network Error
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {error?.message || 'Something went wrong while connecting to the server.'}
        </p>
      </div>
      
      <div className="flex space-x-4">
        {onRetry && (
          <Button onClick={onRetry} variant="default">
            Try Again
          </Button>
        )}
        {onGoHome && (
          <Button onClick={onGoHome} variant="outline">
            Go Home
          </Button>
        )}
      </div>
    </div>
  );
};
