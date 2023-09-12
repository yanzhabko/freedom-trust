import "../style/main.scss";
import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";

export const metadata: Metadata = {
  title: "Freedom Trust",
  description: "Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HeaderComponent />
      <body>{children}</body>
    </html>
  );
}
