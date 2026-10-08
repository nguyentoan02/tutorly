import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export function ClosingSection() {
  return (
    <section aria-labelledby="closing-heading" className="bg-ocean py-20 lg:py-24">
      <div className="page-shell flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-[750px]">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-ink/75">Start with one simple step</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.25rem)] font-extrabold leading-[1.1] tracking-[-0.045em] text-ink" id="closing-heading">
            Your next breakthrough starts here.
          </h2>
          <p className="mt-5 max-w-[540px] text-lg leading-relaxed text-ink/75">Explore what you want to learn and see how a more personal tutoring experience could take shape.</p>
        </div>
        <Link className={`${buttonVariants({ size: "lg" })} shrink-0`} href="/#subjects">
          Explore subjects <ArrowUpRight aria-hidden="true" size={19} />
        </Link>
      </div>
    </section>
  );
}
