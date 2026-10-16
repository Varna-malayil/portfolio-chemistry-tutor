import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  id,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "text-center" : undefined}>
      <p
        className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
          align === "center" ? "justify-center" : ""
        } ${isDark ? "text-gold" : "text-teal"}`}
      >
        <span aria-hidden className="h-px w-8 bg-gold" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          isDark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
    </Reveal>
  );
}
