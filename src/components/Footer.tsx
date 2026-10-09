const socials = [
  { label: "GitHub", href: "https://github.com/noahfulgado-dev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/noah-ezequiel-fulgado-03769443b/" },
];

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--rule)", backgroundColor: "var(--bg-secondary)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <span className="font-display text-xl italic accent">N.F</span>

        <nav className="flex items-center gap-6">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="u font-mono text-[0.7rem] uppercase tracking-[0.12em]" style={{ color: "var(--ink)" }}>
              {s.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em]" style={{ color: "var(--ink-soft)" }}>
          © {new Date().getFullYear()} — Noah Ezequiel Fulgado
        </p>
      </div>
    </footer>
  );
}
