import { useState } from "react";
import { cn } from "../utils/cn";
import { useLanguage } from "./LanguageContext";
import { ArrowUpRight, Check, Plus, Reveal, SectionHead } from "./shared";

/* ---------------- Testimonials ---------------- */
const quotesByLanguage = {
  id: [
    {
      text: "Raka adalah desainer langka yang juga ship kode. Dia rebuild dashboard kami dalam enam minggu dan support tickets turun setengah. Totally worth it.",
      name: "Sarah Chen",
      role: "VP Product, Finara",
      initials: "SC",
    },
    {
      text: "Conversion kami loncat 52% setelah redesign Orbit. Komunikasi super smooth dari kickoff sampai launch — zero surprises, semua good news.",
      name: "Miguel Torres",
      role: "Founder, Orbit Studio",
      initials: "MT",
    },
    {
      text: "Desainer detail-oriented dengan developer brain. Setiap corner case di design system sudah dipikir matang sebelum engineers kami buka Figma.",
      name: "Alya Rahman",
      role: "Head of Design, Datawave",
      initials: "AR",
    },
  ],
  en: [
    {
      text: "Raka is the rare designer who also ships code. He rebuilt our dashboard in six weeks and our support tickets dropped by half. Worth every cent.",
      name: "Sarah Chen",
      role: "VP Product, Finara",
      initials: "SC",
    },
    {
      text: "Our conversion jumped 52% after the Orbit redesign. Communication was effortless from kickoff to launch — zero surprises, all good news.",
      name: "Miguel Torres",
      role: "Founder, Orbit Studio",
      initials: "MT",
    },
    {
      text: "A meticulous designer with a developer's brain. Every corner case in the design system was thought through before our engineers even opened Figma.",
      name: "Alya Rahman",
      role: "Head of Design, Datawave",
      initials: "AR",
    },
  ],
} as const;

export function Testimonials() {
  const { language } = useLanguage();
  const quotes = quotesByLanguage[language];

  const testimonialsCopy =
    language === "id"
      ? {
          label: "Testimoni",
          title: (
            <>
              Ucapan baik dari
              <br className="hidden md:block" /> <span className="text-primary">orang-orang hebat.</span>
            </>
          ),
        }
      : {
          label: "Testimonials",
          title: (
            <>
              Kind words from
              <br className="hidden md:block" /> <span className="text-primary">sharp people.</span>
            </>
          ),
        };

  return (
    <section id="testimonials" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHead
        index="05"
        label={testimonialsCopy.label}
        title={testimonialsCopy.title}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <Reveal key={q.name} delay={i * 110}>
            <figure className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[0_24px_60px_-28px_rgba(21,83,168,0.3)]">
              <span className="font-mono text-5xl leading-none font-semibold text-primary-soft" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{q.text}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary-faint text-sm font-bold text-primary">
                  {q.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">{q.name}</p>
                  <p className="font-mono text-[11px] tracking-wide text-mute">{q.role}</p>
                </div>
                <span className="ml-auto flex gap-0.5 text-primary" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M10 1.5 12.6 7l6 .6-4.5 4 1.3 5.9L10 14.4l-5.4 3.1L5.9 11.6l-4.5-4 6-.6L10 1.5Z" />
                    </svg>
                  ))}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Engagement / pricing ---------------- */
