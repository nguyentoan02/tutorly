import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { MobileNav } from "@/components/landing/mobile-nav";
import { buttonVariants } from "@/components/ui/button";

const links = [
  { href: "/#subjects", label: "Subjects" },
  { href: "/#matching", label: "Matching" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#platform", label: "Platform" },
  { href: "/#faq", label: "FAQs" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur-sm" id="top">
      <div className="page-shell flex h-[72px] items-center justify-between gap-6">
        <Link aria-label="Tutorly home" className="font-display text-[1.65rem] font-extrabold tracking-[-0.06em] text-ink" href="/">
          tutorly<span className="text-deep-ocean">.</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a className="text-sm font-semibold text-ink/75 transition-colors hover:text-ink" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Link className={`${buttonVariants()} hidden lg:inline-flex`} href="/#subjects">
          Explore subjects <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
