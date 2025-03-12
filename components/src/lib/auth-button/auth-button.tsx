'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@daylix-ui/components';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import LogoutButton from '../logout-button/logout-button';
import { isAuthenticated, subscribeToAuthChanges } from '@daylix/utils';

const AuthButton: React.FC = () => {
  const t = useTranslations('homePage.navBar');
  const params = useParams();
  const locale = params?.locale as string || 'uk';

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());

    const unsubscribe = subscribeToAuthChanges((isAuthenticated) => {
      setIsLoggedIn(isAuthenticated);
    });

    const handleStorageChange = () => {
      setIsLoggedIn(isAuthenticated());
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return isLoggedIn ? (
    <LogoutButton onLogout={handleLogout}>
      <Button color="primary">
        <span>{t('logout.title')}</span>
      </Button>
    </LogoutButton>
  ) : (
    <Link href={`/${locale}/login`}>
      <Button color="primary">
        <span>{t('login.title')}</span>
      </Button>
    </Link>
  );
};

export default AuthButton;
