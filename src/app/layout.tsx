import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import { company } from "@/lib/content";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const description =
  "SJ GROUP — группа компаний полного цикла FMCG: производство, температурное хранение, логистика и дистрибуция продукции по Казахстану, странам СНГ и Азии.";

export const metadata: Metadata = {
  metadataBase: new URL("https://sj-group.kz"),
  title: {
    default: "SJ GROUP — полный цикл FMCG: производство, логистика, дистрибуция",
    template: "%s — SJ GROUP",
  },
  description,
  keywords: [
    "SJ Group",
    "FMCG Казахстан",
    "дистрибуция",
    "логистика",
    "хладокомбинат",
    "Тараз-Холод",
    "Алтын Тараз Трейд",
    "кондитерская фабрика Сауле",
    "экспорт продукции",
  ],
  authors: [{ name: "SJ GROUP" }],
  alternates: { canonical: "https://sj-group.kz" },
  openGraph: {
    type: "website",
    locale: "ru_KZ",
    url: "https://sj-group.kz",
    siteName: "SJ GROUP",
    title: "SJ GROUP — полный цикл FMCG: производство, логистика, дистрибуция",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "SJ GROUP — полный цикл FMCG",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf6ee",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SJ GROUP",
  url: "https://sj-group.kz",
  foundingDate: "2008",
  description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Мамбет батыра 2/6",
    addressLocality: "Тараз",
    addressRegion: "Жамбылская область",
    addressCountry: "KZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phoneHref,
    email: company.email,
    contactType: "customer service",
    areaServed: ["KZ", "RU", "CN", "GE", "KG", "UZ", "TJ", "MN"],
  },
  subOrganization: [
    { "@type": "Organization", name: "Тараз-Холод" },
    { "@type": "Organization", name: "Алтын Тараз Трейд" },
    { "@type": "Organization", name: "Кондитерская фабрика «Сауле»" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
