// import { useLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import "@/style/main.scss";
import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export function generateStaticParams() {
  return [{ locale: "ua" }, { locale: "en" }];
}

export const metadata: Metadata = {
  title: "Freedom Trust",
  description: "Site",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  let massages;
  try {
    massages = (await import(`../..//massages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={massages}>
          <HeaderComponent />
          {children}
          <FooterComponent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
