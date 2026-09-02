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
   Browser Mockup (Right Side Visual)
───────────────────────────────────────────────────────────── */
function BrowserMockup() {
  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl bg-[#F4F7FB] border border-[#D9DEE8]" 
      style={{ boxShadow: '0 24px 64px -16px rgba(36,120,201,0.12), 0 4px 16px -4px rgba(0,0,0,0.04)' }}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-[#D9DEE8] bg-[#F4F7FB] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#D9DEE8]" />
          <span className="h-2 w-2 rounded-full bg-[#D9DEE8]" />
          <span className="h-2 w-2 rounded-full bg-[#D9DEE8]" />
        </div>
        <div className="mx-auto flex h-5 w-[160px] items-center justify-center rounded bg-white border border-[#D9DEE8]">
          <span className="font-mono text-[9px] text-[#93A2BE]">agency.design</span>
        </div>
        <div className="w-[34px]"></div>
      </div>

      {/* Website Content */}
      <div className="p-6 md:p-8 bg-white h-[380px] md:h-[440px] relative flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div className="font-bold text-[#000000] text-[11px] tracking-widest uppercase">
            Agency™
          </div>
          <div className="flex gap-4 text-[9px] font-semibold text-[#50627D] uppercase tracking-wider">
            <span>Work</span>
            <span>Studio</span>
          </div>
        </div>

        {/* Hero inside mockup */}
        <div className="flex-1 flex flex-col justify-center pb-8 relative z-10">
          <p className="text-[9px] font-mono text-[#2478C9] uppercase tracking-widest mb-3">
            Digital Craft
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] leading-[1.1] tracking-tight">
            Building <br />
            <span className="text-[#93A2BE] font-normal italic">premium</span> digital<br />
            experiences.
          </h2>
          
          <div className="mt-8 flex gap-3">
            <div className="h-8 px-5 rounded-full bg-[#000000] text-white text-[10px] font-medium flex items-center justify-center transition-transform hover:-translate-y-0.5 cursor-pointer">
              Our Portfolio
            </div>
            <div className="h-8 w-8 rounded-full bg-[#F4F7FB] text-[#2478C9] flex items-center justify-center border border-[#D9DEE8] transition-transform hover:-translate-y-0.5 cursor-pointer">
               <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        
        {/* Subtle editorial card */}
        <div className="absolute right-6 bottom-6 w-[160px] h-[180px] bg-[#F4F7FB] rounded-xl border border-[#D9DEE8] flex flex-col p-3 overflow-hidden">
          <div className="w-full flex-1 bg-white rounded-lg border border-[#D9DEE8] mb-3 relative overflow-hidden flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#A9C9ED] opacity-20 blur-md absolute"></div>
            <div className="w-8 h-8 rounded-full border border-[#2478C9] opacity-30"></div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-[8px] text-[#93A2BE] uppercase tracking-wider mb-0.5">Latest</div>
              <div className="text-[10px] text-[#000000] font-medium">Fintech UI</div>
            </div>
            <div className="w-4 h-4 rounded-full bg-[#A9C9ED]/40 flex items-center justify-center">
              <span className="text-[8px] text-[#0F5BB5] font-bold">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  const locationText = language === "id" ? "📍 Bekasi · Bekerja di seluruh dunia" : "📍 Bekasi · Working worldwide";

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
                  Saya <strong style={{ color: "#183B56", fontWeight: 700 }}>RuangDigital</strong> — product designer dan
                  creative developer. Selama 7+ tahun saya membantu startup mengubah masalah yang rumit menjadi produk yang bersih,
                  intuitif, dan benar-benar disukai orang.
                </>
              ) : (
                <>
                  I&rsquo;m <strong style={{ color: "#183B56", fontWeight: 700 }}>RuangDigital</strong> — product designer &amp;
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
            className="fade-up relative mx-auto w-full max-w-[480px] lg:max-w-none lg:-mr-10 xl:-mr-16"
            style={{ "--d": "0.3s" } as CSSProperties}
          >
            {/* Glow behind the browser */}
            <div
              className="pointer-events-none absolute inset-0 opacity-40 blur-[80px]"
              aria-hidden="true"
              style={{
                background: "radial-gradient(circle at 50% 50%, #A9C9ED 0%, transparent 70%)",
                transform: "scale(1.2)"
              }}
            />

            {/* Browser Mockup Container */}
            <div className="relative z-10 w-full" style={{ padding: "24px 0 40px 24px" }}>
              <BrowserMockup />

              {/* Floating Label */}
              <div 
                className="absolute animate-float flex items-center gap-2.5 rounded-full bg-white px-5 py-2.5 border border-[#D9DEE8]"
                style={{ 
                  boxShadow: "0 8px 32px -8px rgba(36,120,201,0.15)",
                  bottom: "16px",
                  left: "0",
                  zIndex: 20
                }}
              >
                <div className="flex h-2 w-2 items-center justify-center relative">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-[#2D82D9] opacity-40"></span>
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#2478C9]"></span>
                </div>
                <span className="text-[12px] font-medium text-[#000000] tracking-wide">01 — Web Design</span>
              </div>
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
