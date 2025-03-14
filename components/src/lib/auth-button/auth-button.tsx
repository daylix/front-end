'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@daylix-ui/components';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import LogoutButton from '../logout-button/logout-button';
import { useAuth } from '@daylix/auth';

const AuthButton: React.FC = () => {
  const t = useTranslations('homePage.navBar');
  const params = useParams();
  const locale = params?.locale as string || 'uk';
  const { isAuthenticated, logout } = useAuth();

  return isAuthenticated ? (
    <LogoutButton onLogout={logout}>
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
