"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import { ScrollReveal } from "@/components/scroll-reveal";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  language: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const { locale, t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
    language: locale === "is" ? "Icelandic" : "English",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t(translations.contact.validation.nameRequired);
    }
    if (!formData.email.trim()) {
      newErrors.email = t(translations.contact.validation.emailRequired);
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t(translations.contact.validation.emailInvalid);
    }
    if (!formData.message.trim()) {
      newErrors.message = t(translations.contact.validation.messageRequired);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    // Simulate form submission — replace with actual endpoint (FormSpree, API route, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
        language: locale === "is" ? "Icelandic" : "English",
      });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t(translations.contact.heading)}
          </h1>
          <p className="mt-4 text-lg text-lava-black/60 max-w-xl">
            {t(translations.contact.subtitle)}
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-lava-black/80 mb-2"
                >
                  {t(translations.contact.form.name)} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t(translations.contact.form.namePlaceholder)}
                  className={`w-full px-4 py-3 bg-ice-white-dark/50 border rounded-lg text-lava-black placeholder:text-lava-black/30 focus:outline-none focus:ring-2 focus:ring-glacial/50 transition-colors ${
                    errors.name ? "border-lava-red" : "border-lava-black/10"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-sm text-lava-red">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-lava-black/80 mb-2"
                >
                  {t(translations.contact.form.email)} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t(translations.contact.form.emailPlaceholder)}
                  className={`w-full px-4 py-3 bg-ice-white-dark/50 border rounded-lg text-lava-black placeholder:text-lava-black/30 focus:outline-none focus:ring-2 focus:ring-glacial/50 transition-colors ${
                    errors.email ? "border-lava-red" : "border-lava-black/10"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-sm text-lava-red">{errors.email}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-lava-black/80 mb-2"
                >
                  {t(translations.contact.form.projectType)}
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ice-white-dark/50 border border-lava-black/10 rounded-lg text-lava-black focus:outline-none focus:ring-2 focus:ring-glacial/50 transition-colors"
                >
                  <option value="">—</option>
                  {t(translations.contact.form.projectTypes).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Preference */}
              <div>
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-lava-black/80 mb-2"
                >
                  {t(translations.contact.form.language)}
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-ice-white-dark/50 border border-lava-black/10 rounded-lg text-lava-black focus:outline-none focus:ring-2 focus:ring-glacial/50 transition-colors"
                >
                  {t(translations.contact.form.languageOptions).map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-lava-black/80 mb-2"
                >
                  {t(translations.contact.form.message)} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t(translations.contact.form.messagePlaceholder)}
                  className={`w-full px-4 py-3 bg-ice-white-dark/50 border rounded-lg text-lava-black placeholder:text-lava-black/30 focus:outline-none focus:ring-2 focus:ring-glacial/50 transition-colors resize-none ${
                    errors.message ? "border-lava-red" : "border-lava-black/10"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-sm text-lava-red">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-3.5 bg-lava-black text-ice-white font-medium tracking-wide rounded-full hover:bg-lava-black/80 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {status === "sending"
                  ? t(translations.contact.form.sending)
                  : t(translations.contact.form.submit)}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-moss font-medium"
                >
                  {t(translations.contact.success)}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lava-red font-medium"
                >
                  {t(translations.contact.error)}
                </motion.p>
              )}
            </form>
          </ScrollReveal>

          {/* Contact Info Sidebar */}
          <ScrollReveal direction="right" className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium tracking-wider uppercase text-lava-black/40 mb-3">
                  {t(translations.contact.info.emailLabel)}
                </h3>
                <a
                  href={`mailto:${translations.contact.info.emailValue}`}
                  className="text-lg text-glacial-dark hover:text-lava-black transition-colors duration-200"
                >
                  {translations.contact.info.emailValue}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium tracking-wider uppercase text-lava-black/40 mb-3">
                  {t(translations.contact.info.locationLabel)}
                </h3>
                <p className="text-lg text-lava-black/70">
                  {t(translations.contact.info.locationValue)}
                </p>
              </div>

              {/* Iceland visual reference */}
              <div className="mt-8 aspect-square bg-gradient-to-br from-glacial/20 via-ice-white-dark to-moss/10 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-2">64&deg;N</p>
                  <p className="text-sm text-lava-black/40 tracking-wider">
                    Reykjav&iacute;k
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
