---
name: tutorly-landing
description: Build or revise Tutorly public landing pages and sections in Next.js with the repository design system.
---

# Tutorly landing implementation

Use this skill for page creation, visual redesign, or new landing sections. Read `../../DESIGN.md` and the relevant token files before choosing visual styles. Inspect the existing app structure and use its package manager and component conventions.

Shape the page around the actual audience and offer: a specific promise, one primary next step, supporting proof that exists, tutor discovery or matching information, and a useful closing CTA. Use original Tutorly copy and licensed or approved imagery. If a product detail or destination is missing, make a restrained implementable choice and state the gap; do not invent a result or send the user to `#`.

Use Next.js App Router and TypeScript when creating the app. Render informational sections on the server. Keep interaction in small Client Components. Compose shadcn/ui primitives where they improve controls; apply Tutorly semantic colors and radii. Build mobile-first, preserving comfortable text measure, touch targets, keyboard use, and visible focus. Keep motion subtle and respect reduced motion.

For any public page, supply meaningful metadata, one H1, a correct language attribute, and descriptive links. Use `next/image` and `next/font` appropriately. If implementing a full page, inspect mobile and desktop rendering when tools are available and fix visible overflow, broken hierarchy, and dead controls.
