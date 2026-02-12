# Artik — Visual Stories from the North

Bilingual (Icelandic/English) website for Artik, a creative production studio based in Iceland specializing in social media content creation and experimental filmmaking.

The design is inspired by Iceland's Northern Lights — volcanic fire (orange) colliding with glacial ice (cyan) over a dark night sky, with atmospheric glow effects and aurora purple accents.

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
│   ├── globals.css        # Color palette, glow utilities, aurora effects
│   ├── page.tsx           # Homepage (hero with orbs, services, pipeline, featured work)
│   ├── services/page.tsx  # Services (social media + creative tracks)
│   ├── about/page.tsx     # About the studio
│   └── contact/page.tsx   # Contact form with glow effects
├── components/    # Reusable UI components
│   ├── navbar.tsx         # Glass-morphism nav + language toggle
│   ├── footer.tsx         # Footer with aurora gradient divider
│   ├── scroll-reveal.tsx  # Scroll animation wrapper
│   └── video-modal.tsx    # Video player modal
└── lib/           # Shared logic
    ├── language-context.tsx  # Bilingual context provider
    └── translations.ts      # All text content + project data
```

## Services

**Service #1: Social Media Content Creation** — Short-form video content (15–60s) for TikTok, Instagram Reels, and other social platforms. Full pipeline from concept to publishing.

**Service #2: Creative & Experimental Work** — Artistic collaborations, passion projects, and experimental films that push creative boundaries.

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
}
```

3. The project will automatically appear on the homepage (first 3 shown) and portfolio page.

## How to Modify Bilingual Content

All text content lives in `src/lib/translations.ts`. Each translatable string follows this pattern:

```typescript
{
  is: "Texti á íslensku",
  en: "Text in English",
}
```

Use `t(translations.your.key)` in components via the `useLanguage()` hook.

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

## Design System — Northern Lights

### Color Palette

| Color | Hex | Tailwind Class | Usage |
|-------|-----|---------------|-------|
| Void | `#0A0A0A` | `bg-void` | Deepest background |
| Night | `#111115` | `bg-night` | Alternate section background |
| Surface | `#1A1A1F` | `bg-surface` | Cards, inputs |
| Fire | `#FF6B35` | `text-fire`, `bg-fire` | Primary accent — CTAs, Service #1 |
| Ice | `#00D9FF` | `text-ice`, `bg-ice` | Secondary accent — Service #2, focus states |
| Aurora | `#B794F6` | `text-aurora`, `bg-aurora` | Tertiary — where fire meets ice |
| Ice White | `#F8F9FA` | `text-ice-white` | Body text |

### Glow Effects

- `glow-fire` / `glow-fire-sm` — Fire orange box-shadow
- `glow-ice` / `glow-ice-sm` — Ice cyan box-shadow
- `orb-fire` / `orb-ice` / `orb-aurora` — Radial gradient backgrounds
- `aurora-line` — Gradient line (fire → purple → ice)
- `text-glow-fire` / `text-glow-ice` — Text shadow glows

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
