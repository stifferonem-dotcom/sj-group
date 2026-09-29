/**
 * Фирменный знак SJ GROUP — переплетённые S и J, золото + тёмно-зелёный.
 *
 * Рисуем обычной картинкой. Раньше здесь лежало два слоя background-image
 * (файл поверх инлайновой монограммы) — это НЕ работает как запасной вариант:
 * CSS рисует оба слоя, и монограмма просвечивала сквозь прозрачный PNG,
 * отчего знак двоился.
 */
export default function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo/sj-group-mark.png"
      alt=""
      aria-hidden="true"
      className={`shrink-0 object-contain ${className ?? ""}`}
    />
  );
}
