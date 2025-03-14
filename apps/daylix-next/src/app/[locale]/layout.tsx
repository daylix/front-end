import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import '../global.css'
import { Roboto } from 'next/font/google';
import React from 'react';
import { Header } from '@daylix/shell';
import { TopBar } from '@daylix/components';
import { AuthProvider } from '@daylix/auth';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});

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
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${roboto.variable}`}>
    <body
      className="bg-base-200"
      suppressHydrationWarning
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            #020202,
            rgba(2, 2, 2, 0.7) 25%,
            rgba(2, 2, 2, 0.3) 40%,
            transparent 80%
          ),
          radial-gradient(circle at center, #ffffff50 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 50px 50px',
        backgroundAttachment: 'fixed',
        backgroundColor: '#020202',
      }}
    >
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AuthProvider>
        <Header />
        <TopBar />
        {children}
      </AuthProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
