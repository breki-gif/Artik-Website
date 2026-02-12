# Artik — Visual Stories from the North

Bilingual (Icelandic/English) website for Artik, a video and film production creative studio based in Iceland.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── portfolio/page.tsx # Portfolio with video modal
│   ├── about/page.tsx     # About the studio
│   ├── services/page.tsx  # Services offered
│   └── contact/page.tsx   # Contact form
├── components/    # Reusable UI components
│   ├── navbar.tsx         # Navigation + language toggle
│   ├── footer.tsx         # Site footer
│   ├── scroll-reveal.tsx  # Scroll animation wrapper
│   └── video-modal.tsx    # Video player modal
└── lib/           # Shared logic
    ├── language-context.tsx  # Bilingual context provider
    └── translations.ts      # All text content + project data
```

## How to Add New Projects

1. **Add a thumbnail image** to `public/projects/` (recommended: 16:9 aspect ratio, JPG/WebP, ~800px wide)

2. **Add project data** to the `projects` array in `src/lib/translations.ts`:

```typescript
{
  id: "your-project-id",
  title: {
    is: "Titill á íslensku",
    en: "Title in English",
  },
  description: {
    is: "Lýsing á íslensku.",
    en: "Description in English.",
  },
  category: { is: "Flokkur", en: "Category" },
  thumbnail: "/projects/your-image.jpg",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  // or: "https://player.vimeo.com/video/VIDEO_ID"
}
```

3. The project will automatically appear on both the homepage (if in the first 4) and the portfolio page.

## How to Modify Bilingual Content

All text content lives in `src/lib/translations.ts`. Each translatable string follows this pattern:

```typescript
{
  is: "Texti á íslensku",
  en: "Text in English",
}
```

To add new content, add entries to the `translations` object with both `is` and `en` keys, then use `t(translations.your.key)` in components via the `useLanguage()` hook.

## How to Connect the Contact Form

The contact form currently simulates submission. To connect it to a real backend:

### Option A: FormSpree

1. Create a form at [formspree.io](https://formspree.io)
2. Replace the `handleSubmit` function in `src/app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  setStatus("sending");
  try {
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setStatus("success");
      // reset form...
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};
```

### Option B: Next.js API Route

Create `src/app/api/contact/route.ts` and handle the form server-side.

## Design System

### Color Palette (Icelandic Landscape)

| Color | Hex | Tailwind Class | Usage |
|-------|-----|---------------|-------|
| Glacial Blue | `#8fb8ca` | `bg-glacial`, `text-glacial` | Primary accent |
| Lava Black | `#1a1a1a` | `bg-lava-black`, `text-lava-black` | Text, dark sections |
| Lava Red | `#c23b22` | `bg-lava-red`, `text-lava-red` | CTAs, error states |
| Moss Green | `#5a7247` | `bg-moss`, `text-moss` | Secondary accent, success |
| Ice White | `#f5f5f0` | `bg-ice-white`, `text-ice-white` | Backgrounds |

### Typography

Inter font loaded via Google Fonts CDN with fallback to system sans-serif fonts.

## Deployment on Vercel

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

Or deploy via CLI:

```bash
npx vercel
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [TypeScript](https://www.typescriptlang.org/) — Type safety
