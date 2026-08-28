import type { CSSProperties } from "react";
import { useCounter, useInView } from "../hooks";
import { ArrowDown, ArrowUpRight, Asterisk, Pin } from "./shared";

const d = (v: string) => ({ "--d": v }) as CSSProperties;

function Stat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCounter(value, inView, 1400 + delay);
  return (
    <div ref={ref} className="flex flex-col gap-1.5 py-6 md:py-0">
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
    <section id="top" className="relative overflow-hidden hero-section">
      {/* Layered gradient background */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 60% -10%, rgba(179,208,240,0.55) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 5% 85%, rgba(179,208,240,0.3) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 95% 80%, rgba(26,107,216,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Decorative mesh / dot grid */}
      <div
        className="dot-grid pointer-events-none absolute inset-x-0 top-24 h-[640px] opacity-50 mask-[radial-gradient(ellipse_80%_65%_at_50%_35%,black,transparent)]"
        aria-hidden="true"
      />

      {/* Decorative glowing orbs */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #1a6bd8 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -left-20 h-[350px] w-[350px] rounded-full opacity-15 blur-[100px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #B3D0F0 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-14 lg:pt-44">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* ── LEFT ────────────────────────────────────── */}
          <div className="lg:col-span-7">
            {/* Availability badge */}
            <div
              className="fade-up inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-white/80 py-1.5 pr-4 pl-2 shadow-[0_4px_24px_-4px_rgba(26,107,216,0.18)] backdrop-blur-md"
              style={d("0.05s")}
            >
              <span className="relative flex h-5 items-center gap-1 rounded-full bg-primary/10 px-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-[10px] font-semibold tracking-wide text-primary">OPEN</span>
              </span>
              <span className="text-[13px] font-medium text-ink-soft">Available for new projects — Q3 2026</span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-[clamp(2.8rem,7.2vw,4.9rem)] leading-[1.02] font-bold tracking-[-0.03em] text-ink">
              <span className="mask-line">
                <span style={d("0.12s")}>Designing digital</span>
              </span>
              <span className="mask-line">
                <span style={d("0.24s")}>products that feel</span>
              </span>
              <span className="mask-line">
                <span
                  style={d("0.36s")}
                  className="flex items-center gap-4"
                >
                  <span
                    className="relative"
                    style={{
                      background: "linear-gradient(135deg, #1a6bd8 0%, #4fa3f7 60%, #1553a8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    effortless
                  </span>
                  <Asterisk className="animate-spin-slow h-[0.45em] w-[0.45em] shrink-0 text-primary-soft" />
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-ink-soft" style={d("0.5s")}>
              I&rsquo;m <strong className="font-semibold text-ink">Raka Dirga</strong> — a product designer &amp;
              creative developer from Jakarta. For 7+ years I&rsquo;ve helped startups and scale-ups turn complex
              problems into clean, intuitive experiences that ship.
            </p>

            {/* CTA Buttons */}
            <div className="fade-up mt-9 flex flex-wrap items-center gap-4" style={d("0.62s")}>
              <a
                href="#work"
                className="group relative inline-flex items-center gap-2.5 rounded-xl px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_40px_-10px_rgba(26,107,216,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-10px_rgba(26,107,216,0.8)] overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a6bd8 0%, #2c82f0 50%, #1553a8 100%)",
                }}
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, #2c82f0 0%, #1a6bd8 100%)" }} />
                <span className="relative">View selected work</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 rounded-xl border border-primary/20 bg-white/70 px-7 py-4 text-[15px] font-semibold text-ink backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-[0_8px_30px_-8px_rgba(26,107,216,0.2)]"
              >
                More about me
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Location + trust badges */}
            <div className="fade-up mt-10 flex flex-wrap items-center gap-5" style={d("0.72s")}>
              <p className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-mute">
                <Pin className="h-4 w-4 text-primary" />
                Based in Jakarta, Indonesia — working worldwide
              </p>
              <span className="hidden h-3 w-px bg-line sm:block" />
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 font-mono text-xs text-mute">5.0 on Dribbble</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT — portrait ───────────────────────── */}
          <div className="fade-up relative lg:col-span-5" style={d("0.4s")}>
            {/* Decorative ring */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-30"
              aria-hidden="true"
              style={{
                background: "conic-gradient(from 180deg at 50% 50%, #B3D0F0, #1a6bd8, #B3D0F0)",
                filter: "blur(28px)",
              }}
            />
            <div className="dot-grid absolute -inset-4 -z-10 rounded-3xl opacity-60" aria-hidden="true" />
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Portrait */}
              <div className="overflow-hidden rounded-2xl border border-white/60 shadow-[0_32px_80px_-24px_rgba(10,14,23,0.4),0_0_0_1px_rgba(179,208,240,0.3)]"
                style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.9), rgba(179,208,240,0.1))" }}
              >
                <img
                  src="/images/portrait.jpg"
                  alt="Raka Dirga — product designer and creative developer"
                  className="aspect-4/5 w-full object-cover"
                />
              </div>

              {/* Floating card — top right */}
              <div
                className="animate-float absolute -top-5 -right-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3.5 shadow-[0_20px_50px_-16px_rgba(26,107,216,0.3)] backdrop-blur-sm sm:-right-6"
                style={{ boxShadow: "0 16px 40px -16px rgba(26,107,216,0.25), 0 0 0 1px rgba(179,208,240,0.5)" }}
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-2xl font-bold tracking-tight text-ink">
                    48<span className="text-primary">+</span>
                  </p>
                </div>
                <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">Projects shipped</p>
              </div>

              {/* Floating card — bottom left */}
              <div
                className="animate-float-slow absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/95 px-4 py-3.5 shadow-[0_20px_50px_-16px_rgba(10,14,23,0.25)] backdrop-blur-sm sm:-left-8"
                style={{ boxShadow: "0 16px 40px -16px rgba(10,14,23,0.2), 0 0 0 1px rgba(179,208,240,0.4)" }}
              >
                <span
                  className="grid h-9 w-9 place-items-center rounded-xl text-primary shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(179,208,240,0.6) 0%, rgba(26,107,216,0.15) 100%)" }}
                >
                  <Asterisk className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-ink">Senior Product Designer</p>
                  <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute">Finara — 2023 / now</p>
                </div>
              </div>

              {/* Floating experience chip — bottom right */}
              <div
                className="animate-float absolute -bottom-2 -right-2 rounded-xl border border-primary/20 px-3 py-2 shadow-lg backdrop-blur-sm sm:-right-4"
                style={{
                  background: "linear-gradient(135deg, rgba(26,107,216,0.9) 0%, rgba(21,83,168,0.95) 100%)",
                  boxShadow: "0 12px 32px -8px rgba(26,107,216,0.5)",
                }}
              >
                <p className="text-xs font-bold text-white">7+ yrs</p>
                <p className="font-mono text-[9px] text-white/70 tracking-wide">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ─────────────────────────────────── */}
        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-primary/10 pt-2 md:grid-cols-4 md:divide-x md:divide-primary/10"
          style={{
            background: "linear-gradient(to right, rgba(179,208,240,0.05), transparent, rgba(179,208,240,0.05))",
          }}
        >
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
