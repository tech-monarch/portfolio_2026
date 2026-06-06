"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

// ─── Data ──────────────────────────────────────────────────────────────────────

const skillGroups = [
  {
    category: "Languages",
    icon: "{ }",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "PHP"],
  },
  {
    category: "Frontend",
    icon: "◻",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    icon: "⚙",
    skills: ["Node.js", "Express", "Laravel", "PHP", "REST APIs"],
  },
  {
    category: "Systems",
    icon: "⬡",
    skills: [
      "System Architecture",
      "Embedded Systems",
      "Database Design",
      "API Design",
    ],
  },
  {
    category: "AI / Experimental",
    icon: "◈",
    skills: [
      "AI-Powered Apps",
      "Automation Systems",
      "LLM Integration",
      "AI Product Dev",
    ],
  },
  {
    category: "Founder",
    icon: "△",
    skills: [
      "Product Strategy",
      "Venture Building",
      "Execution",
      "Team Leadership",
      "Product Design",
    ],
  },
];

const ventures = [
  {
    name: "Launchbase / Pantheon Studio",
    tag: "Venture Studio Hub",
    href: "https://launchbase.one",
    cat: "Studio",
  },
  {
    name: "UniHub",
    tag: "EdTech · University Platform",
    href: "https://uni-hub-roan.vercel.app/",
    cat: "EdTech",
  },
  {
    name: "Shift",
    tag: "SaaS · Productivity",
    href: "https://shift-puce.vercel.app/",
    cat: "SaaS",
  },
  {
    name: "MyRight",
    tag: "Civic Tech · Legal Rights",
    href: "https://my-right-one.vercel.app/",
    cat: "Civic",
  },
  {
    name: "ScanRush",
    tag: "Commerce · QR Platform",
    href: "https://scanrush.vercel.app/",
    cat: "Commerce",
  },
  {
    name: "Rivers State Teachers Recruitment",
    tag: "GovTech · Government System",
    href: "#",
    cat: "GovTech",
  },
  {
    name: "Skylite Pro",
    tag: "Fintech · Investment",
    href: "https://investment-langing-page-v3.vercel.app/",
    cat: "Fintech",
  },
  {
    name: "Discover Niger",
    tag: "Consumer · Tourism",
    href: "https://discover-niger.vercel.app/",
    cat: "Consumer",
  },
  {
    name: "Foodix",
    tag: "Consumer · Restaurant",
    href: "https://restaurant-nine-khaki.vercel.app/",
    cat: "Consumer",
  },
  {
    name: "Bourdillon Omijeh Foundation",
    tag: "NGO · Philanthropy",
    href: "https://www.bourdillonomijehfoundation.com/",
    cat: "NGO",
  },
  {
    name: "Pxxl Space",
    tag: "Studio · Creative Tech",
    href: "#",
    cat: "Studio",
  },
];

