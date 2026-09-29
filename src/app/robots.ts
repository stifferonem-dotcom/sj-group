import type { MetadataRoute } from "next";

// Как и sitemap: при статическом экспорте файл готовится на сборке.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://sj-group.kz/sitemap.xml",
  };
}
