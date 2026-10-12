import Box from "./Box";

const values = [
  "Design-led engineering",
  "Performance & accessibility",
  "Calm, focused minimalism",
];

export default function About() {
  return (
    <Box id="about" num="01" label="About" span="lg:col-span-7" gridTexture>
      <p className="font-display text-2xl md:text-[2.35rem] leading-[1.15] fin fin-1" style={{ color: "var(--ink)" }}>
        I sit between two chairs — the <span className="italic accent">designer's</span> and the{" "}
        <span className="italic accent">engineer's</span> — and that's precisely where the good
        work happens.
      </p>
      <p className="mt-7 text-base leading-relaxed fin fin-2" style={{ color: "var(--ink-soft)" }}>
        Hi, I’m Noah, a first-year Computer Science student and aspiring web developer. I enjoy building clean, modern, and user-friendly websites while exploring new ideas and improving my skills. I’m passionate about technology, web design, and creating personal projects that combine functionality with creativity.
      </p>

      <div className="mt-10 grid gap-px border" style={{ backgroundColor: "var(--rule)", borderColor: "var(--rule)" }}>
        <div className="cell">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] mb-4" style={{ color: "var(--ink-soft)" }}>
            Working principles
          </p>
          <ul className="grid sm:grid-cols-3 gap-px" style={{ backgroundColor: "var(--rule)" }}>
            {values.map((v, i) => (
              <li key={v} className="cell" style={{ padding: "0.9rem" }}>
                <span className="font-mono text-xs accent">{String(i + 1).padStart(2, "0")}</span>
                <span className="block mt-2 text-sm" style={{ color: "var(--ink)" }}>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
}
