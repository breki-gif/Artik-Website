export type Locale = "is" | "en";

export const translations = {
  // Navigation
  nav: {
    home: { is: "Heim", en: "Home" },
    portfolio: { is: "Verkefni", en: "Portfolio" },
    about: { is: "Um okkur", en: "About" },
    services: { is: "Þjónusta", en: "Services" },
    contact: { is: "Hafa samband", en: "Contact" },
  },

  // Homepage
  hero: {
    tagline: {
      is: "Sjónrænar sögur frá norðri",
      en: "Visual stories from the North",
    },
    subtitle: {
      is: "Artik er kvikmynda- og myndbandsverkstæði á Íslandi sem skapar áhrifamiklar sjónrænar sögur sem hreyfa við fólki.",
      en: "Artik is an Icelandic film and video production studio crafting powerful visual narratives that move people.",
    },
    cta: {
      is: "Sjá verkefni",
      en: "View our work",
    },
  },

  featured: {
    heading: {
      is: "Úrval verkefna",
      en: "Featured Work",
    },
    viewAll: {
      is: "Sjá öll verkefni",
      en: "View all projects",
    },
  },

  homeCta: {
    heading: {
      is: "Eigum við að vinna saman?",
      en: "Ready to create something?",
    },
    description: {
      is: "Við hjálpum þér að segja þína sögu með myndböndum sem skipta máli.",
      en: "We help you tell your story through video that matters.",
    },
    button: {
      is: "Hafa samband",
      en: "Get in touch",
    },
  },

  // Portfolio
  portfolio: {
    heading: {
      is: "Verkefni",
      en: "Our Work",
    },
    subtitle: {
      is: "Úrval af kvikmynda- og myndbandsverkefnum okkar.",
      en: "A selection of our film and video projects.",
    },
    watchProject: {
      is: "Horfa á verkefni",
      en: "Watch project",
    },
    close: {
      is: "Loka",
      en: "Close",
    },
    allCategories: {
      is: "Allt",
      en: "All",
    },
  },

  // About
  about: {
    heading: {
      is: "Um Artik",
      en: "About Artik",
    },
    storyHeading: {
      is: "Sagan okkar",
      en: "Our Story",
    },
    storyP1: {
      is: "Artik er kvikmynda- og myndbandsverkstæði með aðsetur á Íslandi. Við erum sprottin upp úr dramatískri náttúru Íslands og sækjum innblástur í landið sem umkringir okkur — jökla, eldfjöll, víðerni og birtu sem breytist á hverjum augnabliki.",
      en: "Artik is a film and video production studio based in Iceland. Born from Iceland's dramatic landscapes, we draw inspiration from the world around us — glaciers, volcanoes, vast wilderness, and ever-changing light.",
    },
    storyP2: {
      is: "Við trúum á kraft sjónrænna sagna. Hvert verkefni er tækifæri til að skapa eitthvað sem skiptir máli — hvort sem það er kvikmyndasöguleg, auglýsing eða tónlistarmyndband.",
      en: "We believe in the power of visual storytelling. Every project is an opportunity to create something that matters — whether it's a documentary, a commercial, or a music video.",
    },
    approachHeading: {
      is: "Nálgun okkar",
      en: "Our Approach",
    },
    approachP1: {
      is: "Við nálgumst hvert verkefni af athygli og einlægni. Frá fyrstu hugmynd að lokaafurð, vinnum við náið með viðskiptavinum okkar til að tryggja að sýn þeirra verði að veruleika.",
      en: "We approach every project with care and sincerity. From initial concept to final delivery, we work closely with our clients to ensure their vision becomes reality.",
    },
    values: {
      is: [
        "Sköpunarkraftur án málamiðlana",
        "Vandað handverk í hverju smáatriði",
        "Söguþráður sem hreyfir við fólki",
        "Samvinna sem skilar árangri",
      ],
      en: [
        "Creativity without compromise",
        "Craftsmanship in every detail",
        "Storytelling that moves people",
        "Collaboration that delivers results",
      ],
    },
  },

  // Services
  services: {
    heading: {
      is: "Þjónusta",
      en: "Services",
    },
    subtitle: {
      is: "Frá hugmynd til lokaafurðar — við sjáum um allt.",
      en: "From concept to final cut — we handle everything.",
    },
    items: [
      {
        title: { is: "Kvikmyndagerð", en: "Film Production" },
        description: {
          is: "Full kvikmyndaþjónusta frá undirbúningi til eftirvinnsl. Við sérhæfum okkur í heimildarmyndum, stuttmyndum og viðskiptamyndböndum sem segja sögur á áhrifamikinn hátt.",
          en: "Full film production services from pre-production to post. We specialize in documentaries, short films, and commercial video that tells stories in compelling ways.",
        },
        features: {
          is: [
            "Handritun og undirbúningur",
            "Tökur á staðnum",
            "Klipping og eftirvinnnsla",
            "Hljóðhönnun",
          ],
          en: [
            "Script development and pre-production",
            "On-location filming",
            "Editing and post-production",
            "Sound design",
          ],
        },
      },
      {
        title: { is: "Auglýsingamyndir", en: "Commercial Content" },
        description: {
          is: "Fagleg auglýsingamyndbönd og efni fyrir vörumerki sem vilja skera sig úr. Við sköpum sjónrænt efni sem fangar athygli og skilur eftir sig varanleg áhrif.",
          en: "Professional commercial videos and branded content for companies that want to stand out. We create visual content that captures attention and leaves a lasting impression.",
        },
        features: {
          is: [
            "Vörumerkjamyndbönd",
            "Auglýsingar fyrir samfélagsmiðla",
            "Vöruefni og kynningar",
            "Loftmyndir og drónur",
          ],
          en: [
            "Brand films",
            "Social media advertising",
            "Product content and launches",
            "Aerial and drone footage",
          ],
        },
      },
      {
        title: { is: "Skapandi ráðgjöf", en: "Creative Consulting" },
        description: {
          is: "Við hjálpum vörumerkjum og fyrirtækjum að þróa sjónræna stefnu og skapandi lausnir sem endurspegla gildi þeirra og höfða til markhóps þeirra.",
          en: "We help brands and organizations develop visual strategy and creative solutions that reflect their values and speak to their audience.",
        },
        features: {
          is: [
            "Sjónræn stefnumótun",
            "Skapandi áætlanagerð",
            "Innihaldsstefna",
            "Markhópagreining",
          ],
          en: [
            "Visual strategy development",
            "Creative planning",
            "Content strategy",
            "Audience analysis",
          ],
        },
      },
    ],
    cta: {
      heading: {
        is: "Átt þú verkefni í huga?",
        en: "Have a project in mind?",
      },
      description: {
        is: "Við viljum heyra frá þér. Segðu okkur frá hugmyndinni þinni og við munum koma til baka með tillögu.",
        en: "We'd love to hear from you. Tell us about your idea and we'll get back to you with a proposal.",
      },
      button: {
        is: "Byrjum saman",
        en: "Let's get started",
      },
    },
  },

  // Contact
  contact: {
    heading: {
      is: "Hafa samband",
      en: "Get in Touch",
    },
    subtitle: {
      is: "Segðu okkur frá verkefninu þínu og við munum hafa samband við þig fljótlega.",
      en: "Tell us about your project and we'll be in touch soon.",
    },
    form: {
      name: { is: "Nafn", en: "Name" },
      email: { is: "Netfang", en: "Email" },
      projectType: { is: "Tegund verkefnis", en: "Project Type" },
      message: { is: "Skilaboð", en: "Message" },
      language: { is: "Tungumálaval", en: "Language preference" },
      submit: { is: "Senda skilaboð", en: "Send message" },
      sending: { is: "Sendi...", en: "Sending..." },
      namePlaceholder: { is: "Fullt nafn", en: "Your full name" },
      emailPlaceholder: { is: "netfang@dæmi.is", en: "you@example.com" },
      messagePlaceholder: {
        is: "Segðu okkur frá verkefninu þínu...",
        en: "Tell us about your project...",
      },
      projectTypes: {
        is: [
          "Kvikmyndagerð",
          "Auglýsingamynd",
          "Heimildarmynd",
          "Tónlistarmyndband",
          "Annað",
        ],
        en: [
          "Film Production",
          "Commercial",
          "Documentary",
          "Music Video",
          "Other",
        ],
      },
      languageOptions: {
        is: ["Íslenska", "English"],
        en: ["Icelandic", "English"],
      },
    },
    success: {
      is: "Skilaboðin þín hafa verið send! Við munum hafa samband fljótlega.",
      en: "Your message has been sent! We'll be in touch soon.",
    },
    error: {
      is: "Eitthvað fór úrskeiðis. Vinsamlegast reyndu aftur.",
      en: "Something went wrong. Please try again.",
    },
    validation: {
      nameRequired: { is: "Nafn er nauðsynlegt", en: "Name is required" },
      emailRequired: {
        is: "Netfang er nauðsynlegt",
        en: "Email is required",
      },
      emailInvalid: {
        is: "Ógilt netfang",
        en: "Please enter a valid email",
      },
      messageRequired: {
        is: "Skilaboð eru nauðsynleg",
        en: "Message is required",
      },
    },
    info: {
      emailLabel: { is: "Netfang", en: "Email" },
      emailValue: "hello@artik.is",
      locationLabel: { is: "Staðsetning", en: "Location" },
      locationValue: { is: "Reykjavík, Ísland", en: "Reykjavík, Iceland" },
    },
  },

  // Footer
  footer: {
    tagline: {
      is: "Sjónrænar sögur frá norðri",
      en: "Visual stories from the North",
    },
    copyright: {
      is: "Öll réttindi áskilin.",
      en: "All rights reserved.",
    },
    navigation: { is: "Flakk", en: "Navigation" },
    contactUs: { is: "Hafa samband", en: "Contact" },
  },
};

