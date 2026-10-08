import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const exploreLinks = [
  { href: "/#subjects", label: "Explore subjects" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#why-tutorly", label: "Why Tutorly" },
  { href: "/#faq", label: "FAQs" },
];

const visionLinks = [
  { href: "/#matching", label: "Matching model" },
  { href: "/#platform", label: "Platform vision" },
];

const linkClass =
  "inline-flex min-h-10 items-center text-sm font-medium text-ink/75 transition-colors hover:text-ink hover:underline hover:underline-offset-4 focus-visible:outline-ink";

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-ocean/40 text-ink">
      <div className="page-shell pt-16 lg:pt-20">
        <div className="grid gap-14 border-b border-ink/15 pb-14 lg:grid-cols-[1.25fr_1fr] lg:gap-24 lg:pb-20">
          <div className="max-w-[520px]">
            <Link
              aria-label="Tutorly home"
              className="inline-flex rounded-md font-display text-[2rem] font-extrabold leading-none tracking-[-0.06em] text-ink focus-visible:outline-ink"
              href="/"
            >
              tutorly<span className="text-deep-ocean">.</span>
            </Link>
            <p className="mt-7 max-w-[440px] font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.25] tracking-[-0.035em] text-ink">
              A more personal path to progress.
            </p>
            <p className="mt-4 max-w-[430px] text-sm leading-relaxed text-ink/75 sm:text-base">
              Explore what you want to learn and see how tutoring could fit your goals, your pace, and your way of thinking.
            </p>
            <Link
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-bold text-white transition-colors hover:bg-[#303039] focus-visible:outline-ink"
              href="/#subjects"
            >
              Explore subjects <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <nav aria-label="Explore Tutorly">
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Explore</h2>
              <ul className="space-y-2">
                {exploreLinks.map((link) => (
                  <li key={link.href}><Link className={linkClass} href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Tutorly platform vision">
              <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-ink">Our vision</h2>
              <ul className="space-y-2">
                {visionLinks.map((link) => (
                  <li key={link.href}><Link className={linkClass} href={link.href}>{link.label}</Link></li>
                ))}
              </ul>
              <p className="mt-5 max-w-[24ch] text-xs leading-relaxed text-ink/65">
                Matching and learning tools shown on this site are planned features.
              </p>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-ink/65 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Tutorly</p>
          <p>One-to-one learning, built around you.</p>
          <a className="inline-flex min-h-10 w-fit items-center gap-2 font-semibold text-ink/80 hover:text-ink focus-visible:outline-ink" href="#top">
            Back to top <ArrowUp aria-hidden="true" size={16} />
          </a>
        </div>
        <div aria-hidden="true" className="select-none border-t border-ink/10 pb-2 pt-5 font-display text-[clamp(4rem,16.5vw,12.5rem)] font-extrabold leading-none tracking-[-0.075em] text-ink/[0.08]">
          tutorly.
        </div>
      </div>
    </footer>
  );
}
