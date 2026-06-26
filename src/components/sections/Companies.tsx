import { companies } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { IconArrow } from "../ui/Icons";

export default function Companies() {
  return (
    <section id="companies" className="theme-light relative bg-cream py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Компании группы"
          title="Три направления — одна экосистема"
          text="Производство, холодная логистика и дистрибуция работают как единый механизм внутри холдинга."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <article className="card group flex h-full flex-col p-7">
                {/* visual header */}
                <div className="relative mb-7 h-40 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-espresso to-brown">
                  <div className="absolute inset-0 grain opacity-50" />
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/25 blur-2xl transition-all duration-500 group-hover:bg-gold/40" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light backdrop-blur">
                    {c.role}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold leading-snug text-ink">
                  {c.name}
                </h3>
                <p className="text-muted mt-3 flex-1 text-[15px] leading-relaxed">
                  {c.text}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 border-t border-ink/10 pt-5">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="font-display text-lg font-bold text-gold">
                        {m.value}
                      </div>
                      <div className="text-xs text-ink/65">{m.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="#contacts"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/80 transition-colors hover:text-gold"
                >
                  Подробнее
                  <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
