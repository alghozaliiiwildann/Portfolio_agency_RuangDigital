import { useLanguage } from "./LanguageContext";
import { Reveal, SectionHead } from "./shared";

const skills = [
  "Figma",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Framer",
  "Three.js",
  "Node.js",
  "Webflow",
  "Lottie",
];

const experienceByLanguage = {
  id: [
    {
      period: "2023 — Sekarang",
      role: "Senior Product Designer",
      company: "Finara",
      place: "Bekasi / Remote",
      desc: "Memimpin desain untuk suite fintech B2B yang digunakan 300+ perusahaan. Build design system dari nol dan potong design-to-dev handoff time setengah.",
    },
    {
      period: "2021 — 2023",
      role: "Creative Developer",
      company: "Studio North",
      place: "Berlin / Remote",
      desc: "Ship marketing sites dan product microsites yang award-nominated untuk brands tech dan fashion Eropa. Own front-end quality end to end.",
    },
    {
      period: "2019 — 2021",
      role: "Freelance Designer & Developer",
      company: "Independent",
      place: "Jakarta",
      desc: "Partner dengan 12 startup early-stage dari ide sampai launch — branding, product UI, dan production-ready front-end.",
    },
    {
      period: "2015 — 2019",
      role: "B.Sc. Computer Science",
      company: "Institut Teknologi Bandung",
      place: "Bandung",
      desc: "Fokus pada HCI dan graphics. Jalankan campus design lab dan ship 3 side projects dengan 50k+ combined users.",
    },
  ],
  en: [
    {
      period: "2023 — Now",
      role: "Senior Product Designer",
      company: "Finara",
      place: "Bekasi / Remote",
      desc: "Leading design for a B2B fintech suite used by 300+ companies. Built the design system from zero and cut design-to-dev handoff time in half.",
    },
    {
      period: "2021 — 2023",
      role: "Creative Developer",
      company: "Studio North",
      place: "Berlin / Remote",
      desc: "Shipped award-nominated marketing sites and product microsites for European tech and fashion brands. Owned front-end quality end to end.",
    },
    {
      period: "2019 — 2021",
      role: "Freelance Designer & Developer",
      company: "Independent",
      place: "Bekasi / Remote",
      desc: "Partnered with 12 early-stage startups from idea to launch — branding, product UI, and production-ready front-end.",
    },
    {
      period: "2015 — 2019",
      role: "B.Sc. Computer Science",
      company: "Institut Teknologi Bandung",
      place: "Bandung",
      desc: "Focused on HCI and graphics. Ran the campus design lab and shipped 3 side projects with 50k+ combined users.",
    },
  ],
} as const;

