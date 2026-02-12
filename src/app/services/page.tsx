"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-void relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] orb-fire opacity-15 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] orb-ice opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ice-white">
              {t(translations.services.heading)}
            </h1>
            <p className="mt-4 text-lg text-ice-white/50 max-w-2xl">
              {t(translations.services.subtitle)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service 1: Social Media Content Creation — Fire ── */}
      <section className="pb-16 lg:pb-20 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 lg:p-12 bg-surface/50 rounded-2xl border border-fire/10 hover:border-fire/20 transition-all duration-500 relative overflow-hidden">
              {/* Subtle fire glow in corner */}
              <div className="absolute -top-20 -right-20 w-[250px] h-[250px] orb-fire opacity-30 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-fire/10 flex items-center justify-center shrink-0 glow-fire-sm">
                    <svg className="w-6 h-6 text-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ice-white">
                      {t(translations.services.commercial.title)}
                    </h2>
                    <p className="text-sm text-ice-white/40 mt-1">
                      {t(translations.services.commercial.subtitle)}
                    </p>
                  </div>
                </div>

                <p className="text-ice-white/60 leading-relaxed max-w-3xl">
                  {t(translations.services.commercial.description)}
                </p>

                {/* What's included */}
                <div className="mt-8">
                  <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/30 mb-4">
                    {t(translations.services.commercial.includes)}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t(translations.services.commercial.items).map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-ice-white/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-fire shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process pipeline */}
                <div className="mt-10">
                  <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/30 mb-6">
                    {t(translations.services.commercial.pipeline)}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {translations.services.commercial.pipelineSteps.map((step, i) => (
                      <div key={i} className="bg-void/60 rounded-lg p-5 border border-fire/[0.06] hover:border-fire/15 transition-all duration-300">
                        <div className="text-xs font-bold text-fire mb-2">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h4 className="font-semibold text-sm text-ice-white mb-3">{t(step.title)}</h4>
                        <ul className="space-y-1.5">
                          {t(step.items).map((item, j) => (
                            <li key={j} className="text-xs text-ice-white/40 flex items-start gap-2">
                              <span className="text-fire/50 mt-0.5 shrink-0">&bull;</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What you get */}
                <div className="mt-8 p-4 bg-fire/[0.04] rounded-lg border border-fire/10">
                  <p className="text-sm text-ice-white/60 font-medium">
                    {t(translations.services.commercial.whatYouGet)}
                  </p>
                </div>

                {/* Ideal for */}
                <div className="mt-4 p-4 bg-surface/50 rounded-lg border border-ice-white/[0.04]">
                  <p className="text-sm text-ice-white/40 italic">
                    {t(translations.services.commercial.idealFor)}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service 2: Creative & Experimental — Ice ── */}
      <section className="pb-24 lg:pb-32 bg-void">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 lg:p-12 bg-surface/50 rounded-2xl border border-ice/10 hover:border-ice/20 transition-all duration-500 relative overflow-hidden">
              {/* Subtle ice glow in corner */}
              <div className="absolute -top-20 -right-20 w-[250px] h-[250px] orb-ice opacity-25 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-ice/10 flex items-center justify-center shrink-0 glow-ice-sm">
                    <svg className="w-6 h-6 text-ice" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-ice-white">
                      {t(translations.services.creative.title)}
                    </h2>
                    <p className="text-sm text-ice-white/40 mt-1">
                      {t(translations.services.creative.subtitle)}
                    </p>
                  </div>
                </div>

                <p className="text-ice-white/60 leading-relaxed max-w-3xl">
                  {t(translations.services.creative.description)}
                </p>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* What's included */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/30 mb-4">
                      {t(translations.services.creative.includes)}
                    </h3>
                    <ul className="space-y-3">
                      {t(translations.services.creative.items).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-ice-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-ice shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div>
                    <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/30 mb-4">
                      {t(translations.services.creative.approach)}
                    </h3>
                    <ul className="space-y-3">
                      {t(translations.services.creative.approachItems).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-ice-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-aurora shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Ideal for */}
                <div className="mt-8 p-4 bg-ice/[0.03] rounded-lg border border-ice/10">
                  <p className="text-sm text-ice-white/40 italic">
                    {t(translations.services.creative.idealFor)}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 lg:py-32 bg-night relative overflow-hidden">
        {/* Aurora background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-[200px] -translate-y-1/2 opacity-[0.05]" style={{ background: "linear-gradient(90deg, #FF6B35, #B794F6 50%, #00D9FF)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.services.process.heading)}
            </h2>
            <p className="mt-4 text-lg text-ice-white/40 max-w-xl">
              {t(translations.services.process.subtitle)}
            </p>
          </ScrollReveal>

          {/* Aurora divider */}
          <ScrollReveal delay={0.1}>
            <div className="mt-12 mb-4 h-px aurora-line opacity-25 rounded-full" />
          </ScrollReveal>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations.services.process.steps.map((step, i) => {
              const colors = [
                { num: "text-fire/30", dot: "bg-fire" },
                { num: "text-fire-soft/20", dot: "bg-fire-soft" },
                { num: "text-aurora/20", dot: "bg-aurora" },
                { num: "text-ice/20", dot: "bg-ice" },
              ];
              const color = colors[i] || colors[0];

              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative">
                    <div className={`text-5xl font-bold ${color.num} mb-4`}>
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-ice-white">{t(step.title)}</h3>
                    <p className="mt-2 text-ice-white/40 text-sm leading-relaxed">
                      {t(step.description)}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="mt-16 text-center text-lg font-medium text-fire text-glow-fire">
              {t(translations.services.process.tagline)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-void relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] orb-fire opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.services.cta.heading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-ice-white/40 max-w-xl mx-auto">
              {t(translations.services.cta.description)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-fire text-white font-medium tracking-wide rounded-full glow-fire-sm hover:glow-fire transition-all duration-300 hover:scale-[1.02]"
              >
                {t(translations.services.cta.button)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
