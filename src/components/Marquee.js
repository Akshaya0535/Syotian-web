import FastMarquee from "react-fast-marquee";
import { Asterisk } from "lucide-react";

const ITEMS = [
  "Efficiency",
  "Accountability",
  "Quality Execution",
  "Zero Coordination Burden",
  "Team as a Service",
];

export default function Marquee() {
  return (
    <div
      data-testid="editorial-marquee"
      className="border-y border-white/10 py-8 md:py-10"
    >
      <FastMarquee speed={32} gradient={false} pauseOnHover>
        {ITEMS.map((item) => (
          <span key={item} className="flex items-center">
            <span className="font-display text-4xl font-light italic tracking-tight text-white/35 md:text-6xl">
              {item}
            </span>
            <Asterisk className="mx-10 text-white/20 md:mx-16" size={28} />
          </span>
        ))}
      </FastMarquee>
    </div>
  );
}
