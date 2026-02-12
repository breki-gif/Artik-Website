"use client";

import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t(translations.about.heading)}
          </h1>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Story */}
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

          {/* Image placeholder */}
          <ScrollReveal direction="right">
            <div className="aspect-[4/3] bg-gradient-to-br from-glacial/30 to-moss/20 rounded-lg flex items-center justify-center">
              <span className="text-lava-black/20 text-sm tracking-wider uppercase">
                Studio / Iceland
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Approach */}
        <div className="mt-24 lg:mt-32">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              {t(translations.about.approachHeading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lava-black/70 leading-relaxed max-w-2xl">
              {t(translations.about.approachP1)}
            </p>
          </ScrollReveal>

          {/* Values */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t(translations.about.values).map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4 p-6 bg-ice-white-dark/50 rounded-lg">
                  <div className="mt-1 w-2 h-2 rounded-full bg-glacial shrink-0" />
                  <span className="text-lava-black/80">{value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
