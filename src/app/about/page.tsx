"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t(translations.about.heading)}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {t(translations.about.storyHeading)}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 text-lava-black/70 leading-relaxed">
                  {t(translations.about.storyP1)}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-lava-black/70 leading-relaxed">
                  {t(translations.about.storyP2)}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-gradient-to-br from-glacial/20 via-ice-white-dark to-lava-black/5 rounded-xl flex items-center justify-center">
                <span className="text-lava-black/15 text-sm tracking-wider uppercase">
                  Studio
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="py-24 lg:py-32 bg-ice-white-dark/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t(translations.about.differenceHeading)}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t(translations.about.differences).map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4 p-5 bg-ice-white/80 rounded-lg">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-glacial shrink-0" />
                  <span className="text-lava-black/80 text-sm">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t(translations.about.teamHeading)}
            </h2>
            <p className="mt-4 text-lava-black/60 max-w-2xl leading-relaxed">
              {t(translations.about.teamDescription)}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.about.teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-ice-white-dark/50 rounded-xl overflow-hidden">
                  {/* Photo placeholder */}
                  <div className="aspect-[3/4] bg-gradient-to-b from-glacial/10 to-lava-black/5 flex items-center justify-center">
                    <svg className="w-16 h-16 text-lava-black/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-glacial-dark mt-1">{t(member.role)}</p>
                    <p className="mt-3 text-sm text-lava-black/60 leading-relaxed">
                      {t(member.bio)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Iceland Identity ── */}
      <section className="py-24 lg:py-32 bg-lava-black text-ice-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t(translations.about.icelandHeading)}
              </h2>
              <p className="mt-6 text-ice-white/60 leading-relaxed text-lg">
                {t(translations.about.icelandP1)}
              </p>
              <p className="mt-4 text-ice-white/60 leading-relaxed">
                {t(translations.about.icelandP2)}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-gradient-to-br from-glacial/15 via-lava-black to-moss/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-ice-white/10">64&deg;N</p>
                  <p className="mt-2 text-sm text-ice-white/20 tracking-widest uppercase">
                    Reykjav&iacute;k
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t(translations.homeCta.heading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-lava-black/60 max-w-xl mx-auto">
              {t(translations.homeCta.description)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-lava-red text-ice-white font-medium tracking-wide rounded-full hover:bg-lava-red-dark transition-colors duration-300"
              >
                {t(translations.homeCta.button)}
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 border border-lava-black/20 text-lava-black font-medium tracking-wide rounded-full hover:bg-lava-black hover:text-ice-white transition-colors duration-300"
              >
                {t(translations.hero.cta)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
