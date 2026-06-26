import { company, nav } from "@/lib/content";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="theme-dark relative border-t border-black/30 bg-brown">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-9" />
              <span className="font-display text-lg font-extrabold tracking-[0.18em] text-cream">
                SJ GROUP
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Группа компаний полного цикла FMCG: производство, температурное
              хранение, логистика и дистрибуция с {company.foundedYear} года.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Навигация</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-cream/55 transition-colors hover:text-gold-light"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-cream">Контакты</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-cream/55">
              <li>{company.address}</li>
              <li>
                <a href={`tel:${company.phoneHref}`} className="hover:text-gold-light">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-gold-light">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-xs text-cream/70 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} SJ GROUP. Все права защищены. БИН{" "}
            {company.bin}.
          </p>
          <p>г. Тараз, Республика Казахстан</p>
        </div>
      </div>
    </footer>
  );
}
