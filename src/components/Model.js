import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Reveal, SectionHeader, EASE } from "./Reveal";

const CHAPTERS = [
  {
    num: "01",
    title: "The old way is broken.",
    body: "Searching platforms, vetting strangers, coordinating scattered freelancers — companies burn weeks assembling talent instead of building. The result: misaligned expectations, inconsistent quality, slipping deadlines.",
  },
  {
    num: "02",
    title: "Team as a Service.",
    body: "Syotian assembles a curated team of pre-vetted specialists around your project's exact requirements — execution-ready, on demand. You don't hire individuals. You commission an outcome.",
  },
  {
    num: "03",
    title: "One point of accountability.",
    body: "A dedicated mediator owns your project end to end — requirements, coordination, quality, delivery. You talk to one person. The coordination burden is zero.",
  },
  {
    num: "04",
    title: "Execution by design.",
    body: "A PRD-first workflow with structured checkpoints and controlled revisions keeps scope tight and quality uncompromised — from kickoff to ship. No drift, no surprises.",
  },
];

export default function Model() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.55", "end 0.7"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      CHAPTERS.length - 1,
      Math.max(0, Math.floor(v * CHAPTERS.length))
    );
    setActive(idx);
  });

  return (
    <section
      id="model"
      data-testid="model-section"
      className="scroll-mt-24 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          testId="model-header"
          overline="The Syotian Model"
          title={
            <>
              Not an agency.
              <br />
              Not a marketplace.
            </>
          }
          description="A structured execution system that delivers complete solutions through coordinated, purpose-built teams."
        />

        <div ref={ref} className="relative mt-16 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12">
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-36">
              <div className="relative h-[220px] overflow-hidden lg:h-[280px]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={active}
                    initial={{ y: 80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -80, opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="block font-display text-[160px] font-light leading-none text-white/10 lg:text-[220px]"
                    data-testid="model-active-number"
                  >
                    {CHAPTERS[active].num}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-px w-24 bg-white/15">
                  <motion.div
                    className="h-px bg-white"
                    animate={{ width: `${((active + 1) / CHAPTERS.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Chapter {CHAPTERS[active].num} / 04
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {CHAPTERS.map((c, i) => (
              <Reveal
                key={c.num}
                className={`border-t border-white/10 py-14 md:py-20 ${
                  i === CHAPTERS.length - 1 ? "border-b" : ""
                }`}
              >
                <div data-testid={`model-chapter-${c.num}`}>
                  <span className="font-mono text-xs tracking-[0.3em] text-white/30 md:hidden">
                    {c.num}
                  </span>
                  <h3 className="mt-2 font-display text-3xl tracking-tight text-[#F3F2EE] md:mt-0 md:text-5xl">
                    {c.title}
                  </h3>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
