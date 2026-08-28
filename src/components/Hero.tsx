import type { CSSProperties } from "react";
import { useCounter, useInView } from "../hooks";
import { ArrowDown, ArrowUpRight, Asterisk, Pin } from "./shared";

const d = (v: string) => ({ "--d": v }) as CSSProperties;

function Stat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCounter(value, inView, 1400 + delay);
  return (
    <div ref={ref} className="flex flex-col gap-1 py-6 md:py-0">
      <span className="text-4xl font-bold tracking-tight text-ink md:text-5xl">
        {n}
        <span className="text-primary">{suffix}</span>
      </span>
      <span className="font-mono text-xs tracking-[0.16em] uppercase text-mute">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative dot grid */}
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 top-24 h-[560px] opacity-60 mask-[radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-14 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* left */}
          <div className="lg:col-span-7">
            <div
              className="fade-up inline-flex items-center gap-2.5 rounded-full border border-line bg-white/80 py-1.5 pr-4 pl-2 shadow-sm backdrop-blur"
              style={d("0.05s")}
            >
              <span className="relative flex h-5 items-center gap-1 rounded-full bg-primary-faint px-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-[10px] font-semibold tracking-wide text-primary-deep">OPEN</span>
              </span>
              <span className="text-[13px] font-medium text-ink-soft">Available for new projects — Q3 2026</span>
            </div>

            <h1 className="mt-8 text-[clamp(2.9rem,7.2vw,4.9rem)] leading-[1.02] font-bold tracking-[-0.03em] text-ink">
              <span className="mask-line">
                <span style={d("0.12s")}>Designing digital</span>
              </span>
              <span className="mask-line">
                <span style={d("0.24s")}>products that feel</span>
              </span>
              <span className="mask-line">
                <span style={d("0.36s")} className="flex items-center gap-4">
                  <span className="text-primary">effortless</span>
                  <Asterisk className="animate-spin-slow h-[0.45em] w-[0.45em] shrink-0 text-primary-soft" />
                </span>
              </span>
            </h1>

            <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft" style={d("0.5s")}>
              I&rsquo;m <strong className="font-semibold text-ink">Raka Dirga</strong> — a product designer &amp;
              creative developer from Jakarta. For 7+ years I&rsquo;ve helped startups and scale-ups turn complex
              problems into clean, intuitive experiences that ship.
            </p>

            <div className="fade-up mt-9 flex flex-wrap items-center gap-4" style={d("0.62s")}>
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-lg bg-primary px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(26,107,216,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 rounded-lg border border-ink/15 bg-white px-7 py-4 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/35 hover:bg-mist"
              >
                More about me
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            <p className="fade-up mt-8 inline-flex items-center gap-2 font-mono text-xs tracking-wide text-mute" style={d("0.72s")}>
              <Pin className="h-4 w-4 text-primary" />
              Based in Jakarta, Indonesia — working worldwide
            </p>
          </div>

          {/* right — portrait */}
          <div className="fade-up relative lg:col-span-5" style={d("0.4s")}>
            <div className="dot-grid absolute -inset-4 -z-10 rounded-3xl opacity-70" aria-hidden="true" />
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-line shadow-[0_30px_80px_-30px_rgba(10,14,23,0.35)]">
                <img
                  src="/images/portrait.jpg"
                  alt="Raka Dirga — product designer and creative developer"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>

              {/* floating card — top right */}
              <div className="animate-float absolute -top-5 -right-3 rounded-xl border border-line bg-white/95 px-4 py-3 shadow-[0_16px_40px_-16px_rgba(10,14,23,0.25)] backdrop-blur sm:-right-6">
                <p className="text-2xl font-bold tracking-tight text-ink">
                  48<span className="text-primary">+</span>
                </p>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">Projects shipped</p>
              </div>

              {/* floating card — bottom left */}
              <div className="animate-float-slow absolute -bottom-6 -left-3 flex items-center gap-3 rounded-xl border border-line bg-white/95 px-4 py-3 shadow-[0_16px_40px_-16px_rgba(10,14,23,0.25)] backdrop-blur sm:-left-8">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary-faint text-primary">
                  <Asterisk className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-ink">Senior Product Designer</p>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">Finara — 2023 / now</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stats */}
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-line pt-2 md:grid-cols-4 md:divide-x md:divide-line">
          <div className="md:pr-8">
            <Stat value={7} suffix="+" label="Years of experience" delay={0} />
          </div>
          <div className="md:px-8">
            <Stat value={48} suffix="+" label="Projects delivered" delay={150} />
          </div>
          <div className="md:px-8">
            <Stat value={26} suffix="" label="Happy clients" delay={300} />
          </div>
          <div className="md:pl-8">
            <Stat value={12} suffix="" label="Countries served" delay={450} />
          </div>
        </div>
      </div>
    </section>
  );
}
