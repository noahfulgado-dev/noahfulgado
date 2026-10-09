export default function Hero() {
  return (
    <section id="index" className="relative px-6 pt-28 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* masthead metadata line */}
        <div className="flex items-baseline justify-between text-[0.7rem] font-mono uppercase tracking-[0.14em] mb-12 fin" style={{ color: "var(--ink-soft)" }}>
          <span>Portfolio — 2026</span>
          <span className="hidden sm:inline">Developer &amp; Designer</span>
        </div>

        <hr className="rule mb-12 fin" />

        {/* giant name */}
        <h1 className="font-display leading-[0.86] tracking-[-0.02em]">
          <span className="block text-[16vw] lg:text-[7.6rem] fin fin-1" style={{ color: "var(--ink)" }}>
            Noah
          </span>
          <span className="block text-[16vw] lg:text-[7.6rem] fin fin-2" style={{ color: "var(--ink)" }}>
            Fulgado
            <span className="accent italic">.</span>
          </span>
        </h1>

        {/* description + links */}
        <div className="mt-14 grid md:grid-cols-12 gap-8">
          <p className="md:col-span-7 text-lg md:text-xl font-display leading-snug fin fin-3" style={{ color: "var(--ink)" }}>
            I make digital things that are <span className="italic accent">quiet by default</span> —
            interfaces and systems built with restraint, where every line earns its place.
          </p>
          <div className="md:col-span-5 flex flex-wrap items-start gap-x-8 gap-y-3 fin fin-4">
            <a href="#work" className="u font-mono text-sm uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              See the work ↓
            </a>
            <a href="#contact" className="u font-mono text-sm uppercase tracking-wide" style={{ color: "var(--ink)" }}>
              Get in touch
            </a>
          </div>
        </div>

        {/* small index / stats */}
        <div className="mt-16 grid sm:grid-cols-2 gap-px" style={{ backgroundColor: "var(--rule)" }}>
          {[
            ["03", "yrs experience"],
            ["2", "projects shipped"],
          ].map(([n, l], i) => (
            <div key={l} className="p-5 fin" style={{ animationDelay: `${0.15 + i * 0.08}s`, backgroundColor: "var(--bg-primary)" }}>
              <div className="font-display text-4xl accent">{n}</div>
              <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
