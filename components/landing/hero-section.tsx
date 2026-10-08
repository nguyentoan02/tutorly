import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { buttonVariants } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-ocean">
      <div className="page-shell grid items-center gap-14 pb-16 pt-14 lg:min-h-[670px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-20 lg:pt-20">
        <div className="relative z-10 max-w-[650px]">
          <p className="mb-5 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-ink/75 sm:text-sm">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-ink" />
            One-to-one learning, made personal
          </p>
          <h1 className="font-display text-[clamp(3.25rem,6.1vw,5.5rem)] font-extrabold leading-[1.035] tracking-[-0.055em] text-ink" id="hero-heading">
            Find a tutor who makes it <span className="decoration-signal-yellow underline decoration-[0.14em] underline-offset-[0.04em]">click.</span>
          </h1>
          <p className="mt-6 max-w-[570px] text-lg leading-[1.55] text-ink/80 sm:text-xl">
            Your goal, your pace, your way of learning. Start with a subject and take the first step toward tutoring that fits you.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className={buttonVariants({ size: "lg" })} href="#subjects">
              Explore subjects <ArrowRight aria-hidden="true" size={19} />
            </a>
            <a className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md px-5 text-base font-bold text-ink underline-offset-4 hover:underline" href="#matching">
              See the matching model <ArrowUpRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:justify-self-end">
          <div className="absolute -right-5 -top-5 z-10 hidden rotate-6 rounded-md bg-signal-yellow px-5 py-3 font-display text-base font-extrabold tracking-[-0.03em] text-ink sm:block">
            Made for your next aha moment
          </div>
          <div className="relative aspect-[4/4.45] overflow-hidden rounded-lg border-[7px] border-white bg-[#dbeef5] sm:aspect-[4/4.25]">
            <Image
              alt=""
              className="object-cover object-[center_31%]"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 500px"
              src="/images/tutorly-hero.webp"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 z-10 flex items-center justify-between gap-4 rounded-md bg-ink px-5 py-4 text-white sm:-left-7 sm:right-10 sm:px-6">
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.17em] text-ocean">Your learning journey</p>
              <p className="mt-1 font-display text-base font-bold sm:text-lg">Start where you are.</p>
            </div>
            <ArrowUpRight aria-hidden="true" className="shrink-0 text-ocean" size={25} />
          </div>
        </div>
      </div>
      <div className="border-t border-ink/15 bg-white/20">
        <div className="page-shell grid gap-3 py-5 text-sm font-semibold text-ink sm:grid-cols-3 sm:gap-6 sm:text-center">
          <p>01 <span className="mx-2 text-ink/30">/</span> Explore a subject</p>
          <p>02 <span className="mx-2 text-ink/30">/</span> Understand the fit</p>
          <p>03 <span className="mx-2 text-ink/30">/</span> Picture your progress</p>
        </div>
      </div>
    </section>
  );
}
