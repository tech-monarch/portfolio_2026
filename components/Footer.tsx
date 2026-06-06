"use client";

import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      className="relative px-6 py-10 overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)", borderTop: "1px solid var(--line)" }}
      itemScope
      itemType="https://schema.org/WPFooter"
    >
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }} aria-hidden="true">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1.5" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Reveal>
          <div className="flex flex-col gap-1" itemScope itemType="https://schema.org/Person">
            <p className="text-xs font-mono tracking-wide" style={{ color: "var(--fg-ghost)" }}>
              © MMXXVI ·{" "}
              <span itemProp="name">Omijeh David Odianonsen</span> · All rights reserved
            </p>
            <p className="text-[10px] uppercase tracking-widest" style={{ color: "var(--fg-ghost)" }}>
              <span itemProp="alternateName">Tech Monarch</span> ·{" "}
              <span itemProp="affiliation">Pantheon Venture Studio</span> ·{" "}
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">Port Harcourt</span>,{" "}
                <span itemProp="addressCountry">Nigeria</span>
              </span>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <nav aria-label="Social and quick links" className="flex items-center gap-6 flex-wrap justify-center">
            {[
              { label: "Twitter / X", href: "https://x.com/_Tech_Monarch", rel: "me noopener noreferrer" },
              { label: "GitHub", href: "https://github.com/tech-monarch", rel: "me noopener noreferrer" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/odianonsen/", rel: "me noopener noreferrer" },
              { label: "Pantheon", href: "https://launchbase.one", rel: "noopener noreferrer" },
              { label: "Résumé <span aria-hidden="true">→</span>", href: "https://docs.google.com/document/d/1BrJGoiyBuhbgpX7ZHlLcGmECVBVyoi2_LuRlZK8RHRU/edit?usp=sharing", rel: "noopener noreferrer" },
              { label: "Contact", href: "#contact", rel: undefined },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.rel}
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--fg-ghost)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--fg-ghost)")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </Reveal>
      </div>
    </footer>
  );
}
