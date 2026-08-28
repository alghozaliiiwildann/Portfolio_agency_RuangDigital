import type { ReactNode } from "react";
import { Check, Reveal, SectionHead } from "./shared";

type IconProps = { className?: string };

const PenIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 19 7-7 3 3-7 7-3-3Z" />
    <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
    <path d="m2 2 7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const LayersIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);

const CodeIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    <path d="m14 4-4 16" />
  </svg>
);

const SparkIcon = ({ className = "h-6 w-6" }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    <circle cx="12" cy="12" r="3.5" />
  </svg>
);

const services: { icon: ReactNode; title: string; desc: string; points: string[] }[] = [
  {
    icon: <PenIcon />,
    title: "Product Design",
    desc: "From fuzzy problem to polished, testable UI. I design products people understand on first touch.",
    points: ["UX audits & research", "Flows & wireframes", "High-fidelity UI"],
  },
  {
    icon: <LayersIcon />,
    title: "Design Systems",
    desc: "Token-based systems that scale with your team — documented, versioned, and loved by engineers.",
    points: ["Design tokens", "Component libraries", "Docs & governance"],
  },
  {
    icon: <CodeIcon />,
    title: "Front-end Development",
    desc: "Production React & Next.js with pixel fidelity. Fast, accessible, and 90+ on Lighthouse.",
    points: ["React / Next.js", "Tailwind & TypeScript", "Performance & a11y"],
  },
  {
    icon: <SparkIcon />,
    title: "Motion & Prototyping",
    desc: "Micro-interactions and prototypes that make the feel of the product obvious before a line of code.",
    points: ["Framer prototypes", "Micro-interactions", "Lottie & GSAP"],
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHead
        index="03"
        label="Services"
        title={
          <>
            What I can do <span className="text-primary">for you.</span>
          </>
        }
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-28px_rgba(21,83,168,0.35)]">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-mist text-ink-soft transition-all duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                {s.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-ink-soft">
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Discover",
    desc: "A focused workshop to understand your users, your numbers, and what ‘success’ actually means.",
  },
  {
    n: "02",
    title: "Define",
    desc: "Strategy, information architecture, and user flows — the invisible 40% that makes the visible 60% work.",
  },
  {
    n: "03",
    title: "Design",
    desc: "Rapid iterations in the open. You see progress every week, in a prototype you can click, not a deck.",
  },
  {
    n: "04",
    title: "Deliver",
    desc: "Production-ready front-end, QA, and a handoff your team can run with without me in the room.",
  },
];

export function Process() {
  return (
    <section className="border-y border-line bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHead
          index="04"
          label="Process"
          title={
            <>
              A calm, proven
              <br className="hidden md:block" /> process — <span className="text-primary">no black boxes.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 110}>
              <div className="group relative">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-5xl font-semibold tracking-tight text-primary-soft transition-colors duration-500 group-hover:text-primary">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-primary-soft" />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
