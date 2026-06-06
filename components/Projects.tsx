"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Reveal from "./Reveal";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "launchbase", title: "Launchbase / Pantheon Studio", subtitle: "Venture Studio Hub",
    description: "The flagship venture studio site and startup launchpad. Investor hub, co-builder portal, and startup ecosystem showcase for Pantheon.",
    tags: ["Venture Studio", "AI-native", "Africa"], href: "https://launchbase.one", category: "Studio",
  },
  {
    id: "unihub", title: "UniHub", subtitle: "University Platform",
    description: "Centralised university hub for Nigerian students: courses, resources, collaboration, and campus tools.",
    tags: ["EdTech", "Nigeria", "Students"], href: "https://uni-hub-roan.vercel.app/", category: "EdTech",
  },
  {
    id: "shift", title: "Shift", subtitle: "Productivity Tool",
    description: "A modern task and shift management platform for teams operating across time zones.",
    tags: ["SaaS", "Productivity", "Teams"], href: "https://shift-puce.vercel.app/", category: "SaaS",
  },
  {
    id: "myright", title: "MyRight", subtitle: "Civic Rights Platform",
    description: "Empowering Nigerian citizens with knowledge of their legal rights and civic entitlements.",
    tags: ["Civic Tech", "Legal", "Nigeria"], href: "https://my-right-one.vercel.app/", category: "Civic",
  },
  {
    id: "scanrush", title: "ScanRush", subtitle: "QR Commerce Platform",
    description: "A QR-powered commerce and menu platform for restaurants and businesses.",
    tags: ["Commerce", "QR", "Restaurant"], href: "https://scanrush.vercel.app/", category: "Commerce",
  },
  {
    id: "teachers-platform", title: "Rivers State Teachers Recruitment", subtitle: "Government System",
    description: "Official digital recruitment platform for the Rivers State government teacher hiring process.",
    tags: ["GovTech", "Rivers State", "Recruitment"], href: "#", category: "GovTech",
  },
  {
    id: "skylite", title: "Skylite Pro", subtitle: "Investment Landing",
    description: "Premium landing page and investor onboarding system for Skylite investment product.",
    tags: ["Fintech", "Investment", "Landing"], href: "https://investment-langing-page-v3.vercel.app/", category: "Fintech",
  },
  {
    id: "discover-niger", title: "Discover Niger", subtitle: "Travel & Culture",
    description: "Tourism and cultural discovery platform for the Niger region, showcasing destinations and experiences.",
    tags: ["Tourism", "Culture", "Niger"], href: "https://discover-niger.vercel.app/", category: "Consumer",
  },
  {
    id: "foodix", title: "Foodix", subtitle: "Restaurant Platform",
    description: "Full-featured restaurant discovery and ordering platform with live menu and booking.",
    tags: ["Restaurant", "Ordering", "Consumer"], href: "https://restaurant-nine-khaki.vercel.app/", category: "Consumer",
  },
  {
    id: "bourdillon", title: "Bourdillon Omijeh Foundation", subtitle: "Foundation Website",
    description: "Official site for the Bourdillon Omijeh Foundation: family philanthropy and community impact.",
    tags: ["Foundation", "Philanthropy", "Community"], href: "https://www.bourdillonomijehfoundation.com/", category: "NGO",
  },
  {
    id: "pxxl", title: "Pxxl Space", subtitle: "Creative Tech Studio",
    description: "Co-founded creative technology studio exploring the intersection of design, digital art, and frontier tech.",
    tags: ["Creative Tech", "Design", "Studio"], href: "#", category: "Studio",
  },
];

function useCarousel(total: number) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback((idx: number) => {
    setDirection(idx > active ? 1 : -1);
    setActive(((idx % total) + total) % total);
  }, [active, total]);

  const next = useCallback(() => go((active + 1) % total), [active, go, total]);
  const prev = useCallback(() => go((active - 1 + total) % total), [active, go, total]);

  return { active, direction, next, prev, go };
}

