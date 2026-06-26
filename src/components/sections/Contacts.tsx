"use client";

import { useState } from "react";
import { company } from "@/lib/content";
import { IconPhone, IconMail, IconPin, IconClock, IconWhatsApp } from "../ui/Icons";

const fields = [
  { name: "name", label: "Имя", type: "text", placeholder: "Как к вам обращаться" },
  { name: "company", label: "Компания", type: "text", placeholder: "Название компании" },
  { name: "phone", label: "Телефон", type: "tel", placeholder: "+7 (___) ___-__-__" },
];

export default function Contacts() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacts" className="theme-light relative bg-sand py-24 sm:py-32">
      <div className="container-x">
        <div className="overflow-hidden rounded-4xl border border-black/10 bg-cream shadow-[0_30px_80px_-40px_rgba(42,29,10,0.4)]">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="relative p-8 sm:p-12">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
              <span className="eyebrow mb-4">
                <span className="h-px w-8 bg-gold" />
                Контакты
              </span>
              <h2 className="section-title text-balance text-ink">
                Обсудим поставки и партнёрство
              </h2>
              <p className="text-muted mt-5 max-w-md">
                Оставьте заявку — менеджер свяжется с вами в рабочее время и
                подготовит коммерческое предложение.
              </p>

              <div className="mt-9 space-y-5">
                <ContactRow icon={<IconPin className="h-5 w-5" />} label="Адрес">
                  {company.address}
                </ContactRow>
                <ContactRow icon={<IconPhone className="h-5 w-5" />} label="Телефон">
                  <a href={`tel:${company.phoneHref}`} className="hover:text-gold">
                    {company.phone}
                  </a>
                </ContactRow>
                <ContactRow icon={<IconMail className="h-5 w-5" />} label="Email">
                  <a href={`mailto:${company.email}`} className="hover:text-gold">
                    {company.email}
                  </a>
                </ContactRow>
                <ContactRow icon={<IconClock className="h-5 w-5" />} label="Режим работы">
                  {company.hours}
                </ContactRow>
              </div>

              <div className="mt-8 inline-flex rounded-xl border border-ink/10 bg-white/50 px-4 py-2 text-xs text-ink/65">
                БИН: {company.bin}
              </div>
            </div>

            {/* Form side */}
            <div className="border-t border-ink/10 bg-sand/60 p-8 sm:p-12 lg:border-l lg:border-t-0">
              {sent ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">
                    Заявка отправлена
                  </h3>
                  <p className="text-muted mt-2 text-sm">
                    Мы свяжемся с вами в ближайшее рабочее время.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-5"
                >
                  {fields.map((f) => (
                    <div key={f.name}>
                      <label
                        htmlFor={f.name}
                        className="mb-2 block text-sm font-medium text-ink/70"
                      >
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        required={f.name === "name" || f.name === "phone"}
                        placeholder={f.placeholder}
                        className="w-full rounded-2xl border border-ink/15 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-ink/70"
                    >
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Кратко опишите задачу"
                      className="w-full resize-none rounded-2xl border border-ink/15 bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-gold"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Отправить заявку
                  </button>
                  <a
                    href={`https://wa.me/${company.phoneHref.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <IconWhatsApp className="h-5 w-5" />
                    Написать в WhatsApp
                  </a>
                  <p className="text-center text-xs text-ink/65">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Map */}
          <div className="relative h-72 w-full border-t border-ink/10">
            <iframe
              title="Карта — SJ GROUP, Тараз"
              src="https://www.openstreetmap.org/export/embed.html?bbox=71.4078%2C42.9053%2C71.4198%2C42.9113&layer=mapnik&marker=42.908329%2C71.413828"
              className="h-full w-full [filter:grayscale(0.4)_sepia(0.15)]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-ink/10 bg-white/60 text-gold">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-ink/65">
          {label}
        </div>
        <div className="mt-0.5 text-[15px] text-ink/85">{children}</div>
      </div>
    </div>
  );
}
