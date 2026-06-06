"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    setDark(stored === "light" ? false : true);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setVisible(y < lastY || y < 80);
      setLastY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Pantheon", href: "#pantheon" },
    { label: "Startups", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Island Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4"
      >
        <nav
          className="pointer-events-auto flex items-center gap-1 px-3 py-2 rounded-2xl"
          style={{
            backgroundColor: "color-mix(in srgb, var(--bg-base) 80%, transparent)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid var(--line-strong)",
            boxShadow: "0 4px 32px rgba(0,0,0,0.18), 0 1px 0 rgba(255,255,255,0.04) inset",
          }}
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center px-1.5 py-1.5 rounded-xl transition-all duration-200 mr-2"
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--card-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/omijeh-david-odianonsen1.jpg"
              alt="Omijeh David Odianonsen"
              className="w-7 h-7 rounded-full object-cover"
              style={{ border: "1px solid var(--line-strong)" }}
            />
          </Link>

          {/* Separator */}
          <div className="w-px h-4 hidden md:block" style={{ backgroundColor: "var(--line-strong)" }} />

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-0.5 ml-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                className="text-[12.5px] tracking-wide font-medium px-3 py-1.5 rounded-xl transition-all duration-200"
                style={{ color: "var(--fg-muted)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                  (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Separator */}
          <div className="w-px h-4 hidden md:block ml-1" style={{ backgroundColor: "var(--line-strong)" }} />

          {/* Theme toggle */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            onClick={() => setDark(!dark)}
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ml-1"
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg-primary)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--card-hover)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -20, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 20, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {dark ? <SunIcon /> : <MoonIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-xl transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            style={{ color: "var(--fg-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--card-hover)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {[
              menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 },
              menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 },
              menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 },
            ].map((anim, idx) => (
              <motion.span
                key={idx}
                animate={anim}
                transition={{ duration: 0.22 }}
                className="block w-4 h-px"
                style={{ backgroundColor: "var(--fg-primary)" }}
              />
            ))}
          </button>
        </nav>
      </motion.div>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 md:hidden"
            style={{ backgroundColor: "color-mix(in srgb, var(--bg-base) 94%, transparent)" }}
            onClick={() => setMenuOpen(false)}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ delay: i * 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-4xl font-700 tracking-tight transition-opacity duration-200 hover:opacity-50"
                style={{ color: "var(--fg-primary)" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="absolute bottom-10 flex items-center gap-4"
            >
              {[
                { label: "X / Twitter", href: "https://x.com/_Tech_Monarch" },
                { label: "GitHub", href: "https://github.com/tech-monarch" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/odianonsen/" },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest transition-colors duration-200"
                  style={{ color: "var(--fg-ghost)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--fg-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-ghost)")}
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
