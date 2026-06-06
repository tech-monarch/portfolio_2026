"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Reveal from "./Reveal";

const socialLinks = [
  {
    label: "Twitter / X",
    handle: "@_Tech_Monarch",
    href: "https://x.com/_Tech_Monarch",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    handle: "@tech-monarch",
    href: "https://github.com/tech-monarch",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    handle: "odianonsen",
    href: "https://www.linkedin.com/in/odianonsen/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Pantheon",
    handle: "launchbase.one",
    href: "https://launchbase.one",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
  },
  {
    label: "Email",
    handle: "omijeh-david8@gmail.com",
    href: "mailto:omijeh-david8@gmail.com",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    handle: "Chat on WhatsApp",
    href: "https://wa.me/2347043427233",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"investor" | "founder" | "other">("other");
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "var(--card-bg)",
    border: "1px solid var(--line)",
    borderRadius: "12px",
    color: "var(--fg-primary)",
    fontSize: "14px",
    outline: "none",
    transition: "all 0.2s",
    fontFamily: "inherit",
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      ref={ref}
      style={{ backgroundColor: "var(--bg-deep)" }}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: "var(--diag-opacity)" }}
        preserveAspectRatio="none"
        viewBox="0 0 1440 700"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="0"
          x2="800"
          y2="700"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="300"
          y1="0"
          x2="1100"
          y2="700"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="1440"
          y1="100"
          x2="600"
          y2="700"
          stroke="currentColor"
          strokeWidth="2"
        />
        <line
          x1="100"
          y1="0"
          x2="140"
          y2="80"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="1340"
          y1="620"
          x2="1380"
          y2="700"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="700"
          y1="0"
          x2="750"
          y2="90"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--line-strong), transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-16">
            <span
              className="text-xs uppercase tracking-[0.2em] font-medium"
              style={{ color: "var(--fg-ghost)" }}
            >
              07
            </span>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "var(--line-strong)" }}
            />
            <span
              className="text-xs uppercase tracking-[0.2em] font-medium"
              style={{ color: "var(--fg-ghost)" }}
            >
              Contact
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-800 leading-tight tracking-tight mb-4"
            style={{ color: "var(--fg-primary)" }}
          >
            Let&rsquo;s Build.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg mb-16" style={{ color: "var(--fg-muted)" }}>
            Investors, founders, co-builders reach out.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left info */}
          <div>
            <Reveal delay={0.12}>
              <h3
                className="font-display text-xl font-600 mb-3 tracking-tight"
                style={{ color: "var(--fg-primary)" }}
              >
                Get in touch
              </h3>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="text-base leading-[1.8] mb-10"
                style={{ color: "var(--fg-muted)" }}
              >
                Whether you&rsquo;re an investor looking at the Pantheon
                ecosystem, a founder wanting to co-build, or a partner exploring
                collaboration this is where it starts.
              </p>
            </Reveal>

            <div className="space-y-3">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
                  className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-200"
                  style={{ border: "1px solid transparent" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--line)";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "var(--card-bg)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "1px solid var(--line)",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {link.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest font-medium mb-0.5"
                      style={{ color: "var(--fg-ghost)" }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      {link.handle}
                    </p>
                  </div>
                  <div
                    className="ml-auto text-sm"
                    style={{ color: "var(--fg-ghost)" }}
                  >
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Type selector */}
              <div>
                <label
                  className="block text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: "var(--fg-ghost)" }}
                >
                  I am a
                </label>
                <div className="flex gap-2">
                  {(["investor", "founder", "other"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setType(t)}
                      className="flex-1 py-2 rounded-xl text-xs font-medium uppercase tracking-wider transition-all duration-200"
                      style={{
                        border: `1px solid ${type === t ? "var(--fg-muted)" : "var(--line)"}`,
                        backgroundColor:
                          type === t ? "var(--card-hover)" : "var(--card-bg)",
                        color:
                          type === t ? "var(--fg-primary)" : "var(--fg-ghost)",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {[
                {
                  label: "Name",
                  type: "text",
                  value: name,
                  onChange: setName,
                  placeholder: "Your name",
                },
                {
                  label: "Email",
                  type: "email",
                  value: email,
                  onChange: setEmail,
                  placeholder: "your@email.com",
                },
              ].map(
                ({ label, type: inputType, value, onChange, placeholder }) => (
                  <div key={label}>
                    <label
                      className="block text-xs uppercase tracking-widest font-medium mb-2"
                      style={{ color: "var(--fg-ghost)" }}
                    >
                      {label}
                    </label>
                    <input
                      type={inputType}
                      value={value}
                      required
                      placeholder={placeholder}
                      onChange={(e) => onChange(e.target.value)}
                      style={inputBase}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor =
                          "var(--line-strong)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--line)";
                      }}
                    />
                  </div>
                ),
              )}
              <div>
                <label
                  className="block text-xs uppercase tracking-widest font-medium mb-2"
                  style={{ color: "var(--fg-ghost)" }}
                >
                  Message
                </label>
                <textarea
                  value={message}
                  required
                  rows={5}
                  placeholder="Tell me what you're building or investing in..."
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ ...inputBase, resize: "none" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "var(--line-strong)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-display font-600 text-sm tracking-tight transition-all duration-300"
                style={
                  sent
                    ? {
                        backgroundColor: "rgba(34,197,94,0.10)",
                        border: "1px solid rgba(34,197,94,0.22)",
                        color: "#16a34a",
                      }
                    : {
                        backgroundColor: "var(--fg-primary)",
                        color: "var(--bg-base)",
                        border: "1px solid transparent",
                      }
                }
              >
                {sent ? "Message sent ✓" : "Send Message →"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
