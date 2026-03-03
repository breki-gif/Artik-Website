export type Locale = "is" | "en";

export const translations = {
  landing: {
    tagline: { is: "Skapandi framleiðslustofa", en: "Creative production studio" },
    cta: { is: "HAFA SAMBAND", en: "GET IN TOUCH" },
  },
  contact: {
    heading: { is: "Hafa Samband", en: "Get in Touch" },
    back: { is: "← Til baka", en: "← Back" },
    form: {
      name: { is: "Nafn", en: "Name" },
      namePlaceholder: { is: "Nafnið þitt", en: "Your name" },
      email: { is: "Netfang", en: "Email" },
      emailPlaceholder: { is: "Netfangið þitt", en: "Your email" },
      company: { is: "Fyrirtæki / Verkefni", en: "Company / Project" },
      companyPlaceholder: { is: "Valfrjálst", en: "Optional" },
      message: { is: "Skilaboð", en: "Message" },
      messagePlaceholder: {
        is: "Segðu okkur frá verkefninu þínu...",
        en: "Tell us about your project...",
      },
      submit: { is: "Senda", en: "Send" },
      sending: { is: "Sendi...", en: "Sending..." },
    },
    validation: {
      nameRequired: { is: "Nafn vantar", en: "Name is required" },
      emailRequired: { is: "Netfang vantar", en: "Email is required" },
      emailInvalid: { is: "Ógilt netfang", en: "Invalid email" },
      messageRequired: { is: "Skilaboð vantar", en: "Message is required" },
    },
    success: {
      is: "Skilaboð send. Við verðum í sambandi.",
      en: "Message sent. We'll be in touch.",
    },
    error: {
      is: "Eitthvað fór úrskeiðis. Reyndu aftur.",
      en: "Something went wrong. Please try again.",
    },
    info: {
      email: "artik@artik.is",
      location: { is: "Reykjavík, Ísland", en: "Reykjavík, Iceland" },
    },
  },
  footer: {
    copyright: "Artik",
    location: { is: "Reykjavík, Ísland", en: "Reykjavík, Iceland" },
  },
};
