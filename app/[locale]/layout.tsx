import { notFound } from 'next/navigation';
import { locales } from '@/i18n';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}