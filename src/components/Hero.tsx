import type { CSSProperties, ReactNode } from "react";
import { useCounter, useInView } from "../hooks";
import { useLanguage } from "./LanguageContext";
import { ArrowUpRight } from "./shared";

/* ─────────────────────────────────────────────────────────────
   Utility
───────────────────────────────────────────────────────────── */
const d = (v: string) => ({ "--d": v }) as CSSProperties;

/* ─────────────────────────────────────────────────────────────
   Stat counter
───────────────────────────────────────────────────────────── */
function Stat({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const n = useCounter(value, inView, 1400 + delay);
  return (
    <div ref={ref} className="flex flex-col gap-1.5 py-6 md:py-0">
      <span
        className="text-4xl font-bold tracking-tight md:text-5xl"
        style={{
          background: "linear-gradient(135deg, #183B56 0%, #1a6bd8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {n}
        <span>{suffix}</span>
      </span>
      <span className="font-mono text-[11px] font-medium tracking-[0.18em] uppercase text-mute">
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Floating card wrapper
───────────────────────────────────────────────────────────── */
function FloatingCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/70 bg-white/92 backdrop-blur-md ${className}`}
      style={{
        boxShadow:
          "0 8px 32px -8px rgba(26,107,216,0.18), 0 2px 8px -2px rgba(10,14,23,0.08), 0 0 0 1px rgba(179,208,240,0.35)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main project card
───────────────────────────────────────────────────────────── */
function MainProjectCard() {
  const { language } = useLanguage();
  const files = [
    { name: "hero-section.tsx", lang: "TSX", color: "#61dafb" },
    { name: "design-system.ts", lang: "TS", color: "#3178c6" },
    { name: "dashboard.figma", lang: "Fig", color: "#a259ff" },
  ];
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/60"
      style={{
        boxShadow:
          "0 24px 64px -16px rgba(26,107,216,0.22), 0 4px 16px -4px rgba(10,14,23,0.12), 0 0 0 1px rgba(179,208,240,0.4)",
        background: "linear-gradient(160deg, #ffffff 0%, rgba(243,250,255,0.95) 100%)",
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-[rgba(179,208,240,0.4)] bg-[rgba(243,250,255,0.8)] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-3 flex h-6 flex-1 items-center rounded-md bg-white/70 px-3 border border-[rgba(179,208,240,0.5)]">
          <span className="font-mono text-[10px] text-mute">RuangDigital.com / work</span>
        </div>
      </div>

      {/* App body */}
      <div className="p-4">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[11px] font-mono font-medium tracking-widest uppercase text-mute">
              Active Projects
            </p>
            <p className="text-lg font-bold text-ink mt-0.5">Q3 2026</p>
          </div>
          <div
            className="flex h-8 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #1a6bd8, #6FAFE8)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
            Live
          </div>
        </div>

        {/* File list */}
        <div className="space-y-2">
          {files.map((f, i) => (
            <div
              key={f.name}
              className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2.5 border border-[rgba(179,208,240,0.3)] transition-all duration-200 hover:border-[rgba(26,107,216,0.25)] hover:bg-[rgba(243,250,255,0.9)]"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9px] font-bold text-white"
                style={{ background: f.color }}
              >
                {f.lang}
              </span>
              <span className="font-mono text-xs text-ink font-medium flex-1 truncate">
                {f.name}
              </span>
              <div className="h-1.5 w-12 rounded-full bg-[rgba(179,208,240,0.5)]">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${[85, 60, 42][i]}%`,
                    background: "linear-gradient(90deg, #6FAFE8, #1a6bd8)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom metrics */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { label: language === "id" ? "Dikirim" : "Shipped", val: "48" },
            { label: language === "id" ? "Klien" : "Clients", val: "26" },
            { label: language === "id" ? "Skor" : "Score", val: "98" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl bg-[rgba(243,250,255,0.8)] p-2.5 text-center border border-[rgba(179,208,240,0.3)]"
            >
              <p className="text-base font-bold text-ink">{m.val}</p>
              <p className="font-mono text-[9px] tracking-widest uppercase text-mute mt-0.5">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Analytics mini-card
───────────────────────────────────────────────────────────── */
function AnalyticsCard() {
  const bars = [40, 65, 45, 80, 60, 90, 72];
  return (
    <FloatingCard
      className="animate-float px-4 py-3 w-[155px]"
      style={{ top: "-22px", right: "-18px" }}
    >
      <p className="font-mono text-[9px] font-semibold tracking-[0.18em] uppercase text-mute">
        Engagement
      </p>
      <p className="mt-1 text-xl font-bold text-ink">
        +24%
        <span className="ml-1 text-[10px] font-medium text-emerald-500">↑</span>
      </p>
      {/* Mini bar chart */}
      <div className="mt-2 flex items-end gap-[3px] h-8">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background:
                i === bars.length - 1
                  ? "linear-gradient(180deg, #1a6bd8, #6FAFE8)"
                  : "rgba(179,208,240,0.55)",
            }}
          />
        ))}
      </div>
      <p className="mt-1.5 font-mono text-[9px] text-mute">Last 7 days</p>
    </FloatingCard>
  );
}

/* ─────────────────────────────────────────────────────────────
   Message/client mini-card
───────────────────────────────────────────────────────────── */
function MessageCard() {
  return (
    <FloatingCard
      className="animate-float-slow flex items-start gap-3 px-4 py-3 w-[210px]"
      style={{ bottom: "-20px", left: "-16px" }}
    >
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white text-[11px] font-bold"
        style={{ background: "linear-gradient(135deg, #6FAFE8, #1a6bd8)" }}
      >
        JA
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-xs font-semibold text-ink">James A.</p>
          <span className="h-1 w-1 rounded-full bg-emerald-400" />
        </div>
        <p className="text-[11px] text-mute leading-relaxed mt-0.5 line-clamp-2">
          "The design handoff was flawless — dev loved it!"
        </p>
      </div>
    </FloatingCard>
  );
}

/* ─────────────────────────────────────────────────────────────
   Status notification chip
───────────────────────────────────────────────────────────── */
function StatusBadge() {
  return (
    <div
      className="animate-float absolute -bottom-3 -right-3 flex items-center gap-2 rounded-xl px-3.5 py-2.5"
      style={{
        background: "linear-gradient(135deg, rgba(26,107,216,0.92), rgba(21,83,168,0.96))",
        boxShadow: "0 8px 24px -6px rgba(26,107,216,0.5), 0 0 0 1px rgba(179,208,240,0.3)",
      }}
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-50" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
      </span>
      <p className="text-[11px] font-semibold text-white">Available — Q3 2026</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Skill tags row
───────────────────────────────────────────────────────────── */
function SkillTagsCard() {
  const skills = ["UI/UX", "React", "Figma", "Next.js"];
  return (
    <FloatingCard
      className="animate-float px-3 py-2.5 flex items-center gap-2"
      style={{ top: "44%", right: "-28px" }}
    >
      {skills.map((s) => (
        <span
          key={s}
          className="rounded-md px-2 py-1 text-[10px] font-semibold"
          style={{
            background: "rgba(179,208,240,0.35)",
            color: "#1553a8",
          }}
        >
          {s}
        </span>
      ))}
    </FloatingCard>
  );
}

/* ─────────────────────────────────────────────────────────────
   Hero section
───────────────────────────────────────────────────────────── */
export default function Hero() {
  const { language } = useLanguage();

  const introText =
    language === "id"
      ? "Buka untuk kerja — Q3 2026"
      : "Open for work — Q3 2026";

  const headline =
    language === "id"
      ? [
          "Desain. Bangun.",
          "Luncurkan. Ulangi.",
          "Karya",
          "Bicara Sendiri.",
        ]
      : ["Design. Build.", "Ship. Repeat.", "The Work", "Speaks Itself."];

  const viewWork = language === "id" ? "Lihat proyek saya" : "View my work";
  const aboutMe = language === "id" ? "Tentang saya" : "About me";
  const ratingText = language === "id" ? "5.0 — 26 klien puas" : "5.0 — 26 happy clients";
  const locationText = language === "id" ? "📍 Jakarta · Bekerja di seluruh dunia" : "📍 Jakarta · Working worldwide";

  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* ── Background gradient ── */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(160deg, #F3FAFF 0%, #DDF2FF 18%, rgba(179,208,240,0.55) 38%, rgba(111,175,232,0.2) 55%, rgba(255,255,255,0.95) 78%, #ffffff 100%)",
        }}
      />

      {/* Blurred radial orbs */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[640px] w-[640px] rounded-full opacity-40 blur-[130px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #8BC7F2 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-24 h-[420px] w-[420px] rounded-full opacity-30 blur-[110px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, #6FAFE8 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[360px] w-[600px] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
        aria-hidden="true"
        style={{ background: "radial-gradient(circle, rgba(179,208,240,0.8) 0%, transparent 65%)" }}
      />

      {/* Dot mesh overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "radial-gradient(rgba(26,107,216,0.12) 1px, transparent 1.4px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse 80% 70% at 60% 30%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 60% 30%, black, transparent)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr] xl:gap-20">

          {/* ══ LEFT ══════════════════════════════════════════ */}
          <div>
            {/* Availability pill */}
            <div
              className="fade-up inline-flex items-center gap-2.5 rounded-full border px-3 py-1.5 mb-8"
              style={{
                "--d": "0.05s",
                background: "rgba(255,255,255,0.75)",
                borderColor: "rgba(179,208,240,0.7)",
                boxShadow: "0 2px 16px -4px rgba(26,107,216,0.14)",
                backdropFilter: "blur(12px)",
              } as CSSProperties}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span
                className="font-mono text-[11px] font-semibold tracking-widest uppercase"
                style={{ color: "#1553a8" }}
              >
                {introText}
              </span>
            </div>

            {/* Main headline */}
            <h1
              className="leading-tight font-bold tracking-[-0.04em]"
              style={{
                fontSize: "clamp(3rem, 7.5vw, 5.2rem)",
                color: "#183B56",
              }}
            >
              <span className="mask-line">
                <span style={d("0.1s")}>{headline[0]}</span>
              </span>
              <span className="mask-line">
                <span style={d("0.22s")}>{headline[1]}</span>
              </span>
              <span className="mask-line">
                <span
                  style={{
                    ...d("0.34s"),
                    background: "linear-gradient(135deg, #1a6bd8 0%, #6FAFE8 50%, #2c82f0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    display: "inline-block",
                  } as CSSProperties}
                >
                  {headline[2]}
                </span>
              </span>
              <span className="mask-line">
                <span style={d("0.46s")}>{headline[3]}</span>
              </span>
            </h1>

            {/* Supporting paragraph */}
            <p
              className="fade-up mt-8 text-lg leading-relaxed"
              style={{ "--d": "0.58s", maxWidth: "500px", color: "#6B8499" } as CSSProperties}
            >
              {language === "id" ? (
                <>
                  Saya <strong style={{ color: "#183B56", fontWeight: 700 }}>Raka Dirga</strong> — product designer dan
                  creative developer. Selama 7+ tahun saya membantu startup mengubah masalah yang rumit menjadi produk yang bersih,
                  intuitif, dan benar-benar disukai orang.
                </>
              ) : (
                <>
                  I&rsquo;m <strong style={{ color: "#183B56", fontWeight: 700 }}>Raka Dirga</strong> — product designer &amp;
                  creative developer. For 7+ years I&rsquo;ve helped startups turn complex problems into clean, intuitive products that people actually love.
                </>
              )}
            </p>

            {/* CTA row */}
            <div
              className="fade-up mt-9 flex flex-wrap items-center gap-3"
              style={{ "--d": "0.68s" } as CSSProperties}
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(26,107,216,0.6)]"
                style={{
                  background: "linear-gradient(135deg, #1a6bd8 0%, #2c82f0 60%, #1553a8 100%)",
                  boxShadow: "0 8px 28px -8px rgba(26,107,216,0.5)",
                }}
              >
                {viewWork}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_-8px_rgba(26,107,216,0.15)]"
                style={{
                  borderColor: "rgba(179,208,240,0.8)",
                  background: "rgba(255,255,255,0.7)",
                  color: "#183B56",
                  backdropFilter: "blur(8px)",
                }}
              >
                {aboutMe}
              </a>
            </div>

            {/* Trust signal */}
            <div
              className="fade-up mt-7 flex flex-wrap items-center gap-5"
              style={{ "--d": "0.78s" } as CSSProperties}
            >
              {/* Stars */}
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 text-amber-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span
                  className="ml-1 font-mono text-[11px]"
                  style={{ color: "#6B8499" }}
                >
                  {ratingText}
                </span>
              </div>
              <span
                className="hidden h-3 w-px sm:block"
                style={{ background: "rgba(179,208,240,0.8)" }}
              />
              <span
                className="font-mono text-[11px]"
                style={{ color: "#6B8499" }}
              >
                {locationText}
              </span>
            </div>
          </div>

          {/* ══ RIGHT — Floating UI composition ══════════════ */}
          <div
            className="fade-up relative mx-auto w-full max-w-[400px] lg:max-w-none"
            style={{ "--d": "0.3s" } as CSSProperties}
          >
            {/* Glow behind cards */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-50 blur-[60px]"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(111,175,232,0.5) 0%, transparent 70%)",
              }}
            />

            {/* Card composition container */}
            <div className="relative mx-4 lg:mx-0" style={{ paddingTop: "24px", paddingBottom: "32px", paddingRight: "32px" }}>
              {/* Main card */}
              <MainProjectCard />

              {/* Analytics card — top right */}
              <AnalyticsCard />

              {/* Skills tag card — right middle */}
              <SkillTagsCard />

              {/* Message card — bottom left */}
              <MessageCard />

              {/* Status badge — bottom right */}
              <StatusBadge />
            </div>
          </div>
        </div>

        {/* ══ Stats bar ════════════════════════════════════ */}
        <div
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-0 md:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(179,208,240,0.5)",
            paddingTop: "0",
          }}
        >
          <div className="border-r-0 md:border-r md:pr-8" style={{ borderColor: "rgba(179,208,240,0.4)" }}>
            <Stat value={7} suffix="+" label={language === "id" ? "Tahun pengalaman" : "Years experience"} delay={0} />
          </div>
          <div className="md:border-r md:px-8" style={{ borderColor: "rgba(179,208,240,0.4)" }}>
            <Stat value={48} suffix="+" label={language === "id" ? "Proyek dikirim" : "Projects shipped"} delay={150} />
          </div>
          <div className="md:border-r md:px-8" style={{ borderColor: "rgba(179,208,240,0.4)" }}>
            <Stat value={26} suffix="" label={language === "id" ? "Klien puas" : "Happy clients"} delay={300} />
          </div>
          <div className="md:pl-8">
            <Stat value={12} suffix="" label={language === "id" ? "Negara" : "Countries"} delay={450} />
          </div>
        </div>
      </div>
    </section>
  );
}
