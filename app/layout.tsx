import "../style/main.scss";
import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
