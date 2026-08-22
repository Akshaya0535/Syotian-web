import { motion } from "framer-motion";
import { Reveal, SectionHeader, EASE } from "./Reveal";

const STEPS = [
  {
    num: "01",
    title: "Request",
    body: "Tell us what you need built. One brief is enough to start.",
  },
  {
    num: "02",
    title: "Alignment meet",
    body: "Client, mediator and service specialist in one room. Requirements, deadlines and every detail that matters — gathered once, gathered properly.",
  },
  {
    num: "03",
    title: "PRD within 48 hours",
    chip: "48H",
    body: "A second meet confirms the timeline and locks a precise PRD. No ambiguity, no drifting scope.",
  },
  {
    num: "04",
    title: "Quote",
    body: "Transparent pricing based on scope, complexity and team composition — quoted before any work begins.",
  },
  {
    num: "05",
    title: "Project room",
    body: "After the upfront payment, you receive credentials to your private Rocket.Chat project panel — your window into execution.",
  },
  {
    num: "06",
    title: "Execution",
    chip: "2 REVISION CYCLES",
    body: "We build to the PRD with continuous checkpoints. Feedback is consolidated after completion — two focused revision cycles, so flow never breaks.",
  },
  {
    num: "07",
    title: "Ship",
    body: "When the PRD is met and payment is complete, the product is yours. Delivered, documented, done.",
  },
];

export default function Workflow() {
  return (
    <section
      id="process"
      data-testid="process-section"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          testId="process-header"
          overline="How it works"
          title="A system built for certainty."
          description="Seven steps. No chaos. Every project runs through the same structured workflow — so quality is a process, not a promise."
        />

        <div className="relative mt-16 md:mt-24">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 2.2, ease: EASE }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-white/15 md:left-[11px]"
          />

          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.05}>
              <div
                data-testid={`workflow-step-${s.num}`}
                className="group relative grid grid-cols-[32px_1fr] gap-6 py-8 md:grid-cols-[80px_1fr] md:gap-12 md:py-10"
              >
                <div className="relative">
                  <span className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-white/25 bg-[#0A0A0A] transition-colors duration-500 group-hover:border-white md:h-[23px] md:w-[23px]">
                    <span className="h-[5px] w-[5px] rounded-full bg-white/40 transition-colors duration-500 group-hover:bg-white" />
                  </span>
                </div>
                <div className="flex flex-col gap-3 border-b border-white/5 pb-8 md:flex-row md:items-baseline md:justify-between md:pb-10">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-mono text-xs tracking-[0.3em] text-white/30">
                        {s.num}
                      </span>
                      <h3 className="font-display text-2xl tracking-tight text-[#F3F2EE] md:text-3xl">
                        {s.title}
                      </h3>
                      {s.chip && (
                        <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
                          {s.chip}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
                      {s.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
