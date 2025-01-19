'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Dropdown } from '@daylix-ui/components';
import { Globe } from 'lucide-react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
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