function BrowserPreview({ url, title }: { url: string; title: string }) {
  const [loaded, setLoaded] = useState(false);
  const isExternal = url.startsWith("http");

  return (
    <div
      className="relative rounded-xl overflow-hidden mb-4"
      style={{ border: "1px solid var(--line)", backgroundColor: "var(--bg-deep)" }}
    >
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{ borderBottom: "1px solid var(--line)", backgroundColor: "var(--bg-mid)" }}
      >
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255,100,100,0.45)" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255,200,50,0.45)" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(50,200,100,0.45)" }} />
        </div>
        <div
          className="flex-1 mx-2 px-2 py-0.5 rounded text-xs truncate font-mono"
          style={{ backgroundColor: "var(--card-bg)", color: "var(--fg-ghost)", border: "1px solid var(--line)" }}
        >
          {isExternal ? url.replace("https://", "") : title.toLowerCase().replace(/\s/g, "-")}
        </div>
      </div>
      <div className="relative" style={{ height: "140px" }}>
        {isExternal ? (
          <>
            <iframe
              src={url}
              title={title}
              className="w-full h-full border-0 pointer-events-none"
              style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%", opacity: loaded ? 1 : 0, transition: "opacity 0.5s" }}
              loading="lazy"
              onLoad={() => setLoaded(true)}
            />
            {!loaded && (
              <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "var(--bg-deep)" }}>
                <span className="text-[10px] uppercase tracking-widest animate-pulse" style={{ color: "var(--fg-ghost)" }}>Loading</span>
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "var(--bg-deep)" }}>
            <div className="text-center">
              <p className="font-display text-2xl font-700 mb-1" style={{ color: "var(--fg-ghost)" }}>⬡</p>
              <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--fg-ghost)" }}>Preview Coming</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { active, direction, next, prev, go } = useCarousel(projects.length);
  const sectionRef = useRef<HTMLElement>(null);

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  // Touch swipe
  const touchStart = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    touchStart.current = null;
  };

  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    if (abs > 2) return { display: "none" };
    const z = 100 - abs * 30;
    const x = offset * 260;
    const scale = 1 - abs * 0.12;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.65 : 0.3;
    const rotateY = offset * 18;
    return {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: `translateX(calc(-50% + ${x}px)) scale(${scale}) perspective(1200px) rotateY(${rotateY}deg)`,
      zIndex: z,
      opacity,
      transition: "all 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
      pointerEvents: abs === 0 ? "auto" : "none",
      width: "360px",
    };
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
      style={{ backgroundColor: "var(--bg-mid)" }}
      ref={sectionRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        height="80"
        style={{ opacity: "var(--diag-opacity)" }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0" x2="1440" y2="80" stroke="currentColor" strokeWidth="1.5" />
        <line x1="0" y1="30" x2="1440" y2="110" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>03</span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--line-strong)" }} />
            <span className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--fg-ghost)" }}>Startup Ecosystem</span>
          </div>
        </Reveal>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl sm:text-5xl font-700 leading-tight tracking-tight max-w-sm" style={{ color: "var(--fg-primary)" }}>
              The Ecosystem
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                11+ products built &amp; shipped
              </p>
              <a
                href="https://github.com/omijeh-david"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
                style={{ border: "1px solid var(--line-strong)", color: "var(--fg-secondary)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-secondary)";
                }}
              >
                See more on GitHub
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* 3D Carousel */}
        <div className="relative" style={{ height: "520px" }}>
          {/* Cards */}
          <div className="absolute inset-0 flex items-start justify-center pt-4">
            {projects.map((project, i) => {
              const offset = i - active;
              // Wrap around for prev/next edges
              let wrappedOffset = offset;
              if (offset > projects.length / 2) wrappedOffset = offset - projects.length;
              if (offset < -projects.length / 2) wrappedOffset = offset + projects.length;

              return (
                <div key={project.id} style={getCardStyle(wrappedOffset)}>
                  <div
                    className="relative rounded-2xl p-5 overflow-hidden cursor-pointer transition-shadow duration-300"
                    style={{
                      border: "1px solid var(--line-strong)",
                      backgroundColor: "var(--card-bg)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                    onClick={() => wrappedOffset !== 0 && go(i)}
                    onMouseEnter={e => {
                      if (wrappedOffset === 0) {
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.18)";
                        (e.currentTarget as HTMLElement).style.borderColor = "var(--line-strong)";
                      }
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "";
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--line-strong)";
                    }}
                  >
                    {/* Browser preview */}
                    <BrowserPreview url={project.href} title={project.title} />

                    {/* Category pill + title */}
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-0.5 text-[10px] rounded-full uppercase tracking-wider font-medium"
                            style={{ backgroundColor: "var(--pill-bg)", border: "1px solid var(--pill-border)", color: "var(--fg-ghost)" }}
                          >
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-700 tracking-tight" style={{ color: "var(--fg-primary)" }}>
                          {project.title}
                        </h3>
                      </div>
                      {project.href !== "#" && (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                          style={{ border: "1px solid var(--line)", color: "var(--fg-ghost)" }}
                          onClick={e => e.stopPropagation()}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--line-strong)";
                            (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = "var(--line)";
                            (e.currentTarget as HTMLElement).style.color = "var(--fg-ghost)";
                          }}
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "var(--fg-muted)" }}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-[10px] rounded-full" style={{ color: "var(--fg-ghost)", border: "1px solid var(--line)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-xs font-medium tracking-wide" style={{ color: "var(--fg-ghost)" }}>
                        {project.href !== "#" ? "Open Live →" : "In Development"}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/3 -translate-y-1/2 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid var(--line-strong)", backgroundColor: "var(--card-bg)", color: "var(--fg-secondary)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-secondary)";
            }}
            aria-label="Previous project"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/3 -translate-y-1/2 z-50 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
            style={{ border: "1px solid var(--line-strong)", backgroundColor: "var(--card-bg)", color: "var(--fg-secondary)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-bg)";
              (e.currentTarget as HTMLElement).style.color = "var(--fg-secondary)";
            }}
            aria-label="Next project"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "20px" : "6px",
                height: "6px",
                backgroundColor: i === active ? "var(--fg-muted)" : "var(--line-strong)",
              }}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress label */}
        <div className="flex items-center justify-center mt-4">
          <span className="font-mono text-xs tracking-widest" style={{ color: "var(--fg-ghost)" }}>
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
