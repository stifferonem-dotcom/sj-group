import { compliance } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { IconShield, IconCold, IconExport, IconDoc } from "../ui/Icons";

const icons = [IconShield, IconCold, IconExport, IconDoc];

export default function Compliance() {
  return (
    <section className="theme-light relative bg-cream py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Качество и соответствие"
          title="Единые стандарты на всех этапах"
          text="Производство, хранение и дистрибуция работают по общим требованиям качества и безопасности."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {compliance.map((c, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={c.title} delay={(i % 4) * 0.08}>
                <div className="card group h-full p-7">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-white/70 text-gold transition-all duration-500 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-gold/10">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-ink">
                    {c.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {c.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="text-muted mt-8 text-sm">
            Полные сертификаты и лицензии — на сайтах компаний группы (Тараз-Холод,
            КФ «Сауле»).
          </p>
        </Reveal>
      </div>
    </section>
  );
}