// Project data - easily editable
export interface Project {
  id: string;
  title: { is: string; en: string };
  description: { is: string; en: string };
  category: { is: string; en: string };
  thumbnail: string; // path to thumbnail image in /public/projects/
  videoUrl: string; // Vimeo or YouTube embed URL
}

export const projects: Project[] = [
  {
    id: "northern-lights-doc",
    title: {
      is: "Norðurljósin: Ljós á himni",
      en: "Northern Lights: Heavenly Glow",
    },
    description: {
      is: "Heimildarmynd um norðurljósin og áhrif þeirra á menningu og vísindi á Íslandi.",
      en: "A documentary exploring the northern lights and their impact on Icelandic culture and science.",
    },
    category: { is: "Heimildarmynd", en: "Documentary" },
    thumbnail: "/projects/project-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "glacier-symphony",
    title: {
      is: "Jöklasamljómur",
      en: "Glacier Symphony",
    },
    description: {
      is: "Stuttmynd um hljóðheiminn sem býr í jöklum Íslands og breytingarnar sem þeir gangast undir.",
      en: "A short film about the soundscapes living within Iceland's glaciers and the changes they undergo.",
    },
    category: { is: "Stuttmynd", en: "Short Film" },
    thumbnail: "/projects/project-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "icelandair-campaign",
    title: {
      is: "Icelandair: Uppgötvaðu Ísland",
      en: "Icelandair: Discover Iceland",
    },
    description: {
      is: "Auglýsingaherferð fyrir Icelandair sem sýnir fegurð og fjölbreytileika Íslands.",
      en: "An advertising campaign for Icelandair showcasing the beauty and diversity of Iceland.",
    },
    category: { is: "Auglýsing", en: "Commercial" },
    thumbnail: "/projects/project-3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "volcanic-voices",
    title: {
      is: "Raddir úr eldi",
      en: "Volcanic Voices",
    },
    description: {
      is: "Tónlistarmyndband tekið við virkt eldfjall á Íslandi. Samstarf við íslenskan tónlistarmann.",
      en: "A music video filmed at an active Icelandic volcano. A collaboration with an Icelandic musician.",
    },
    category: { is: "Tónlistarmyndband", en: "Music Video" },
    thumbnail: "/projects/project-4.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
