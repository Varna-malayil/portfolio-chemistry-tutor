import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A Little About My Approach"
            id="about-heading"
          />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-slate sm:text-lg">
            {portfolio.profileParagraphs.map((paragraph, i) => (
              <Reveal key={paragraph} delay={0.08 * (i + 1)}>
                <p className={i === 0 ? "text-navy/90" : undefined}>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:self-center">
          {portfolio.focusAreas.map((area, i) => (
            <li key={area.title}>
              <Reveal delay={0.08 * i} className="h-full">
                <div className="h-full rounded-2xl border border-navy/10 bg-ivory p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-18px_rgba(20,43,59,0.35)]">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-teal ring-1 ring-gold/50">
                    <Icon name={area.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-navy">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{area.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
