import {
  BookOpenText,
  BriefcaseBusiness,
  Calculator,
  CodeXml,
  FlaskConical,
  GraduationCap,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const subjects: { title: string; description: string; icon: LucideIcon; accent: string }[] = [
  { title: "English", description: "Build fluency, sharpen your writing, and speak with confidence.", icon: BookOpenText, accent: "bg-[#e7f4fa]" },
  { title: "Math", description: "Make sense of the concepts, from the basics to big challenges.", icon: Calculator, accent: "bg-[#fff3c3]" },
  { title: "Science", description: "Explore the why behind biology, chemistry, and physics.", icon: FlaskConical, accent: "bg-[#eae8ff]" },
  { title: "Coding", description: "Turn ideas into projects and grow your problem-solving skills.", icon: CodeXml, accent: "bg-[#e2f2e9]" },
  { title: "Business", description: "Develop practical skills for work, study, and new ventures.", icon: BriefcaseBusiness, accent: "bg-[#ffe8df]" },
  { title: "Test preparation", description: "Approach your next exam with a clearer plan and focus.", icon: GraduationCap, accent: "bg-[#e6f0ff]" },
];

export function SubjectsSection() {
  return (
    <section aria-labelledby="subjects-heading" className="bg-white py-20 lg:py-28" id="subjects">
      <div className="page-shell">
        <div className="max-w-[680px]">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-deep-ocean">Find your focus</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink" id="subjects-heading">
            Where can a tutor take you next?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            From a new language to a big exam, choose what matters to you and start with a plan shaped around your goal.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map(({ title, description, icon: Icon, accent }) => (
            <article className="rounded-lg border border-border bg-card p-6 sm:p-7" key={title}>
              <div className={`flex h-14 w-14 items-center justify-center rounded-md ${accent}`}>
                <Icon aria-hidden="true" className="text-ink" size={27} strokeWidth={1.8} />
              </div>
              <h3 className="mt-7 font-display text-[1.35rem] font-bold tracking-[-0.025em] text-ink">{title}</h3>
              <p className="mt-2 max-w-[30ch] text-[0.98rem] leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 rounded-lg bg-muted px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-ink">Not sure where to begin? Your goal can start broad.</p>
          <Link className="inline-flex items-center gap-2 font-bold text-ink underline underline-offset-4 hover:no-underline" href="#matching">
            See how matching could work <ArrowUpRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
