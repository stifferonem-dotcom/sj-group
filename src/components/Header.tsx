"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { company, nav } from "@/lib/content";
import Logo from "./ui/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-black/[0.07] bg-cream/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label={company.name}>
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-extrabold tracking-[0.18em] text-ink">
            SJ GROUP
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contacts" className="btn-primary text-sm">
            Связаться
          </a>
        </div>

        <button
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white/60 backdrop-blur-md lg:hidden"
        >
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 rounded bg-ink transition-all duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[72px] z-40 bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="container-x flex flex-col gap-1 py-6">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="rounded-2xl px-4 py-4 text-lg font-semibold text-ink/80 transition-colors hover:bg-black/[0.04] hover:text-gold"
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contacts"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Связаться с нами
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
