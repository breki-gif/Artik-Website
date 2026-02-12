import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/language-context";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Artik | Sjónrænar sögur frá norðri — Visual Stories from the North",
  description:
    "Artik is an Icelandic film and video production studio crafting powerful visual narratives. Kvikmynda- og myndbandsverkstæði á Íslandi.",
  keywords: [
    "Artik",
    "Iceland",
    "film production",
    "video production",
    "documentary",
    "kvikmyndagerð",
    "Ísland",
  ],
  openGraph: {
    title: "Artik | Visual Stories from the North",
    description:
      "Icelandic film and video production studio crafting powerful visual narratives.",
    locale: "is_IS",
    alternateLocale: "en_US",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
