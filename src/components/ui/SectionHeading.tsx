import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
};

export default function SectionHeading({ eyebrow, title, text, center }: Props) {
  return (
    <Reveal>
      <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <span className="eyebrow mb-4">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
        <h2 className="section-title text-balance">{title}</h2>
        {text && (
          <p className="text-muted mt-5 text-base leading-relaxed sm:text-lg">
            {text}
          </p>
        )}
      </div>
    </Reveal>
  );
}
