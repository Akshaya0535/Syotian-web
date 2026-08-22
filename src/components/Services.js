import { Code2, Compass, Clapperboard, Cloud } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const SERVICES = [
  {
    id: "software-engineering",
    num: "S.01",
    icon: Code2,
    title: "Software Engineering",
    tagline: "We write the code that ships your vision.",
    items: [
      "Web development",
      "Mobile app development",
      "Backend systems & APIs",
      "Custom technical builds",
      "Any stack or domain",
    ],
    span: "md:col-span-4",
  },
  {
    id: "product-development",
    num: "S.02",
    icon: Compass,
    title: "Product Development",
    tagline: "From idea to a product users love.",
    items: [
      "UX & interface design",
      "Web & app experiences",
      "Digital product development",
      "Product strategy & roadmap",
    ],
    span: "md:col-span-2",
  },
  {
    id: "media-production",
    num: "S.03",
    icon: Clapperboard,
    title: "Media Production",
    tagline: "Content that looks as good as your product.",
    items: [
      "Video pre-production",
      "Video post-production",
      "Motion & animation",
      "Creative direction",
    ],
    span: "md:col-span-2",
  },
  {
    id: "cloud-infrastructure",
    num: "S.04",
    icon: Cloud,
    title: "Cloud Infrastructure",
    tagline: "Scalable, secure systems built to last.",
    items: [
      "Cloud setup & management",
      "Backend systems & ops",
      "DevOps & CI/CD pipelines",
      "Security & reliability",
    ],
    span: "md:col-span-4",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          testId="services-header"
          overline="Capabilities"
          title="Everything your product needs."
          description="Four practices, one assembled team. Specialists are matched to your project — never the other way around."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:grid-cols-6 md:gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className={s.span}>
              <div
                data-testid={`service-card-${s.id}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.01] p-8 transition-[background-color,border-color] duration-500 hover:border-white/25 hover:bg-white/[0.03] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <s.icon
                    size={26}
                    strokeWidth={1.25}
                    className="text-white/50 transition-colors duration-500 group-hover:text-white"
                  />
                  <span className="font-mono text-[10px] tracking-[0.3em] text-white/30">
                    {s.num}
                  </span>
                </div>
                <h3 className="mt-10 font-display text-2xl tracking-tight text-[#F3F2EE] md:mt-14 md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-white/50 md:text-base">{s.tagline}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 group-hover:border-white/20 group-hover:text-white/70"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
