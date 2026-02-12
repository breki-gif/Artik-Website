"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, projects } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function HomePage() {
  const { t } = useLanguage();

  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center bg-void text-ice-white overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Fire orb — right side */}
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] md:w-[700px] md:h-[700px] orb-fire animate-pulse-glow" />
          {/* Ice orb — left side */}
          <div className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] md:w-[500px] md:h-[500px] orb-ice animate-pulse-slow" />
          {/* Aurora hint — top */}
          <div className="absolute top-0 left-1/3 w-[600px] h-[300px] orb-aurora opacity-40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-glow-fire"
          >
            {t(translations.hero.tagline)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-ice-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            {t(translations.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="px-8 py-3.5 bg-fire text-white font-medium tracking-wide rounded-full glow-fire-sm hover:glow-fire transition-all duration-300 hover:scale-[1.02]"
            >
              {t(translations.hero.cta)}
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-ice-white/15 text-ice-white font-medium tracking-wide rounded-full hover:border-ice/40 hover:text-ice transition-all duration-300"
            >
              {t(translations.hero.ctaSecondary)}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-ice-white/15 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-fire/60 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24 lg:py-32 bg-night relative overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] orb-fire opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.servicesPreview.heading)}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Social Media Content — Fire accent */}
            <ScrollReveal delay={0.1}>
              <div className="group p-8 lg:p-10 bg-surface/60 rounded-2xl border border-fire/10 hover:border-fire/25 transition-all duration-500 h-full flex flex-col hover:glow-fire-sm">
                <div className="w-10 h-10 rounded-full bg-fire/10 flex items-center justify-center mb-6 glow-fire-sm">
                  <svg className="w-5 h-5 text-fire" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-ice-white">
                  {t(translations.servicesPreview.commercial.title)}
                </h3>
                <p className="mt-3 text-ice-white/50 leading-relaxed flex-1">
                  {t(translations.servicesPreview.commercial.description)}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center text-sm text-fire hover:text-fire-light font-medium transition-colors duration-300"
                >
                  {t(translations.servicesPreview.learnMore)}
                  <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>

            {/* Creative — Ice accent */}
            <ScrollReveal delay={0.2}>
              <div className="group p-8 lg:p-10 bg-surface/60 rounded-2xl border border-ice/10 hover:border-ice/25 transition-all duration-500 h-full flex flex-col hover:glow-ice-sm">
                <div className="w-10 h-10 rounded-full bg-ice/10 flex items-center justify-center mb-6 glow-ice-sm">
                  <svg className="w-5 h-5 text-ice" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-ice-white">
                  {t(translations.servicesPreview.creative.title)}
                </h3>
                <p className="mt-3 text-ice-white/50 leading-relaxed flex-1">
                  {t(translations.servicesPreview.creative.description)}
                </p>
                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center text-sm text-ice hover:text-ice-light font-medium transition-colors duration-300"
                >
                  {t(translations.servicesPreview.learnMore)}
                  <span className="ml-1">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Production Pipeline ── */}
      <section className="py-24 lg:py-32 bg-void relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] orb-aurora opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.pipeline.heading)}
            </h2>
            <p className="mt-4 text-lg text-ice-white/40 max-w-xl">
              {t(translations.pipeline.subtitle)}
            </p>
          </ScrollReveal>

          {/* Aurora gradient connecting line */}
          <ScrollReveal delay={0.1}>
            <div className="mt-16 mb-8 h-px aurora-line opacity-20 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {translations.pipeline.steps.map((step, i) => {
              const colors = [
                { dot: "bg-fire", glow: "glow-fire-sm" },
                { dot: "bg-aurora", glow: "glow-aurora" },
                { dot: "bg-ice", glow: "glow-ice-sm" },
              ];
              const color = colors[i] || colors[0];

              return (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="relative">
                    <div className="text-6xl font-bold text-ice-white/[0.03] absolute -top-4 -left-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="relative pt-8">
                      <div className={`w-2.5 h-2.5 rounded-full ${color.dot} ${color.glow} mb-4`} />
                      <h3 className="text-lg font-semibold text-ice-white">{t(step.title)}</h3>
                      <p className="mt-2 text-ice-white/40 text-sm leading-relaxed">
                        {t(step.description)}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Work ── */}
      <section className="py-24 lg:py-32 bg-night relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] orb-ice opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
              {t(translations.featured.heading)}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div className="group block">
                  <div className="relative aspect-video bg-surface rounded-xl overflow-hidden border border-ice-white/[0.04] group-hover:border-fire/20 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-fire/[0.06] via-transparent to-ice/[0.04] flex items-center justify-center">
                      <span className="text-ice-white/15 text-xs tracking-wider uppercase">
                        {t(project.category)}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-base font-medium text-ice-white">
                    {t(project.title)}
                  </h3>
                  <p className="mt-1 text-sm text-ice-white/40">
                    {t(project.category)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="mt-8 text-sm text-ice-white/25 text-center">
              {t(translations.featured.comingSoon)}
            </p>
            <div className="mt-4 text-center">
              <Link
                href="/contact"
                className="inline-block text-sm tracking-wide text-fire hover:text-fire-light border-b border-fire/30 hover:border-fire pb-1 transition-all duration-300"
              >
                {t(translations.featured.workTogether)} &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Iceland Identity ── */}
      <section className="py-24 lg:py-32 bg-void relative overflow-hidden">
        {/* Northern lights background — horizontal aurora effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 right-0 h-[300px] -translate-y-1/2 opacity-[0.07]" style={{ background: "linear-gradient(90deg, #FF6B35, #B794F6 40%, #00D9FF 80%, transparent)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ice-white">
                {t(translations.iceland.heading)}
              </h2>
              <p className="mt-6 text-ice-white/50 leading-relaxed text-lg">
                {t(translations.iceland.description)}
              </p>
              <p className="mt-4 text-fire font-medium text-glow-fire">
                {t(translations.iceland.tagline)}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="aspect-[4/3] bg-surface/40 rounded-2xl flex items-center justify-center border border-ice-white/[0.04] relative overflow-hidden">
                {/* Aurora glow inside the card */}
                <div className="absolute inset-0 orb-aurora opacity-30" />
                <div className="absolute bottom-0 right-0 w-3/4 h-3/4 orb-fire opacity-20" />
                <div className="relative text-center">
                  <p className="text-5xl font-bold text-ice-white/10">64&deg;N</p>
                  <p className="mt-2 text-sm text-ice-white/20 tracking-widest uppercase">
                    Iceland
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-night relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] orb-fire opacity-20 pointer-events-none" />

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
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-fire text-white font-medium tracking-wide rounded-full glow-fire-sm hover:glow-fire transition-all duration-300 hover:scale-[1.02]"
              >
                {t(translations.homeCta.button)}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
