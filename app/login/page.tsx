import { Metadata } from 'next';
import Link from 'next/link';
import { AuthForm } from '@/components/auth/auth-form';

export const metadata: Metadata = {
  title: 'Login - Portfolio Builder',
  description: 'Login to your portfolio account',
};

/**
 * Login page component
 * Displays auth form for user login
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm view="sign-in" />
        </div>
      </div>
    </div>
  );
} 