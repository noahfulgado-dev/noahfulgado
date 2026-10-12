export default function Hero() {
  return (
    <section id="index" className="box lg:col-span-12">
      {/* masthead metadata line */}
      <div className="box-head justify-between">
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>
          Portfolio — 2026
        </span>
        <span className="hidden sm:inline ml-auto font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>
          Developer &amp; Designer
        </span>
      </div>

      <div className="box-body">
        {/* giant name */}
        <h1 className="font-display leading-[0.86] tracking-[-0.02em]">
          <span className="block text-[15vw] lg:text-[7.6rem] fin fin-1" style={{ color: "var(--ink)" }}>
            Noah
          </span>
          <span className="block text-[15vw] lg:text-[7.6rem] fin fin-2" style={{ color: "var(--ink)" }}>
            Fulgado
            <span className="accent italic">.</span>
          </span>
        </h1>

        {/* description + links */}
        <div className="mt-12 grid md:grid-cols-12 gap-8">
          <p className="md:col-span-7 text-lg md:text-xl font-display leading-snug fin fin-3" style={{ color: "var(--ink)" }}>
            I build clean, modern websites and interfaces with a focus on <span className="italic accent">simplicity</span>.
          </p>
          <div className="md:col-span-5 flex flex-wrap items-start justify-end gap-x-8 gap-y-3 fin fin-4">
            <a href="#work" className="u font-mono text-sm uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              See the work ↓
            </a>
            <a href="#contact" className="u font-mono text-sm uppercase tracking-wide" style={{ color: "var(--ink)" }}>
              Get in touch
            </a>
          </div>
        </div>

        {/* small index / stats cells */}
        <div className="mt-12 grid sm:grid-cols-2 gap-px border" style={{ backgroundColor: "var(--rule)", borderColor: "var(--rule)" }}>
          {[
            ["03", "yrs experience"],
            ["02", "projects shipped"],
          ].map(([n, l], i) => (
            <div key={l} className="cell fin" style={{ animationDelay: `${0.15 + i * 0.08}s` }}>
              <div className="font-display text-4xl accent">{n}</div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
