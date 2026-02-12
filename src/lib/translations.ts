export type Locale = "is" | "en";

export const translations = {
  // Navigation
  nav: {
    home: { is: "Heim", en: "Home" },
    services: { is: "Þjónusta", en: "Services" },
    about: { is: "Um okkur", en: "About" },
    work: { is: "Verkefni", en: "Work" },
    contact: { is: "Hafa samband", en: "Contact" },
  },

  // ──────────────────────────────────────
  // Homepage
  // ──────────────────────────────────────
  hero: {
    tagline: {
      is: "Djörf framleiðsla. Íslensk sál.",
      en: "Bold production. Icelandic soul.",
    },
    subtitle: {
      is: "Artik er skapandi framleiðslustofa á Íslandi sem býr til sjónrænar sögur sem hreyfa við fólki — frá vörumerkjamyndböndum til listrænna tilrauna.",
      en: "Artik is a creative production agency based in Iceland, crafting visual stories that move people — from brand films to artistic experiments.",
    },
    cta: {
      is: "Sjá þjónustu okkar",
      en: "Explore our services",
    },
    ctaSecondary: {
      is: "Hafa samband",
      en: "Get in touch",
    },
  },

  // Featured work on homepage
  featured: {
    heading: {
      is: "Nýleg verkefni",
      en: "Recent Work",
    },
    comingSoon: {
      is: "Fleiri verkefni í vinnslu",
      en: "More projects in the works",
    },
    viewAll: {
      is: "Sjá öll verkefni",
      en: "View all projects",
    },
    workTogether: {
      is: "Vilt þú vinna saman?",
      en: "Interested in working together?",
    },
  },

  // Services preview on homepage
  servicesPreview: {
    heading: {
      is: "Tvær leiðir til að vinna saman",
      en: "Two ways to work together",
    },
    commercial: {
      title: { is: "Efnisgerð fyrir samfélagsmiðla", en: "Social Media Content Creation" },
      description: {
        is: "Við búum til stutt myndbandsefni sem eykur sýnileika þinn á TikTok, Instagram Reels og öðrum samfélagsmiðlum.",
        en: "We create short-form video content designed to increase your visibility on TikTok, Instagram Reels, and other social platforms.",
      },
    },
    creative: {
      title: { is: "Skapandi og tilraunakennd vinna", en: "Creative & Experimental Work" },
      description: {
        is: "Listræn samstarfsverkefni þar sem skapandi frelsi er í fyrirrúmi — tilraunamyndir, áhugaverkefni og verkefni sem þenja mörkin.",
        en: "Artistic collaborations where creative freedom comes first — experimental films, passion projects, and work that pushes boundaries.",
      },
    },
    learnMore: {
      is: "Sjá nánar",
      en: "Learn more",
    },
  },

  // What we do / pipeline section on homepage
  pipeline: {
    heading: {
      is: "Við sjáum um allt ferlið",
      en: "We handle the full pipeline",
    },
    subtitle: {
      is: "Frá fyrstu hugmynd til endanlegrar afurðar — allt undir einu þaki.",
      en: "From first concept to final delivery — everything under one roof.",
    },
    steps: [
      {
        title: { is: "Undirbúningur", en: "Pre-Production" },
        description: {
          is: "Rannsóknir, stefnumótun, hugmyndaleit, handritun og sögurás.",
          en: "Research, strategy, brainstorming, scripting, and storyboarding.",
        },
      },
      {
        title: { is: "Framleiðsla", en: "Production" },
        description: {
          is: "Faglegar tökur á staðnum eða í stúdíói, kvikmyndataka og leikstjórn.",
          en: "Professional filming on-location or in studio, cinematography, and direction.",
        },
      },
      {
        title: { is: "Eftirvinnsla", en: "Post-Production" },
        description: {
          is: "Klipping, litastilling, hljóðhönnun og hreyfimyndir.",
          en: "Editing, color grading, sound design, and motion graphics.",
        },
      },
    ],
  },

  // Iceland identity section on homepage
  iceland: {
    heading: {
      is: "Skapað á Íslandi",
      en: "Crafted in Iceland",
    },
    description: {
      is: "Ísland er ekki bara staðsetningin okkar — það er innblásturinn okkar. Dramatískt landslag, breytileg birta og hrá náttúra móta sjónræna sýn okkar og skapandi nálgun.",
      en: "Iceland isn't just our location — it's our inspiration. Dramatic landscapes, shifting light, and raw nature shape our visual perspective and creative approach.",
    },
    tagline: {
      is: "Staðsett á Íslandi. Vinnum á heimsvísu.",
      en: "Based in Iceland. Working globally.",
    },
  },

  // Homepage CTA
  homeCta: {
    heading: {
      is: "Sköpum eitthvað saman",
      en: "Let's create something together",
    },
    description: {
      is: "Hvort sem þú ert með vörumerkjaverkefni eða listræna hugmynd — við viljum heyra frá þér.",
      en: "Whether you have a brand project or an artistic vision — we'd love to hear from you.",
    },
    button: {
      is: "Hafa samband",
      en: "Get in touch",
    },
  },

  // ──────────────────────────────────────
  // Services page
  // ──────────────────────────────────────
  services: {
    heading: {
      is: "Þjónusta okkar",
      en: "Our Services",
    },
    subtitle: {
      is: "Tvær aðskildar leiðir — bæði knúnar af skapandi krafti og fagmennsku.",
      en: "Two distinct tracks — both driven by creative vision and craftsmanship.",
    },

    commercial: {
      title: { is: "Efnisgerð fyrir samfélagsmiðla", en: "Social Media Content Creation" },
      subtitle: {
        is: "Stutt myndbandsefni sem eykur sýnileika þinn á samfélagsmiðlum.",
        en: "Short-form video content designed to boost your social media presence.",
      },
      description: {
        is: "Við búum til stutt myndbandsefni sem er hannað til að auka sýnileika þinn á TikTok, Instagram Reels og öðrum samfélagsmiðlum.",
        en: "We create short-form video content designed to increase your visibility on TikTok, Instagram Reels, and other social platforms.",
      },
      includes: {
        is: "Þjónustan okkar felur í sér:",
        en: "Our service includes:",
      },
      items: {
        is: [
          "Skilningur á vörumerkinu þínu og markmiðum",
          "Hugmyndavinna sem virkar á samfélagsmiðlum",
          "Faglegar tökur á staðnum eða í einföldu stúdíói",
          "Klipping og frágangs sem hámarkar áhrif",
        ],
        en: [
          "Understanding your brand and goals",
          "Brainstorming content ideas that work on social platforms",
          "Professional filming on-location or simple studio setup",
          "Editing and finishing for maximum impact",
        ],
      },
      pipeline: {
        is: "Ferlið okkar:",
        en: "Our process:",
      },
      pipelineSteps: [
        {
          title: { is: "Hugmyndaþróun", en: "Concept Development" },
          items: {
            is: ["Skilningur á vörumerkinu og markmiðum", "Hugmyndavinna fyrir samfélagsmiðlaefni", "Áætlanagerð sem nær til markhóps"],
            en: ["Understanding your brand and goals", "Brainstorming content ideas for social platforms", "Planning content that resonates with your target audience"],
          },
        },
        {
          title: { is: "Myndbandsframleiðsla", en: "Video Production" },
          items: {
            is: ["Faglegar tökur á staðnum eða í stúdíói", "Stutt myndböndin hönnuð fyrir TikTok og Instagram Reels"],
            en: ["Professional filming on-location or simple studio setup", "Engaging short-form videos optimized for TikTok and Instagram Reels"],
          },
        },
        {
          title: { is: "Klipping og frágangs", en: "Editing & Finishing" },
          items: {
            is: ["Klipping sem hámarkar áhrif á samfélagsmiðlum", "Aðlögun að hverri vettvangsstærð", "Textar, áhrif og grafík eftir þörfum"],
            en: ["Editing videos for maximum impact on social platforms", "Platform-specific formatting and optimization", "Adding captions, text, and effects as needed"],
          },
        },
        {
          title: { is: "Birting", en: "Publishing" },
          items: {
            is: ["Bein upphleðsla og birting á TikTok og Instagram", "Aðlögun fyrir betri dreifingu"],
            en: ["Direct upload and posting to your TikTok and Instagram accounts", "Platform optimization for better reach"],
          },
        },
      ],
      idealFor: {
        is: "Hentar fyrir: Fyrirtæki og vörumerki sem vilja auka sýnileika á samfélagsmiðlum með reglulegu og aðlaðandi stuttu efni. Fullkomið fyrir veitingastaði, verslun, ferðaþjónustu, staðbundna þjónustu og öll fyrirtæki sem vilja ná til viðskiptavina þar sem þeir eyða tíma sínum.",
        en: "Ideal for: Businesses and brands looking to build visibility on social media through consistent, engaging short-form content. Perfect for restaurants, retail, tourism, local services, and any business wanting to reach customers where they spend their time.",
      },
      whatYouGet: {
        is: "Stutt myndböndin (15–60 sekúndur) sem eru hönnuð til að vekja athygli, auka virkni og stækka viðveru þína á samfélagsmiðlum.",
        en: "Short-form videos (15–60 seconds) designed to grab attention, increase engagement, and grow your social media presence.",
      },
    },

    creative: {
      title: { is: "Skapandi og tilraunakennd vinna", en: "Creative & Experimental Work" },
      subtitle: {
        is: "Listræn verkefni þar sem skapandi frelsi ræður för.",
        en: "Artistic projects where creative freedom leads the way.",
      },
      description: {
        is: "Fyrir þau verkefni sem falla utan hefðbundins viðskiptaramma. Við tökum að okkur listræn samstarfsverkefni, áhugaverkefni og tilraunamyndir sem þenja mörkin og skoða nýjar leiðir í sjónrænni frásögn.",
        en: "For projects that go beyond the conventional commercial framework. We take on artistic collaborations, passion projects, and experimental films that push boundaries and explore new forms of visual storytelling.",
      },
      includes: {
        is: "Þetta felur í sér:",
        en: "This includes:",
      },
      items: {
        is: [
          "Listræn samstarfsverkefni með vörumerkjum",
          "Áhugaverkefni og tilraunakvikmyndir",
          "Tilraunakennd sjónræn frásögn",
          "Verkefni sem þenja skapandi mörk",
        ],
        en: [
          "Artistic brand collaborations",
          "Passion projects and spec work",
          "Experimental films and visual storytelling",
          "Projects that push creative boundaries",
        ],
      },
      approach: {
        is: "Nálgun okkar:",
        en: "Our approach:",
      },
      approachItems: {
        is: [
          "Samstarfsskapandi ferli",
          "Áhersla á listræna sýn og ekta frásögn",
          "Könnandi og minna viðskiptalega drifin",
          "Verkefni valin eftir skapandi samhljómi",
        ],
        en: [
          "Collaborative creative process",
          "Focus on artistic vision and authentic storytelling",
          "More exploratory and less commercially driven",
          "Projects selected based on creative alignment",
        ],
      },
      idealFor: {
        is: "Hentar fyrir: Vörumerki og einstaklinga sem meta listræna sýn, tilraunakenndar aðferðir og eru opnir fyrir skapandi áhættutöku.",
        en: "Ideal for: Brands and individuals who value artistic vision, experimental approaches, and are open to creative risk-taking.",
      },
    },

    // Shared process section
    process: {
      heading: {
        is: "Ferlið okkar",
        en: "Our Process",
      },
      subtitle: {
        is: "Sveigjanlegt, samstarfsmiðað og á mannamáli — sama hvaða leið þú velur.",
        en: "Agile, collaborative, and personal — regardless of which track you choose.",
      },
      steps: [
        {
          number: "01",
          title: { is: "Spjallað", en: "Conversation" },
          description: {
            is: "Við byrjum á samtali. Hvað viltu segja? Fyrir hvern? Hvert er markmiðið?",
            en: "We start with a conversation. What do you want to say? For whom? What's the goal?",
          },
        },
        {
          number: "02",
          title: { is: "Hugmynd", en: "Concept" },
          description: {
            is: "Við þróum hugmyndina, búum til sögurás og leggjum áætlunina.",
            en: "We develop the concept, create a storyboard, and lay out the plan.",
          },
        },
        {
          number: "03",
          title: { is: "Framleiðsla", en: "Production" },
          description: {
            is: "Tökur, leikstjórn og kvikmyndataka — allt með litlu liði og stórum hugmyndum.",
            en: "Filming, direction, and cinematography — all with a small team and big ideas.",
          },
        },
        {
          number: "04",
          title: { is: "Afhending", en: "Delivery" },
          description: {
            is: "Eftirvinnsla, frágangs og afhending — fullbúið og tilbúið til birtingar.",
            en: "Post-production, finishing, and delivery — polished and ready to publish.",
          },
        },
      ],
      tagline: {
        is: "Lítið teymi. Stór skapandi áhrif.",
        en: "Small team. Big creative impact.",
      },
    },

    cta: {
      heading: {
        is: "Átt þú verkefni í huga?",
        en: "Have a project in mind?",
      },
      description: {
        is: "Segðu okkur frá hugmyndinni þinni — hvort sem hún er viðskiptaleg eða listræn.",
        en: "Tell us about your idea — whether it's commercial or artistic.",
      },
      button: {
        is: "Byrjum saman",
        en: "Let's get started",
      },
    },
  },

  // ──────────────────────────────────────
  // About page
  // ──────────────────────────────────────
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
      is: "Artik var stofnað til að bjóða upp á annan valkost — persónulegri, skapandi og listrænni nálgun á myndbandsframleiðslu. Við trúum á að sterk sjónræn frásögn getur breytt öllu, hvort sem markmiðið er viðskiptalegt eða listrænt.",
      en: "Artik was founded to offer an alternative — a more personal, creative, and artistic approach to video production. We believe that powerful visual storytelling can change everything, whether the goal is commercial or artistic.",
    },
    storyP2: {
      is: "Sem lítil, sveigjanleg skapandi stofa höfum við frelsið til að velja verkefni sem hreyfa við okkur og vinna náið með viðskiptavinum okkar. Engin fyrirtækjaleg fjarlægð — bara hreinn skapandi kraftur.",
      en: "As a small, agile creative agency, we have the freedom to choose projects that move us and work closely with our clients. No corporate distance — just pure creative energy.",
    },

    differenceHeading: {
      is: "Hvað gerir okkur öðruvísi",
      en: "What Makes Us Different",
    },
    differences: {
      is: [
        "Persónuleg og einlæg nálgun",
        "Íslenskt skapandi sjónarhorn",
        "Tilraunakennd og listræn sýn",
        "Lítið liðið, skjót og sveigjanleg vinnubrögð",
        "Full framleiðslulína undir einu þaki",
      ],
      en: [
        "Personal and sincere approach",
        "Icelandic creative perspective",
        "Experimental and artistic vision",
        "Small team, fast and agile workflow",
        "Full production pipeline under one roof",
      ],
    },

    teamHeading: {
      is: "Teymið",
      en: "The Team",
    },
    teamDescription: {
      is: "Artik er knúið áfram af litlu teymi skapandi fólks sem deila ástríðu fyrir sjónrænni frásögn og tilraunakenndum verkefnum.",
      en: "Artik is driven by a small team of creatives who share a passion for visual storytelling and experimental projects.",
    },
    teamMembers: [
      {
        name: "Stofnandi / Creative Director",
        role: { is: "Stofnandi og skapandi stjórnandi", en: "Founder & Creative Director" },
        bio: {
          is: "Reynsla í kvikmyndagerð og sjónrænni frásögn. Leiðir sýn Artik og tryggir að hvert verkefni nái skapandi hæðum.",
          en: "Background in filmmaking and visual storytelling. Leads Artik's vision and ensures every project reaches creative heights.",
        },
      },
    ],

    icelandHeading: {
      is: "Af hverju Ísland?",
      en: "Why Iceland?",
    },
    icelandP1: {
      is: "Ísland er ekki bara heimili okkar — það er grunnurinn að öllu sem við gerum. Dramatískt landslag, breytileg birta og hrá náttúra hafa mótað sjónræna sýn okkar frá fyrsta degi.",
      en: "Iceland isn't just our home — it's the foundation of everything we do. Dramatic landscapes, shifting light, and raw nature have shaped our visual perspective from day one.",
    },
    icelandP2: {
      is: "Við vinnum á heimsvísu en berum alltaf með okkur íslenskt sjónarhorn — hreint, djúpt og óhrætt.",
      en: "We work globally but always carry an Icelandic perspective — clean, deep, and fearless.",
    },
  },

  // ──────────────────────────────────────
  // Work / Portfolio page
  // ──────────────────────────────────────
  portfolio: {
    heading: {
      is: "Verkefni",
      en: "Our Work",
    },
    subtitle: {
      is: "Úrval af nýlegum verkefnum og tilraunavinnu.",
      en: "A selection of recent projects and experimental work.",
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
    comingSoon: {
      is: "Fleiri verkefni á leiðinni",
      en: "More projects coming soon",
    },
    comingSoonDescription: {
      is: "Við erum að vinna með spennandi vörumerkjum og listamönnum. Fylgist með — nýtt efni birtist fljótlega.",
      en: "We're currently working with exciting brands and artists. Stay tuned — new content dropping soon.",
    },
    interested: {
      is: "Áhugasamur um að vinna saman?",
      en: "Interested in working together?",
    },
  },

  // ──────────────────────────────────────
  // Contact page
  // ──────────────────────────────────────
  contact: {
    heading: {
      is: "Hafa samband",
      en: "Get in Touch",
    },
    subtitle: {
      is: "Segðu okkur frá verkefninu þínu og við munum hafa samband fljótlega.",
      en: "Tell us about your project and we'll be in touch soon.",
    },
    tagline: {
      is: "Sköpum eitthvað saman",
      en: "Let's create something together",
    },
    form: {
      name: { is: "Nafn", en: "Name" },
      email: { is: "Netfang", en: "Email" },
      company: { is: "Fyrirtæki / Stofnun", en: "Company / Organization" },
      companyPlaceholder: { is: "Valfrjálst", en: "Optional" },
      projectType: { is: "Tegund verkefnis", en: "Project Type" },
      platforms: { is: "Vettvangar (ef við á)", en: "Preferred platforms (if applicable)" },
      timeline: { is: "Tímalína verkefnis", en: "Project Timeline" },
      budget: { is: "Fjárhagsáætlun", en: "Budget Range" },
      message: { is: "Skilaboð / Lýsing verkefnis", en: "Message / Project Description" },
      language: { is: "Tungumálaval", en: "Preferred Language" },
      submit: { is: "Senda fyrirspurn", en: "Send inquiry" },
      sending: { is: "Sendi...", en: "Sending..." },
      namePlaceholder: { is: "Fullt nafn", en: "Your full name" },
      emailPlaceholder: { is: "netfang@dæmi.is", en: "you@example.com" },
      messagePlaceholder: {
        is: "Segðu okkur frá verkefninu þínu — hvað, fyrir hvern, og hvenær?",
        en: "Tell us about your project — what, for whom, and when?",
      },
      projectTypes: {
        is: [
          "Efnisgerð fyrir samfélagsmiðla",
          "Skapandi og tilraunakennd vinna",
          "Veit ekki enn",
        ],
        en: [
          "Social Media Content Creation",
          "Creative & Experimental Work",
          "Not sure yet",
        ],
      },
      platformOptions: {
        is: ["TikTok", "Instagram", "YouTube", "Annað"],
        en: ["TikTok", "Instagram", "YouTube", "Other"],
      },
      timelineOptions: {
        is: [
          "Strax / ASAP",
          "1–2 mánuðir",
          "3–6 mánuðir",
          "Sveigjanleg tímalína",
        ],
        en: [
          "Immediately / ASAP",
          "1–2 months",
          "3–6 months",
          "Flexible timeline",
        ],
      },
      budgetOptions: {
        is: [
          "Undir 500.000 kr",
          "500.000 – 1.500.000 kr",
          "1.500.000 – 5.000.000 kr",
          "Yfir 5.000.000 kr",
          "Vil ekki gefa upp",
        ],
        en: [
          "Under $5,000",
          "$5,000 – $15,000",
          "$15,000 – $50,000",
          "Over $50,000",
          "Prefer not to say",
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
      emailRequired: { is: "Netfang er nauðsynlegt", en: "Email is required" },
      emailInvalid: { is: "Ógilt netfang", en: "Please enter a valid email" },
      messageRequired: { is: "Skilaboð eru nauðsynleg", en: "Message is required" },
    },
    info: {
      emailLabel: { is: "Netfang", en: "Email" },
      emailValue: "hello@artik.is",
      locationLabel: { is: "Staðsetning", en: "Location" },
      locationValue: { is: "Reykjavík, Ísland", en: "Reykjavík, Iceland" },
    },
  },

  // ──────────────────────────────────────
  // Footer
  // ──────────────────────────────────────
  footer: {
    tagline: {
      is: "Djörf framleiðsla. Íslensk sál.",
      en: "Bold production. Icelandic soul.",
    },
    copyright: {
      is: "Öll réttindi áskilin.",
      en: "All rights reserved.",
    },
    navigation: { is: "Flakk", en: "Navigation" },
    contactUs: { is: "Hafa samband", en: "Contact" },
  },
};

// ──────────────────────────────────────
// Project data — easily editable
// ──────────────────────────────────────

export interface Project {
  id: string;
  title: { is: string; en: string };
  description: { is: string; en: string };
  category: { is: string; en: string };
  thumbnail: string;
  videoUrl: string;
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
    category: { is: "Skapandi verk", en: "Creative" },
    thumbnail: "/projects/project-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "icelandair-campaign",
    title: {
      is: "Icelandair: Uppgötvaðu Ísland",
      en: "Icelandair: Discover Iceland",
    },
    description: {
      is: "Auglýsingaherferð fyrir Icelandair sem sýnir fegurð og fjölbreytileika Íslands á samfélagsmiðlum.",
      en: "A social-first advertising campaign for Icelandair showcasing the beauty and diversity of Iceland.",
    },
    category: { is: "Viðskiptaverk", en: "Commercial" },
    thumbnail: "/projects/project-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "volcanic-voices",
    title: {
      is: "Raddir úr eldi",
      en: "Volcanic Voices",
    },
    description: {
      is: "Tilraunamynd tekin við virkt eldfjall á Íslandi. Samstarf við íslenskan tónlistarmann.",
      en: "An experimental film shot at an active Icelandic volcano. A collaboration with an Icelandic musician.",
    },
    category: { is: "Skapandi verk", en: "Creative" },
    thumbnail: "/projects/project-3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];
