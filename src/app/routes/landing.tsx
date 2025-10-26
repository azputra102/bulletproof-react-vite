import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { Head } from '@/components/seo';
import { paths } from '@/config/paths';

export default function LandingPage() {
  return (
    <>
      <Head
        title="Bulletproof React Vite"
        description="A simple, scalable, and powerful architecture for building production ready React applications."
        keywords="react, vite, typescript, tailwindcss, bulletproof"
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Bulletproof React Vite
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A simple, scalable, and powerful architecture for building production ready React applications.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to={paths.auth.login.getHref()}>
                <Button size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to={paths.auth.register.getHref()}>
                <Button variant="outline" size="lg">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
