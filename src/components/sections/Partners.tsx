import { partners } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function Partners() {
  return (
    <section className="theme-light relative bg-cream py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Партнёры"
          title="С нами работают ведущие производители и торговые сети"
          text="Прозрачные обязательства и единые стандарты качества на всех этапах цепочки поставок."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <div className="card group flex h-full items-center gap-4 p-5 hover:-translate-y-1">
                <div className="grid h-14 w-14 flex-none place-items-center rounded-2xl border border-ink/10 bg-white/70 font-display text-base font-extrabold tracking-tight text-[#7c5a1e] transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-gold/10">
                  {p.mark}
                </div>
                <div>
                  <div className="font-display text-lg font-bold leading-tight text-ink">
                    {p.name}
                  </div>
                  <div className="mt-0.5 text-[13px] text-ink/65">{p.type}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
