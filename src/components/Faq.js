import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeader } from "./Reveal";

const FAQS = [
  {
    q: "Why choose Syotian over freelancers or agencies?",
    a: "You get a fully aligned team with single-point accountability — instead of managing multiple freelancers yourself, or dealing with fragmented agency workflows.",
  },
  {
    q: "How are specialist teams formed?",
    a: "Based on your project's specific requirements, using curated, pre-vetted specialists. The team is assembled around the work — never the other way around.",
  },
  {
    q: "What ensures quality?",
    a: "Pre-vetted talent, a dedicated mediator and centralized oversight with multiple checkpoints throughout execution.",
  },
  {
    q: "How are risks handled?",
    a: "A defined PRD, controlled revisions and a structured execution workflow. Scope is locked before work begins, and feedback is handled in two consolidated cycles.",
  },
  {
    q: "How is pricing decided?",
    a: "Based on scope, complexity and team requirements — quoted transparently at the confirmation meet, before any work begins.",
  },
];

export default function Faq() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeader
              testId="faq-header"
              overline="FAQ"
              title="Answers, upfront."
              description="The questions every serious client asks — answered the way we work: directly."
            />
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-white/10"
                    data-testid={`faq-item-${i + 1}`}
                  >
                    <AccordionTrigger
                      data-testid={`faq-trigger-${i + 1}`}
                      className="py-7 text-left font-display text-lg tracking-tight text-[#F3F2EE] transition-colors duration-300 hover:text-white hover:no-underline md:text-xl [&[data-state=open]>svg]:text-white"
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="font-mono text-xs tracking-[0.2em] text-white/30">
                          0{i + 1}
                        </span>
                        {f.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent
                      data-testid={`faq-content-${i + 1}`}
                      className="pb-7 pl-11 text-sm leading-relaxed text-white/55 md:text-base"
                    >
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
