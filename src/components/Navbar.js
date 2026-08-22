import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { scrollToId, scrollToTop } from "../lib/scroll";
import syotianLogo from '../icon.png';

const LINKS = [
  { label: "Model", href: "#model" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    setTimeout(() => scrollToId(href), open ? 250 : 0);
  };

  return (
    <>
      <header
        data-testid="navbar"
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/50 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10">
          <button
            data-testid="nav-logo"
            onClick={scrollToTop}
            className="flex items-center gap-3"
          >
           <img 
             src={syotianLogo} 
             alt="Syotian Logo" 
             className="h-7 w-auto object-contain" 
            />
            <span className="font-mono text-sm uppercase tracking-[0.35em] text-[#F3F2EE]">
              Syotian
            </span>
          </button>

          <nav className="hidden items-center gap-9 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                onClick={() => go(l.href)}
                className="group relative font-mono text-[11px] uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 hover:text-white"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-[width] duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              data-testid="nav-cta"
              onClick={() => go("#contact")}
              className="rounded-full bg-[#F3F2EE] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-black transition-[transform,background-color] duration-300 hover:scale-[1.03] hover:bg-white"
            >
              Start a project
            </button>
          </nav>

          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen(true)}
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-[#0A0A0A]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-[72px] items-center justify-between px-6">
              <span className="font-mono text-sm uppercase tracking-[0.35em] text-[#F3F2EE]">
                Syotian
              </span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {[...LINKS, { label: "Start a project", href: "#contact" }].map((l, i) => (
                <motion.button
                  key={l.href + l.label}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5 }}
                  onClick={() => go(l.href)}
                  className="border-b border-white/10 py-5 text-left font-display text-4xl text-[#F3F2EE]"
                >
                  {l.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
