import { useEffect, useState } from "react";
import { ArrowUpRight, Reveal, SectionHead } from "./shared";

type Project = {
  img: string;
  title: string;
  cat: string;
  year: string;
  desc: string;
  tags: string[];
  client: string;
  role: string;
  timeline: string;
  challenge: string;
  approach: string;
  results: { stat: string; label: string }[];
};

const projects: Project[] = [
  {
    img: "/src/assets/project-atlas.jpg",
    title: "Atlas Analytics",
    cat: "SaaS · B2B Dashboard",
    year: "2025",
    desc: "End-to-end product design for a data-heavy analytics platform. Rebuilt onboarding around clarity — activation up 34% in the first month.",
    tags: ["Product Design", "Design System"],
    client: "Atlas (Series B SaaS)",
    role: "Lead Product Designer",
    timeline: "10 weeks",
    challenge:
      "Atlas’ analytics platform was powerful but intimidating: power users were buried under options, while new customers stalled during onboarding. Trial-to-paid conversion sat at 8%, and support tickets about “where do I start?” doubled every quarter.",
    approach:
      "I ran a research sprint with 12 customers, mapped the five core jobs-to-be-done, and restructured the information architecture around “answers first, data second”. I then designed a 3-step guided onboarding and a new dashboard layout with progressive disclosure — shipped as a token-based design system so the team could scale it without me.",
    results: [
      { stat: "34%", label: "less onboarding drop-off" },
      { stat: "13%", label: "trial-to-paid, up from 8%" },
      { stat: "40%", label: "fewer “where do I start” tickets" },
    ],
  },
  {
    img: "/src/assets/project-nimbus.jpg",
    title: "Nimbus Banking",
    cat: "Mobile · Fintech",
    year: "2024",
    desc: "Personal finance app for Gen-Z: calm money insights with a friendly, playful edge. 4.8★ on the App Store, 200k+ downloads.",
    tags: ["Mobile App", "Brand"],
    client: "Nimbus (early-stage fintech)",
    role: "Product Designer & Brand Lead",
    timeline: "12 weeks",
    challenge:
      "Nimbus wanted to win Gen-Z users from incumbent banks. Early concepts kept feeling like “another boring bank” — the product had to feel light and friendly without ever undercutting trust.",
    approach:
      "I defined a “calm confidence” brand voice, built a rounded, high-contrast UI system with a playful motion language, and wrote the money insights in plain language (“You spend 22% more on weekends”) instead of fintech jargon.",
    results: [
      { stat: "4.8★", label: "App Store rating" },
      { stat: "200k+", label: "downloads in year one" },
      { stat: "61%", label: "weekly active retention" },
    ],
  },
  {
    img: "/src/assets/project-orbit.jpg",
    title: "Orbit Studio",
    cat: "Web · E-commerce",
    year: "2024",
    desc: "Headless storefront for a design-led fashion label. Faster pages, tighter art direction — conversion up 52% after launch.",
    tags: ["Web Design", "Front-end"],
    client: "Orbit Studio (fashion label)",
    role: "Web Design & Front-end",
    timeline: "8 weeks",
    challenge:
      "Orbit’s old store loaded slowly, looked generic next to the brands it admired, and converted at 1.1% — below the average for fashion DTC.",
    approach:
      "Rebuilt the storefront as a headless, performance-first experience: editorial art direction, a sub-second first contentful paint, and a checkout reduced to three taps. I handled both the design and the production React build end to end.",
    results: [
      { stat: "+52%", label: "conversion rate" },
      { stat: "0.9s", label: "median LCP worldwide" },
      { stat: "97", label: "Lighthouse performance" },
    ],
  },
  {
    img: "/src/assets/project-pulse.jpg",
    title: "Pulse Wellness",
    cat: "App · Health & Wellness",
    year: "2023",
    desc: "A meditation app with a full brand identity and a gentle motion language built around the rhythm of breathing.",
    tags: ["Brand", "Motion"],
    client: "Pulse (health startup)",
    role: "Brand & Product Designer",
    timeline: "6 weeks",
    challenge:
      "Pulse needed a brand and an app that felt genuinely calming — in a category full of loud, gamified wellness apps that quietly backfire on stressed users.",
    approach:
      "Built the identity around breath: soft blues, a variable type system, and a motion language where every transition is timed to an 8-second breathing cycle. The core session flow was designed around zero-friction starts — two taps from locked screen to calm.",
    results: [
      { stat: "11min", label: "average session length" },
      { stat: "+38%", label: "day-7 retention vs. beta" },
      { stat: "3", label: "design awards shortlisted" },
    ],
  },
];

