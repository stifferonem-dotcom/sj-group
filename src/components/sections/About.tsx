import { values } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="theme-light relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="О группе компаний"
          title="Устойчивая инфраструктура полного цикла"
          text="SJ GROUP основана в 2008 году в городе Тараз и последовательно расширяет географию и направления деятельности. Мы выстраиваем инфраструктуру, объединяющую производство, температурное хранение и собственную дистрибьюторскую сеть."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="card group h-full p-7">
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-display text-4xl font-bold text-ink/15 transition-colors group-hover:text-gold/60">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-ink/10" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink">
                  {v.title}
                </h3>
                <p className="text-muted mt-3 text-[15px] leading-relaxed">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