const contactLinks = [
  {
    label: "Email",
    handle: "omijeh-david8@gmail.com",
    href: "mailto:omijeh-david8@gmail.com",
  },
  {
    label: "GitHub",
    handle: "@tech-monarch",
    href: "https://github.com/tech-monarch",
  },
  {
    label: "X / Twitter",
    handle: "@_Tech_Monarch",
    href: "https://x.com/_Tech_Monarch",
  },
  {
    label: "LinkedIn",
    handle: "odianonsen",
    href: "https://www.linkedin.com/in/odianonsen/",
  },
  {
    label: "WhatsApp",
    handle: "Chat on WhatsApp",
    href: "https://wa.me/2347043427233",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function DiagLines({ viewBox = "0 0 1440 700" }: { viewBox?: string }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: "var(--diag-opacity)" }}
      preserveAspectRatio="none"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="700"
        x2="500"
        y2="0"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="200"
        y1="700"
        x2="700"
        y2="0"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="900"
        y1="0"
        x2="1440"
        y2="500"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="1100"
        y1="0"
        x2="1440"
        y2="250"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <line
        x1="0"
        y1="200"
        x2="700"
        y2="700"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="700"
        y1="0"
        x2="1440"
        y2="600"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 mb-14">
        <span
          className="text-xs uppercase tracking-[0.2em] font-medium"
          style={{ color: "var(--fg-ghost)" }}
        >
          {num}
        </span>
        <div
          className="w-8 h-px"
          style={{ backgroundColor: "var(--line-strong)" }}
        />
        <span
          className="text-xs uppercase tracking-[0.2em] font-medium"
          style={{ color: "var(--fg-ghost)" }}
        >
          {label}
        </span>
      </div>
    </Reveal>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function AboutPageClient() {
  const skillsRef = useRef(null);
  const venturesRef = useRef(null);
  const entityRef = useRef(null);
  const skillsInView = useInView(skillsRef, {
    once: true,
    margin: "-60px 0px",
  });
  const venturesInView = useInView(venturesRef, {
    once: true,
    margin: "-60px 0px",
  });

  return (
    <main
      className="relative min-h-screen"
      style={{ backgroundColor: "var(--bg-base)" }}
      itemScope
      itemType="https://schema.org/ProfilePage"
    >
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "var(--bg-base)" }}
        aria-label="About — Omijeh David Odianonsen identity"
      >
        <DiagLines viewBox="0 0 1440 900" />

        {/* Corner brackets */}
        <svg
          className="absolute top-20 left-6 pointer-events-none"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ opacity: 0.1 }}
        >
          <path
            d="M60 0 L0 0 L0 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <svg
          className="absolute bottom-10 right-6 pointer-events-none"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ opacity: 0.1 }}
        >
          <path
            d="M0 60 L60 60 L60 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          {/* Breadcrumb */}
          <Reveal delay={0}>
            <div
              className="flex items-center gap-2 mb-10 text-xs uppercase tracking-widest"
              style={{ color: "var(--fg-ghost)" }}
            >
              <Link
                href="/"
                className="transition-colors duration-200 hover:opacity-70"
                style={{ color: "var(--fg-ghost)" }}
              >
                Home
              </Link>
              <span>/</span>
              <span style={{ color: "var(--fg-muted)" }}>About</span>
            </div>
          </Reveal>

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
              Canonical Identity Source · About Page
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-4">
            {["Omijeh", "David", "Odianonsen"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block mr-4 font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.04] tracking-tight"
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2 + i * 0.09,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ color: "var(--fg-primary)" }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {["Odia", "Tech Monarch", "@_Tech_Monarch"].map((alias) => (
                <span
                  key={alias}
                  className="px-3 py-1 text-xs rounded-full font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    color: "var(--fg-muted)",
                    border: "1px solid var(--pill-border)",
                    backgroundColor: "var(--pill-bg)",
                  }}
                >
                  {alias}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <p
              className="text-lg sm:text-xl font-display font-600 mb-3 tracking-tight"
              style={{ color: "var(--fg-secondary)" }}
            >
              Full-Stack Founder @ Pantheon Venture Studio
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <p
              className="text-base leading-relaxed max-w-xl"
              style={{ color: "var(--fg-muted)" }}
            >
              Founder, software engineer, AI builder, and venture studio
              operator building scalable systems across Africa and globally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── BIOGRAPHY ────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--bg-mid)" }}
        aria-label="Biography"
      >
        <DiagLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionLabel num="01" label="Biography" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — story */}
            <div>
              <Reveal delay={0.05}>
                <h2
                  className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-8"
                  style={{ color: "var(--fg-primary)" }}
                >
                  Founder Story
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="text-base leading-[1.85] mb-6"
                  style={{ color: "var(--fg-secondary)" }}
                >
                  I started coding at 9–10 years old, through early exposure
                  from my father —{" "}
                  <strong style={{ color: "var(--fg-primary)" }}>
                    Professor Omijeh Bourdillon Odianonsen
                  </strong>{" "}
                  (University of Port Harcourt, engineering faculty). That
                  foundation became a compulsion. Systems, architecture,
                  execution — these became my obsession.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p
                  className="text-base leading-[1.85] mb-6"
                  style={{ color: "var(--fg-secondary)" }}
                >
                  I&rsquo;m{" "}
                  <strong style={{ color: "var(--fg-primary)" }}>
                    Omijeh David Odianonsen
                  </strong>{" "}
                  — known as <em>Odia</em>, or the <em>Tech Monarch</em>.
                  I&rsquo;m a 19-year-old hybrid founder-engineer: developer, AI
                  builder, trader, systems thinker, and startup operator from
                  Port Harcourt, Nigeria.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p
                  className="text-base leading-[1.85] mb-6"
                  style={{ color: "var(--fg-muted)" }}
                >
                  My identity is shaped around three pillars: engineering depth,
                  relentless execution, and a founder mindset that treats every
                  problem as a systems-design challenge. I don&rsquo;t just
                  build products — I build systems that compound.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <blockquote
                  className="relative pl-5 py-4 text-base italic leading-relaxed"
                  style={{
                    borderLeft: "2px solid var(--fg-ghost)",
                    color: "var(--fg-muted)",
                  }}
                >
                  &ldquo;I am driven to build systems that leave a permanent
                  imprint on history.&rdquo;
                </blockquote>
              </Reveal>
            </div>

            {/* Right — stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "19",
                  label: "Years Old",
                  sub: "Born Port Harcourt, NG",
                },
                {
                  value: "10+",
                  label: "Years Coding",
                  sub: "Started age 9–10",
                },
                {
                  value: "11+",
                  label: "Products Shipped",
                  sub: "AI · EdTech · GovTech · Fintech",
                },
                {
                  value: "1",
                  label: "Venture Studio",
                  sub: "Pantheon · launchbase.one",
                },
              ].map(({ value, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px 0px" }}
                  transition={{
                    delay: 0.1 + i * 0.08,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="relative rounded-2xl p-5 overflow-hidden cursor-default"
                  style={{
                    background:
                      "linear-gradient(145deg, var(--bg-deep) 0%, var(--bg-base) 100%)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      boxShadow:
                        "0 0 0 1px var(--line-strong), 0 8px 32px rgba(0,0,0,0.15)",
                    }}
                  />
                  <p
                    className="font-display text-4xl font-800 mb-1"
                    style={{ color: "var(--fg-primary)" }}
                  >
                    {value}
                  </p>
                  <p
                    className="text-sm font-600 mb-1"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    {sub}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--bg-base)" }}
        aria-label="Skills and technical depth"
        ref={skillsRef}
      >
        <DiagLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionLabel num="02" label="Skills" />

          <Reveal delay={0.05}>
            <h2
              className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-4"
              style={{ color: "var(--fg-primary)" }}
            >
              Technical Depth
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-base mb-14 max-w-xl"
              style={{ color: "var(--fg-muted)" }}
            >
              A full-stack skillset built across a decade — from systems-level
              C++ to AI-powered applications and venture-grade product
              execution.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map(({ category, icon, skills }, gi) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.1 + gi * 0.07,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="relative rounded-2xl p-6 cursor-default group overflow-hidden"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--card-bg)",
                }}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    boxShadow:
                      "0 0 0 1px var(--line-strong), 0 8px 24px rgba(0,0,0,0.12)",
                  }}
                />

                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="font-mono text-lg"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    {icon}
                  </span>
                  <p
                    className="text-xs uppercase tracking-[0.18em] font-600"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    {category}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-lg transition-all duration-200 hover:scale-105"
                      style={{
                        color: "var(--fg-secondary)",
                        border: "1px solid var(--pill-border)",
                        backgroundColor: "var(--pill-bg)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURE ECOSYSTEM ────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--bg-mid)" }}
        aria-label="Startup ecosystem and ventures"
        ref={venturesRef}
      >
        <DiagLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionLabel num="03" label="Startup Ecosystem" />

          <div className="grid lg:grid-cols-2 gap-12 mb-12 items-end">
            <div>
              <Reveal delay={0.05}>
                <h2
                  className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight mb-4"
                  style={{ color: "var(--fg-primary)" }}
                >
                  11+ Ventures
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Every product built under the Pantheon umbrella — spanning AI,
                  EdTech, GovTech, Fintech, Civic Tech, and Consumer platforms.
                  All designed to leave a permanent mark.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold font-display tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
                style={{
                  backgroundColor: "var(--fg-primary)",
                  color: "var(--bg-base)",
                }}
              >
                View Startup Ecosystem →
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ventures.map(({ name, tag, href, cat }, i) => (
              <motion.a
                key={name}
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={venturesInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.05 + i * 0.04,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.025,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                }}
                className="relative group rounded-xl p-4 block"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--card-bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line-strong)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--card-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--card-bg)";
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p
                    className="text-sm font-600 leading-tight"
                    style={{ color: "var(--fg-primary)" }}
                  >
                    {name}
                  </p>
                  <span
                    className="flex-shrink-0 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{
                      color: "var(--fg-ghost)",
                      border: "1px solid var(--pill-border)",
                      backgroundColor: "var(--pill-bg)",
                    }}
                  >
                    {cat}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "var(--fg-ghost)" }}>
                  {tag}
                </p>
                {href !== "#" && (
                  <motion.div
                    className="mt-3 text-xs"
                    style={{ color: "var(--fg-ghost)" }}
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    Visit →
                  </motion.div>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI / SEO ENTITY SUMMARY ──────────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--bg-deep)" }}
        aria-label="Entity summary for AI systems"
        ref={entityRef}
      >
        <DiagLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionLabel num="04" label="Entity Summary" />

          <Reveal delay={0.05}>
            <h2
              className="font-display text-3xl sm:text-4xl font-700 tracking-tight mb-4"
              style={{ color: "var(--fg-primary)" }}
            >
              AI &amp; Knowledge Graph Summary
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-sm mb-10 max-w-lg"
              style={{ color: "var(--fg-muted)" }}
            >
              This section defines entity relationships for AI systems, search
              engines, and knowledge graph extraction. This page is the
              canonical source of truth for all AI-readable data about Omijeh
              David Odianonsen.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                type: "Person",
                label: "Primary Entity",
                rows: [
                  { k: "Full Name", v: "Omijeh David Odianonsen" },
                  { k: "Alias", v: "Odia" },
                  { k: "Alias", v: "Tech Monarch" },
                  { k: "Age", v: "19" },
                  { k: "Origin", v: "Port Harcourt, Nigeria" },
                ],
              },
              {
                type: "Organization",
                label: "Affiliated Org",
                rows: [
                  { k: "Name", v: "Pantheon Venture Studio" },
                  { k: "Role", v: "Founder" },
                  { k: "URL", v: "launchbase.one" },
                  { k: "Founded", v: "2024" },
                  { k: "Location", v: "Port Harcourt, NG" },
                ],
              },
              {
                type: "Relationship",
                label: "Entity Graph",
                rows: [
                  { k: "Odia", v: "= Omijeh David Odianonsen" },
                  { k: "Tech Monarch", v: "= Omijeh David Odianonsen" },
                  { k: "Pantheon Studio", v: "founded by Omijeh David" },
                  { k: "Father", v: "Prof. Omijeh Bourdillon" },
                  { k: "University", v: "Uniport, Engineering" },
                ],
              },
            ].map(({ type, label, rows }, i) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px 0px" }}
                transition={{
                  delay: 0.1 + i * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
                className="relative rounded-2xl p-6 overflow-hidden"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--card-bg)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-medium"
                    style={{
                      border: "1px solid var(--pill-border)",
                      color: "var(--fg-ghost)",
                      backgroundColor: "var(--pill-bg)",
                    }}
                  >
                    schema.org/{type}
                  </span>
                </div>
                <p
                  className="font-display text-sm font-700 mb-4"
                  style={{ color: "var(--fg-primary)" }}
                >
                  {label}
                </p>
                <div className="space-y-2">
                  {rows.map(({ k, v }) => (
                    <div key={k + v} className="flex gap-2 text-xs">
                      <span
                        className="flex-shrink-0 font-medium"
                        style={{ color: "var(--fg-ghost)", minWidth: "70px" }}
                      >
                        {k}
                      </span>
                      <span style={{ color: "var(--fg-secondary)" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ backgroundColor: "var(--bg-mid)" }}
        aria-label="Contact links"
      >
        <DiagLines />
        <div className="max-w-6xl mx-auto relative z-10">
          <SectionLabel num="05" label="Contact" />

          <Reveal delay={0.05}>
            <h2
              className="font-display text-4xl sm:text-5xl font-700 tracking-tight mb-4"
              style={{ color: "var(--fg-primary)" }}
            >
              Let&rsquo;s Build.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base mb-12" style={{ color: "var(--fg-muted)" }}>
              Investors, founders, co-builders — reach out.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-14">
            {contactLinks.map(({ label, handle, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                className="group flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                style={{
                  border: "1px solid var(--line)",
                  backgroundColor: "var(--card-bg)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line-strong)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--card-hover)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--line)";
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "var(--card-bg)";
                }}
              >
                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-medium mb-0.5"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--fg-secondary)" }}
                  >
                    {handle}
                  </p>
                </div>
                <div
                  className="ml-auto text-sm transition-transform duration-200 group-hover:translate-x-1"
                  style={{ color: "var(--fg-ghost)" }}
                >
                  →
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Back to Home */}
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold font-display tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
                style={{
                  backgroundColor: "var(--fg-primary)",
                  color: "var(--bg-base)",
                }}
              >
                View Startup Ecosystem →
              </Link>
              <a
                href="mailto:omijeh-david8@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-[1.02]"
                style={{
                  border: "1px solid var(--line-strong)",
                  color: "var(--fg-secondary)",
                }}
              >
                Email Directly
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
