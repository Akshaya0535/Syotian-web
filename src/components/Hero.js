import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { scrollToId } from "../lib/scroll";
import { EASE } from "./Reveal";

const LINES = [
  <>The right <em className="italic">specialists,</em></>,
  <>assembled around</>,
  <>your <em className="italic">build.</em></>,
];

const NODES = [
  { x: 300, y: 90, r: 4, label: "UX" },
  { x: 470, y: 180, r: 3, label: "FE" },
  { x: 430, y: 380, r: 4, label: "BE" },
  { x: 250, y: 460, r: 3, label: "OPS" },
  { x: 110, y: 330, r: 3.5, label: "ML" },
  { x: 140, y: 150, r: 3, label: "FILM" },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [0, 2], [1, 5], [2, 4], [0, 3],
];

const HUB = { x: 300, y: 270 };

function Constellation() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 45, damping: 18 });
  const sy = useSpring(my, { stiffness: 45, damping: 18 });

  const edgeX = useTransform(sx, (v) => v * -18);
  const edgeY = useTransform(sy, (v) => v * -14);
  const nodeX = useTransform(sx, (v) => v * 30);
  const nodeY = useTransform(sy, (v) => v * 24);
  const hubX = useTransform(sx, (v) => v * 12);
  const hubY = useTransform(sy, (v) => v * 10);

  return (
    <motion.div
      className="relative h-full w-full"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
    >
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

      <svg viewBox="0 0 600 560" className="relative h-full w-full" data-testid="hero-constellation">
        <motion.g style={{ x: edgeX, y: edgeY }}>
          {EDGES.map(([a, b], i) => (
            <motion.line
              key={i}
              x1={NODES[a].x} y1={NODES[a].y}
              x2={NODES[b].x} y2={NODES[b].y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.9 + i * 0.08, ease: EASE }}
            />
          ))}
          {NODES.map((n, i) => (
            <motion.line
              key={`hub-${i}`}
              x1={HUB.x} y1={HUB.y}
              x2={n.x} y2={n.y}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
              strokeDasharray="2 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 1.2 + i * 0.06, ease: EASE }}
            />
          ))}
        </motion.g>

        <motion.g style={{ x: nodeX, y: nodeY }}>
          {NODES.map((n, i) => (
            <motion.g
              key={n.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7 + i * 0.1, ease: EASE }}
            >
              <circle cx={n.x} cy={n.y} r={n.r} fill="rgba(255,255,255,0.75)" />
              <text
                x={n.x}
                y={n.y - 14}
                textAnchor="middle"
                className="fill-white/40"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.2em" }}
              >
                {n.label}
              </text>
            </motion.g>
          ))}
        </motion.g>

        <motion.g
          style={{ x: hubX, y: hubY }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: EASE }}
        >
          <circle cx={HUB.x} cy={HUB.y} r={8} fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1" className="animate-ping-ring" />
          <circle cx={HUB.x} cy={HUB.y} r={6} fill="#F3F2EE" />
          <text
            x={HUB.x}
            y={HUB.y + 30}
            textAnchor="middle"
            className="fill-white/60"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.3em" }}
          >
            SYOTIAN
          </text>
        </motion.g>
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section data-testid="hero-section" className="relative overflow-hidden">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-40 md:px-10 lg:grid-cols-12 lg:pt-32">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-white/40"
            data-testid="hero-overline"
          >
            Team as a Service
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="mt-8 font-display text-[13.5vw] font-light leading-[0.95] tracking-tighter text-[#F3F2EE] sm:text-6xl md:text-7xl lg:text-[96px]"
          >
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.25 + i * 0.14, ease: EASE }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
            className="mt-8 max-w-xl text-lg tracking-tight text-white/60 md:text-xl"
            data-testid="hero-subcopy"
          >
            Syotian assembles curated, pre-vetted teams of specialists around your
            project's exact needs. One team. One point of accountability. Shipped outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-cta-primary"
              onClick={() => scrollToId("#contact")}
              className="rounded-full bg-[#F3F2EE] px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-black transition-[transform,background-color] duration-300 hover:scale-[1.03] hover:bg-white"
            >
              Start a project
            </button>
            <button
              data-testid="hero-cta-secondary"
              onClick={() => scrollToId("#process")}
              className="rounded-full border border-white/20 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white/80 transition-[border-color,color] duration-300 hover:border-white/60 hover:text-white"
            >
              See how it works
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30"
            data-testid="hero-traits"
          >
            <span>Not an agency</span>
            <span className="text-white/15">/</span>
            <span>Not a marketplace</span>
            <span className="text-white/15">/</span>
            <span>An execution system</span>
          </motion.div>
        </div>

        <div className="hidden h-[560px] lg:col-span-5 lg:block">
          <Constellation />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        data-testid="hero-scroll-cue"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
          Scroll
        </span>
        <div className="h-12 w-px animate-scroll-cue bg-white/40" />
      </motion.div>
    </section>
  );
}
