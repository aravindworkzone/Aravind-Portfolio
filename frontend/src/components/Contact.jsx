import { useState } from "react";
import { Btn } from "./Hero";
import ContactModal from "./ContactModal";
import useReveal from "../hooks/useReveal";

const links = [
  { icon: "✉️", label: "Email", val: "aravind.workzone@gmail.com", href: "mailto:aravind.workzone@gmail.com" },
  { icon: "🐙", label: "GitHub", val: "github.com/aravindworkzone", href: "https://github.com/aravindworkzone" },
  { icon: "💼", label: "LinkedIn", val: "linkedin.com/in/aravind-a-dev", href: "https://linkedin.com/in/aravind-a-dev" },
];

function ContactRow({ icon, label, val, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-4 px-5 py-4 rounded-2xl no-underline"
      style={{
        background: "white",
        border: `1px solid ${hovered ? "rgba(26,86,232,0.45)" : "#ece8e1"}`,
        boxShadow: hovered ? "0 10px 26px rgba(26,86,232,0.08)" : "0 2px 12px rgba(0,0,0,0.03)",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
        transition: "all 0.24s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[17px]">{icon}</span>
      <div className="flex-1 min-w-0">
        <div
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: 10,
            color: "#b8b5ae",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 3,
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#111110" }} className="truncate">
          {val}
        </div>
      </div>
      <span
        style={{
          color: hovered ? "#1a56e8" : "#b8b5ae",
          fontSize: 18,
          transition: "all 0.22s ease",
          transform: hovered ? "translateX(2px)" : "translateX(0)",
        }}
      >
        →
      </span>
    </a>
  );
}

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const reveal = useReveal();

  return (
    <>
      <section
        id="contact"
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ background: "#f4f3ef", fontFamily: "'DM Sans', sans-serif" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(500px 300px at 80% 30%, rgba(26,86,232,0.06), transparent 60%)",
          }}
        />

        <div className="relative max-w-[1000px] mx-auto px-6 md:px-16" ref={reveal.ref}>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start ${reveal.className}`}>
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                style={{ background: "#edf6f1", border: "1px solid rgba(26,122,74,0.18)" }}
              >
                <span className="w-[7px] h-[7px] rounded-full bg-[#1a7a4a]" style={{ animation: "pulse 2.2s infinite" }} />
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: 11,
                    color: "#1a7a4a",
                    letterSpacing: "0.06em",
                  }}
                >
                  Hiring or just want to say hi? I reply within 24 hours.
                </span>
              </div>

              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontSize: "clamp(30px, 4.2vw, 50px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "#111110",
                }}
              >
                Let's <em style={{ fontStyle: "italic" }} className="gradient-text">work</em><br />
                together.
              </h2>
              <p className="text-[15.5px] text-[#6b6860] leading-[1.8] mb-6 max-w-[400px]">
                I'm open to full-stack developer roles at product-focused teams. Feel free to reach out — I'd genuinely love to hear from you.
              </p>

              <div className="flex flex-col gap-2.5 mb-7 max-w-[320px]">
                {[
                  { k: "Response", v: "< 24 hours" },
                  { k: "Notice period", v: "30 days" },
                  { k: "Current Location", v: "Tiruppur, India" },
                ].map((row, i, arr) => (
                  <div
                    key={row.k}
                    className="flex justify-between items-center pb-2"
                    style={{ borderBottom: i < arr.length - 1 ? "1px solid #ece8e1" : "none" }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Mono',monospace",
                        fontSize: 10,
                        color: "#b8b5ae",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.k}
                    </span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#111110" }}>{row.v}</span>
                  </div>
                ))}
              </div>

              <Btn variant="dark" onClick={() => setModalOpen(true)}>Send a Message →</Btn>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-2.5 mt-4 md:mt-0">
              <span
                className="block mb-1"
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 10,
                  color: "#b8b5ae",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Reach me directly
              </span>
              {links.map((l) => (
                <ContactRow key={l.label} {...l} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
