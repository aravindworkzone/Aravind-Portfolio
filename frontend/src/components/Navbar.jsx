import { useState, useEffect } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "highlights", label: "Highlights" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Stack" },
];

const spyIds = ["home", ...navLinks.map((l) => l.id), "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      let current = "home";
      spyIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 90) current = id;
      });
      setActive(current);

      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[62px]"
        style={{ background: "rgba(250,250,248,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid #ece8e1", fontFamily: "'DM Sans', sans-serif" }}
      >
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2.5 bg-transparent border-none cursor-pointer">
          <div className="px-2.5 py-1.5 text-[13px] font-semibold text-[#fafaf8] flex items-center justify-center rounded bg-[#1a56e8]">
            A
          </div>
          <span style={{ fontFamily: "'DM Mono',monospace" }} className="text-[13px] font-medium text-[#111110]">Aravind</span>
        </button>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="text-[13px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ color: active === l.id ? "#111110" : "#6b6860" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")}
            className="text-[13px] font-semibold px-5 py-2 rounded-lg bg-[#111110] text-[#fafaf8] border-none cursor-pointer hover:opacity-80 transition-opacity">
            Hire Me
          </button>
        </div>

        <button className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-[1.5px] bg-[#111110] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span className="block w-5 h-[1.5px] bg-[#111110] transition-all duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-5 h-[1.5px] bg-[#111110] transition-all duration-200"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </button>

        <div
          aria-hidden
          style={{
            position: "absolute",
            left: 0,
            bottom: -1,
            height: 3,
            width: `${progress}%`,
            background: "linear-gradient(90deg, #1a56e8, #4f7fff)",
            boxShadow: progress > 0 ? "0 0 8px rgba(26,86,232,0.4)" : "none",
            transition: "width 0.1s linear",
          }}
        />
      </nav>

      <div
        className="fixed top-[62px] left-0 right-0 z-40 md:hidden flex flex-col px-6 py-5 gap-1 overflow-hidden transition-all duration-300"
        style={{
          background: "#fafaf8", borderBottom: menuOpen ? "1px solid #ece8e1" : "none",
          maxHeight: menuOpen ? "440px" : "0px", opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((l) => (
          <button key={l.id} onClick={() => scrollTo(l.id)}
            className="text-[15px] font-medium py-3 text-left bg-transparent border-none cursor-pointer"
            style={{ color: active === l.id ? "#111110" : "#6b6860", borderBottom: "1px solid #ece8e1" }}>
            {l.label}
          </button>
        ))}
        <button onClick={() => scrollTo("contact")}
          className="mt-3 text-[13px] font-semibold px-5 py-3 rounded-lg bg-[#111110] text-[#fafaf8] border-none cursor-pointer">
          Hire Me
        </button>
      </div>
    </>
  );
}
