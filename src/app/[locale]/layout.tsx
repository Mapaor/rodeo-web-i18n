import "@/app/styles/globals.css";
import { NextIntlClientProvider } from 'next-intl';
import messagesCa from '../../messages/ca.json';
import messagesEs from '../../messages/es.json';
import messagesEn from '../../messages/en.json';
import type { Metadata } from 'next';



interface Params {
  locale?: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale = 'ca' } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = {
    ca: messagesCa,
    es: messagesEs,
    en: messagesEn
  }[locale] || messagesCa;

  return {
    title: "Rodeo Studio",
    description: messages.metadata?.description || "Rodeo Studio",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico"
    },
    openGraph: {
      images: ["/seo/og_cover.jpg"]
    }
  };
}

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { locale = 'ca' } = await params;
  const messages = {
    ca: messagesCa,
    es: messagesEs,
    en: messagesEn
  }[locale] || messagesCa;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
