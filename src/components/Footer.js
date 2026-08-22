import { scrollToId, scrollToTop } from "../lib/scroll";

const NAV = [
  { label: "Model", href: "#model" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
  { label: "Start a project", href: "#contact" },
];

const PRACTICES = [
  "Software Engineering",
  "Product Development",
  "Media Production",
  "Cloud Infrastructure",
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10 md:pt-28">
        <button
          data-testid="footer-wordmark"
          onClick={scrollToTop}
          className="block w-full select-none text-center font-display text-[19vw] font-light leading-[0.85] tracking-tight text-white/[0.06] transition-colors duration-700 hover:text-white/[0.12] md:text-[13rem]"
        >
          Syotian
        </button>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-14 md:grid-cols-12 md:mt-24">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center bg-[#F3F2EE] font-display text-sm font-semibold text-black">
                S
              </span>
              <span className="font-mono text-sm uppercase tracking-[0.35em] text-[#F3F2EE]">
                Syotian
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/50">
              Team as a Service. Curated, pre-vetted specialist teams assembled
              around your project — with a dedicated mediator and a workflow built
              for certainty.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((l) => (
                <li key={l.href}>
                  <button
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => scrollToId(l.href)}
                    className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
              Practices
            </p>
            <ul className="mt-5 space-y-3">
              {PRACTICES.map((p) => (
                <li key={p} className="text-sm text-white/55">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2026 Syotian. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Efficiency · Accountability · Quality Execution
          </p>
        </div>
      </div>
    </footer>
  );
}
