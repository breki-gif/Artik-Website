# Artik

Minimal landing page for Artik, a creative production agency based in Reykjavík, Iceland. Bilingual (Icelandic/English).

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

Two pages only:

- **`/`** — Landing page. Giant "artik" centered on black. Single CTA button.
- **`/contact`** — Contact form. Name, email, company, message.

```
src/
├── app/
│   ├── globals.css          # Black/white palette
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Landing page
│   └── contact/page.tsx     # Contact form
├── components/
│   └── navbar.tsx           # Header (logo + language toggle)
└── lib/
    ├── language-context.tsx  # IS/EN bilingual system
    └── translations.ts      # All text content
```

## Bilingual

Toggle between Icelandic and English via the button in the top-right corner. Preference is saved to `localStorage`.

To update text content, edit `src/lib/translations.ts`.

## Connect the Contact Form

The form currently simulates submission. To connect to a real backend:

### FormSpree

Replace the `handleSubmit` function in `src/app/contact/page.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;
  setStatus("sending");
  try {
    const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } else {
      setStatus("error");
    }
  } catch {
    setStatus("error");
  }
};
```

## Deploy

Optimized for Vercel. Push to GitHub and import on [vercel.com](https://vercel.com), or:

```bash
npx vercel
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) — App Router
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Inter font via Google Fonts
