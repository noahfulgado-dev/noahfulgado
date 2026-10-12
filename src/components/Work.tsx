import { useState } from "react";
import { createPortal } from "react-dom";
import Box from "./Box";

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
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Box
      id="work"
      num="03"
      label="Selected work"
      span="lg:col-span-12"
      gridTexture
      headExtra={
        <span className="hidden sm:inline font-mono text-[0.7rem] uppercase tracking-[0.12em]" style={{ color: "var(--ink-soft)" }}>
          Click a cell to open
        </span>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border" style={{ backgroundColor: "var(--rule)", borderColor: "var(--rule)" }}>
        {projects.map((p, i) => (
          <button
            key={p.title}
            type="button"
            onClick={() => setSelected(p)}
            className="cell group flex flex-col text-left transition-colors hover:bg-[var(--accent-soft)] cursor-crosshair"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-mono text-xs accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>
                {p.kind}
              </span>
            </div>

            <div className="mt-auto">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-display text-3xl md:text-4xl leading-none" style={{ color: "var(--ink)" }}>
                  {p.title}
                </span>
                <span className="font-mono text-xs" style={{ color: "var(--ink-soft)" }}>{p.year}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs" style={{ color: "var(--ink-soft)" }}>
                {p.tags.map((t) => (
                  <span key={t}>#{t}</span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: "var(--rule)" }}>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[var(--ink-soft)] group-hover:text-[var(--accent)] transition-colors">
                {p.note}
              </span>
            </div>
          </button>
        ))}
      </div>

      {selected &&
        createPortal(
          <ExpandPanel project={selected} onClose={() => setSelected(null)} />,
          document.body
        )}
    </Box>
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
