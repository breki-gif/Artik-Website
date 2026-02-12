import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artik - Creative Studios",
  description: "Creative production studio in Reykjavík, Iceland",
  openGraph: {
    title: "Artik - Creative Studios",
    description: "Creative production studio in Reykjavík, Iceland",
    siteName: "Artik",
    locale: "is_IS",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Artik - Creative Studios",
    description: "Creative production studio in Reykjavík, Iceland",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="is">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
