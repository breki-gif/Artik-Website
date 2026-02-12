"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: t(translations.nav.home) },
    { href: "/portfolio", label: t(translations.nav.portfolio) },
    { href: "/about", label: t(translations.nav.about) },
    { href: "/services", label: t(translations.nav.services) },
    { href: "/contact", label: t(translations.nav.contact) },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ice-white/90 backdrop-blur-sm border-b border-ice-white-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="text-xl lg:text-2xl font-bold tracking-tight text-lava-black">
            ARTIK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-glacial-dark font-medium"
                    : "text-lava-black/70 hover:text-lava-black"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setLocale(locale === "is" ? "en" : "is")}
              className="ml-4 px-3 py-1.5 text-xs font-medium tracking-wider border border-lava-black/20 rounded-full hover:bg-lava-black hover:text-ice-white transition-colors duration-200"
              aria-label={
                locale === "is" ? "Switch to English" : "Skipta yfir á íslensku"
              }
            >
              {locale === "is" ? "EN" : "IS"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setLocale(locale === "is" ? "en" : "is")}
              className="px-2.5 py-1 text-xs font-medium tracking-wider border border-lava-black/20 rounded-full"
              aria-label={
                locale === "is" ? "Switch to English" : "Skipta yfir á íslensku"
              }
            >
              {locale === "is" ? "EN" : "IS"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 flex flex-col gap-1">
                <span
                  className={`block h-0.5 bg-lava-black transition-transform duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-lava-black transition-opacity duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-lava-black transition-transform duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-ice-white-dark bg-ice-white overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-lg ${
                    pathname === link.href
                      ? "text-glacial-dark font-medium"
                      : "text-lava-black/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
