"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations, projects } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function HomePage() {
  const { t } = useLanguage();

  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-lava-black text-ice-white overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lava-black via-lava-black/95 to-glacial-dark/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
          >
            {t(translations.hero.tagline)}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-ice-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            {t(translations.hero.subtitle)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10"
          >
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3.5 bg-glacial text-lava-black font-medium tracking-wide rounded-full hover:bg-glacial-light transition-colors duration-300"
            >
              {t(translations.hero.cta)}
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
            className="w-5 h-8 border-2 border-ice-white/30 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-ice-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t(translations.featured.heading)}
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-video bg-lava-black/5 rounded-lg overflow-hidden">
                    {/* Placeholder for project thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-glacial/20 to-lava-black/10 flex items-center justify-center">
                      <span className="text-lava-black/30 text-sm tracking-wider uppercase">
                        {t(project.category)}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-lava-black/0 group-hover:bg-lava-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-ice-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm tracking-wider">
                        {t(translations.portfolio.watchProject)}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-4 text-lg font-medium group-hover:text-glacial-dark transition-colors duration-200">
                    {t(project.title)}
                  </h3>
                  <p className="mt-1 text-sm text-lava-black/60">
                    {t(project.description)}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/portfolio"
                className="inline-block text-sm tracking-wide text-glacial-dark hover:text-lava-black border-b border-glacial-dark hover:border-lava-black pb-1 transition-colors duration-200"
              >
                {t(translations.featured.viewAll)} &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-lava-black text-ice-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t(translations.homeCta.heading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-ice-white/60 max-w-xl mx-auto">
              {t(translations.homeCta.description)}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-lava-red text-ice-white font-medium tracking-wide rounded-full hover:bg-lava-red-dark transition-colors duration-300"
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
