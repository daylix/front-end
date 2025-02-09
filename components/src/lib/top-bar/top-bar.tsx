import { Alert, UILink } from '@daylix-ui/components';
import { RocketIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function TopBar () {
  const t = useTranslations('topBar');

  return (
    <Alert
      className="mt-4 md:mt-4 p-2 md:p-4"
      icon={<RocketIcon size={18} className="hidden md:block" />}>
      <div>
        <h2 className="text-sm md:text-lg font-bold">{t('title')}</h2>
        <span className="text-xs md:text-sm">
      {t('description')}{' '}
          <Link href="https://github.com/daylix" legacyBehavior>
        <UILink hover={false} className="text-xs md:text-sm">{t('linkText')}</UILink>
      </Link>
    </span>
      </div>
    </Alert>
  );
}
