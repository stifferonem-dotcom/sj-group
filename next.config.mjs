/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,

  // Публикуется как статика в корень sj-group.kz: `next build` кладёт готовый
  // сайт в out/, серверу нужен только веб-сервер, без Node.
  output: "export",
  // Каждая страница становится папкой с index.html — иначе адрес без слеша
  // на обычном веб-сервере не находит файл.
  trailingSlash: true,
};

export default nextConfig;
