import { ArrowUpRight, Check, SlidersHorizontal, Sparkles } from "lucide-react";
import Link from "next/link";

const factors = [
  { label: "Goal & subject fit", weight: 35 },
  { label: "Schedule overlap", weight: 25 },
  { label: "Teaching approach", weight: 20 },
  { label: "Budget fit", weight: 10 },
  { label: "Learner level", weight: 10 },
];

export function MatchingSection() {
  return (
    <section aria-labelledby="matching-heading" className="bg-white py-20 lg:py-28" id="matching">
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
        <div className="max-w-[510px]">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-deep-ocean">The matching model</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink" id="matching-heading">
            The right fit is more than the right subject.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We are designing a transparent way to compare tutors around the details that matter to you, from your goal to your schedule and learning style.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-3 text-sm leading-relaxed text-ink"><Check aria-hidden="true" className="mt-0.5 shrink-0 text-deep-ocean" size={19} /><span><strong>First, check the essentials:</strong> subject expertise, learning level, availability, and lesson format.</span></li>
            <li className="flex gap-3 text-sm leading-relaxed text-ink"><Check aria-hidden="true" className="mt-0.5 shrink-0 text-deep-ocean" size={19} /><span><strong>Then, rank the fit:</strong> score the remaining preferences with clear weights.</span></li>
            <li className="flex gap-3 text-sm leading-relaxed text-ink"><Check aria-hidden="true" className="mt-0.5 shrink-0 text-deep-ocean" size={19} /><span><strong>Finally, explain why:</strong> show the reasons behind a recommendation so you can decide.</span></li>
          </ul>
          <Link className="mt-9 inline-flex min-h-12 items-center gap-2 font-bold text-ink underline underline-offset-4 hover:no-underline" href="#subjects">
            Explore the subjects <ArrowUpRight aria-hidden="true" size={19} />
          </Link>
        </div>

        <div className="relative rounded-lg border border-border bg-muted p-4 sm:p-6">
          <div className="absolute -right-3 -top-4 flex h-11 w-11 items-center justify-center rounded-md bg-signal-yellow text-ink sm:-right-5"><Sparkles aria-hidden="true" size={22} /></div>
          <div className="rounded-lg border border-border bg-white p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-deep-ocean">Proposed scoring model</p>
                <h3 className="mt-2 font-display text-[1.55rem] font-extrabold tracking-[-0.035em] text-ink">How match strength is shaped</h3>
              </div>
              <SlidersHorizontal aria-hidden="true" className="shrink-0 text-ink" size={26} />
            </div>
            <div className="mt-8 space-y-5">
              {factors.map(({ label, weight }) => (
                <div key={label}>
                  <div className="flex items-center justify-between gap-3 text-sm font-semibold text-ink"><span>{label}</span><span>{weight}%</span></div>
                  <div aria-hidden="true" className="mt-2 h-2 rounded-full bg-muted"><div className="h-full rounded-full bg-ink" style={{ width: `${weight}%` }} /></div>
                </div>
              ))}
            </div>
            <p className="mt-7 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
              Match strength = the weighted fit of these factors, after essential requirements pass. A live score should appear only when there is enough information to support it.
            </p>
            <div className="mt-8 rounded-md bg-ocean/35 px-4 py-3 text-sm leading-relaxed text-ink">
              <strong>A score should tell a story.</strong> Suggested tutors would come with clear reasons and room to adjust your preferences.
            </div>
          </div>
          <p className="px-1 pt-4 text-xs leading-relaxed text-muted-foreground">Illustrative weights for a future matching engine; this page does not display live tutor matches.</p>
        </div>
      </div>
    </section>
  );
}
