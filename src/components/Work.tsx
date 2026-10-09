import { useState } from "react";

const projects = [
  {
    title: "Huni",
    kind: "Simple forum",
    year: "2026",
    tags: ["React", "Django", "Tailwind"],
    note: "A lightweight, minimalist forum built with Django and React.",
    about:
      "Huni is designed for small communities that want a clean and fast forum experience. It features user authentication, thread creation, and a responsive design that works well on both desktop and mobile devices. The backend is powered by Django, while the frontend uses React for a dynamic user interface.",
    link: "https://github.com/noahfulgado-dev/SimpleForum",
  },
  {
    title: "ZenSMP.space",
    kind: "ZenSMP Website",
    year: "2026",
    tags: ["Django", "Tailwind", "daisyUI"],
    note: "The official website for ZenSMP Minecraft server.",
    about:
      "ZenSMP.space is the official website for the ZenSMP Minecraft server, providing information about the server, its features, and community events. The site is built with Django for backend management and Tailwind CSS for a modern, responsive design. It includes sections for news updates, player statistics, and a gallery of in-game screenshots.",
    link: "https://github.com/rkenbperez/zenweb",
  },
] as const;

type Project = (typeof projects)[number];

export default function Work() {
  const [active, setActive] = useState<string | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="sec-head fin">
          <span className="sec-num">03</span>
          <span className="sec-label">Selected work</span>
          <span className="hidden sm:inline ml-auto font-mono text-[0.7rem] uppercase tracking-[0.12em]" style={{ color: "var(--ink-soft)" }}>
            Hover · click to open
          </span>
        </div>

        {/* header row */}
        <div className="hidden md:grid grid-cols-[4rem_1fr_auto] gap-6 px-0 pb-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] fin" style={{ color: "var(--ink-soft)" }}>
          <span>No.</span>
          <span>Project</span>
          <span>Field</span>
        </div>

        <div className="fin" style={{ animationDelay: "0.1s" }}>
          {projects.map((p, i) => {
            const on = active === p.title;
            return (
              <div key={p.title} className="group">
                <button
                  type="button"
                  onClick={() => setSelected(p)}
                  onMouseEnter={() => setActive(p.title)}
                  onMouseLeave={() => setActive(null)}
                  className="w-full flex flex-col gap-3 md:grid md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-6 text-left py-6 transition"
                  style={{
                    borderTop: i === 0 ? "1px solid var(--rule)" : "1px solid var(--rule)",
                    borderBottom: i === projects.length - 1 ? "1px solid var(--rule)" : "none",
                    opacity: active && !on ? 0.4 : 1,
                    paddingLeft: on ? "0.75rem" : "0rem",
                    borderLeft: on ? "2px solid var(--accent)" : "2px solid transparent",
                    transition: "opacity .3s ease, border-color .3s ease, padding .3s ease",
                  }}
                >
                  <span className="flex items-baseline justify-between md:hidden">
                    <span className="font-mono text-xs accent">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em]" style={{ color: "var(--ink-soft)" }}>{p.kind}</span>
                  </span>
                  <span className="hidden md:inline font-mono text-xs accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex items-baseline justify-between md:justify-start gap-4">
                    <span className="font-display text-2xl md:text-4xl leading-none" style={{ color: "var(--ink)" }}>{p.title}</span>
                    <span className="font-mono text-xs" style={{ color: "var(--ink-soft)" }}>{p.year}</span>
                  </span>
                  <span className="hidden md:inline font-mono text-xs uppercase tracking-[0.1em]" style={{ color: "var(--ink-soft)", transform: on ? "translateX(0)" : "translateX(-4px)", transition: "transform .3s ease" }}>
                    {p.kind}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {selected && <ExpandPanel project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function ExpandPanel({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-6" onClick={onClose} role="dialog" aria-modal="true">
      <div className="absolute inset-0" style={{ backgroundColor: overlay(), backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }} />
      <div
        className="pop relative w-full max-w-xl p-8 md:p-12 overflow-y-auto max-h-[85vh] border"
        style={{ borderColor: "var(--rule)", backgroundColor: "var(--bg-primary)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-8 mb-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.16em] accent mb-3">{project.kind}</div>
            <h3 className="font-display text-4xl md:text-5xl leading-none" style={{ color: "var(--ink)" }}>{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="shrink-0 font-mono text-xs uppercase tracking-wide border px-3 py-2 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition" style={{ borderColor: "var(--rule)", color: "var(--ink)" }}>
            Close ✕
          </button>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 mb-7 font-mono text-xs" style={{ color: "var(--ink-soft)" }}>
          {project.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>

        <p className="text-base leading-relaxed mb-4" style={{ color: "var(--ink-soft)" }}>{project.note}</p>
        <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>{project.about}</p>

        <div className="mt-9 pt-6 border-t flex items-center justify-between" style={{ borderColor: "var(--rule)" }}>
          <a href={project.link} target="_blank" className="u font-mono text-sm uppercase tracking-wide accent">View project ↗</a>
          <span className="font-mono text-xs" style={{ color: "var(--ink-soft)" }}>{project.year}</span>
        </div>
      </div>
    </div>
  );
}

function overlay() {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark")
      ? "rgba(19,18,15,0.55)"
      : "rgba(246,243,236,0.6)";
  }
  return "rgba(246,243,236,0.6)";
}
