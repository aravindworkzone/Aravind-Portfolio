import { useState } from "react";
import useReveal from "../hooks/useReveal";

const role = {
  company: "AV7SCM",
  title: "Junior Associate – Web Development",
  duration: "Jan 2025 – Present",
  location: "Tiruppur, TN",
  current: true,
  points: [
    "Developed and maintained a full-stack internal employee portal used across the organization",
    "Handled end-to-end feature delivery — from requirement gathering to deployment",
    "Managed relational database operations and wrote server-side logic for business workflows",
   "Collaborated with internal teams to identify pain points and ship targeted improvements"
  ],
};

export default function Experience() {
  const reveal = useReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="experience"
      className="py-24 md:py-32"
      style={{ background: "#fafaf8", fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>
        <div className={`flex items-baseline justify-between mb-12 md:mb-16 ${reveal.className}`}>
          <h2
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: "clamp(22px, 2.8vw, 30px)",
              fontWeight: 700,
              color: "#111110",
              letterSpacing: "-0.02em",
            }}
          >
            Experience
          </h2>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.08em" }}>
            03 / where I work
          </span>
        </div>

        <div className={reveal.className}>
          <div
            className="rounded-3xl p-8 md:p-11 cursor-default"
            style={{
              background: "white",
              border: `1px solid ${hovered ? "rgba(26,86,232,0.28)" : "#ece8e1"}`,
              boxShadow: hovered ? "0 16px 40px rgba(26,86,232,0.08)" : "0 4px 18px rgba(0,0,0,0.03)",
              transform: hovered ? "translateY(-3px)" : "translateY(0)",
              transition: "all 0.32s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <span
                    style={{
                      fontFamily: "'Lora', Georgia, serif",
                      fontSize: "clamp(20px, 2.6vw, 28px)",
                      fontWeight: 700,
                      color: "#111110",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {role.title}
                  </span>
                  {role.current && (
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                      style={{ background: "#edf6f1", border: "1px solid rgba(26,122,74,0.18)" }}
                    >
                      <span className="w-[6px] h-[6px] rounded-full bg-[#1a7a4a]" style={{ animation: "pulse 2.2s infinite" }} />
                      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#1a7a4a", letterSpacing: "0.06em" }}>
                        Present
                      </span>
                    </span>
                  )}
                </div>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 13, color: "#1a56e8", fontWeight: 600 }}>
                  {role.company}
                </span>
              </div>
              <div className="sm:text-right flex-shrink-0">
                <div style={{ fontSize: 13, fontWeight: 600, color: "#111110" }}>{role.duration}</div>
                <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#b8b5ae", letterSpacing: "0.04em", marginTop: 2 }}>
                  {role.location}
                </div>
              </div>
            </div>

            <ul className="flex flex-col gap-3.5" style={{ borderTop: "1px solid #ece8e1", paddingTop: 22 }}>
              {role.points.map((point) => (
                <li key={point} className="flex gap-3.5 items-start">
                  <span
                    className="flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                    style={{ width: 20, height: 20, background: "#eef2fd", color: "#1a56e8" }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span className="text-[14.5px] text-[#6b6860] leading-[1.7]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
