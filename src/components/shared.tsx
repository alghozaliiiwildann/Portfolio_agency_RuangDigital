import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks";
import { cn } from "../utils/cn";

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  return (
    <div ref={ref} style={style} className={cn("reveal", inView && "is-in", className)}>
      {children}
    </div>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHead({
  index,
  label,
  title,
  className,
  dark = false,
}: {
  index: string;
  label: string;
  title: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p
        className={cn(
          "font-mono text-xs font-medium tracking-[0.22em] uppercase",
          dark ? "text-white/50" : "text-mute"
        )}
      >
        <span className="text-primary">({index})</span>&ensp;—&ensp;{label}
      </p>
      <h2
        className={cn(
          "mt-4 text-4xl font-bold tracking-tight text-balance md:text-5xl",
          dark ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
    </Reveal>
  );
}

/* ---------------- RD logo mark ---------------- */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2.5"
      aria-label="Ruang Digital — home"
    >
      <img
        src="/src/assets/logo-agensi.jpeg"
        alt="Ruang Digital"
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:-rotate-6"
      />

      <span
        className={cn(
          "text-[15px] font-semibold tracking-tight",
          dark ? "text-white" : "text-ink"
        )}
      >
        Ruang Digital
      </span>
    </a>
  );
}

/* ---------------- Icons (line style, per style guide) ---------------- */
type IconProps = { className?: string };

export const ArrowUpRight = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

export const ArrowDown = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 5v14m0 0 6-6m-6 6-6-6" />
  </svg>
);

export const ArrowRight = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M5 12h14m0 0-6-6m6 6-6 6" />
  </svg>
);

export const Check = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const Plus = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const Asterisk = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className={className} aria-hidden="true">
    <path d="M12 4v16M4 12h16M6.6 6.6l10.8 10.8M17.4 6.6 6.6 17.4" />
  </svg>
);

export const Mail = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7.5 9 6 9-6" />
  </svg>
);

export const Pin = ({ className = "h-4 w-4" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 21s-7-5.1-7-11a7 7 0 0 1 14 0c0 5.9-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

/* Brand icons (filled) */
export const GitHub = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.77 1.05.77 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export const LinkedIn = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const Dribbble = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm7.94 5.53a10.2 10.2 0 0 1 2.3 6.37c-.34-.07-3.73-.76-7.15-.33-.08-.18-.15-.37-.23-.56-.21-.5-.44-1-.68-1.49 3.78-1.54 5.49-3.76 5.76-3.99ZM12 1.77c2.6 0 4.98.97 6.82 2.57-.23.33-1.77 2.41-5.43 3.8A51.5 51.5 0 0 0 9.54 2.15 10.3 10.3 0 0 1 12 1.77ZM7.6 2.85a61 61 0 0 1 3.8 5.94 40 40 0 0 1-9.38 1.2 10.27 10.27 0 0 1 5.58-7.14ZM1.75 12v-.32c.35.01 4.36.06 8.48-1.2.23.45.45.92.66 1.38l-.32.1c-4.24 1.37-6.46 5.13-6.67 5.46A10.2 10.2 0 0 1 1.75 12Zm10.25 8.47a10.2 10.2 0 0 1-6.32-2.17c.17-.35 1.93-3.74 6.59-5.35l.05-.02a42.6 42.6 0 0 1 2.2 7.78 10.1 10.1 0 0 1-2.52-.24Zm4.26-.97c-.09-.52-.55-3.05-2.03-7.5 3.21-.51 6.02.33 6.37.44a10.27 10.27 0 0 1-4.34 7.06Z" />
  </svg>
);

export const XSocial = ({ className = "h-5 w-5" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
  </svg>
);
