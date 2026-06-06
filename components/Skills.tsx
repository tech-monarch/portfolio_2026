"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 88 },
      { name: "TypeScript", level: 90 },
      { name: "C++", level: 72 },
      { name: "PHP", level: 82 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "React Native", level: 82 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Framer Motion", level: 88 },
      { name: "Vanilla JS", level: 92 },
    ],
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Laravel / PHP", level: 82 },
      { name: "REST APIs", level: 93 },
      { name: "Database Architecture", level: 85 },
      { name: "System Design", level: 84 },
    ],
  },
  {
    category: "AI & Founder",
    skills: [
      { name: "AI-Powered Apps", level: 88 },
      { name: "Automation Systems", level: 86 },
      { name: "Product Validation", level: 90 },
      { name: "Startup Design Thinking", level: 92 },
      { name: "Strategic Execution", level: 91 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20px 0px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm" style={{ color: "var(--fg-secondary)" }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: "var(--fg-ghost)" }}>{level}%</span>
      </div>
      <div className="h-px w-full relative overflow-hidden rounded-full" style={{ backgroundColor: "var(--line)" }}>
        <motion.div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{ backgroundColor: "var(--fg-muted)" }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-60px 0px" });

  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-deep)" }}
      ref={sectionRef}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0" y1="0" x2="700" y2="700" stroke="currentColor" strokeWidth="2.5" />
        <line x1="200" y1="0" x2="900" y2="700" stroke="currentColor" strokeWidth="1.5" />
        <line x1="740" y1="0" x2="1440" y2="660" stroke="currentColor" strokeWidth="2.5" />
        <line x1="1440" y1="0" x2="740" y2="700" stroke="currentColor" strokeWidth="1.5" />
        <line x1="600" y1="0" x2="660" y2="100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        <line x1="880" y1="600" x2="940" y2="700" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>04</span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--line-strong)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>Skill Set</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-4" style={{ color: "var(--fg-primary)" }}>
                Technical Depth
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                A full-stack skillset built across a decade from systems-level C++ to AI-powered applications and venture-grade product execution.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: "10+", label: "Years Coding" },
              { value: "5+", label: "Languages" },
              { value: "Full", label: "Stack Depth" },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="relative rounded-xl p-4 text-center overflow-hidden cursor-default"
                style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
              >
                <p className="font-display text-2xl font-800 mb-1" style={{ color: "var(--fg-primary)" }}>{value}</p>
                <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--fg-ghost)" }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map(({ category, skills }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.025, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
              className="relative rounded-xl p-5 cursor-default"
              style={{ border: "1px solid var(--line)", backgroundColor: "var(--card-bg)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line-strong)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--line)"; }}
            >
              <p className="text-xs uppercase tracking-[0.2em] font-600 mb-5" style={{ color: "var(--fg-ghost)" }}>{category}</p>
              {skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.3 + gi * 0.08 + si * 0.05} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
