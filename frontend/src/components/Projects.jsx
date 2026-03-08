import { useState } from "react";
import { Btn } from "./Hero";
import useReveal from "../hooks/useReveal";

// Project screenshots: drop an image in `public/projects/` and point `image`
// below to it (e.g. "/projects/workzone.png"). Leave "" to show the branded
// placeholder. Recommended size ~1600×900 (16:9).
const projects = [
  {
    id: "arkalayn",
    name: "Arkalayn Kitty",
    tagline: "Group expense management with role-based access control",
    badge: "Fintech · Live",
    meta: "Group wallet · Full-stack · TypeScript",
    description:
      "A production-oriented group wallet system built on a pooled balance model. Members contribute to a shared pool, expenses are deducted, and every mutation is logged — financial integrity enforced at every layer.",
    stats: [
      { val: "3", label: "RBAC tiers" },
      { val: "0", label: "Negative balance" },
      { val: "TS", label: "Typed" },
      { val: "∞", label: "Audit log" },
    ],
    arch: [
      "Pooled wallet model",
      "3-tier RBAC (Member / Admin / Super Admin)",
      "Middleware-level role enforcement",
      "Server-side balance validation",
      "Immutable expenses (no PATCH)",
      "Atomic balance updates",
    ],
    tech: ["React", "Vite", "Tailwind CSS v4", "Redux Toolkit", "RTK Query", "Node.js", "Express", "TypeScript", "MongoDB"],
    live: "https://arkalynkitty-fin.vercel.app",
    repo: "https://github.com/aravindworkzone/Arkalayn-kitty",
    host: "arkalynkitty-fin.vercel.app",
    image: "/projects/arkalyn-kitty_landing_page.png",
  },
  {
    id: "workzone",
    name: "WorkZone",
    featured: true,
    tagline: "AI-powered goal-to-routine productivity SaaS",
    badge: "SaaS · Live",
    meta: "Productivity platform · Full-stack · AI-integrated",
    description:
      "Converts yearly goals into structured daily routines using AI. Built with full JWT auth, refresh token rotation with reuse detection, 7-day productivity tracking, and 30-day history aggregation.",
    stats: [
      { val: "JWT", label: "Auth" },
      { val: "AI", label: "Integrated" },
      { val: "7d", label: "Tracker" },
      { val: "30d", label: "History" },
    ],
    arch: [
      "JWT + HTTP-only cookies",
      "Refresh token rotation",
      "Refresh Token Reuse Detection",
      "AI routine generation (Gemini)",
      "Goal → Routine → Today pipeline",
      "RTK Query caching",
      "Session Limitation",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Redux Toolkit", "RTK Query", "Node.js", "Express", "MongoDB", "Gemini AI"],
    live: "https://workzone-todo.vercel.app",
    repo: "https://github.com/aravindworkzone/Workzone",
    host: "workzone-todo.vercel.app",
    image: "/projects/todo.png",
  }
];

function BrowserBar({ host }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5"
      style={{
        background: "#f4f3ef",
        borderBottom: "1px solid #ece8e1",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#27c93f" }} />
      <div
        className="flex-1 ml-3 px-3 py-1 rounded-md text-center truncate"
        style={{
          fontFamily: "'DM Mono',monospace",
          fontSize: 11,
          color: "#6b6860",
          background: "white",
          border: "1px solid #ece8e1",
        }}
      >
        🔒 {host}
      </div>
    </div>
  );
}

function ProjectMedia({ p }) {
  const [errored, setErrored] = useState(false);
  const showImage = p.image && !errored;
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "16 / 9",
        borderBottom: "1px solid #ece8e1",
        background: "linear-gradient(135deg, #f5f7fd 0%, #f4f3ef 100%)",
      }}
    >
      {showImage ? (
        <img
          src={p.image}
          alt={`${p.name} screenshot`}
          loading="lazy"
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <div
            className="flex items-center justify-center rounded-2xl"
            style={{ width: 52, height: 52, background: "#eef2fd", color: "#1a56e8" }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.6" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <div style={{ fontFamily: "'Lora', Georgia, serif", fontSize: 17, fontWeight: 700, color: "#111110" }}>
            {p.name}
          </div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.04em", maxWidth: 340 }}>
            {p.tagline}
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ p, hovered, setHovered, index }) {
  const reveal = useReveal();
  return (
    <div ref={reveal.ref} className={reveal.className} style={{ transitionDelay: `${index * 80}ms` }}>
      <div
        className="overflow-hidden mb-6 cursor-default"
        style={{
          background: "white",
          border: "1px solid #ece8e1",
          borderRadius: 24,
          boxShadow: hovered === p.id ? "0 18px 50px rgba(0,0,0,0.07)" : "0 4px 18px rgba(0,0,0,0.03)",
          transform: hovered === p.id ? "translateY(-3px)" : "translateY(0)",
          transition: "all 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onMouseEnter={() => setHovered(p.id)}
        onMouseLeave={() => setHovered(null)}
      >
        <BrowserBar host={p.host} />
        <ProjectMedia p={p} />

        <div className="p-8 md:p-12">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-5 mb-7">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <span
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(22px, 3vw, 34px)",
                    fontWeight: 700,
                    color: "#111110",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.name}
                </span>
                <span
                  className="px-3 py-0.5 rounded-full text-[10px] font-medium tracking-wider"
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    background: "#eef2fd",
                    border: "1px solid rgba(26,86,232,0.2)",
                    color: "#1a56e8",
                  }}
                >
                  {p.badge}
                </span>
                {p.featured && (
                  <span
                    className="px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wider"
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      background: "linear-gradient(90deg, #1a56e8, #4f7fff)",
                      color: "white",
                      letterSpacing: "0.08em",
                    }}
                  >
                    ★ FEATURED
                  </span>
                )}
              </div>
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#b8b5ae" }}>
                {p.meta}
              </span>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <Btn variant="accent" href={p.live}>Live →</Btn>
              <Btn variant="border" href={p.repo}>GitHub</Btn>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-6 md:gap-10 py-5 mb-6"
            style={{ borderTop: "1px solid #ece8e1", borderBottom: "1px solid #ece8e1" }}
          >
            {p.stats.map((s) => (
              <div key={s.label}>
                <span
                  className="block"
                  style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: "clamp(20px,4vw,28px)",
                    fontWeight: 700,
                    color: "#111110",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  {s.val}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 10,
                    color: "#b8b5ae",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[15px] text-[#6b6860] leading-[1.8] mb-5 max-w-[640px]">{p.description}</p>

          <p
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              color: "#b8b5ae",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Architecture decisions
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {p.arch.map((a) => (
              <span
                key={a}
                className="px-3 py-1 rounded-full text-[11px] tracking-wide"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  background: "#eef2fd",
                  border: "1px solid rgba(26,86,232,0.14)",
                  color: "#1a56e8",
                }}
              >
                {a}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-[11px]"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  background: "#f4f3ef",
                  border: "1px solid #ece8e1",
                  color: "#6b6860",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [hovered, setHovered] = useState(null);
  const header = useReveal();

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: "#f4f3ef", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-16">
        <div ref={header.ref} className={`flex items-baseline justify-between mb-12 md:mb-16 ${header.className}`}>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 700,
              color: "#111110",
              letterSpacing: "-0.02em",
            }}
          >
            Selected projects
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.08em" }}>
            02 / shipped work
          </span>
        </div>

        {projects.map((p, i) => (
          <ProjectCard key={p.id} p={p} hovered={hovered} setHovered={setHovered} index={i} />
        ))}
      </div>
    </section>
  );
}
