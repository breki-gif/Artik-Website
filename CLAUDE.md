# CLAUDE.md — Artik Website

This file provides context for AI assistants (Claude, Copilot, etc.) working on the Artik Website repository.

## Project Overview

Artik Website is a web project. The repository is currently in its initial stage — no framework or tech stack has been chosen yet.

**Repository:** `breki-gif/Artik-Website`

## Current State

This is a newly initialized repository. No source code, configuration files, or dependencies exist yet. The sections below should be updated as the project takes shape.

## Project Structure

```
Artik-Website/
├── CLAUDE.md          # AI assistant context (this file)
└── (empty — project scaffolding not yet created)
```

> **Update this section** once the project is scaffolded with a framework (e.g., Next.js, Vite + React, Astro, etc.).

## Tech Stack

Not yet determined. Update this section when the stack is chosen. Common choices for a modern website:

- **Framework:** (e.g., Next.js, Astro, Vite + React, SvelteKit)
- **Language:** (e.g., TypeScript, JavaScript)
- **Styling:** (e.g., Tailwind CSS, CSS Modules, styled-components)
- **Package Manager:** (e.g., npm, pnpm, yarn)

## Development Commands

> Update these once `package.json` exists.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Run tests
npm test
```

## Development Conventions

### General

- Prefer TypeScript over JavaScript where possible
- Use consistent naming conventions throughout the codebase
- Keep components small and focused on a single responsibility
- Write meaningful commit messages describing the "why" not just the "what"

### File & Directory Naming

- Use kebab-case for file and directory names (e.g., `user-profile.tsx`)
- Use PascalCase for React/component files if that is the project convention
- Group related files together by feature or domain

### Code Style

- Follow the linter/formatter configuration established in the project
- Do not disable lint rules without a comment explaining why
- Prefer named exports over default exports for better refactoring support

### Git Workflow

- Create feature branches off the main branch
- Keep commits atomic — one logical change per commit
- Do not commit secrets, API keys, or `.env` files

## Environment Variables

> Document required environment variables here once they exist.

```
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
# DATABASE_URL=postgresql://...
```

Copy `.env.example` to `.env.local` (or `.env`) and fill in the values.

## Testing

No testing framework has been configured yet. Update this section when tests are added.

## Deployment

No deployment pipeline has been configured yet. Update this section when CI/CD or hosting is set up.

## Key Decisions Log

Track major architectural and tooling decisions here so future contributors (human or AI) understand the rationale.

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-02-12 | Repository created | Initial project setup |

---

*Keep this file up to date as the project evolves. When adding a new framework, dependency, or convention, update the relevant section above.*
