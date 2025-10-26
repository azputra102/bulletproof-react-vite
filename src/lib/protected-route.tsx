import * as React from 'react';
import { Navigate, useLocation } from 'react-router';
import { paths } from '@/config/paths';
import { useUser } from './auth';

export const ProtectedRoute = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = useUser();
  const location = useLocation();

  // Show loading while checking authentication
  if (user.isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // If user is not authenticated and not on login page, redirect to login
  if (!user.data && !location.pathname.includes('/auth/login')) {
    return (
      <Navigate 
        to={paths.auth.login.getHref(location.pathname)} 
        replace 
      />
    );
  }

  // If user is not authenticated and on login page, show login form
  if (!user.data && location.pathname.includes('/auth/login')) {
    return <>{children}</>;
  }

  // If user is authenticated, show protected content
  if (user.data) {
    return <>{children}</>;
  }

  // Fallback
  return <>{children}</>;
};
