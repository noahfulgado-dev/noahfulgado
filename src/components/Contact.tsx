import Box from "./Box";

export default function Contact() {
  return (
    <Box id="contact" num="04" label="Contact" span="lg:col-span-12" gridTexture>
      <h2 className="font-display leading-[1.02] tracking-[-0.01em] fin fin-1" style={{ color: "var(--ink)" }}>
        <span className="block text-[11vw] lg:text-[5.5rem]">Got something</span>
        <span className="block text-[11vw] lg:text-[5.5rem]">in mind? <span className="italic accent">Say hello.</span></span>
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 gap-px border fin fin-2" style={{ backgroundColor: "var(--rule)", borderColor: "var(--rule)" }}>
        <div className="cell">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>Email</span>
          <a href="mailto:noahfulgado@gmail.com" className="u mt-3 block font-mono text-sm uppercase tracking-wide" style={{ color: "var(--accent)" }}>
            noahfulgado@gmail.com
          </a>
        </div>
        <div className="cell">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.14em]" style={{ color: "var(--ink-soft)" }}>Response time</span>
          <p className="mt-3 font-mono text-sm" style={{ color: "var(--ink)" }}>
            Usually replies within a day or two.
          </p>
        </div>
      </div>
    </Box>
  );
}
