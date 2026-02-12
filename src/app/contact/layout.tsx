import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Artik",
  description: "Get in touch with Artik",
  openGraph: {
    title: "Contact - Artik",
    description: "Get in touch with Artik",
    siteName: "Artik",
  },
  twitter: {
    title: "Contact - Artik",
    description: "Get in touch with Artik",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
