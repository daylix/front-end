'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { clearAuthData } from '@daylix/utils';

interface LogoutButtonProps {
  children?: React.ReactNode;
  className?: string;
  onLogout?: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({
  children,
  className = '',
  onLogout
}) => {
  const params = useParams();
  const router = useRouter();
  const locale = params?.locale as string || 'uk';

  const handleLogout = async () => {
    try {
      if (onLogout) {
        onLogout();
      }

      clearAuthData();

      // Call the API route to remove the cookie
      await fetch('/api/auth/logout', {
        method: 'POST',
      });

      router.push(`/${locale}/login`);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <div
      onClick={handleLogout}
      className={`cursor-pointer ${className}`}
    >
      {children || 'Вийти'}
    </div>
  );
};

export default LogoutButton;
