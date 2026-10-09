export default function Contact() {
  return (
    <section id="contact" className="px-6 pt-12 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="sec-head fin">
          <span className="sec-num">04</span>
          <span className="sec-label">Contact</span>
        </div>

        <div>
          <h2 className="font-display leading-[1.02] tracking-[-0.01em] mt-10 fin fin-1" style={{ color: "var(--ink)" }}>
            <span className="block text-[11vw] lg:text-[5.5rem]">Got something</span>
            <span className="block text-[11vw] lg:text-[5.5rem]">in mind? <span className="italic accent">Say hello.</span></span>
          </h2>

          <div className="mt-16 flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-12 fin fin-2">
            <a href="mailto:noahfulgado@gmail.com" className="u font-mono text-sm uppercase tracking-wide" style={{ color: "var(--accent)" }}>
              noahfulgado@gmail.com
            </a>
            <p className="font-mono text-sm" style={{ color: "var(--ink-soft)" }}>
              Usually replies within a day or two.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
