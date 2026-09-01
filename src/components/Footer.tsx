import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useLanguage } from "./LanguageContext";
import { ArrowUpRight, Check, Dribbble, GitHub, LinkedIn, Logo, Mail, Reveal, XSocial } from "./shared";

const socials = [
  { label: "GitHub", href: "https://github.com", icon: <GitHub /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedIn /> },
  { label: "Dribbble", href: "https://dribbble.com", icon: <Dribbble /> },
  { label: "X (Twitter)", href: "https://x.com", icon: <XSocial /> },
];

const projectTypesByLanguage = {
  id: [
    "Product Design",
    "Design System",
    "Front-end Development",
    "Motion & Prototyping",
    "Full Build (Design + Dev)",
    "Belum yakin — bantu saya memilih",
  ],
  en: [
    "Product Design",
    "Design System",
    "Front-end Development",
    "Motion & Prototyping",
    "Full Build (Design + Dev)",
    "Not sure yet — help me decide",
  ],
} as const;

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white placeholder-white/35 transition-all duration-300 focus:border-primary-soft focus:bg-white/10 focus:ring-2 focus:ring-primary/40 focus:outline-none";

function ContactForm() {
  const { language } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const formCopy =
    language === "id"
      ? {
          brief: "Brief proyek",
          name: "Nama Anda",
          email: "Alamat email",
          type: "Jenis proyek",
          typePlaceholder: "Pilih layanan…",
          message: "Ceritakan tentang proyek Anda",
          textareaPlaceholder: "Apa yang sedang Anda bangun? Kapan timeline-nya? Seperti apa sukses itu?",
          submit: "Kirim brief saya",
          sending: "Mengirim brief…",
          another: "Kirim brief lain",
          follow: "Tidak ada spam, tidak ada newsletter — saya balas dalam 24 jam.",
        }
      : {
          brief: "Project brief",
          name: "Your name",
          email: "Email address",
          type: "Project type",
          typePlaceholder: "Select a service…",
          message: "Tell me about your project",
          textareaPlaceholder: "What are you building? What’s the timeline? What does success look like?",
          submit: "Send my brief",
          sending: "Sending brief…",
          another: "Send another brief",
          follow: "No spam, no newsletters — I reply within 24 hours.",
        };

  const projectTypes = projectTypesByLanguage[language];

  const update =
    (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1100);
  };

  const reset = () => {
    setForm({ name: "", email: "", type: "", message: "" });
    setStatus("idle");
  };

  if (status === "sent") {
    const successText =
      language === "id"
        ? {
            thanks: `Terima kasih${form.name ? `, ${form.name.split(" ")[0]}` : ""}!`,
            intro: "Brief Anda sudah masuk ke inbox saya. Saya akan membalas ke",
            email: form.email || "email Anda",
            rest: "dalam 24 jam — biasanya lebih cepat.",
          }
        : {
            thanks: `Thanks${form.name ? `, ${form.name.split(" ")[0]}` : ""}!`,
            intro: "Your brief is in my inbox. I’ll reply to",
            email: form.email || "your email",
            rest: "within 24 hours — usually much faster.",
          };

    return (
      <div className="animate-[fadeUp_0.5s_cubic-bezier(0.22,1,0.36,1)_both] flex h-full min-h-[480px] flex-col items-center justify-center rounded-2xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary text-white">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">
          {successText.thanks}
        </h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-white/60">
          {successText.intro}{" "}
          <span className="font-semibold text-primary-soft">{successText.email}</span> {successText.rest}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-soft hover:text-white"
        >
          {formCopy.another}
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-7"
      noValidate={false}
    >
      <p className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-white/50">{formCopy.brief}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-[13px] font-semibold text-white/80">
            {formCopy.name}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            placeholder="Jane Smith"
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-[13px] font-semibold text-white/80">
            {formCopy.email}
          </label>
          <input
            id="cf-email"
            type="email"
            required
            placeholder="jane@company.com"
            value={form.email}
            onChange={update("email")}
            className={inputClass}
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-type" className="mb-1.5 block text-[13px] font-semibold text-white/80">
          {formCopy.type}
        </label>
        <div className="relative">
          <select
            id="cf-type"
            required
            value={form.type}
            onChange={update("type")}
            className={`${inputClass} appearance-none pr-10 [&>option]:bg-white [&>option]:text-ink ${form.type ? "" : "text-white/35"}`}
          >
            <option value="" disabled>
              {formCopy.typePlaceholder}
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-white/50"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="cf-message" className="mb-1.5 block text-[13px] font-semibold text-white/80">
          {formCopy.message}
        </label>
        <textarea
          id="cf-message"
          required
          rows={4}
          placeholder={formCopy.textareaPlaceholder}
          value={form.message}
          onChange={update("message")}
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 py-4 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(26,107,216,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-deep disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 animate-spin" aria-hidden="true">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2.5" />
              <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            {formCopy.sending}
          </>
        ) : (
          <>
            {formCopy.submit}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-center font-mono text-[11px] tracking-wide text-white/40">
        {formCopy.follow}
      </p>
    </form>
  );
}

export function Cta() {
  const { language } = useLanguage();

  const ctaCopy =
    language === "id"
      ? {
          eyebrow: "Kontak",
          headline: ["Punya ide?", "Yuk wujudkan itu", "nyata."],
          subtitle:
            "Satu slot terbuka untuk Q3 2026. Ceritakan produk Anda, timeline, dan apa arti hasil yang baik — saya akan membalas dalam 24 jam.",
          button: "Kirim brief saya",
          follow: "Tidak ada spam, tidak ada newsletter — saya balas dalam 24 jam.",
        }
      : {
          eyebrow: "Contact",
          headline: ["Have an idea?", "Let’s make it", "real."],
          subtitle:
            "One open slot for Q3 2026. Tell me about your product, your timeline, and what “good outcome” looks like — I’ll reply within 24 hours.",
          button: "Send my brief",
          follow: "No spam, no newsletters — I reply within 24 hours.",
        };

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-ink text-white">
      {/* glows */}
      <div
        className="pointer-events-none absolute -top-48 left-1/4 h-[420px] w-[560px] -translate-x-1/2 rounded-full bg-primary/30 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-[10%] -bottom-32 h-80 w-[420px] rounded-full bg-primary-deep/25 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-16">
        {/* left — pitch */}
        <div>
          <Reveal>
            <p className="font-mono text-xs font-medium tracking-[0.22em] uppercase text-white/50">
              <span className="text-primary-soft">(08)</span>&ensp;—&ensp;{ctaCopy.eyebrow}
            </p>
            <h2 className="mt-6 text-[clamp(2.6rem,6vw,4.3rem)] leading-[1.03] font-bold tracking-[-0.03em] text-balance">
              {ctaCopy.headline[0]}
              <br />
              {ctaCopy.headline[1]} <span className="text-primary-soft">{ctaCopy.headline[2]}</span>
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">
              {ctaCopy.subtitle}
            </p>
          </Reveal>

          <Reveal delay={150} className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="mailto:hello@rakadirga.com"
              className="group inline-flex items-center gap-4 text-xl font-bold tracking-tight text-white transition-colors duration-300 hover:text-primary-soft sm:text-2xl"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </span>
              hello@rakadirga.com
              <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-primary-soft hover:bg-primary hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250} className="mt-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-[13px] font-medium text-white/70">
                {language === "id"
                  ? "1 slot terbuka untuk Q3 2026 · Rata-rata balas: 6 jam"
                  : "1 slot open for Q3 2026 · Avg. response time: 6 hours"}
              </span>
            </div>
          </Reveal>
        </div>

        {/* right — contact form */}
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              {language === "id"
                ? "Product designer & creative developer yang merancang produk digital yang terasa effortless — dari Jakarta, untuk dunia."
                : "Product designer & creative developer, crafting digital products that feel effortless — from Jakarta, for the world."}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/40">
              {language === "id" ? "Peta situs" : "Sitemap"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                [language === "id" ? "Proyek" : "Work", "#work"],
                [language === "id" ? "Tentang" : "About", "#about"],
                [language === "id" ? "Layanan" : "Services", "#services"],
                [language === "id" ? "Testimoni" : "Testimonials", "#testimonials"],
                [language === "id" ? "Kontak" : "Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="link-slide text-sm font-medium text-white/70 hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/40">
              {language === "id" ? "Lainnya" : "Elsewhere"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-slide text-sm font-medium text-white/70 hover:text-white"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:col-span-2 md:justify-end">
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-soft hover:bg-white/5 hover:text-white"
            >
              {language === "id" ? "Kembali ke atas" : "Back to top"}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M12 19V5m0 0-6 6m6-6 6 6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-white/40">
            {language === "id" ? "© 2026 Raka Dirga. Semua hak dilindungi." : "© 2026 Raka Dirga. All rights reserved."}
          </p>
          <p className="font-mono text-xs text-white/40">
            {language === "id"
              ? "Dibuat di Jakarta dengan Space Grotesk & terlalu banyak "
              : "Crafted in Jakarta with Space Grotesk & too much "}
            <span className="text-primary-soft">{language === "id" ? "kopi" : "coffee"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