export default function About() {
  const { language } = useLanguage();
  const experience = experienceByLanguage[language];

  const aboutCopy =
    language === "id"
      ? {
          label: "Tentang",
          title: (
            <>
              Desain dengan niat,
              <br /> bangun dengan <span className="text-primary">penuh perhatian.</span>
            </>
          ),
          paragraph:
            "Saya gabungan designer dan engineer yang obsesif terhadap detail di antara keduanya. Saya peduli pada produk yang terasa cepat, jujur, dan sedikit menyenangkan.",
          location: "Lokasi",
          focus: "Fokus",
          exploring: "Sedang dieksplorasi",
          availability: "Ketersediaan",
          slot: "1 slot terbuka — Q3 2026",
          intro:
            "Awalnya saya adalah web developer otodidak pada 2017, jatuh cinta pada desain pada 2018, dan tidak pernah berhenti menyatukan keduanya.",
          history:
            "Saat ini saya memimpin product design di Finara, perusahaan fintech B2B, di mana saya mengelola pengalaman mulai dari workshop discovery hingga produksi kode. Sebelumnya saya menghabiskan dua tahun di studio desain Berlin untuk mengirimkan situs bagi brand yang dikenal, dan sebelumnya — freelancing untuk lusinan peluncuran startup.",
          sweetSpot:
            "Poin manis saya ada di tengah yang berantakan: di mana strategi bertemu pixel, dan pixel bertemu kode. Saya menggambar di Figma di pagi hari dan mengirim React di sore hari, sehingga lebih sedikit hal yang hilang dalam penerjemahan — serta produk yang tahan di produksi, bukan hanya di mockup.",
          offClock:
            "Di luar jam kerja, saya biasanya bersepeda di Jakarta Utara, mengumpulkan typeface yang mungkin tidak pernah saya pakai, dan membuat eksperimen web kecil supaya front-end saya tetap tajam.",
          toolkit: "Toolkit",
          experience: "Pengalaman",
        }
      : {
          label: "About",
          title: (
            <>
              Design with intent,
              <br /> build with <span className="text-primary">care.</span>
            </>
          ),
          paragraph:
            "Part designer, part engineer, fully obsessed with the details in between. I care about products that feel fast, honest, and a little bit delightful.",
          location: "Location",
          focus: "Focus",
          exploring: "Currently exploring",
          availability: "Availability",
          slot: "1 slot open — Q3 2026",
          intro:
            "I started out as a self-taught web developer in 2017, fell in love with design in 2018, and never stopped bridging the two.",
          history:
            "These days I lead product design at Finara, a B2B fintech company, where I own the experience from discovery workshop to production code. Before that I spent two years at a Berlin design studio shipping sites for brands you’d recognize, and before that — freelancing my way through a dozen startup launches.",
          sweetSpot:
            "My sweet spot is the messy middle: where strategy meets pixels, and where pixels meet code. I sketch in Figma in the morning and ship React in the afternoon, which means fewer things get lost in translation — and products that hold up in production, not just in the mockup.",
          offClock:
            "Off the clock I’m usually cycling through North Jakarta, collecting typefaces I’ll never use, and building small experimental web toys to keep my front-end sharp.",
          toolkit: "Toolkit",
          experience: "Experience",
        };

  return (
    <section id="about" className="scroll-mt-24 border-y border-line bg-mist/50">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:py-32 lg:grid-cols-12">
        {/* sticky column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead
              index="02"
              label={aboutCopy.label}
              title={aboutCopy.title}
            />
            <Reveal delay={150} className="mt-8">
              <p className="max-w-md text-[15px] leading-relaxed text-ink-soft">
                {aboutCopy.paragraph}
              </p>
            </Reveal>

            <Reveal delay={250} className="mt-8">
              <dl className="divide-y divide-line rounded-xl border border-line bg-white shadow-sm">
                {[
                  [aboutCopy.location, "Jakarta, Indonesia (UTC+7)"],
                  [aboutCopy.focus, language === "id" ? "Product design · Front-end" : "Product design · Front-end"],
                  [aboutCopy.exploring, language === "id" ? "WebGPU & AI interfaces" : "WebGPU & AI interfaces"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between gap-4 px-5 py-3.5">
                    <dt className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute">{k}</dt>
                    <dd className="text-right text-sm font-semibold text-ink">{v}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <dt className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute">{aboutCopy.availability}</dt>
                  <dd className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    {aboutCopy.slot}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* scrolling column */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xl leading-relaxed font-medium text-ink md:text-2xl md:leading-relaxed">
              {aboutCopy.intro}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-ink-soft">
              <p>
                {aboutCopy.history}
              </p>
              <p>
                {aboutCopy.sweetSpot}
              </p>
              <p>
                {aboutCopy.offClock}
              </p>
            </div>
          </Reveal>

          <Reveal delay={150} className="mt-10">
            <h3 className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-mute">
              {aboutCopy.toolkit}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-medium text-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </Reveal>

          {/* experience */}
          <Reveal delay={200} className="mt-14">
            <h3 className="font-mono text-xs font-medium tracking-[0.2em] uppercase text-mute">
              {aboutCopy.experience}
            </h3>
            <ol className="mt-6 space-y-0">
              {experience.map((e, i) => (
                <li key={e.role} className="group relative border-l border-line pb-9 pl-7 last:pb-0">
                  <span className="absolute top-1 -left-[7px] h-3 w-3 rounded-full border-2 border-white bg-primary-soft transition-all duration-300 group-hover:scale-125 group-hover:bg-primary" />
                  <p className="font-mono text-xs font-medium tracking-[0.14em] text-primary">{e.period}</p>
                  <h4 className="mt-1.5 text-lg font-bold tracking-tight text-ink">
                    {e.role} <span className="font-medium text-mute">· {e.company}</span>
                  </h4>
                  <p className="mt-0.5 font-mono text-[11px] tracking-wide text-mute">{e.place}</p>
                  <p className="mt-2.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">{e.desc}</p>
                  {i === 0 && (
                    <span className="sr-only">Current role</span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
