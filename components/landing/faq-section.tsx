const questions = [
  {
    question: "How would Tutorly match me with a tutor?",
    answer: "The proposed model checks essentials such as subject, level, and availability first. It would then weigh your goal, schedule, teaching preferences, budget, and level, and explain the reasons behind each suggestion. Live tutor matching is not available on this page yet.",
  },
  {
    question: "Where should I start?",
    answer: "Choose the subject that feels most relevant to your next goal. A clear starting point makes it easier to decide what kind of support you need.",
  },
  {
    question: "What if I am not sure what my goal is yet?",
    answer: "That is okay. Start with a topic you are curious about or one you would like to feel more confident in. Your goal can become clearer as you learn.",
  },
  {
    question: "Is one-to-one learning only for school subjects?",
    answer: "No. People learn for exams, work, creative projects, and everyday curiosity. Tutorly highlights a range of subjects to help you imagine what comes next.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Your pace is personal. Think about the time you can give and the way you like to practice when shaping a learning plan that works for you.",
  },
];

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="bg-white py-20 lg:py-28" id="faq">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-deep-ocean">Good to know</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.3vw,3.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink" id="faq-heading">
            Your questions, answered.
          </h2>
        </div>
        <div className="border-t border-border">
          {questions.map(({ question, answer }) => (
            <details className="group border-b border-border py-1" key={question}>
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-left font-display text-lg font-bold tracking-[-0.02em] text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                {question}
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-xl font-normal leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-[65ch] pb-6 pr-12 leading-relaxed text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
