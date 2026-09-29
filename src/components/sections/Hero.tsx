"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { company } from "@/lib/content";
import { IconArrow } from "../ui/Icons";

export default function Hero() {
  const [hintOpacity, setHintOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () =>
      setHintOpacity(Math.max(0, 1 - window.scrollY / 160));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="theme-light relative min-h-[100svh] overflow-hidden bg-cream"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sand/70 via-cream to-cream" />
        <div className="absolute inset-0 grain-light opacity-70" />
        {/* warm glow accents */}
        <div className="absolute -left-32 top-10 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-forest/10 blur-[120px]" />
        {/* moving supply-chain lines */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.5]"
          preserveAspectRatio="xMidYMid slice"
          viewBox="0 0 1200 800"
          aria-hidden="true"
        >
          {[160, 320, 480, 640].map((y, i) => (
            <g key={y}>
              <line
                x1="0"
                y1={y}
                x2="1200"
                y2={y - 60}
                stroke="#2A1D0A"
                strokeOpacity="0.08"
              />
              <motion.circle
                r="3.5"
                fill="#B8893A"
                // Начальные cx/cy обязательны: без них на первом кадре SVG
                // получает cx="undefined" (framer-motion ещё не подставил
                // значения) и ругается в консоли. Совпадают со стартом анимации.
                cx={0}
                cy={y}
                initial={{ cx: 0, cy: y }}
                animate={{ cx: [0, 1200], cy: [y, y - 60] }}
                transition={{
                  duration: 9 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.5,
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="container-x flex min-h-[100svh] flex-col justify-start pb-16 pt-28 sm:justify-center sm:pb-20 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-gold" />
            Группа компаний · с {company.foundedYear} года
          </span>

          <h1 className="section-title text-balance text-4xl leading-[1.05] text-ink sm:text-5xl lg:text-[4.2rem]">
            Полный цикл FMCG-бизнеса:{" "}
            <span className="gold-text">производство, хранение, логистика</span>{" "}
            и дистрибуция
          </h1>

          <p className="text-muted mt-7 max-w-2xl text-balance text-base leading-relaxed sm:text-lg">
            Мы объединяем производственные мощности, современные складские
            комплексы с температурным режимом и дистрибьюторскую сеть для
            стабильных поставок по Казахстану и за его пределами.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#about" className="btn-primary group">
              О компании
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contacts" className="btn-ghost text-ink">
              Связаться с нами
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll hint — fades out as the page scrolls */}
      <div
        style={{ opacity: hintOpacity }}
        className="pointer-events-none fixed bottom-7 left-1/2 z-30 -translate-x-1/2 transition-opacity duration-200"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-ink/20 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-gold"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}
