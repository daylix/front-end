import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '../../i18n/routing';
import '../global.css'
import Header from '@daylix/header';

export const metadata = {
  title: 'daylix.pro - платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
  description: 'Платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body className="bg-base-300">
      <NextIntlClientProvider messages={messages}>
        <Header />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </NextIntlClientProvider>
    </body>
    </html>
  );
}
