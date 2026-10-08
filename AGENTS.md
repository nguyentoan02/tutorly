# Tutorly project instructions

## Scope

This repository contains a Next.js App Router application and the Tutorly visual system. Build the public Tutorly tutor landing experience with TypeScript, Tailwind CSS v4, and shadcn/ui. Follow the existing app structure and dependency versions; avoid unnecessary migrations.

The current project is a frontend-only landing page. Do not add environment variables, lead storage, API routes, or a registration backend unless the user explicitly requests them. Keep CTAs pointed at real page sections until a real signup destination is supplied.

## Sources of truth

- Use `DESIGN.md` for product voice, visual decisions, and content guardrails when changing the public UI.
- Use `design-tokens/tokens.json` for portable values, `design-tokens/variables.css` for browser/shadcn semantic values, and `design-tokens/theme.css` for Tailwind utilities. Keep them aligned when changing tokens.
- For landing implementation, SEO/performance work, or UI review, read the matching `skills/*/SKILL.md` only when the task needs it. These files are project workflows.

## Build conventions

- Use semantic HTML and accessible, keyboard-operable controls. Preserve visible focus, useful labels, sensible heading order, responsive layouts, and reduced-motion preferences.
- Keep page content in Server Components by default. Add Client Components only for interaction and keep their boundaries small. Prefer typed props, clear component names, and existing project conventions.
- Use shadcn/ui primitives for interactive UI when appropriate; customize through semantic tokens and local classes. Avoid copying a shadcn demo theme over Tutorly tokens.
- Use `next/image` for content images, with meaningful `alt` or empty `alt` for decorative images, stable dimensions, and loading priority only for actual above-the-fold images. Load fonts through `next/font` when available.
- Make every CTA lead to a real route or working action. Do not publish fabricated tutor data, metrics, ratings, reviews, guarantees, or legal claims.

## Search and performance

- Give each indexable page a unique, accurate title, description, canonical URL when the public origin is known, and suitable Open Graph metadata. Use App Router Metadata APIs and file conventions for icons, sitemap, and robots when the routes exist.
- Match `<html lang>` to the page language. Use one clear H1 and descriptive link text. Add structured data only for real, visible facts and valid schema types.
- Keep the landing page useful without client JavaScript. Control third-party scripts, heavy libraries, image payloads, and layout shifts. Measure real issues before adding optimization machinery.

## Completion

For a requested UI implementation, inspect the actual page at mobile and desktop sizes when preview tools are available. Report what changed and any unresolved missing assets or product facts. Use the project's existing build/lint workflow when a requested verification or a concrete risk warrants it.
