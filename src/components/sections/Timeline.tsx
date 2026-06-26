"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/content";
import SectionHeading from "../ui/SectionHeading";

export default function Timeline() {
  return (
    <section className="theme-light relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="История компании"
          title="Путь от торговой компании к FMCG-холдингу"
        />

        {/* Desktop: horizontal timeline */}
        <div className="mt-14 hidden lg:block">
          <div
            className="relative grid gap-5"
            style={{
              gridTemplateColumns: `repeat(${timeline.length}, minmax(0, 1fr))`,
            }}
          >
            <div
              className="absolute top-[7px] h-px bg-gold/35"
              style={{
                left: `${100 / (timeline.length * 2)}%`,
                right: `${100 / (timeline.length * 2)}%`,
              }}
            />
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative flex h-full flex-col items-center"
              >
                <span className="relative z-10 h-3.5 w-3.5 rounded-full bg-gold shadow-[0_0_14px_3px_rgba(184,137,58,0.45)]" />
                <div className="card mt-7 flex w-full flex-1 flex-col p-6">
                  <div className="font-display text-3xl font-extrabold gold-text">
                    {t.year}
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold text-ink">
                    {t.title}
                  </h3>
                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <ol className="mt-12 lg:hidden">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 pb-5 last:pb-0"
            >
              <div className="flex flex-col items-center pt-1.5">
                <span className="h-3.5 w-3.5 flex-none rounded-full bg-gold shadow-[0_0_12px_3px_rgba(184,137,58,0.4)]" />
                {i < timeline.length - 1 && (
                  <span className="mt-1 w-px flex-1 bg-gold/30" />
                )}
              </div>
              <div className="card flex-1 p-5">
                <div className="font-display text-2xl font-extrabold gold-text">
                  {t.year}
                </div>
                <h3 className="mt-2 font-display text-base font-bold text-ink">
                  {t.title}
                </h3>
                <p className="text-muted mt-1.5 text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
