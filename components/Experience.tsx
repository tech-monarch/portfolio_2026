"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

interface Experience { period: string; role: string; company: string; link?: string; }

const experiences: Experience[] = [
  { period: "Sept 2024 – Present", role: "Co-Founder",             company: "Pxxl Space",                link: "#" },
  { period: "Sept 2024 – Present", role: "Founder & CEO",          company: "Pantheon Venture Studio",    link: "https://launchbase.one" },
  { period: "April 2026 – Present", role: "Frontend Developer",    company: "Nexus Automaark Systems" },
  { period: "Feb 2026 – Present",   role: "Mobile App Developer",  company: "Rinku Technology Limited" },
  { period: "2025 – Present",       role: "Frontend Developer",    company: "Steadfast Int." },
  { period: "2024 – Present",       role: "Fullstack Developer",   company: "TheEccommerceBoss" },
  { period: "2019 – 2022",          role: "Backend Developer",     company: "OrganStation" },
];

const organisations = [
  { name: "Royal College of Nursing", role: "Collaborator", icon: "◉" },
  { name: "Bourdillon Omijeh Foundation", role: "Board Member", icon: "◈" },
  { name: "Pxxl Space", role: "Co-Founder", icon: "◬" },
];

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex gap-6 pb-8 last:pb-0"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          className="w-2 h-2 rounded-full mt-1.5 transition-all duration-300"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.07 + 0.2, duration: 0.4 }}
          style={{ border: "1px solid rgba(0,0,0,0.22)", backgroundColor: "transparent" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#141414"; (e.currentTarget as HTMLElement).style.borderColor = "#141414"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.22)"; }}
        />
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 mt-2 min-h-[2rem]" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.12), transparent)" }} />
        )}
      </div>
      <div className="flex-1 pb-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <span className="text-sm font-medium" style={{ color: "#3a3a3a" }}>{exp.role}</span>
            <span className="text-sm mx-2" style={{ color: "#c0c0c0" }}>at</span>
            <span className="font-display font-600 text-sm" style={{ color: "#606060" }}>{exp.company}</span>
          </div>
          <span className="text-xs font-mono tracking-wide flex-shrink-0" style={{ color: "#a8a8a8" }}>{exp.period}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden" style={{ backgroundColor: "#d8d8d8" }}>

      {/* ── Bold overlapping diagonal pen strokes ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.05 }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Heavy primary diagonals */}
        <line x1="0"    y1="0"   x2="700"  y2="700" stroke="#000" strokeWidth="2.5" />
        <line x1="200"  y1="0"   x2="900"  y2="700" stroke="#000" strokeWidth="1.5" />
        <line x1="740"  y1="0"   x2="1440" y2="660" stroke="#000" strokeWidth="2.5" />
        <line x1="1000" y1="0"   x2="1440" y2="440" stroke="#000" strokeWidth="1.5" />
        {/* Reverse diagonals crossing */}
        <line x1="1440" y1="0"   x2="740"  y2="700" stroke="#000" strokeWidth="1.5" />
        <line x1="1240" y1="0"   x2="540"  y2="700" stroke="#000" strokeWidth="1" />
        <line x1="500"  y1="0"   x2="0"    y2="500" stroke="#000" strokeWidth="1" />
        {/* Isolated accent strokes like handmade marks */}
        <line x1="600"  y1="0"   x2="660"  y2="100" stroke="#000" strokeWidth="4" strokeLinecap="round" />
        <line x1="880"  y1="600" x2="940"  y2="700" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#909090" }}>03</span>
            <div className="w-8 h-px" style={{ backgroundColor: "rgba(0,0,0,0.15)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "#909090" }}>Experience</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-4" style={{ color: "#141414" }}>
                Work Experience
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#686868" }}>
                A timeline of my professional journey and the impact I&rsquo;ve made.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="flex gap-10 mt-8">
                {[
                  { value: "9+", label: "Years experience" },
                  { value: "50+", label: "Projects shipped" },
                  { value: "20+", label: "Happy clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-700 mb-1" style={{ color: "#141414" }}>{stat.value}</p>
                    <p className="text-xs uppercase tracking-wider" style={{ color: "#a0a0a0" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="pt-2">
            {experiences.map((exp, index) => (
              <ExperienceItem key={exp.company + exp.role} exp={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Organisations */}
        <Reveal delay={0.1}>
          <div className="mt-16 mb-8">
            <p className="text-xs uppercase tracking-[0.2em] font-medium mb-6" style={{ color: "#909090" }}>
              Organisations &amp; Bodies
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {organisations.map(({ name, role, icon }) => (
                <div
                  key={name}
                  className="relative rounded-xl p-5 transition-all duration-200"
                  style={{ border: "1px solid rgba(0,0,0,0.10)", backgroundColor: "rgba(0,0,0,0.03)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.07)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,0,0.03)"; }}
                >
                  <p className="font-display text-xl mb-2" style={{ color: "#909090" }}>{icon}</p>
                  <p className="font-display text-sm font-700 mb-1 tracking-tight" style={{ color: "#141414" }}>{name}</p>
                  <p className="text-xs uppercase tracking-wider" style={{ color: "#a0a0a0" }}>{role}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Quote banner */}
        <Reveal delay={0.1}>
          <div
            className="mt-8 relative overflow-hidden rounded-2xl p-10"
            style={{ border: "1px solid rgba(0,0,0,0.10)", backgroundColor: "rgba(0,0,0,0.04)" }}
          >
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
              <line x1="0"   y1="100%" x2="30%"  y2="0"    stroke="#000" strokeWidth="2" />
              <line x1="70%" y1="100%" x2="100%" y2="0"    stroke="#000" strokeWidth="2" />
            </svg>
            <p className="font-display text-2xl sm:text-3xl font-700 text-center tracking-tight relative z-10" style={{ color: "rgba(0,0,0,0.18)" }}>
              Building tomorrow&rsquo;s technology, today.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
