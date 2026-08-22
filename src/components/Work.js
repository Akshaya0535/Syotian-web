import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const WORK = [
  {
    id: "analytics-platform",
    service: "Software Engineering",
    title: "Real-time analytics platform",
    outcome: "Streaming dashboards and API infrastructure for a data-heavy product.",
    img: "https://images.unsplash.com/photo-1604591259403-81d6c9cf87d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwzfHxkYXJrJTIwY29kZSUyMHNjcmVlbiUyMG1hY3JvfGVufDB8fHx8MTc4MjgzNTk0OHww&ixlib=rb-4.1.0&q=85",
    alt: "Dark moody code screen macro",
  },
  {
    id: "commerce-experience",
    service: "Product Development",
    title: "Commerce experience, end to end",
    outcome: "Strategy, UX and interface design for a direct-to-consumer mobile launch.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Dark product analytics dashboard on screen",
  },
  {
    id: "launch-film",
    service: "Media Production",
    title: "Product launch film",
    outcome: "Pre-production to final cut — motion, animation and creative direction.",
    img: "https://images.pexels.com/photos/5875978/pexels-photo-5875978.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Professional camera in a dark studio",
  },
  {
    id: "cloud-migration",
    service: "Cloud Infrastructure",
    title: "Multi-region cloud migration",
    outcome: "DevOps, CI/CD pipelines and reliability engineering for scale.",
    img: "https://images.pexels.com/photos/37730212/pexels-photo-37730212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Server racks in a dark data center",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      data-testid="work-section"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeader
          testId="work-header"
          overline="Selected Work"
          title="Proof of execution."
          description="Representative engagements drawn from our four practices — the shape of what an assembled team delivers."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:mt-24 md:grid-cols-2">
          {WORK.map((w, i) => (
            <Reveal key={w.id} delay={(i % 2) * 0.1}>
              <article
                data-testid={`work-card-${w.id}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.01] transition-[border-color] duration-500 hover:border-white/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.alt}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-[transform,filter] duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="spotlight pointer-events-none absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
                    Representative
                  </span>
                </div>
                <div className="flex items-start justify-between gap-6 p-7 md:p-9">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                      {w.service}
                    </p>
                    <h3 className="mt-3 font-display text-xl tracking-tight text-[#F3F2EE] md:text-2xl">
                      {w.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/55">{w.outcome}</p>
                  </div>
                  <ArrowUpRight
                    size={22}
                    strokeWidth={1.25}
                    className="mt-1 shrink-0 text-white/30 transition-[color,transform] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
