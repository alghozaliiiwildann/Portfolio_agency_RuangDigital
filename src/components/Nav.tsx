import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Logo } from "./shared";

const links = [
  { href: "#top", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Testimonials" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

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
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/85 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
      )}
    >
      {/* scroll progress */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-slide text-[15px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
          >
            Let&rsquo;s talk
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "h-0.5 w-6 rounded bg-ink transition-all duration-300",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span className={cn("h-0.5 w-6 rounded bg-ink transition-all duration-300", open && "opacity-0")} />
          <span
            className={cn(
              "h-0.5 w-6 rounded bg-ink transition-all duration-300",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={cn(
          "fixed inset-0 top-[72px] z-40 bg-white transition-all duration-400 md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <nav className="flex h-full flex-col gap-2 px-6 pt-6" aria-label="Mobile">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-3xl font-bold tracking-tight text-ink transition-colors hover:text-primary"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="mr-3 font-mono text-xs font-medium text-mute">0{i + 1}</span>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-semibold text-white"
          >
            Let&rsquo;s talk
          </a>
          <p className="mt-auto pb-8 font-mono text-xs text-mute">hello@rakadirga.com — Jakarta, ID (UTC+7)</p>
        </nav>
      </div>
    </header>
  );
}
