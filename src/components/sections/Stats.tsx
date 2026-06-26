import { stats } from "@/lib/content";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="theme-light relative bg-cream py-12 sm:py-16">
      <div className="container-x">
        <div className="theme-dark relative overflow-hidden rounded-4xl bg-espresso p-8 shadow-[0_30px_70px_-30px_rgba(42,29,10,0.6)] sm:p-12">
          <div className="absolute inset-0 grain opacity-40" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="text-center lg:text-left">
                  <div className="font-display text-4xl font-extrabold tracking-tight text-cream sm:text-5xl lg:text-6xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-semibold text-gold-light">
                    {s.label}
                  </div>
                  <div className="text-muted mt-1 text-xs">{s.sub}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
