import './global.css';

export const metadata = {
  title: 'daylix.pro - платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
  description: 'Платформа для захоплених іграми, кіно, інноваціями, залізом, та технологіями.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body>{children}</body>
    </html>
  );
}
