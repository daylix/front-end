import './global.css';
import { NextIntlClientProvider } from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

export const metadata = {
  title: 'daylix.pro - платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
  description: 'Платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
};

export default async function RootLayout ({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale}>
    <NextIntlClientProvider messages={messages}>
      <body>{children}</body>
    </NextIntlClientProvider>
    </html>
  );
}
