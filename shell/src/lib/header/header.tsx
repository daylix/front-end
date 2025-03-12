'use client';

import { Navbar } from '@daylix-ui/components';
import { Sidebar, LocalSwitcher, AuthButton } from '@daylix/components';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export const Header = () => {
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
            <AuthButton />
            <LocalSwitcher />
          </div>
        </Navbar.End>
      </Navbar>
    </div>
  );
}

export default Header;
