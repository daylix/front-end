'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@daylix/auth';

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

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      if (onLogout) {
        onLogout();
      }

      await logout();
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