const plansByLanguage = {
  id: [
    {
      name: "Design Sprint",
      price: "mulai Rp 70 juta",
      period: "2 minggu · cakupan tetap",
      desc: "Untuk satu masalah yang tajam dan jelas. Cocok untuk validasi awal.",
      items: ["Audit UX & rekomendasi", "User flow utama", "Layar kunci (5–8)", "File Figma siap handoff"],
      featured: false,
    },
    {
      name: "Product Partnership",
      price: "mulai Rp 140 juta",
      period: "per bulan · min 3 bulan",
      desc: "Senior designer yang masuk ke tim produk Anda, dari riset hingga rilis.",
      items: ["Kapasitas desain khusus", "Kepemilikan design system", "Demo mingguan & update async", "Akses Slack, respons 24 jam"],
      featured: true,
    },
    {
      name: "Full Build",
      price: "Mari bicara",
      period: "6–12 minggu · end to end",
      desc: "Desain + front-end produksi, dari workshop awal sampai produk diluncurkan.",
      items: ["Semua di Sprint", "Build React / Next.js", "CMS & deployment", "Perawatan pasca-luncur 30 hari"],
      featured: false,
    },
  ],
  en: [
    {
      name: "Design Sprint",
      price: "from $4,500",
      period: "2 weeks · fixed scope",
      desc: "For one sharp, well-defined problem. Perfect for early validation.",
      items: ["UX audit & recommendations", "Core user flows", "Key screens (5–8)", "Handoff-ready Figma file"],
      featured: false,
    },
    {
      name: "Product Partnership",
      price: "from $9,000",
      period: "per month · 3 month min",
      desc: "An embedded senior designer for your product team, from research to release.",
      items: ["Dedicated design capacity", "Design system ownership", "Weekly demos & async updates", "Slack access, 24h response"],
      featured: true,
    },
    {
      name: "Full Build",
      price: "Let's talk",
      period: "6–12 weeks · end to end",
      desc: "Design + production front-end, from first workshop to launched product.",
      items: ["Everything in Sprint", "React / Next.js build", "CMS & deployment", "30 days of post-launch care"],
      featured: false,
    },
  ],
} as const;

