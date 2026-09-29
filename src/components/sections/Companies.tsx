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
          title="Четыре направления — одна экосистема"
          text="Производство, холодная логистика, дистрибуция и онлайн-доставка работают как единый механизм внутри холдинга."
        />

        {/* Четыре карточки: по две на планшете, все четыре в ряд от 1280px,
            где на каждую приходится ~285px — ниже этого метрики в две колонки
            становятся нечитаемо узкими. */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {companies.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1}>
              <article className="card group flex h-full flex-col p-7">
                {/* visual header — photo over the gradient, which stays as the
                    fallback until the file lands in public/photos/ */}
                <div className="relative mb-7 h-40 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-espresso to-brown">
                  {c.photo && (
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url("${c.photo}")` }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/25 to-transparent" />
                  <div className="absolute inset-0 grain opacity-50" />
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gold/25 blur-2xl transition-all duration-500 group-hover:bg-gold/40" />
                  {/* Плашки одинаковые у всех карточек: общая ширина и запрет
                      переноса. Иначе «Хладокомбинат и логистика» вставал в две
                      строки и ряд выглядел рваным. */}
                  <span className="absolute bottom-4 left-4 inline-flex min-w-[200px] items-center justify-center whitespace-nowrap rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light backdrop-blur">
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

                {/* Ссылка только у тех, у кого есть куда вести. Чужой домен —
                    в новую вкладку, чтобы посетитель не терял наш сайт;
                    свои разделы открываются на месте. */}
                {c.url && (
                  <a
                    href={c.url}
                    {...(c.url.startsWith("/")
                      ? {}
                      : { target: "_blank", rel: "noopener noreferrer" })}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink/80 transition-colors hover:text-gold"
                  >
                    Подробнее
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
