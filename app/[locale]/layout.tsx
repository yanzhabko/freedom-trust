import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

import "@/style/main.scss";
import styles from "./layout.module.scss";
import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export function generateStaticParams() {
  return [{ locale: "ua" }, { locale: "en" }];
}

export const metadata: Metadata = {
  title: "FreedomTrust",
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
          <div className={styles.root}>
            <HeaderComponent />
            <main className={styles.page}>{children}</main>
            <FooterComponent />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
