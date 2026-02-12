# CLAUDE.md — Artik Website

This file provides context for AI assistants (Claude, Copilot, etc.) working on the Artik Website repository.

## Project Overview

Artik Website is a bilingual (Icelandic/English) website for Artik, a boutique creative production agency based in Iceland. The site positions Artik as a creative-forward alternative to larger agencies, with two distinct service offerings (commercial brand work and creative/experimental projects) and a strong Icelandic identity.

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
    │   ├── globals.css          # Global styles + Tailwind + color palette
    │   ├── layout.tsx           # Root layout with providers, navbar, footer
    │   ├── page.tsx             # Homepage
    │   ├── portfolio/page.tsx   # Portfolio with video modal
    │   ├── about/page.tsx       # About/Studio page
    │   ├── services/page.tsx    # Services page
    │   └── contact/page.tsx     # Contact form page
    ├── components/
    │   ├── navbar.tsx           # Navigation with language toggle
    │   ├── footer.tsx           # Site footer
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
- **Color palette:** `src/app/globals.css` — CSS custom properties in `@theme`
- **Layout/SEO:** `src/app/layout.tsx` — Metadata, font, and page structure

## Color Palette

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Glacial blue | `#88C0D0` | `--color-glacial` | Primary accent, links, CTAs |
| Lava black | `#2E3440` | `--color-lava-black` | Text, dark backgrounds |
| Lava red | `#BF616A` | `--color-lava-red` | Secondary accent, hover states |
| Moss green | `#A3BE8C` | `--color-moss` | Tertiary accent, success |
| Ice white | `#ECEFF4` | `--color-ice-white` | Backgrounds, negative space |

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
| 2026-02-12 | Icelandic landscape color palette | Brand alignment with Icelandic minimalism |
