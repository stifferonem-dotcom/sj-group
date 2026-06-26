import { advantages } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { advantageIcons } from "../ui/Icons";

export default function Advantages() {
  return (
    <section className="theme-dark relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="absolute -right-24 top-10 h-[26rem] w-[26rem] rounded-full bg-forest-light/30 blur-[120px]" />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="Наши преимущества"
            title="Почему партнёры выбирают SJ GROUP"
            text="Холдинговая модель даёт контроль качества, скорость и предсказуемость на каждом этапе."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((a, i) => {
              const Icon = advantageIcons[i];
              return (
                <Reveal key={a.title} delay={i * 0.08}>
                  <div className="card-dark group h-full bg-black/15 p-6">
                    <Icon className="h-8 w-8 text-gold-light transition-transform duration-500 group-hover:scale-110" />
                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-cream">
                      {a.title}
                    </h3>
                    <p className="text-muted mt-2 text-[15px] leading-relaxed">
                      {a.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
