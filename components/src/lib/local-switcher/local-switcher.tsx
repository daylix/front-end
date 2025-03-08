'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Dropdown } from '@daylix-ui/components';
import { Globe } from 'lucide-react';
import { useTransition } from 'react';
import { useLocale } from 'next-intl';

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const currentPath = pathname.split('/').slice(2).join('/');
      const newPath = currentPath ? `/${nextLocale}/${currentPath}` : `/${nextLocale}`;
      router.replace(newPath);
    });
  };

  return (
    <Dropdown end={true}>
      <Dropdown.Toggle className="btn btn-ghost rounded-btn" button={false}>
        <Globe size={28} strokeWidth={1.25} />
        <span className="ml-2 hidden md:inline">{localActive === 'uk' ? 'UA' : 'RU'}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="mt-4">
        <Dropdown.Item onClick={() => onSelectChange('uk')}>
          Українська
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectChange('ru')}>
          Русский
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LocalSwitcher;
