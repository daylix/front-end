'use client';

import { Button, Navbar } from '@daylix-ui/components';
import { useTranslations } from 'next-intl';
import { Sidebar, LocalSwitcher } from '@daylix/components';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export function Header() {
  const t = useTranslations('homePage.navBar');
  const params = useParams();
  const locale = params?.locale as string || 'uk';

  return (
    <div className="bg-base-100">
      <Navbar className="max-w-7xl mx-auto">
        <Navbar.Start>
          <Sidebar />
          <Link href={`/${locale}`}>
            <Image
              className="w-auto"
              src="/daylix_logo.svg"
              alt="daylix.pro logo"
              width={150}
              height={40}
              priority
              unoptimized
            />
          </Link>
        </Navbar.Start>
        <Navbar.End>
          <div className="flex gap-4">
            <Button color="primary">
              <span>{t('login.title')}</span>
            </Button>
            <LocalSwitcher />
          </div>
        </Navbar.End>
      </Navbar>
    </div>
  );
}

export default Header;
