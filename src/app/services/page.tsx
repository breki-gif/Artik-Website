"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

const serviceIcons = [
  // Film Production
  <svg key="film" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
  </svg>,
  // Commercial Content
  <svg key="commercial" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>,
  // Creative Consulting
  <svg key="consulting" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>,
];

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {t(translations.services.heading)}
            </h1>
            <p className="mt-4 text-lg text-lava-black/60 max-w-xl">
              {t(translations.services.subtitle)}
            </p>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="mt-16 space-y-12 lg:space-y-16">
            {translations.services.items.map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 p-8 lg:p-10 bg-ice-white-dark/50 rounded-xl">
                  {/* Service Header */}
                  <div className="lg:col-span-1">
                    <div className="text-glacial-dark mb-4">{serviceIcons[i]}</div>
                    <h2 className="text-2xl font-semibold tracking-tight">
                      {t(service.title)}
                    </h2>
                  </div>

                  {/* Service Details */}
                  <div className="lg:col-span-2">
                    <p className="text-lava-black/70 leading-relaxed">
                      {t(service.description)}
                    </p>
                    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {t(service.features).map((feature, j) => (
                        <li
                          key={j}
                          className="flex items-center gap-3 text-sm text-lava-black/60"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-glacial shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-lava-black text-ice-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t(translations.services.cta.heading)}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 text-lg text-ice-white/60 max-w-xl mx-auto">
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
