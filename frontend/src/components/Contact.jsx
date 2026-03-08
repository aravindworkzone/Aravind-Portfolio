import { useState } from "react";
import { Btn } from "./Hero";
import ContactModal from "./ContactModal";

const links = [
  { icon: "✉️", label: "Email", val: "aravind.workzone@email.com", href: "mailto:aravind.workzone@email.com" },
  { icon: "🦊", label: "GitLab", val: "gitlab.com/aravind.workzone", href: "https://gitlab.com/aravind.workzone" },
  { icon: "💼", label: "LinkedIn", val: "linkedin.com/aravind-a", href: "https://www.linkedin.com/in/aravind-a-768921285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
];

function ContactRow({ icon, label, val, href }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      className="flex items-center gap-4 px-5 py-4 rounded-xl no-underline"
      style={{
        background: "white",
        border: `1px solid ${hovered ? "#1a56e8" : "#e4e2dd"}`,
        boxShadow: hovered ? "0 4px 16px rgba(26,86,232,0.1)" : "0 1px 4px rgba(0,0,0,0.04)",
        transform: hovered ? "translateX(5px)" : "translateX(0)",
        transition: "all 0.22s ease",
      }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    >
      <span className="text-[17px]">{icon}</span>
      <div>
        <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#b8b5ae", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>{label}</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "#111110" }}>{val}</div>
      </div>
    </a>
  );
}

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-20 md:py-28" style={{ background: "#f4f3ef", fontFamily: "'DM Sans', sans-serif" }}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

            {/* Left */}
            <div>
              <h2 className="mb-5"
                style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.025em", color: "#111110" }}>
                Open to work.<br />
                Let's <em style={{ fontStyle: "italic", color: "#1a56e8" }}>talk.</em>
              </h2>
              <p className="text-[15px] text-[#6b6860] leading-[1.8] mb-8 max-w-[380px]">
                Looking for a MERN Stack developer role. If you have an opportunity or want to collaborate — reach out directly. I reply fast.
              </p>
              <Btn variant="dark" onClick={() => setModalOpen(true)}>Send a Message →</Btn>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-2.5 mt-4 md:mt-0">
              {links.map((l) => <ContactRow key={l.label} {...l} />)}
            </div>
          </div>
        </div>
      </section>

      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
