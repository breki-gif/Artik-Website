"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { Header } from "@/components/navbar";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />

      <main className="min-h-screen flex flex-col items-center justify-center bg-black px-6">
        {/* artik */}
        <h1 className="text-[clamp(4rem,15vw,12rem)] font-black tracking-tight leading-none text-white select-none">
          Artik
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-sm tracking-[0.2em] text-[#888888]">
          {t(translations.landing.tagline)}
        </p>

        {/* CTA */}
        <Link
          href="/contact"
          className="mt-8 md:mt-10 px-8 py-3 border border-white/30 rounded-full text-sm tracking-widest text-white/80 hover:bg-white hover:text-black transition-all duration-300"
        >
          {t(translations.landing.cta)}
        </Link>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 px-6 lg:px-10 py-5 flex items-center justify-between text-[11px] text-white/20">
        <span>&copy; {new Date().getFullYear()} Artik</span>
        <span>{t(translations.footer.location)}</span>
      </footer>
    </>
  );
}
