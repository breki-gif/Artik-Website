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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-void relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] orb-aurora opacity-15 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ice-white">
              {t(translations.about.heading)}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="pb-24 lg:pb-32 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-semibold tracking-tight text-ice-white">
                  {t(translations.about.storyHeading)}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 text-ice-white/60 leading-relaxed">
                  {t(translations.about.storyP1)}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="mt-4 text-ice-white/60 leading-relaxed">
                  {t(translations.about.storyP2)}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-surface/40 rounded-2xl flex items-center justify-center border border-ice-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 orb-fire opacity-15" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 orb-ice opacity-20" />
                <span className="relative text-ice-white/10 text-sm tracking-wider uppercase">
                  Studio
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section className="py-24 lg:py-32 bg-night relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] orb-ice opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ice-white">
              {t(translations.about.differenceHeading)}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t(translations.about.differences).map((item, i) => {
              const dots = ["bg-fire", "bg-fire-light", "bg-aurora", "bg-ice", "bg-ice-light"];
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex items-start gap-4 p-5 bg-surface/50 rounded-xl border border-ice-white/[0.04] hover:border-ice-white/10 transition-all duration-300">
                    <div className={`mt-1.5 w-2 h-2 rounded-full ${dots[i % dots.length]} shrink-0`} />
                    <span className="text-ice-white/60 text-sm">{item}</span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 lg:py-32 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight text-ice-white">
              {t(translations.about.teamHeading)}
            </h2>
            <p className="mt-4 text-ice-white/50 max-w-2xl leading-relaxed">
              {t(translations.about.teamDescription)}
            </p>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.about.teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-surface/50 rounded-2xl overflow-hidden border border-ice-white/[0.04] hover:border-fire/15 transition-all duration-500">
                  {/* Photo placeholder */}
                  <div className="aspect-[3/4] bg-surface flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 orb-fire opacity-10" />
                    <svg className="relative w-16 h-16 text-ice-white/[0.06]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-ice-white">{member.name}</h3>
                    <p className="text-sm text-fire mt-1">{t(member.role)}</p>
                    <p className="mt-3 text-sm text-ice-white/40 leading-relaxed">
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
      <section className="py-24 lg:py-32 bg-night relative overflow-hidden">
        {/* Northern lights background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-[300px] -translate-y-1/2 opacity-[0.06]" style={{ background: "linear-gradient(90deg, #FF6B35, #B794F6 40%, #00D9FF 80%, transparent)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
                {t(translations.about.icelandHeading)}
              </h2>
              <p className="mt-6 text-ice-white/50 leading-relaxed text-lg">
                {t(translations.about.icelandP1)}
              </p>
              <p className="mt-4 text-ice-white/50 leading-relaxed">
                {t(translations.about.icelandP2)}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-surface/40 rounded-2xl flex items-center justify-center border border-ice-white/[0.04] relative overflow-hidden">
                <div className="absolute inset-0 orb-aurora opacity-25" />
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 orb-fire opacity-15" />
                <div className="relative text-center">
                  <p className="text-5xl font-bold text-ice-white/10">64&deg;N</p>
                  <p className="mt-2 text-sm text-ice-white/15 tracking-widest uppercase">
                    Reykjav&iacute;k
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-void relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb-fire opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.homeCta.heading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-ice-white/40 max-w-xl mx-auto">
              {t(translations.homeCta.description)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-fire text-white font-medium tracking-wide rounded-full glow-fire-sm hover:glow-fire transition-all duration-300 hover:scale-[1.02]"
              >
                {t(translations.homeCta.button)}
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 border border-ice-white/15 text-ice-white font-medium tracking-wide rounded-full hover:border-ice/40 hover:text-ice transition-all duration-300"
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
