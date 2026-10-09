const values = [
  "Design-led engineering",
  "Performance & accessibility",
  "Calm, focused minimalism",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="sec-head fin">
          <span className="sec-num">01</span>
          <span className="sec-label">About</span>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="font-display text-2xl md:text-[2.6rem] leading-[1.15] fin fin-1" style={{ color: "var(--ink)" }}>
              I sit between two chairs — the <span className="italic accent">designer's</span> and the{" "}
              <span className="italic accent">engineer's</span> — and that's precisely where the good
              work happens.
            </p>
            <p className="mt-8 text-base leading-relaxed max-w-xl fin fin-2" style={{ color: "var(--ink-soft)" }}>
              Hi, I’m Noah, a first-year Computer Science student and aspiring web developer. I enjoy creating clean, modern, and user-friendly websites for businesses, personal brands, and creative projects. I’m passionate about technology, design, and continuously improving my skills through hands-on experience.
            </p>
          </div>

          <div className="md:col-span-5 border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-8" style={{ borderColor: "var(--rule)" }}>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] mb-6 fin fin-2" style={{ color: "var(--ink-soft)" }}>
              Working principles
            </p>
            <ul>
              {values.map((v, i) => (
                <li key={v} className="flex items-baseline gap-4 py-4 border-b" style={{ borderColor: "var(--rule)" }}>
                  <span className="font-mono text-xs accent">{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ color: "var(--ink)" }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
