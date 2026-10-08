import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { PlatformFeatureCards } from "@/components/landing/platform-feature-cards";

export function PlatformSection() {
  return (
    <section aria-labelledby="platform-heading" className="bg-ocean/15 py-20 lg:py-28" id="platform">
      <div className="page-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-[710px]">
            <p className="text-xs font-bold uppercase tracking-[0.17em] text-deep-ocean">The platform vision</p>
            <h2 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink" id="platform-heading">
              More support, from first match to every lesson.
            </h2>
            <p className="mt-5 max-w-[630px] text-lg leading-relaxed text-muted-foreground">
              Tutorly can grow into a learning workspace where the practical parts of tutoring feel as connected as the lessons themselves.
            </p>
          </div>
          <span className="inline-flex w-fit shrink-0 rounded-full border border-ink/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink">Planned capabilities</span>
        </div>
        <PlatformFeatureCards />
        <div className="mt-9 flex flex-col gap-4 rounded-lg border border-ink bg-ink px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="max-w-[64ch] text-sm leading-relaxed text-white/80"><strong className="text-white">The vision:</strong> matching, scheduling, assignments, payments, and AI practice could connect the full learning journey in one place.</p>
          <Link className="inline-flex min-h-12 shrink-0 items-center gap-2 font-bold text-white underline underline-offset-4 hover:no-underline" href="#subjects">Explore subjects <ArrowUpRight aria-hidden="true" size={18} /></Link>
        </div>
      </div>
    </section>
  );
}
