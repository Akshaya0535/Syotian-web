import { Hash, Lock, Pin, Send, UserCheck, ShieldCheck, ListChecks, Target } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const CHANNELS = ["prd", "design", "engineering", "delivery"];

const MESSAGES = [
  { who: "Mediator", time: "09:41", text: "PRD v1.2 approved. Sprint starts today.", pinned: true },
  { who: "Specialist", time: "09:52", text: "API scaffolding pushed to staging. Endpoints documented." },
  { who: "Mediator", time: "10:15", text: "Checkpoint 2 of 6 cleared — on schedule." },
];

const ASSURANCES = [
  { icon: UserCheck, title: "Dedicated mediator", body: "A single accountable owner on every project." },
  { icon: ShieldCheck, title: "Pre-vetted specialists", body: "Curated and evaluated before onboarding." },
  { icon: ListChecks, title: "Checkpointed delivery", body: "Continuous progress checks. No surprises." },
  { icon: Target, title: "Clear ownership", body: "Accountability at every stage of execution." },
];

export default function Platform() {
  return (
    <section
      id="platform"
      data-testid="platform-section"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              testId="platform-header"
              overline="The Project Room"
              title="One room. Total clarity."
              description="Every engagement runs inside a private Rocket.Chat workspace — a structured, channel-based environment built for serious execution."
            />
            <Reveal delay={0.2}>
              <ul className="mt-10 space-y-5">
                {[
                  "Private channels per workstream — PRD, design, engineering, delivery",
                  "Controlled information sharing; personal details stay hidden",
                  "All file types and integrations supported",
                  "Full mobile access — your project, in your pocket",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm text-white/60 md:text-base">
                    <Lock size={15} className="mt-1 shrink-0 text-white/35" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div
              data-testid="chat-mock"
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111]"
            >
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="ml-3 font-mono text-[10px] tracking-[0.2em] text-white/40">
                  rocket.chat — syotian / project-aurora
                </span>
              </div>
              <div className="flex">
                <div className="hidden w-40 shrink-0 border-r border-white/10 p-4 sm:block">
                  <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/30">
                    Channels
                  </p>
                  {CHANNELS.map((c, i) => (
                    <div
                      key={c}
                      className={`flex items-center gap-2 rounded-md px-2 py-1.5 font-mono text-[11px] ${
                        i === 2 ? "bg-white/[0.06] text-white" : "text-white/40"
                      }`}
                    >
                      <Hash size={11} />
                      {c}
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-5">
                  <div className="space-y-5">
                    {MESSAGES.map((m) => (
                      <div key={m.time}>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] text-white/80">{m.who}</span>
                          <span className="font-mono text-[9px] text-white/30">{m.time}</span>
                          {m.pinned && <Pin size={10} className="text-white/40" />}
                        </div>
                        <p className="mt-1 text-sm text-white/55">{m.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-lg border border-white/10 px-4 py-3">
                    <span className="font-mono text-[11px] text-white/25">
                      Message #engineering
                    </span>
                    <Send size={13} className="text-white/30" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-28 lg:grid-cols-4">
          {ASSURANCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div
                data-testid={`assurance-${a.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group h-full rounded-2xl border border-white/10 p-7 transition-[background-color,border-color] duration-500 hover:border-white/25 hover:bg-white/[0.02]"
              >
                <a.icon size={22} strokeWidth={1.25} className="text-white/50 transition-colors duration-500 group-hover:text-white" />
                <h3 className="mt-6 font-display text-lg tracking-tight text-[#F3F2EE]">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-white/50">{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
