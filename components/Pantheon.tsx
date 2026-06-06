"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const metrics = [
  { value: "11+", label: "Startups Built" },
  { value: "AI-native", label: "Primary Focus" },
  { value: "Global", label: "Scale Vision" },
  { value: "5", label: "Verticals Active" },
];

const verticals = [
  { icon: "◈", title: "AI / ML Applications", desc: "Intelligent systems, automation, and AI-powered SaaS products." },
  { icon: "◉", title: "Government & Civic Tech", desc: "Digital systems for institutions, recruitment, and public infrastructure." },
  { icon: "◫", title: "EdTech & UniTech", desc: "Platforms transforming education delivery across African institutions." },
  { icon: "◎", title: "Fintech & Trading Systems", desc: "Investment infrastructure, financial tools, and trading platforms." },
  { icon: "◬", title: "Consumer Applications", desc: "High-retention consumer apps solving everyday problems at scale." },
  { icon: "◧", title: "SaaS & Dev Tools", desc: "Developer infrastructure and B2B SaaS products for growing teams." },
];

export default function Pantheon() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="pantheon"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
      ref={sectionRef}
    >
      {/* Diagonal marks */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="900" x2="900" y2="0" stroke="currentColor" strokeWidth="2" />
        <line x1="300" y1="900" x2="1200" y2="0" stroke="currentColor" strokeWidth="1.5" />
        <line x1="1440" y1="400" x2="500" y2="900" stroke="currentColor" strokeWidth="1.5" />
        <line x1="1440" y1="0" x2="800" y2="700" stroke="currentColor" strokeWidth="1" />
        <line x1="200" y1="0" x2="260" y2="120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="1200" y1="780" x2="1260" y2="900" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>02</span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--line-strong)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>Venture Studio</span>
          </div>
        </Reveal>

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-2" style={{ color: "var(--fg-primary)" }}>
                Pantheon
              </h2>
              <p className="font-display text-lg font-500 mb-6 tracking-tight" style={{ color: "var(--fg-muted)" }}>
                Venture Studio
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-[1.85] mb-4" style={{ color: "var(--fg-secondary)" }}>
                Pantheon is not a portfolio of side projects. It is a venture studio a structured system for building, validating, and scaling AI-native startups across Africa and globally.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-[1.85] mb-8" style={{ color: "var(--fg-muted)" }}>
                The model: build proprietary products in-house, de-risk them through rapid execution, and scale the ones that achieve product-market fit. We operate across AI, SaaS, civic tech, fintech, edtech, and consumer applications.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold font-display tracking-tight transition-all duration-300"
                  style={{ backgroundColor: "var(--fg-primary)", color: "var(--bg-base)" }}
                >
                  For Investors →
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  style={{ border: "1px solid var(--line-strong)", color: "var(--fg-secondary)" }}
                >
                  For Founders / Co-builders
                </a>
              </div>
            </Reveal>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
              >
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
                  <line x1="0" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <p className="font-display text-3xl font-800 mb-1 relative z-10" style={{ color: "var(--fg-primary)" }}>{value}</p>
                <p className="text-xs uppercase tracking-wider relative z-10" style={{ color: "var(--fg-ghost)" }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Studio model explanation */}
        <Reveal delay={0.1}>
          <div
            className="relative rounded-2xl p-8 mb-12 overflow-hidden"
            style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.05 }}>
              <line x1="0" y1="100%" x2="30%" y2="0" stroke="currentColor" strokeWidth="2" />
              <line x1="70%" y1="100%" x2="100%" y2="0" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4" style={{ color: "var(--fg-ghost)" }}>The Model</p>
              <p className="font-display text-xl sm:text-2xl font-700 tracking-tight leading-snug" style={{ color: "var(--fg-primary)" }}>
                Build in-house. Validate fast. Scale relentlessly. 
              </p>
            </div>
          </div>
        </Reveal>

        {/* Verticals */}
        <Reveal delay={0.05}>
          <p className="text-xs uppercase tracking-[0.2em] font-medium mb-8" style={{ color: "var(--fg-ghost)" }}>Investment Verticals</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {verticals.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl p-5 overflow-hidden group transition-all duration-300"
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
              <p className="font-display text-2xl mb-3" style={{ color: "var(--fg-muted)" }}>{icon}</p>
              <p className="font-display text-sm font-700 mb-2 tracking-tight" style={{ color: "var(--fg-primary)" }}>{title}</p>
              <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
