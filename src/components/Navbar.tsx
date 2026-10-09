import { useState } from "react";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const links = [
  { label: "Index", href: "#index" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "var(--rule)", backgroundColor: theme === "dark" ? "rgba(19,18,15,0.85)" : "rgba(246,243,236,0.85)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-medium tracking-tight accent italic">N.F</a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="font-mono text-[0.7rem] uppercase tracking-[0.12em] u" style={{ color: "var(--ink)" }}>
              <span className="accent mr-1.5">{String(i).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-7 h-7 border inline-flex items-center justify-center transition hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white"
            style={{ borderColor: "var(--rule)", color: "var(--ink)" }}
          >
            {theme === "dark" ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4"/></svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden w-7 h-7 border flex items-center justify-center" style={{ borderColor: "var(--rule)", color: "var(--ink)" }} aria-label="Menu">
          {open ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h10"/></svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-3" style={{ borderColor: "var(--rule)", backgroundColor: theme === "dark" ? "#13120f" : "#f6f3ec" }}>
          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-[0.12em]" style={{ color: "var(--ink)" }}>
              <span className="accent mr-2">{String(i).padStart(2, "0")}</span>{l.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="font-mono text-xs uppercase tracking-[0.12em] text-left" style={{ color: "var(--ink)" }}>
            <span className="accent mr-2">✳</span>{theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      )}
    </header>
  );
}
