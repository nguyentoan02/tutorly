import { HeartHandshake, ListChecks, Sparkles } from "lucide-react";
import Image from "next/image";

const benefits = [
  { title: "Your questions come first", description: "Spend time on the ideas that matter to you instead of following a one-size-fits-all path.", icon: ListChecks },
  { title: "Confidence grows with clarity", description: "Break difficult topics into smaller steps and make room for every question along the way.", icon: Sparkles },
  { title: "Learning feels more human", description: "Personal support helps you stay curious, motivated, and connected to your goal.", icon: HeartHandshake },
];

export function BenefitsSection() {
  return (
    <section aria-labelledby="benefits-heading" className="overflow-hidden bg-ocean/40 py-20 text-ink lg:py-28" id="why-tutorly">
      <div className="page-shell">
        <div className="max-w-[800px]">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-ink/80">Why Tutorly</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em]" id="benefits-heading">
            Tutoring that starts with understanding you.
          </h2>
          <p className="mt-5 max-w-[650px] text-lg leading-relaxed text-ink/75">
            You bring the goal. The right one-to-one support gives your questions, your pace, and your progress the attention they deserve.
          </p>
        </div>
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="overflow-hidden rounded-lg border border-ink/15 bg-white/40">
            <Image alt="" className="block aspect-[3/2] w-full object-cover lg:aspect-square lg:object-[80%_center]" height={933} loading="lazy" sizes="(max-width: 1024px) 90vw, 560px" src="/images/tutoring-session.webp" width={1400} />
          </div>
          <div className="divide-y divide-ink/15 border-y border-ink/15">
            {benefits.map(({ title, description, icon: Icon }) => (
              <div className="grid gap-4 py-6 sm:grid-cols-[58px_1fr] lg:gap-5 lg:py-8" key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-white/75 text-ink">
                  <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-[1.35rem] font-bold leading-tight tracking-[-0.025em]">{title}</h3>
                  <p className="mt-2 max-w-[43ch] leading-relaxed text-ink/75">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
