"use client";

import { useEffect, useRef, useState } from "react";
import { partners } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

/* Логотип партнёра. Если файла нет или он не загрузился — на его месте
   остаётся монограмма, и карточка не разваливается. */
function PartnerMark({ partner }: { partner: (typeof partners)[number] }) {
  const [err, setErr] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setErr(true);
  }, []);

  /* Плашка шире, чем выше: среди логотипов есть вытянутые (Cherkizovo — 4,5:1),
     и в квадрате они ужимались бы до нечитаемой полоски.
     Фон именно белый, а не полупрозрачный: у части логотипов подложка
     запечена в файл, и на кремовом фоне они давали светлый прямоугольник. */
  const box =
    "h-14 w-24 flex-none overflow-hidden rounded-2xl border border-ink/10 bg-white transition-colors duration-300 group-hover:border-gold/40";

  if (partner.logo && !err) {
    // Плашка — обычный блок: у grid-ячейки с place-items-center процентная
    // высота картинки не резолвилась, и высокие/квадратные знаки вылезали за
    // высоту плашки и обрезались. В блоке с фиксированной высотой h-full +
    // object-contain вписывают знак целиком с полями (letterbox).
    return (
      <span className={`${box} block`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={ref}
          src={partner.logo}
          alt={partner.name}
          onError={() => setErr(true)}
          loading="lazy"
          className="h-full w-full object-contain p-2"
        />
      </span>
    );
  }

  return (
    <span
      className={`${box} grid place-items-center font-display text-base font-extrabold tracking-tight text-[#7c5a1e] group-hover:bg-gold/10`}
    >
      {partner.mark}
    </span>
  );
}

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
                <PartnerMark partner={p} />
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
