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
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-lava-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

      {/* ── Service 1: Commercial & Brand ── */}
      <section className="pb-16 lg:pb-20 bg-lava-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 lg:p-12 bg-surface/50 rounded-2xl border border-ice-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-glacial/15 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-glacial" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
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
                      <div className="w-1.5 h-1.5 rounded-full bg-glacial shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Full-service pipeline */}
              <div className="mt-10">
                <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/30 mb-6">
                  {t(translations.services.commercial.pipeline)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {translations.services.commercial.pipelineSteps.map((step, i) => (
                    <div key={i} className="bg-lava-black/60 rounded-lg p-5 border border-ice-white/5">
                      <div className="text-xs font-bold text-glacial mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h4 className="font-semibold text-sm text-ice-white mb-3">{t(step.title)}</h4>
                      <ul className="space-y-1.5">
                        {t(step.items).map((item, j) => (
                          <li key={j} className="text-xs text-ice-white/40 flex items-start gap-2">
                            <span className="text-glacial/60 mt-0.5 shrink-0">&bull;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal for */}
              <div className="mt-8 p-4 bg-glacial/5 rounded-lg border border-glacial/10">
                <p className="text-sm text-ice-white/50 italic">
                  {t(translations.services.commercial.idealFor)}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Service 2: Creative & Experimental ── */}
      <section className="pb-24 lg:pb-32 bg-lava-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="p-8 lg:p-12 bg-surface/50 rounded-2xl border border-ice-white/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-lava-red/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-lava-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
                        <div className="w-1.5 h-1.5 rounded-full bg-lava-red shrink-0" />
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
                        <div className="w-1.5 h-1.5 rounded-full bg-moss shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Ideal for */}
              <div className="mt-8 p-4 bg-lava-red/5 rounded-lg border border-lava-red/10">
                <p className="text-sm text-ice-white/50 italic">
                  {t(translations.services.creative.idealFor)}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 lg:py-32 bg-lava-black-deep">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.services.process.heading)}
            </h2>
            <p className="mt-4 text-lg text-ice-white/40 max-w-xl">
              {t(translations.services.process.subtitle)}
            </p>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {translations.services.process.steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="text-5xl font-bold text-glacial/15 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-ice-white">{t(step.title)}</h3>
                  <p className="mt-2 text-ice-white/40 text-sm leading-relaxed">
                    {t(step.description)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="mt-16 text-center text-lg font-medium text-glacial">
              {t(translations.services.process.tagline)}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-lava-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.services.cta.heading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-ice-white/50 max-w-xl mx-auto">
              {t(translations.services.cta.description)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-lava-red text-ice-white font-medium tracking-wide rounded-full hover:bg-lava-red-dark transition-colors duration-300"
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
