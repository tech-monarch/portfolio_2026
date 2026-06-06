"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const events = [
  { year: "2006–2015", label: "Early Childhood", desc: "Born in Port Harcourt. Early exposure to engineering through father, Prof. Omijeh Bourdillon Odianonsen (UNIPORT)." },
  { year: "2015", label: "First Lines of Code", desc: "Started coding at age 9–10. JavaScript and web fundamentals. The obsession was immediate." },
  { year: "2018–2020", label: "Foundation Years", desc: "Deep dives into full-stack development. Built first functional web applications. Self-taught through relentless iteration." },
  { year: "2021–2022", label: "Systems Thinking", desc: "Expanded into system design, database architecture, and backend engineering. Started thinking in products, not just code." },
  { year: "2023", label: "First Startups", desc: "Began building and shipping real products early versions of ScanRush, UniHub, and other ecosystem ventures." },
  { year: "2024", label: "Pantheon Founded", desc: "Founded Pantheon Venture Studio. Established the model: build in-house, validate fast, scale ruthlessly." },
  { year: "2025", label: "Ecosystem Scaling", desc: "Rivers State Government system. Bourdillon Foundation. MyRight. Foodix. Ecosystem growing across 5+ verticals." },
  { year: "2026+", label: "Global Scale", desc: "Raise venture funding. Scale Pantheon globally. Build hedge fund capital. Become a globally recognised founder-builder." },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="timeline"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-mid)" }}
      ref={sectionRef}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="700" x2="800" y2="0" stroke="currentColor" strokeWidth="2" />
        <line x1="300" y1="700" x2="1100" y2="0" stroke="currentColor" strokeWidth="1.5" />
        <line x1="1440" y1="100" x2="600" y2="700" stroke="currentColor" strokeWidth="2" />
        <line x1="100" y1="0" x2="140" y2="80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="1340" y1="620" x2="1380" y2="700" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>05</span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--line-strong)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>Journey</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-4" style={{ color: "var(--fg-primary)" }}>
                The Timeline
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                From a 9-year-old writing first scripts to building a venture studio at 19. A decade of compounding execution.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
            >
              <p className="font-display text-lg font-700 tracking-tight mb-2" style={{ color: "var(--fg-primary)" }}>
                2026 Vision
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                Scale Pantheon globally. Raise venture funding. Build hedge fund capital. Become a globally recognised founder-builder.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, transparent, var(--line-strong), var(--line), transparent)" }}
          />

          <div className="space-y-0">
            {events.map((event, i) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-8 pb-8 last:pb-0"
              >
                <div className="hidden sm:flex flex-col items-center flex-shrink-0 w-8">
                  <motion.div
                    className="w-2 h-2 rounded-full mt-1 flex-shrink-0"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                    style={{ border: "1px solid var(--line-strong)", backgroundColor: i === events.length - 1 ? "var(--fg-muted)" : "transparent" }}
                  />
                  {i < events.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: "linear-gradient(to bottom, var(--line), transparent)" }} />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-2">
                    <span className="font-mono text-xs tracking-wide flex-shrink-0" style={{ color: "var(--fg-ghost)" }}>{event.year}</span>
                    <span className="hidden sm:block mx-3 text-xs" style={{ color: "var(--line)" }}>·</span>
                    <span className="font-display text-sm font-700 tracking-tight" style={{ color: "var(--fg-primary)" }}>{event.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote banner */}
        <Reveal delay={0.1}>
          <div
            className="mt-20 relative overflow-hidden rounded-2xl p-10"
            style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
              <line x1="0" y1="100%" x2="30%" y2="0" stroke="currentColor" strokeWidth="2" />
              <line x1="70%" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" />
            </svg>
            <p className="font-display text-2xl sm:text-3xl font-700 text-center tracking-tight relative z-10" style={{ color: "var(--fg-ghost)" }}>
              &ldquo;I was meant to build systems that leave a permanent mark on history.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
