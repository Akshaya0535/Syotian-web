import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export const Reveal = ({ children, delay = 0, className = "", y = 30, ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({ overline, title, description, testId }) => (
  <div className="max-w-3xl" data-testid={testId}>
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
        {overline}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-6 font-display text-4xl md:text-6xl tracking-tight text-[#F3F2EE]">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.16}>
        <p className="mt-6 text-lg md:text-xl tracking-tight text-white/60 max-w-2xl">
          {description}
        </p>
      </Reveal>
    )}
  </div>
);

export { EASE };
