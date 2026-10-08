# Tutorly landing page

An English-language tutoring landing page built with Next.js App Router, TypeScript, Tailwind CSS v4, and shadcn/ui conventions. It is a frontend presentation of Tutorly's proposed matching and learning platform.

## Run locally

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy

The project is configured as a Next.js static export for Cloudflare Pages. Connect the Git repository to Pages using the `Next.js (Static HTML Export)` preset, build command `npm run build`, and output directory `out`. Cloudflare builds on every push to the production branch. Follow [guide_deploy.md](guide_deploy.md) to connect `www.tutorly.io.vn` while keeping Email Routing active.

## Structure

- `app/`: landing route, global CSS, metadata, icon, and robots.
- `components/landing/`: page sections and responsive navigation.
- `components/ui/`: reusable shadcn-style button.
- `design-tokens/`: Tutorly color, font, and layout tokens.
- `public/images/`: optimized, original illustrative hero portrait.
- `skills/`: project workflows for landing, UI review, and SEO/performance.
- `docs/product-blueprint.md`: proposed matching algorithm, LMS, payments, and AI assignment architecture.

## Product scope

The page has working section navigation, a mobile menu, FAQs, and motion previews for planned platform features. It does not collect personal information or require environment variables. The homepage explains a **proposed** matching model and learning workspace; these are product specifications, not live features. See [docs/product-blueprint.md](docs/product-blueprint.md) for the scoring formula, LMS modules, payment flow, AI-assisted assignment workflow, and delivery sequence.
