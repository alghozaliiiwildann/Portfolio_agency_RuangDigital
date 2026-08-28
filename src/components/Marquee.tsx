import { Asterisk } from "./shared";
import { Reveal } from "./shared";

const items = [
  "Product Design",
  "Design Systems",
  "Front-end Development",
  "Prototyping",
  "Motion & Interaction",
  "Brand Identity",
  "UX Research",
  "Web Performance",
];

export function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item + (hidden ? "-b" : "-a")} className="flex items-center">
          <span className="px-8 text-xl font-semibold tracking-tight whitespace-nowrap text-ink md:px-12 md:text-2xl">
            {item}
          </span>
          <Asterisk className="h-5 w-5 shrink-0 text-primary-soft" />
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee-mask overflow-hidden border-y border-line bg-mist/60 py-5">
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

const brands = ["NORTHWIND", "FINARA", "HELIOS", "DATAWAVE", "LOOMLY", "BRIGHTLINE"];

export function TrustedBy() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <Reveal>
        <p className="text-center font-mono text-xs tracking-[0.22em] uppercase text-mute">
          Trusted by teams at
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {brands.map((b) => (
            <span
              key={b}
              className="cursor-default text-lg font-bold tracking-[0.18em] text-mute/70 transition-all duration-300 hover:-translate-y-0.5 hover:text-ink-soft"
            >
              {b}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