function CaseStudy({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-70 flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      {/* backdrop */}
      <div
        className="animate-[fadeIn_0.3s_ease_both] absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* panel */}
      <div className="animate-[fadeUp_0.45s_cubic-bezier(0.22,1,0.36,1)_both] relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-white sm:rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          autoFocus
          aria-label="Close case study"
          className="absolute top-4 right-4 z-20 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-ink shadow-md backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-ink hover:text-white"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-5 w-5" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        {/* banner */}
        <div className="relative aspect-21/10 overflow-hidden bg-mist sm:aspect-21/9">
          <img src={project.img} alt={`${project.title} project cover`} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="absolute right-6 bottom-6 left-6">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/70">{project.cat} · {project.year}</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h2>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{project.desc}</p>

          {/* meta */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {[
              ["Client", project.client],
              ["Role", project.role],
              ["Timeline", project.timeline],
              ["Year", project.year],
            ].map(([k, v]) => (
              <div key={k} className="bg-white px-4 py-3.5">
                <dt className="font-mono text-[10px] tracking-[0.16em] uppercase text-mute">{k}</dt>
                <dd className="mt-1 text-sm font-semibold text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-ink-soft">
                {t}
              </span>
            ))}
          </div>

          {/* challenge & approach */}
          <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
            <div>
              <h3 className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-primary">The challenge</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{project.challenge}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-primary">How I approached it</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{project.approach}</p>
            </div>
          </div>

          {/* results */}
          <div className="mt-10">
            <h3 className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-primary">The results</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="rounded-xl bg-mist px-5 py-5">
                  <p className="text-3xl font-bold tracking-tight text-ink">
                    {r.stat.includes("%") ? (
                      <>
                        {r.stat.replace("%", "")}
                        <span className="text-primary">%</span>
                      </>
                    ) : (
                      r.stat
                    )}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug font-medium text-ink-soft">{r.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
            <a
              href="#contact"
              onClick={onClose}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep"
            >
              Start a similar project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink/35 hover:bg-mist"
            >
              Back to all work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          index="01"
          label="Selected Work"
          title={
            <>
              Work that ships &amp;
              <br className="hidden md:block" /> actually <span className="text-primary">performs.</span>
            </>
          }
        />
        <Reveal delay={120} className="hidden md:block">
          <a
            href="#contact"
            className="link-slide inline-flex items-center gap-2 pb-1 text-[15px] font-semibold text-ink-soft hover:text-ink"
          >
            Have a project in mind? Let&rsquo;s talk
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 110}>
            <article className="group relative cursor-pointer overflow-hidden rounded-2xl border border-line bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_28px_70px_-28px_rgba(21,83,168,0.35)]">
              {/* stretched click target — whole card opens the case study */}
              <button
                type="button"
                onClick={() => setActive(p)}
                className="absolute inset-0 z-10 h-full w-full cursor-pointer"
                aria-label={`Open ${p.title} case study`}
              >
                <span className="sr-only">Open {p.title} case study</span>
              </button>

              <div className="pointer-events-none relative aspect-16/10 overflow-hidden bg-mist">
                <img
                  src={p.img}
                  alt={`${p.title} — ${p.cat}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] font-medium text-ink-soft backdrop-blur">
                  {p.year}
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-ink/80 px-3 py-1 font-mono text-[11px] font-medium text-white backdrop-blur transition-colors duration-300 group-hover:bg-primary">
                  Case study
                </span>
              </div>

              <div className="pointer-events-none flex items-start justify-between gap-5 p-6 md:p-7">
                <div className="min-w-0">
                  <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-mute">{p.cat}</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-mist px-3 py-1 text-xs font-medium text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:-translate-x-2">
                      Read case study
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
                <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line text-ink-soft transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {active && <CaseStudy project={active} onClose={() => setActive(null)} />}
    </section>
  );
}
