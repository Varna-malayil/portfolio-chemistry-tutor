import { BookOpen, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Foundation"
          id="education-heading"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {portfolio.education.map((item, i) => {
            const Glyph = item.featured ? GraduationCap : BookOpen;
            return (
              <Reveal key={item.id} delay={0.12 * i} className="h-full">
                <article
                  className={`h-full rounded-3xl p-8 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 sm:p-10 ${
                    item.featured
                      ? "bg-navy text-white hover:shadow-[0_24px_50px_-24px_rgba(20,43,59,0.6)]"
                      : "border border-navy/10 bg-ivory hover:shadow-[0_18px_36px_-22px_rgba(20,43,59,0.3)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ${
                        item.featured
                          ? "bg-white/10 text-gold ring-gold/40"
                          : "bg-white text-teal ring-gold/50"
                      }`}
                    >
                      <Glyph className="h-5 w-5" aria-hidden />
                    </span>
                    <p
                      className={`text-sm font-semibold tracking-wider ${
                        item.featured ? "text-gold" : "text-teal"
                      }`}
                    >
                      {item.period}
                    </p>
                  </div>

                  <h3
                    className={`mt-6 font-serif font-semibold leading-snug ${
                      item.featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className={`mt-2 ${item.featured ? "text-white/80" : "text-slate"}`}>
                    {item.institution}
                  </p>

                  <dl
                    className={`mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t pt-6 ${
                      item.featured ? "border-white/15" : "border-navy/10"
                    }`}
                  >
                    {item.highlights.map((h) => (
                      <div key={h.label}>
                        <dt
                          className={`text-xs font-semibold uppercase tracking-widest ${
                            item.featured ? "text-white/60" : "text-slate"
                          }`}
                        >
                          {h.label}
                        </dt>
                        <dd className="mt-1 font-serif text-xl font-semibold">{h.value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
