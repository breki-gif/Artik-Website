"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const { locale, setLocale } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 py-5 flex items-center justify-between">
      {/* Logo */}
      <Link
        href="/"
        className="text-sm font-bold tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-300"
      >
        A
      </Link>

      {/* Language toggle */}
      <button
        onClick={() => setLocale(locale === "is" ? "en" : "is")}
        className="text-xs tracking-widest text-white/40 hover:text-white transition-colors duration-300"
        aria-label={
          locale === "is" ? "Switch to English" : "Skipta yfir á íslensku"
        }
      >
        {locale === "is" ? "EN" : "IS"}
      </button>
    </header>
  );
}
