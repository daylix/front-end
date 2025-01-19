'use client';

import { Button, Navbar } from '@daylix-ui/components';
import { useTranslations } from 'next-intl';
import { Pencil } from 'lucide-react';
import LocalSwitcher from '../local-switcher';

export function Header() {
  const t = useTranslations('homePage.navBar');
  return (
    <Navbar>
      <Navbar.Start className="px-2 lg:flex-none gap-4">
        <Button shape="square" tabIndex={0}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </Button>
        <a href="#">
          <img
            className="w-auto"
            src="/daylix_logo.svg"
            alt="daylix.pro logo" />
        </a>
      </Navbar.Start>
      <Navbar.End>
        <div className="flex gap-4">
          <Button color="ghost" shape="circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Button>
          <Button color="primary">
            <Pencil size={28} strokeWidth={1.25} />
            <span className="ml-2 hidden md:inline">{t('createPost.title')}</span>
          </Button>
          <LocalSwitcher />
        </div>
      </Navbar.End>
    </Navbar>
  );
}

export default Header;
