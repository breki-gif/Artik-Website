# CLAUDE.md — Artik Website

This file provides context for AI assistants (Claude, Copilot, etc.) working on the Artik Website repository.

## Project Overview

Artik Website is a bilingual (Icelandic/English) website for Artik, a boutique creative production agency based in Iceland. The site positions Artik as a creative-forward alternative to larger agencies, with two distinct service offerings (social media content creation and creative/experimental projects) and a strong Icelandic identity.

The visual design is inspired by Iceland's Northern Lights — volcanic fire colliding with glacial ice over a dark night sky. The aesthetic is dark, atmospheric, and minimal with selective glow effects.

**Repository:** `breki-gif/Artik-Website`

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Font:** Inter (via Google Fonts CDN)
- **Package Manager:** npm

## Project Structure

```
Artik-Website/
├── CLAUDE.md                    # AI assistant context (this file)
├── README.md                    # Project documentation
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── public/
│   └── projects/                # Project thumbnail images
│       └── .gitkeep
└── src/
    ├── app/
    │   ├── globals.css          # Global styles + Tailwind + color palette + glow utilities
    │   ├── layout.tsx           # Root layout with providers, navbar, footer
    │   ├── page.tsx             # Homepage (hero with orbs, services preview, pipeline, featured work, CTA)
    │   ├── services/page.tsx    # Services page (social media + creative tracks, process)
    │   ├── about/page.tsx       # About/Studio page (story, team, Iceland identity)
    │   └── contact/page.tsx     # Contact form page (expanded fields, sidebar)
    ├── components/
    │   ├── navbar.tsx           # Glass-morphism nav with language toggle
    │   ├── footer.tsx           # Footer with aurora gradient divider
    │   ├── scroll-reveal.tsx    # Scroll-triggered animation wrapper
    │   └── video-modal.tsx      # Video player modal (YouTube/Vimeo)
    └── lib/
        ├── language-context.tsx # React context for bilingual support
        └── translations.ts     # All translations (IS/EN) + project data
```

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Key Files for Content Updates

- **Translations:** `src/lib/translations.ts` — All bilingual text content
- **Projects:** `src/lib/translations.ts` (bottom of file) — Project data array
- **Color palette & glow effects:** `src/app/globals.css` — CSS custom properties in `@theme` + utility classes
- **Layout/SEO:** `src/app/layout.tsx` — Metadata, font, and page structure

## Color Palette — Northern Lights (Fire Meets Ice)

### Primary Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Void | `#0A0A0A` | `--color-void` | Deepest background |
| Night | `#111115` | `--color-night` | Alternate section background |
| Surface | `#1A1A1F` | `--color-surface` | Cards, inputs |
| Surface Light | `#242428` | `--color-surface-light` | Lighter card surfaces |

### Accent Colors

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Fire | `#FF6B35` | `--color-fire` | Primary accent — CTAs, Service #1, hover states |
| Fire Light | `#FF8C42` | `--color-fire-light` | Light fire variant |
| Fire Soft | `#FFA06B` | `--color-fire-soft` | Soft fire variant |
| Ice | `#00D9FF` | `--color-ice` | Secondary accent — Service #2, links, focus states |
| Ice Light | `#90E0EF` | `--color-ice-light` | Light ice variant |
| Aurora | `#B794F6` | `--color-aurora` | Tertiary accent — where fire meets ice |
| Ice White | `#F8F9FA` | `--color-ice-white` | Text color |

### Glow Utilities (defined in globals.css)

| Class | Effect |
|-------|--------|
| `glow-fire` / `glow-fire-sm` | Fire orange box-shadow glow |
| `glow-ice` / `glow-ice-sm` | Ice cyan box-shadow glow |
| `glow-aurora` | Aurora purple box-shadow glow |
| `orb-fire` / `orb-ice` / `orb-aurora` | Radial gradient background orbs |
| `aurora-line` | Linear gradient line (fire → aurora → ice) |
| `text-glow-fire` / `text-glow-ice` | Text shadow glow effects |
| `animate-pulse-glow` / `animate-pulse-slow` | Breathing pulse animations |

## Services

### Service #1: Social Media Content Creation (Fire accent)
Short-form video content for TikTok, Instagram Reels, and other social platforms. Includes concept development, video production, editing, and publishing.

### Service #2: Creative & Experimental Work (Ice accent)
Artistic collaborations, passion projects, and experimental films that push creative boundaries.

## Bilingual System

The site uses a React context-based language system:
- `LanguageProvider` wraps the entire app in `layout.tsx`
- `useLanguage()` hook returns `{ locale, setLocale, t }`
- `t(obj)` resolves `{ is: "...", en: "..." }` based on current locale
- Language preference persists via `localStorage`
- Toggle between IS/EN in the navbar

## Development Conventions

### General

- Prefer TypeScript over JavaScript
- Use kebab-case for file names
- Keep components small and focused
- All user-facing text must be bilingual (add to `translations.ts`)

### Design Principles

- Use deep black backgrounds (`void`, `night`) — never light backgrounds
- Apply glow effects selectively (accent elements only, not everything)
- Service #1 elements use fire (orange) accents; Service #2 uses ice (cyan)
- Aurora purple appears at transition points (pipeline steps, dividers)
- Background orbs add atmospheric depth without being distracting
- Keep typography clean — off-white (`ice-white`) text on dark backgrounds

### Adding a New Project

1. Add a thumbnail image to `public/projects/`
2. Add a new entry to the `projects` array in `src/lib/translations.ts`
3. Set `videoUrl` to a YouTube/Vimeo embed URL

### Adding New Translations

Add entries to the `translations` object in `src/lib/translations.ts` with both `is` and `en` keys.

## Environment Variables

No environment variables are required for the base site. If adding a form backend:

```
# Example for FormSpree
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxx
```

## Deployment

Optimized for Vercel. Deploy by connecting the GitHub repository to Vercel or run:

```bash
npm run build
```

## Key Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-12 | Repository created | Initial project setup |
| 2026-02-12 | Next.js 16 + Tailwind CSS v4 + Framer Motion | Modern stack, Vercel-optimized, animation support |
| 2026-02-12 | Context-based bilingual system | Simple, no routing overhead, localStorage persistence |
| 2026-02-12 | Northern Lights aesthetic (fire meets ice) | Brand alignment with Iceland's aurora — volcanic warmth meets glacial precision |
| 2026-02-12 | Service #1 rebranded to Social Media Content Creation | Focused on short-form video for TikTok/Instagram Reels |
| 2026-02-12 | Glow effects and radial orb system | Atmospheric depth while maintaining minimalism |
