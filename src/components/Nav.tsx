import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { useLanguage } from "./LanguageContext";
import { Logo } from "./shared";

const languageOptions = ["id", "en"] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const navLinks =
    language === "id"
      ? [
          { href: "#top", label: "Beranda" },
          { href: "#work", label: "Proyek" },
          { href: "#about", label: "Tentang" },
          { href: "#services", label: "Layanan" },
          { href: "#testimonials", label: "Testimoni" },
        ]
      : [
          { href: "#top", label: "Home" },
          { href: "#work", label: "Work" },
          { href: "#about", label: "About" },
          { href: "#services", label: "Services" },
          { href: "#testimonials", label: "Testimonials" },
        ];

  const signInLabel = language === "id" ? "Masuk" : "Sign In";
  const getStartedLabel = language === "id" ? "Mulai" : "Get Started";

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      setScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 shadow-[0_1px_0_0_rgba(179,208,240,0.4)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent">
        <div
          className="h-full transition-[width] duration-150 ease-out"
          style={{
            width: `${progress * 100}%`,
            background: "linear-gradient(90deg, #6FAFE8, #1a6bd8)",
          }}
        />
      </div>

      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6">
        {/* ── Left: Logo ── */}
        <Logo />

        {/* ── Center: Nav links (desktop) ── */}
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-3.5 py-2 text-[13.5px] font-medium text-ink-soft transition-colors duration-200 hover:text-ink rounded-lg hover:bg-primary/5 group"
            >
              {l.label}
              <span className="absolute inset-x-3.5 bottom-1 h-[1.5px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* ── Right: Language + Auth buttons (desktop) ── */}
        <div className="hidden items-center gap-2.5 md:flex">
          <div className="inline-flex items-center rounded-full border border-ink/15 bg-white/60 p-1 shadow-sm backdrop-blur-sm">
            {languageOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                className={cn(
                  "min-w-11 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-200",
                  language === option
                    ? "bg-primary text-white shadow-sm"
                    : "text-ink-soft hover:text-primary"
                )}
                aria-label={`Switch language to ${option === "id" ? "Indonesian" : "English"}`}
              >
                {option === "id" ? "ID" : "EN"}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-lg border border-ink/15 bg-transparent px-4 text-[13px] font-semibold text-ink-soft transition-all duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
          >
            {signInLabel}
          </a>
          <a
            href="#contact"
            className="group inline-flex h-9 items-center gap-1.5 rounded-lg px-4 text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px hover:shadow-[0_6px_20px_-6px_rgba(26,107,216,0.55)]"
            style={{ background: "linear-gradient(135deg, #1a6bd8, #2c82f0)" }}
          >
            {getStartedLabel}
            <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span
            className={cn(
              "h-0.5 w-5 rounded-full bg-ink transition-all duration-300",
              open && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 rounded-full bg-ink transition-all duration-300",
              open && "opacity-0 scale-x-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-5 rounded-full bg-ink transition-all duration-300",
              open && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      {/* ── Mobile menu panel ── */}
      <div
        className={cn(
          "fixed inset-0 top-[68px] z-40 flex flex-col bg-white/95 backdrop-blur-xl transition-all duration-400 md:hidden",
          open ? "visible opacity-100 translate-y-0" : "invisible opacity-0 -translate-y-2"
        )}
      >
        <nav className="flex flex-1 flex-col gap-1 px-5 pt-5" aria-label="Mobile navigation">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4 rounded-xl px-4 py-4 text-2xl font-bold tracking-tight text-ink transition-all duration-200 hover:bg-primary/5 hover:text-primary"
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              <span className="font-mono text-xs font-medium text-mute tabular-nums">
                0{i + 1}
              </span>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile CTA buttons */}
        <div className="flex flex-col gap-3 border-t border-line px-5 py-6">
          <div className="mb-1 flex justify-center">
            <div className="inline-flex rounded-full border border-ink/15 bg-white p-1">
              {languageOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setLanguage(option)}
                  className={cn(
                    "min-w-12 rounded-full px-3 py-2 text-sm font-semibold transition-all duration-200",
                    language === option
                      ? "bg-primary text-white"
                      : "text-ink-soft hover:text-primary"
                  )}
                >
                  {option === "id" ? "ID" : "EN"}
                </button>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-12 items-center justify-center rounded-xl border border-ink/15 text-[15px] font-semibold text-ink-soft transition-colors hover:border-primary/30 hover:text-primary"
          >
            {signInLabel}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex h-12 items-center justify-center gap-2 rounded-xl text-[15px] font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #1a6bd8, #2c82f0)" }}
          >
            {getStartedLabel}
            <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        <p className="pb-6 text-center font-mono text-[11px] text-mute">
          hello@rakadirga.com · Jakarta, ID (UTC+7)
        </p>
      </div>
    </header>
  );
}
