"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.09,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  const titleWords = ["Hey,", "I'm", "Omijeh", "David."];

  return (
    <section
      aria-label="Introduction — Omijeh David Odianonsen, Full-Stack Founder and Tech Monarch"
      itemScope
      itemType="https://schema.org/Person"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Diagonal geometric lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="-100"
          y1="900"
          x2="600"
          y2="-50"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="100"
          y1="900"
          x2="800"
          y2="-50"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="350"
          y1="900"
          x2="1050"
          y2="-50"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="600"
          y1="900"
          x2="1300"
          y2="-50"
          stroke="currentColor"
          strokeWidth="1"
        />
        <line
          x1="850"
          y1="900"
          x2="1550"
          y2="-50"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <line
          x1="1100"
          y1="900"
          x2="1800"
          y2="-50"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <line
          x1="1540"
          y1="900"
          x2="840"
          y2="-50"
          stroke="currentColor"
          strokeWidth="0.6"
        />
        <line
          x1="1740"
          y1="900"
          x2="1040"
          y2="-50"
          stroke="currentColor"
          strokeWidth="0.6"
        />
      </svg>

      {/* Bottom-right accent block */}
      <div
        className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, transparent 50%, var(--card-bg) 50%)",
        }}
      />

      {/* Top-left corner bracket */}
      <svg
        className="absolute top-20 left-6 pointer-events-none"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        style={{ opacity: 0.12 }}
      >
        <path
          d="M60 0 L0 0 L0 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      {/* Bottom-right corner bracket */}
      <svg
        className="absolute bottom-10 right-6 pointer-events-none"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        style={{ opacity: 0.12 }}
      >
        <path
          d="M0 60 L60 60 L60 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Text side */}
          <div className="flex-1 max-w-2xl">
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 mb-8 px-3 py-1.5 rounded-full"
              style={{
                border: "1px solid var(--pill-border)",
                backgroundColor: "var(--pill-bg)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{ color: "var(--fg-muted)" }}
              >
                Building · Open to investors
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.04] tracking-tight mb-6 overflow-hidden">
              {titleWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-3 lg:mr-4"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  style={{
                    color:
                      word === "Omijeh" || word === "David."
                        ? "var(--fg-primary)"
                        : "var(--fg-muted)",
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.div
              custom={0.7}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <h2
                className="font-display text-xl sm:text-2xl font-600 mb-6 tracking-tight"
                style={{ color: "var(--fg-muted)" }}
              >
                Full-Stack Founder
                <span className="mx-2" style={{ color: "var(--fg-ghost)" }}>
                  ·
                </span>
                Pantheon Venture Studio
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              custom={0.85}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-md"
              style={{ color: "var(--fg-muted)" }}
            >
              Hybrid founder-engineer: developer, AI builder, systems thinker,
              startup operator.
              <br />
              Started coding at 9. Building systems that leave a permanent mark
              on history.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={1.0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="https://launchbase.one"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-display tracking-tight transition-all duration-300 hover:scale-[1.04] hover:shadow-lg active:scale-[0.98]"
                style={{
                  backgroundColor: "var(--fg-primary)",
                  color: "var(--bg-base)",
                }}
              >
                Pantheon Studio <span aria-hidden="true">→</span>
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  border: "1px solid var(--line-strong)",
                  color: "var(--fg-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--fg-muted)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line-strong)";
                }}
              >
                View Startups
              </a>
              <a
                href="https://docs.google.com/document/d/1BrJGoiyBuhbgpX7ZHlLcGmECVBVyoi2_LuRlZK8RHRU/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  border: "1px solid var(--line-strong)",
                  color: "var(--fg-secondary)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--fg-muted)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line-strong)";
                }}
              >
                Résumé <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>

          {/* Profile image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                transform: "translate(10px, 10px)",
                backgroundColor: "var(--card-bg)",
                borderRadius: "24px",
              }}
            />
            <div
              className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden"
              style={{
                border: "1px solid var(--line)",
                background:
                  "linear-gradient(135deg, var(--bg-mid) 0%, var(--bg-deep) 100%)",
              }}
            >
              {/* Profile image uses naming convention from prompt */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/omijeh-david-odianonsen1.jpg"
                alt="Omijeh David Odianonsen — Full-Stack Founder, Tech Monarch, and Founder of Pantheon Venture Studio"
                title="Omijeh David Odianonsen (Tech Monarch) — Founder, Pantheon Venture Studio"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Alias tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-full text-xs font-medium"
              style={{
                backgroundColor: "var(--bg-mid)",
                border: "1px solid var(--line)",
                color: "var(--fg-muted)",
              }}
            >
              @tech_monarch
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--fg-ghost))",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
