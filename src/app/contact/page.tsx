"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const { locale, setLocale, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = t(translations.contact.validation.nameRequired);
    if (!form.email.trim()) e.email = t(translations.contact.validation.emailRequired);
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t(translations.contact.validation.emailInvalid);
    if (!form.message.trim()) e.message = t(translations.contact.validation.messageRequired);
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const inputClass = (hasError?: string) =>
    `w-full px-0 py-3 bg-transparent border-b text-white placeholder:text-white/20 focus:outline-none transition-colors duration-300 ${
      hasError ? "border-red-500" : "border-white/15 focus:border-white/50"
    }`;

  return (
    <div className="min-h-screen bg-black px-6 lg:px-10">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-xs tracking-widest text-white/40 hover:text-white transition-colors duration-300"
        >
          {t(translations.contact.back)}
        </Link>
        <button
          onClick={() => setLocale(locale === "is" ? "en" : "is")}
          className="text-xs tracking-widest text-white/40 hover:text-white transition-colors duration-300"
          aria-label={locale === "is" ? "Switch to English" : "Skipta yfir á íslensku"}
        >
          {locale === "is" ? "EN" : "IS"}
        </button>
      </header>

      {/* Content */}
      <main className="max-w-lg mx-auto pt-32 pb-24">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          {t(translations.contact.heading)}
        </h1>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8" noValidate>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs tracking-widest uppercase text-white/40 mb-1">
              {t(translations.contact.form.name)} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t(translations.contact.form.namePlaceholder)}
              className={inputClass(errors.name)}
            />
            {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs tracking-widest uppercase text-white/40 mb-1">
              {t(translations.contact.form.email)} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t(translations.contact.form.emailPlaceholder)}
              className={inputClass(errors.email)}
            />
            {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
          </div>

          {/* Company */}
          <div>
            <label htmlFor="company" className="block text-xs tracking-widest uppercase text-white/40 mb-1">
              {t(translations.contact.form.company)}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder={t(translations.contact.form.companyPlaceholder)}
              className={inputClass()}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs tracking-widest uppercase text-white/40 mb-1">
              {t(translations.contact.form.message)} *
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder={t(translations.contact.form.messagePlaceholder)}
              className={`${inputClass(errors.message)} resize-none`}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 px-8 py-3 border border-white/30 rounded-full text-sm tracking-widest text-white/80 hover:bg-white hover:text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
          >
            {status === "sending"
              ? t(translations.contact.form.sending)
              : t(translations.contact.form.submit)}
          </button>

          {status === "success" && (
            <p className="text-sm text-white/60">{t(translations.contact.success)}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{t(translations.contact.error)}</p>
          )}
        </form>

        {/* Info */}
        <div className="mt-20 space-y-3 text-sm text-white/30">
          <p>
            <a href={`mailto:${translations.contact.info.email}`} className="hover:text-white transition-colors duration-300">
              {translations.contact.info.email}
            </a>
          </p>
          <p>{t(translations.contact.info.location)}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-6 flex items-center justify-between text-[11px] text-white/20">
        <span>&copy; {new Date().getFullYear()} Artik</span>
        <span>{t(translations.footer.location)}</span>
      </footer>
    </div>
  );
}
