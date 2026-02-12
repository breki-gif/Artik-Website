# CLAUDE.md — Artik Website

This file provides context for AI assistants (Claude, Copilot, etc.) working on the Artik Website repository.

## Project Overview

Artik Website is a minimal, bilingual (Icelandic/English) landing page for Artik, a creative production agency based in Reykjavík, Iceland. The site is intentionally stripped down to just two pages: a bold landing page and a contact form.

The design philosophy is Swiss minimalism / brutalist simplicity — black background, white text, bold typography, generous whitespace, zero decoration.

**Repository:** `breki-gif/Artik-Website`

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Font:** Inter (700–900 weights via Google Fonts CDN)
- **Package Manager:** npm

## Project Structure

```
Artik-Website/
├── CLAUDE.md
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
└── src/
    ├── app/
    │   ├── globals.css          # Minimal styles (black/white palette)
    │   ├── layout.tsx           # Root layout with LanguageProvider
    │   ├── page.tsx             # Landing page ("artik" + CTA button)
    │   └── contact/page.tsx     # Contact form page
    ├── components/
    │   └── navbar.tsx           # Minimal header (logo "A" + language toggle)
    └── lib/
        ├── language-context.tsx # React context for IS/EN bilingual support
        └── translations.ts     # All bilingual text content
```

## Pages

### Landing Page (`/`)
- Giant "artik" in bold lowercase, centered on black background
- Single CTA button: "HAFA SAMBAND" (IS) / "GET IN TOUCH" (EN)
- Minimal header: "A" logo top-left, "EN"/"IS" toggle top-right
- Footer: copyright + location

### Contact Page (`/contact`)
- "← Til baka" / "← Back" link to return home
- Clean form: Name, Email, Company (optional), Message
- Underline-style inputs on black background
- Rounded outline submit button
- Contact info below form: email + location

## Development Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Key Files

- **All text content:** `src/lib/translations.ts`
- **Styles:** `src/app/globals.css`
- **Layout/SEO:** `src/app/layout.tsx`

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#0A0A0A` | Background |
| White | `#F8F9FA` | Text |
| Gray | `#2A2A2A` | Input backgrounds (if needed) |
| Gray Light | `#888888` | Subtle text |

## Bilingual System

- `LanguageProvider` wraps the app in `layout.tsx`
- `useLanguage()` hook returns `{ locale, setLocale, t }`
- `t(obj)` resolves `{ is: "...", en: "..." }` based on current locale
- Language preference persists via `localStorage`
- Toggle in top-right corner of both pages

## Design Principles

- Pure black background, white text — nothing else
- No glows, gradients, effects, or decorative elements
- Bold typography does all the work
- Generous whitespace
- Only two pages — landing + contact
- Responsive via `clamp()` for the hero text

## Environment Variables

No environment variables required. To connect the contact form:

```
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxx
```

## Deployment

Optimized for Vercel:

```bash
npm run build
```
