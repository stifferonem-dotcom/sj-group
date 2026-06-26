import { services, categories } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { serviceIcons } from "../ui/Icons";

export default function Services() {
  return (
    <section
      id="services"
      className="theme-dark relative overflow-hidden bg-espresso py-24 sm:py-32"
    >
      <div className="absolute inset-0 grain opacity-40" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Направления деятельности"
          title="Шесть звеньев одной цепочки поставок"
          text="От производства продукции до доставки конечному потребителю — мы контролируем каждый этап."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="card-dark group h-full p-7 hover:-translate-y-1">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gold-light transition-all duration-500 group-hover:scale-110 group-hover:border-gold-light/40 group-hover:bg-gold/10">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-cream">
                    {s.title}
                  </h3>
                  <p className="text-muted mt-2.5 text-[15px] leading-relaxed">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Product categories */}
        <Reveal>
          <div className="mt-16 rounded-4xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-cream">
              Категории FMCG-продукции
            </h3>
            <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {categories.map((c, i) => (
                <div key={c.title} className="flex gap-4">
                  <span className="mt-1 font-display text-sm font-bold text-gold-light/70">
                    0{i + 1}
                  </span>
                  <div>
                    <h4 className="font-semibold text-cream">{c.title}</h4>
                    <p className="text-muted mt-1 text-sm leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
