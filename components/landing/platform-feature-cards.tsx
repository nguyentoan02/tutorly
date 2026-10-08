"use client";

import { ArrowUpRight, CalendarDays, ClipboardCheck, CreditCard, Sparkles } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const features = [
  {
    icon: CalendarDays,
    title: "A shared lesson calendar",
    description: "Give tutors and learners one place to plan sessions, handle changes, and keep track of what is next.",
    reveal: "One change. Both sides stay in sync.",
  },
  {
    icon: ClipboardCheck,
    title: "Assignments & progress",
    description: "Share homework, collect submissions, leave feedback, and see how learning develops over time.",
    reveal: "Feedback follows the learner into the next lesson.",
  },
  {
    icon: CreditCard,
    title: "Clear lesson payments",
    description: "Show the hourly price before booking and track paid lessons, receipts, and tutor payouts.",
    reveal: "Know the price before the hour begins.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted practice",
    description: "Turn tutor-approved lesson material into draft exercises that a tutor reviews before assigning.",
    reveal: "A source page becomes tutor-reviewed practice.",
  },
];

export function PlatformFeatureCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map(({ icon: Icon, title, description, reveal }, index) => {
        const active = activeIndex === index;
        const detailId = `platform-feature-${index}`;

        return (
          <article
            className={cn(
              "group relative flex min-h-[370px] flex-col overflow-hidden rounded-lg border p-6 shadow-none transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none sm:p-7",
              active
                ? "-translate-y-2 border-ink bg-ink text-white shadow-[0_18px_38px_rgba(18,17,23,0.14)]"
                : "border-border bg-white text-ink",
            )}
            key={title}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveIndex(index);
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse" || event.pointerType === "pen") setActiveIndex(null);
            }}
          >
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border-[18px] border-ocean/20 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
                active ? "scale-100 opacity-100" : "scale-50 opacity-0",
              )}
            />
            <div className="relative z-0 flex items-start justify-between gap-4">
              <span
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-md text-ink transition-[background-color,transform] duration-500 motion-reduce:transform-none motion-reduce:transition-none",
                  active ? "-rotate-12 scale-110 bg-signal-yellow" : "bg-ocean/40",
                )}
              >
                <Icon aria-hidden="true" size={25} strokeWidth={1.7} />
              </span>
              <span className={cn("font-display text-xs font-extrabold tracking-[0.13em]", active ? "text-ocean" : "text-deep-ocean")}>
                0{index + 1} / 04
              </span>
            </div>

            <h3 className="relative z-0 mt-8 font-display text-[1.28rem] font-bold leading-tight tracking-[-0.025em]">{title}</h3>
            <p className={cn("relative z-0 mt-3 text-sm leading-relaxed", active ? "text-white/75" : "text-muted-foreground")}>{description}</p>

            <div className={cn("relative z-0 mt-auto border-t pt-5", active ? "border-white/25" : "border-border")}>
              <div className="flex items-start justify-between gap-3">
                <div className="relative min-h-[4.25rem] flex-1">
                  <p
                    aria-hidden={active}
                    className={cn(
                      "absolute inset-0 text-xs font-bold uppercase tracking-[0.1em] transition-[opacity,transform] duration-300 motion-reduce:transition-none",
                      active ? "-translate-y-2 opacity-0" : "translate-y-0 text-muted-foreground opacity-100",
                    )}
                  >
                    Hover or tap to explore
                  </p>
                  <p
                    aria-hidden={!active}
                    className={cn(
                      "absolute inset-0 text-sm font-semibold leading-snug transition-[opacity,transform] duration-500 motion-reduce:transition-none",
                      active ? "translate-y-0 text-white opacity-100" : "translate-y-3 opacity-0",
                    )}
                    id={detailId}
                  >
                    {reveal}
                  </p>
                </div>
                <ArrowUpRight aria-hidden="true" className={cn("shrink-0 transition-transform duration-500 motion-reduce:transform-none motion-reduce:transition-none", active ? "-translate-y-1 translate-x-1 text-ocean" : "text-ink")} size={21} />
              </div>
            </div>

            <button
              aria-controls={detailId}
              aria-expanded={active}
              aria-label={`Explore ${title}`}
              className="absolute inset-0 z-10 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              onBlur={() => setActiveIndex(null)}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setActiveIndex(null);
                  event.currentTarget.blur();
                }
              }}
              type="button"
            />
          </article>
        );
      })}
    </div>
  );
}
