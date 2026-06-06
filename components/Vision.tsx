"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const visionItems = [
  {
    horizon: "12–18 months",
    title: "Scale the Ecosystem",
    desc: "Ship 3+ more Pantheon products to market. Achieve initial revenue across multiple portfolio companies.",
    icon: "◈",
  },
  {
    horizon: "2–3 years",
    title: "Raise Venture Funding",
    desc: "Raise institutional capital for Pantheon. Scale hedge fund / prop trading capital as an independent asset.",
    icon: "◉",
  },
  {
    horizon: "3–5 years",
    title: "Global Founder Presence",
    desc: "Become a globally recognised founder-builder. Pantheon operating across multiple continents. Africa's answer to YC + a16z.",
    icon: "◬",
  },
];

export default function Vision() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="vision"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
      ref={sectionRef}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="1440" y2="700" stroke="currentColor" strokeWidth="2" />
        <line x1="200" y1="0" x2="1440" y2="500" stroke="currentColor" strokeWidth="1.5" />
        <line x1="1440" y1="200" x2="0" y2="700" stroke="currentColor" strokeWidth="1.5" />
        <line x1="700" y1="0" x2="760" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>06</span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--line-strong)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>Vision</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-6" style={{ color: "var(--fg-primary)" }}>
                Future Vision
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-[1.85] mb-4" style={{ color: "var(--fg-secondary)" }}>
                The mission is clear: build systems that matter. Not just products ecosystems. Not just startups institutions.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-[1.85]" style={{ color: "var(--fg-muted)" }}>
                Africa has the talent, the problems, and the scale. Pantheon is the engine that converts that into compounding value.
              </p>
            </Reveal>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl p-8 overflow-hidden"
            style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
              <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: "var(--fg-ghost)" }}>Thesis</p>
              <p className="font-display text-xl font-700 tracking-tight leading-snug mb-4" style={{ color: "var(--fg-primary)" }}>
                Africa&rsquo;s next great tech institution won&rsquo;t come from Silicon Valley.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                It will be built by founders who grew up here, understand the problems here, and have the execution to solve them at global scale.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {visionItems.map(({ horizon, title, desc, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-6 overflow-hidden transition-all duration-300"
              style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--line-strong)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
              }}
            >
              <p className="font-display text-3xl mb-4" style={{ color: "var(--fg-ghost)" }}>{icon}</p>
              <span
                className="inline-block px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider mb-3"
                style={{ backgroundColor: "var(--pill-bg)", border: "1px solid var(--pill-border)", color: "var(--fg-ghost)" }}
              >
                {horizon}
              </span>
              <p className="font-display text-base font-700 mb-2 tracking-tight" style={{ color: "var(--fg-primary)" }}>{title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
