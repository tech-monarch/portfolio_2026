"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Reveal from "./Reveal";

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px 0px" });

  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-mid)" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="0"    y1="700" x2="500"  y2="0"   stroke="currentColor" strokeWidth="2" />
        <line x1="200"  y1="700" x2="700"  y2="0"   stroke="currentColor" strokeWidth="1.5" />
        <line x1="900"  y1="0"   x2="1440" y2="500" stroke="currentColor" strokeWidth="2" />
        <line x1="1100" y1="0"   x2="1440" y2="250" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0"    y1="200" x2="700"  y2="700" stroke="currentColor" strokeWidth="1" />
        <line x1="700"  y1="0"   x2="1440" y2="600" stroke="currentColor" strokeWidth="1" />
        <line x1="400"  y1="0"   x2="500"  y2="140" stroke="currentColor" strokeWidth="3" />
        <line x1="1000" y1="560" x2="1100" y2="700" stroke="currentColor" strokeWidth="3" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>01</span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--line-strong)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>About</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left text */}
          <div>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-8" style={{ color: "var(--fg-primary)" }}>
                Founder Story
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-[1.85] mb-6" style={{ color: "var(--fg-secondary)" }}>
                I started coding at 9–10, through early exposure from my father Professor Omijeh Bourdillon Odianonsen (University of Port Harcourt, engineering). That foundation became a compulsion.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-[1.85] mb-6" style={{ color: "var(--fg-secondary)" }}>
                I&rsquo;m Omijeh David Odianonsen known as Odia, or the Tech Monarch. I&rsquo;m a 19-year-old hybrid founder-engineer: developer, AI builder, trader, systems thinker, and startup operator from Port Harcourt, Nigeria.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base leading-[1.85] mb-10" style={{ color: "var(--fg-muted)" }}>
                Core belief: &ldquo;I was meant to build systems that leave a permanent mark on history.&rdquo; Pantheon Venture Studio is the vehicle for that mission building and scaling AI-native companies across Africa and globally.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex flex-wrap gap-2 mb-8">
                {["AI Builder", "Full-Stack Dev", "Systems Thinker", "Startup Operator", "Prop Trader", "Venture Builder"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full transition-all duration-200 hover:scale-105"
                    style={{ color: "var(--fg-muted)", border: "1px solid var(--pill-border)", backgroundColor: "var(--pill-bg)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-display tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-md"
                  style={{ backgroundColor: "var(--fg-primary)", color: "var(--bg-base)" }}
                >
                  Read Full Story →
                </Link>
              </motion.div>
            </Reveal>
          </div>

          {/* Right stats + image cards */}
          <div className="relative flex gap-4 items-start" ref={sectionRef}>
            {[
              { delay: 0.2, mt: "mt-12", label: "Years Coding", value: "10+", sub: "@ 15years old", img: "/omijeh-david-odianonsen2.jpg" },
              { delay: 0.35, mt: "", label: "Startups Built", value: "11+", sub: "", img: "/omijeh-david-odianonsen3.jpg" },
            ].map(({ delay, mt, label, value, sub, img }, ci) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: ci === 0 ? 40 : 60 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`flex-1 ${mt}`}
              >
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                  style={{ background: "linear-gradient(145deg, var(--bg-deep) 0%, var(--bg-base) 100%)", border: "1px solid var(--line)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`Omijeh David Odianonsen — ${label}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.05 }}>
                    <defs>
                      <pattern id={`stripe${ci}`} x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="3" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#stripe${ci})`} />
                  </svg>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)" }} />
                  {/* Top pill — red for "@ 15years old" */}
                  {sub ? (
                    <div className="absolute top-3 left-3">
                      <div
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: "rgba(220,38,38,0.85)", backdropFilter: "blur(6px)", border: "1px solid rgba(239,68,68,0.5)" }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-red-300" />
                        <span className="text-xs font-medium" style={{ color: "#fff" }}>{sub}</span>
                      </div>
                    </div>
                  ) : null}
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                    <span className="font-display text-5xl font-800" style={{ color: "var(--fg-ghost)" }}>{value}</span>
                    <span className="text-xs uppercase tracking-widest" style={{ color: "var(--fg-ghost)" }}>{label}</span>
                  </div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{ backgroundColor: "var(--pill-bg)", border: "1px solid var(--pill-border)", backdropFilter: "blur(4px)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--fg-ghost)" }} />
                      <span className="text-xs" style={{ color: "var(--fg-muted)" }}>@tech_monarch</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
