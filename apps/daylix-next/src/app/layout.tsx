import './global.css';

export const metadata = {
  title: 'Daylix.pro - Платформа для обговорення ігор, технологій, гаджетів, фільмів та різних подій',
  description: 'Платформа для обговорення ігор, технологій, гаджетів, фільмів та різних подій',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
