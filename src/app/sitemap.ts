import type { MetadataRoute } from "next";

// Сайт собирается статикой (output: "export") — карта сайта должна быть
// сгенерирована на сборке, а не по запросу.
export const dynamic = "force-static";

/* Карта сайта только по хосту sj-group.kz. Компании группы вынесены на
   отдельные хосты-поддомены (taraz-holod.sj-group.kz, att.sj-group.kz) —
   у каждого своя карта в его корне.
   Адрес со слешом на конце — так его отдаёт сервер (trailingSlash). */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://sj-group.kz/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
