import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import '../global.css'
import Header from '@daylix/header';
import { TopBar } from '@daylix/components';

export const metadata = {
  title: 'daylix.pro - платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
  description: 'Платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
};

export const revalidate = 60;

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  <body className="bg-base-300" suppressHydrationWarning></body>
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-base-300" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="container mx-auto w-full">
            <TopBar />
          </div>
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
