"use client";

import { useState } from "react";
import { geography } from "@/lib/content";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const hub = geography.find((g) => g.hub)!;
const routes = geography.filter((g) => !g.hub);

// Quadratic arc from hub to a destination, bowed consistently "upward"
function arcPath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = dx >= 0 ? dy : -dy;
  const ny = dx >= 0 ? -dx : dx;
  const k = len * 0.26;
  const cx = mx + (nx / len) * k;
  const cy = my + (ny / len) * k;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

export default function Geography() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="geography" className="theme-light relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="География работы"
          title="Поставки по Казахстану, СНГ и Азии"
          text="Казахстан — центр поставок, связанный экспортными маршрутами со странами СНГ и Азии."
        />

        {/* Map canvas — full width, enlarged */}
        <Reveal>
          <div className="relative mt-14 h-[360px] overflow-hidden rounded-4xl border border-black/10 bg-espresso shadow-[0_30px_70px_-30px_rgba(42,29,10,0.5)] sm:h-[440px] lg:h-[520px]">
            <div className="absolute inset-0 grain opacity-50" />

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C9A24B" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle cx={hub.x} cy={hub.y} r="22" fill="url(#hubGlow)" />

              {[0, 1.4, 2.8].map((delay, i) => (
                <circle
                  key={i}
                  cx={hub.x}
                  cy={hub.y}
                  r="2"
                  fill="none"
                  stroke="#C9A24B"
                  strokeWidth="1.2"
                  vectorEffect="non-scaling-stroke"
                >
                  <animate attributeName="r" values="2;18" dur="4.2s" begin={`${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.55;0" dur="4.2s" begin={`${delay}s`} repeatCount="indefinite" />
                </circle>
              ))}

              {routes.map((g, i) => {
                const isActive = active === g.country;
                const d = arcPath(hub, g);
                return (
                  <g key={g.country}>
                    <path
                      d={d}
                      fill="none"
                      stroke="#C9A24B"
                      strokeWidth={isActive ? 2.4 : 1.3}
                      strokeOpacity={isActive ? 0.95 : 0.4}
                      strokeDasharray="6 5"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                    <circle r="0.9" fill="#E2C376">
                      <animateMotion
                        dur={`${3.6 + (i % 4) * 0.7}s`}
                        begin={`${i * 0.45}s`}
                        repeatCount="indefinite"
                        path={d}
                      />
                    </circle>
                  </g>
                );
              })}
            </svg>

            {/* nodes (visual markers) */}
            {geography.map((g) => {
              const isHub = g.hub;
              const isActive = active === g.country;
              return (
                <div
                  key={g.country}
                  className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${g.x}%`, top: `${g.y}%` }}
                >
                  <span className="relative flex items-center justify-center">
                    {isHub && (
                      <span className="absolute h-7 w-7 animate-pulse-ring rounded-full bg-gold/50" />
                    )}
                    <span
                      className={`block rounded-full transition-all duration-300 ${
                        isHub
                          ? "h-4 w-4 bg-gold-light shadow-[0_0_18px_5px_rgba(201,162,75,0.6)]"
                          : isActive
                            ? "h-3.5 w-3.5 bg-gold-light"
                            : "h-2.5 w-2.5 bg-cream/70"
                      }`}
                    />
                  </span>
                  <span
                    className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-semibold transition-all duration-300 sm:text-xs ${
                      isHub
                        ? "bg-gold px-2.5 text-espresso"
                        : isActive
                          ? "bg-black/70 text-cream backdrop-blur"
                          : "text-cream/70"
                    }`}
                  >
                    {g.country}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Country blocks — two rows, with flags */}
        <Reveal delay={0.1}>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {geography.map((g) => (
              <button
                key={g.country}
                onMouseEnter={() => setActive(g.country)}
                onFocus={() => setActive(g.country)}
                onMouseLeave={() => setActive(null)}
                onBlur={() => setActive(null)}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 ${
                  active === g.country || g.hub
                    ? "border-gold/40 bg-gold/10"
                    : "border-ink/10 bg-white/60 hover:border-gold/30"
                }`}
              >
                <span
                  className={`fi fi-${g.code} h-5 w-7 flex-none rounded-[3px] border border-black/10`}
                  style={{ backgroundSize: "cover" }}
                  aria-hidden="true"
                />
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">
                    {g.country}
                  </span>
                  <span className="block text-xs text-ink/65">
                    {g.hub ? "Центр поставок" : "Страна экспорта"}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
