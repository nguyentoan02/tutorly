# Tutorly design system

This is the visual source of truth for Tutorly landing pages. The supplied Preply reference informed the initial color, typography, and collage direction; Tutorly copy, identity, photography, and proof must be original.

## Product and voice

Tutorly helps learners find a tutor who fits their goal, level, schedule, and budget. A landing page should make that outcome clear in the first screen and lead to one primary action. In the current frontend-only concept, that action is subject exploration; replace it with a real signup or tutor discovery destination when one exists. Use direct, encouraging copy. Write in the page's declared locale; do not mix English and Vietnamese in one journey without a reason. Never invent tutor counts, ratings, testimonials, prices, guarantees, or availability.

## Visual direction

- Calm, credible marketplace with an energetic first impression. Use a solid ocean blue hero, near-black type, white cards, and a quiet light gray page canvas.
- A real, licensed portrait of a tutor or learner can anchor the hero. Use restrained overlap and small label stickers only when they add context. Do not reproduce Preply branding, slogans, layouts, or photo treatment literally.
- Keep the functional catalog flat. Use borders and spacing for hierarchy; avoid decorative gradients, heavy shadows, and generic stock imagery.
- One clear primary CTA per section. Primary actions use ink on light surfaces and white on ink surfaces. Ocean blue is a canvas, not the default button fill.

## Color roles

| Token | Value | Use |
| --- | --- | --- |
| Ocean | `#78c9e8` | Hero and occasional full-width brand section |
| Deep ocean | `#357d9a` | Accessible small text accent on light surfaces |
| Ink | `#121117` | Main text and primary CTA |
| White | `#ffffff` | Main/card surface and text on ink |
| Mist | `#f4f4f8` | Alternate section and quiet hover surface |
| Border | `#dcdce5` | Cards, inputs, dividers |
| Graphite | `#4d4c5c` | Secondary copy |
| Yellow | `#ffdf3d` | Small promotional highlight only |
| Sky | `#99c5ff` | Limited illustrative detail |

Use semantic tokens (`background`, `foreground`, `primary`, `muted`, `border`, `ring`) in components. The named palette is for brand surfaces and deliberate accents. Check actual foreground/background pairs for WCAG AA contrast, including focused, disabled, and hover states. Do not use yellow or ocean blue as small text on white.

## Type

- Display: Manrope 700, tight tracking (`-0.02em` to `-0.035em`) and `1.05` to `1.15` line height. Use for hero and section headings.
- Body and UI: Figtree 400/600, `1.5` to `1.65` line height. Use for navigation, forms, cards, and paragraphs.
- Load with `next/font` when an app exists. The CSS token files include system fallbacks until fonts are wired up.
- Suggested responsive scale: hero `clamp(2.75rem, 5.5vw, 5rem)`, section heading `clamp(2rem, 3.5vw, 3rem)`, body `1rem` to `1.125rem`. Keep line lengths readable: about 8 to 12 words for a hero line and 55 to 75 characters for longer body copy.

## Layout and components

- Content width: up to `1200px`, with fluid side padding (`16px` mobile, `24px` tablet, `32px` desktop). Use a 4px spacing rhythm without redefining Tailwind's numeric spacing utilities.
- Section padding: about `64px` mobile to `96px` desktop when content warrants it. Let content and viewport determine the exact spacing.
- Functional corners: 4px for buttons/inputs/chips, 8px for cards and large surfaces. Borders are 1px. Keep shadows rare and subtle.
- Navigation: logo, essential route links, and one primary action. Collapse responsibly on small screens; preserve keyboard access and visible focus.
- Hero: one H1, a specific benefit, concise supporting text, primary CTA, and relevant visual. Ensure the main message and CTA remain useful without the image.
- Tutor/subject cards: semantic link when the whole card navigates; meaningful title, short supporting detail, visible hover/focus treatment, and a real destination.
- Forms: visible labels, purpose-specific `autocomplete`, inline error help, and explicit success/disabled states. Use shadcn/ui primitives where they fit; style them through semantic tokens.
- Use a pale ocean surface (`bg-ocean/40`) with ink text for the Why Tutorly section and footer. Keep borders and icon surfaces visible against the tint. Include useful footer navigation, contact/help and legal links only when those destinations exist.
- When describing future matching, LMS, payments, or AI features, label them as proposed or planned and keep the current landing experience distinct from future capabilities.

## Implementation bridge

`design-tokens/tokens.json` is the portable token inventory. `design-tokens/variables.css` defines browser variables and shadcn semantic colors. `design-tokens/theme.css` exposes Tailwind v4 utilities. `app/globals.css` imports Tailwind and shadcn support CSS, followed by `variables.css` and `theme.css`. Do not import the two token CSS files elsewhere or duplicate their declarations in generated shadcn styles. Keep token changes synchronized across these files.

## Content and imagery guardrails

Tutorly is an independent brand. Do not use the wordmark, slogans, named people, copied component designs, or scraped portraits from the reference site. Use approved Tutorly assets when available. For a prototype without assets, use a restrained abstract illustration or a clearly labeled placeholder; do not present placeholder people or social proof as real customers.
