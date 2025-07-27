'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/context/auth-context';

interface LogoutButtonProps {
  className?: string;
}

/**
 * LogoutButton component
 * Handles user logout and redirects to login page
 */
export function LogoutButton({ className }: LogoutButtonProps) {
  const router = useRouter();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
    router.refresh();
  };

  return (
    <Button
      variant="ghost"
      onClick={handleLogout}
      className={className}
    >
      Sign Out
    </Button>
  );
} 