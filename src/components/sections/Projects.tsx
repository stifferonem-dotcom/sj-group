import { projects } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { IconArrow } from "../ui/Icons";

export default function Projects() {
  return (
    <section id="projects" className="theme-light relative bg-cream py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Ключевые проекты"
          title="Масштаб, который работает на результат"
          text="Инвестиции в мощности, экспортные линии и дистрибуцию формируют устойчивый рост группы."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article className="group relative flex min-h-[16rem] flex-col justify-end overflow-hidden rounded-3xl border border-black/10 p-7 shadow-[0_20px_50px_-28px_rgba(42,29,10,0.4)] transition-all duration-500 hover:-translate-y-1">
                {/* image placeholder visual */}
                <div className="absolute inset-0 bg-espresso" />
                <div className="absolute inset-0 grain opacity-40" />
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/15 blur-3xl transition-all duration-700 group-hover:bg-gold/30" />

                <div className="relative">
                  <span className="rounded-full border border-gold-light/30 bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-light">
                    {p.tag}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold leading-snug text-cream">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-cream/85">
                    {p.text}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cream/80 transition-colors group-hover:text-gold-light">
                    Смотреть проект
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
