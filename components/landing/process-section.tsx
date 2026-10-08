import { ArrowUpRight, CalendarDays, GraduationCap, Target } from "lucide-react";
import Link from "next/link";

const steps = [
  { number: "01", title: "Choose your subject", description: "Start with the skill or topic you want to work on. You can keep your goal broad for now.", icon: GraduationCap },
  { number: "02", title: "Tell us what matters", description: "Share your level, the result you are aiming for, and when learning fits your life.", icon: Target },
  { number: "03", title: "Get ready to begin", description: "Review your learning brief so the next step feels clear and personal.", icon: CalendarDays },
];

export function ProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="bg-muted py-20 lg:py-28" id="how-it-works">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="max-w-[490px]">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-deep-ocean">The proposed journey</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink" id="process-heading">
            Getting started should feel easy.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A better tutoring experience can begin with understanding you. This is the simple journey Tutorly is designed to support.
          </p>
          <Link className="mt-8 inline-flex min-h-12 items-center gap-2 font-bold text-ink underline underline-offset-4 hover:no-underline" href="#matching">
            See the matching model <ArrowUpRight aria-hidden="true" size={20} />
          </Link>
        </div>
        <div className="border-t border-ink/15">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div className="grid gap-4 border-b border-ink/15 py-8 sm:grid-cols-[72px_1fr_auto] sm:gap-6" key={number}>
              <span className="font-display text-[2rem] font-extrabold leading-none tracking-[-0.06em] text-deep-ocean">{number}</span>
              <div>
                <h3 className="font-display text-[1.45rem] font-bold leading-tight tracking-[-0.03em] text-ink">{title}</h3>
                <p className="mt-2 max-w-[47ch] leading-relaxed text-muted-foreground">{description}</p>
              </div>
              <Icon aria-hidden="true" className="hidden text-ink/65 sm:block" size={27} strokeWidth={1.6} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
