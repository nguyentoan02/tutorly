---
name: tutorly-seo-performance
description: Improve or review SEO, indexing, metadata, image loading, and runtime performance of a Tutorly Next.js page.
---

# Tutorly SEO and performance

Use this skill for a focused SEO or speed task, or before shipping a substantial public landing page. Inspect the route, metadata, rendered content, assets, and existing measurements first. Prioritize problems that affect discoverability or real user experience.

Use Next.js Metadata APIs and file conventions for titles, descriptions, canonical URLs, Open Graph images, icons, sitemap, and robots. Set absolute URL metadata only after the public origin is known. Keep canonical, robots, sitemap, and locale alternates consistent with actual published routes. Use JSON-LD only for true, visible information and a suitable schema type; avoid invented reviews or FAQ markup for content that is absent.

Keep the primary content server-rendered. Check `next/image` dimensions and `sizes`, the actual LCP image, font loading with `next/font`, route-level client bundles, and third-party scripts. Prefer removing unnecessary work over adding complexity. When field measurements exist, target good Core Web Vitals at the 75th percentile for mobile and desktop: LCP at most 2.5 seconds, INP at most 200 milliseconds, and CLS at most 0.1. If measurements are absent, describe the changes as likely improvements rather than measured gains.

Finish with specific findings and changed files. State any limits caused by a missing deployment URL, real imagery, analytics, or field data.