export function Engagement() {
  const { language } = useLanguage();
  const plans = plansByLanguage[language];

  const engagementCopy =
    language === "id"
      ? {
          label: "Kerja sama",
          title: (
            <>
              Proses yang <span className="text-primary">jelas dan jujur.</span>
            </>
          ),
          description: "Tanpa retainer berbelit, tanpa jam kerja yang membingungkan. Pilih bentuk kerja yang sesuai dengan masalah Anda.",
          cta: "Mulai di sini",
        }
      : {
          label: "Work with me",
          title: (
            <>
              Simple, honest <span className="text-primary">engagement.</span>
            </>
          ),
          description: "No retainers with fine print, no hourly clocks. Pick a shape that fits the problem.",
          cta: "Start here",
        };

  return (
    <section className="border-y border-line bg-mist/50">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            index="06"
            label={engagementCopy.label}
            title={engagementCopy.title}
          />
          <Reveal delay={120}>
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              {engagementCopy.description}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 110}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1.5",
                  p.featured
                    ? "border-ink bg-ink text-white shadow-[0_30px_80px_-30px_rgba(10,14,23,0.6)]"
                    : "border-line bg-white hover:border-primary/40 hover:shadow-[0_24px_60px_-28px_rgba(21,83,168,0.3)]"
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-primary px-3.5 py-1 font-mono text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                    {language === "id" ? "Paling populer" : "Most popular"}
                  </span>
                )}
                <h3 className={cn("text-lg font-bold tracking-tight", p.featured ? "text-white" : "text-ink")}>
                  {p.name}
                </h3>
                <p className={cn("mt-4 text-4xl font-bold tracking-tight", p.featured ? "text-white" : "text-ink")}>
                  {p.price}
                </p>
                <p className={cn("mt-1.5 font-mono text-xs tracking-[0.12em] uppercase", p.featured ? "text-white/50" : "text-mute")}>
                  {p.period}
                </p>
                <p className={cn("mt-4 text-[15px] leading-relaxed", p.featured ? "text-white/70" : "text-ink-soft")}>
                  {p.desc}
                </p>
                <ul className={cn("mt-6 flex-1 space-y-3 border-t pt-6", p.featured ? "border-white/15" : "border-line")}>
                  {p.items.map((it) => (
                    <li key={it} className={cn("flex items-center gap-2.5 text-sm font-medium", p.featured ? "text-white/85" : "text-ink-soft")}>
                      <Check className={cn("h-4 w-4 shrink-0", p.featured ? "text-primary-soft" : "text-primary")} />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={cn(
                    "group mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5",
                    p.featured
                      ? "bg-primary text-white hover:bg-primary-deep"
                      : "border border-ink/15 bg-white text-ink hover:border-ink/35 hover:bg-mist"
                  )}
                >
                  {engagementCopy.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqsByLanguage = {
  id: [
    {
      q: "Seperti apa timeline proyek yang umum?",
      a: "Design sprint fokus biasanya sekitar dua minggu. Produk penuh — dari riset hingga peluncuran — biasanya membutuhkan 6 sampai 12 minggu tergantung scope. Bagaimanapun, Anda akan melihat progres yang bekerja setiap minggu, jadi tidak ada yang tersembunyi dalam kotak hitam.",
    },
    {
      q: "Apakah Anda bekerja dengan startup tahap awal?",
      a: "Ya — sekitar sepertiga pekerjaan saya adalah pre-seed hingga Series A. Untuk tim yang lebih awal, saya menawarkan format sprint dengan tarif yang lebih ringan, dan kadang saya mau menerima equity kecil jika masalahnya benar-benar menarik.",
    },
    {
      q: "Tool dan stack apa yang Anda gunakan?",
      a: "Figma untuk desain (dengan struktur berbasis token), dan TypeScript + React + Next.js + Tailwind untuk front-end. Saya nyaman dengan Framer dan Webflow untuk marketing site, serta GSAP/Lottie untuk motion work.",
    },
    {
      q: "Bagaimana cara memulai?",
      a: "Kirim brief singkat ke hello@rakadirga.com — masalahnya, timeline Anda, dan seperti apa sukses itu. Saya membalas dalam 24 jam dan kita akan booking free 30-minute call untuk melihat apakah kami cocok.",
    },
  ],
  en: [
    {
      q: "What does a typical project timeline look like?",
      a: "A focused design sprint takes about two weeks. A full product — research to launch — usually runs 6 to 12 weeks depending on scope. Either way, you see working progress every single week, so nothing sits in a black box.",
    },
    {
      q: "Do you work with early-stage startups?",
      a: "Yes — about a third of my work is pre-seed to Series A. For earlier teams I offer a reduced-rate sprint format, and I've occasionally said yes to a small equity sweetener when the problem genuinely excites me.",
    },
    {
      q: "Which tools and stack do you work with?",
      a: "Figma for design (with a token-based structure), and TypeScript + React + Next.js + Tailwind for front-end. I'm comfortable with Framer and Webflow for marketing sites, and GSAP/Lottie for motion work.",
    },
    {
      q: "How do we get started?",
      a: "Send me a short brief at hello@rakadirga.com — the problem, your timeline, and what success looks like. I reply within 24 hours and we'll book a free 30-minute call to see if we're a fit.",
    },
  ],
} as const;

export function Faq() {
  const { language } = useLanguage();
  const faqs = faqsByLanguage[language];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:py-32 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <SectionHead
            index="07"
            label="FAQ"
            title={
              language === "id" ? (
                <>
                  Pertanyaan,
                  <br /> terjawab.
                </>
              ) : (
                <>
                  Questions,
                  <br /> answered.
                </>
              )
            }
          />
          <Reveal delay={150}>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink-soft">
              {language === "id" ? "Tidak menemukan jawaban Anda?" : "Can’t find yours? Just"}{" "}
              <a href="#contact" className="link-slide font-semibold text-primary">
                {language === "id" ? "tanya — saya jawab setiap email" : "ask — I answer every email"}
              </a>{" "}
              {language === "id" ? "sendiri." : "myself."}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="lg:col-span-8">
        <Reveal>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs font-medium text-mute">0{i + 1}</span>
                      <span
                        className={cn(
                          "text-lg font-bold tracking-tight transition-colors duration-300",
                          isOpen ? "text-primary" : "text-ink group-hover:text-primary"
                        )}
                      >
                        {f.q}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-primary bg-primary text-white"
                          : "border-line text-ink-soft group-hover:border-primary/50 group-hover:text-primary"
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-9 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
