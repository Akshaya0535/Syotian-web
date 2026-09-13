import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Clock, UserCheck, Lock, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./Reveal";

// Replace with your actual email address
const FORMSUBMIT_EMAIL = "info@syotian.app"; 

const SERVICES = [
  "Software Engineering",
  "Product Development",
  "Media Production",
  "Cloud Infrastructure",
  "Multiple / Not sure yet",
];

const EMPTY = { name: "", email: "", company: "", service: "", message: "" };

const inputClass =
  "w-full rounded-lg border border-white/15 bg-transparent px-4 py-3.5 text-sm text-[#F3F2EE] placeholder:text-white/25 outline-none transition-[border-color] duration-300 focus:border-white/60";

export default function CTA() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.service) {
      toast.error("Please select what you need built.");
      return;
    }
    setLoading(true);

    try {
      // Send form data directly to FormSubmit endpoint via JSON AJAX request
      await axios.post(
        `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`,
        {
          name: form.name,
          email: form.email,
          company: form.company,
          service: form.service,
          message: form.message,
          _subject: `New Project Enquiry from ${form.name}`,
          _captcha: "false" // Set to "true" if you experience spam
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      toast.success("Brief received — we'll respond within 48 hours.");
      setForm(EMPTY);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="scroll-mt-24 border-t border-white/10 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                Start a project
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-4xl tracking-tight text-[#F3F2EE] md:text-6xl">
                Tell us what
                <br />
                you're <em className="italic">building.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-lg tracking-tight text-white/60">
                Share the brief. Within 48 hours we'll confirm scope, timeline and
                team composition — and quote before any work begins.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <ul className="mt-12 space-y-5">
                {[
                  { icon: Clock, text: "Response within 48 hours" },
                  { icon: UserCheck, text: "A dedicated mediator from day one" },
                  { icon: Lock, text: "Private by default — NDA-friendly" },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-4 text-sm text-white/60 md:text-base">
                    <item.icon size={16} strokeWidth={1.5} className="text-white/40" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form
              data-testid="contact-form"
              onSubmit={submit}
              className="rounded-2xl border border-white/10 bg-white/[0.01] p-8 md:p-10"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  data-testid="contact-name-input"
                  required
                  minLength={2}
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass}
                />
                <input
                  data-testid="contact-email-input"
                  required
                  type="email"
                  placeholder="Work email"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass}
                />
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  data-testid="contact-company-input"
                  placeholder="Company (optional)"
                  value={form.company}
                  onChange={set("company")}
                  className={inputClass}
                />
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}
                >
                  <SelectTrigger
                    data-testid="contact-service-select"
                    className="h-[50px] w-full rounded-lg border-white/15 bg-transparent font-sans text-sm text-white/70 focus:border-white/60 focus:ring-0 focus:ring-offset-0"
                  >
                    <SelectValue placeholder="What do you need?" />
                  </SelectTrigger>
                  <SelectContent className="border-white/10 bg-[#111111] text-white">
                    {SERVICES.map((s) => (
                      <SelectItem
                        key={s}
                        value={s}
                        data-testid={`service-option-${s.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                        className="text-sm focus:bg-white/10 focus:text-white"
                      >
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <textarea
                data-testid="contact-message-input"
                required
                minLength={10}
                rows={5}
                placeholder="The brief — what are you building, and by when?"
                value={form.message}
                onChange={set("message")}
                className={`${inputClass} mt-5 resize-none`}
              />
              <button
                data-testid="contact-submit-button"
                type="submit"
                disabled={loading}
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-[#F3F2EE] py-4 font-mono text-xs uppercase tracking-[0.25em] text-black transition-[transform,background-color,opacity] duration-300 hover:scale-[1.01] hover:bg-white disabled:opacity-60"
              >
                {loading && <Loader2 size={15} className="animate-spin" />}
                {loading ? "Sending brief" : "Send the brief"}
              </button>
              <p className="mt-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
                No commitment. No spam. One reply.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
