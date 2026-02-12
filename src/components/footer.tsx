"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { href: "/", label: t(translations.nav.home) },
    { href: "/services", label: t(translations.nav.services) },
    { href: "/about", label: t(translations.nav.about) },
    { href: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <footer className="bg-lava-black text-ice-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight">
              ARTIK
            </Link>
            <p className="mt-4 text-ice-white/60 text-sm leading-relaxed max-w-xs">
              {t(translations.footer.tagline)}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/40 mb-4">
              {t(translations.footer.navigation)}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ice-white/60 hover:text-ice-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-ice-white/40 mb-4">
              {t(translations.footer.contactUs)}
            </h3>
            <ul className="space-y-3 text-sm text-ice-white/60">
              <li>
                <a
                  href="mailto:hello@artik.is"
                  className="hover:text-ice-white transition-colors duration-200"
                >
                  hello@artik.is
                </a>
              </li>
              <li>{t(translations.contact.info.locationValue)}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-ice-white/10 text-sm text-ice-white/40">
          &copy; {new Date().getFullYear()} Artik. {t(translations.footer.copyright)}
        </div>
      </div>
    </footer>
  );
}
