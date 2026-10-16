import { Languages } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Skills & Communication"
          id="skills-heading"
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <ul className="grid gap-4 sm:grid-cols-2">
            {portfolio.skills.map((skill, i) => (
              <li key={skill.label}>
                <Reveal delay={0.08 * i} className="h-full">
                  <div className="flex h-full items-center gap-4 rounded-2xl border border-navy/10 bg-ivory p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_26px_-18px_rgba(20,43,59,0.35)]">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-teal ring-1 ring-gold/50">
                      <Icon name={skill.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-navy">{skill.label}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-navy/10 p-6 sm:p-8">
              <h3 className="flex items-center gap-3 font-serif text-xl font-semibold text-navy">
                <Languages className="h-5 w-5 text-teal" aria-hidden />
                Languages
              </h3>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {portfolio.languages.map((language) => (
                  <li
                    key={language}
                    className="rounded-full border border-gold/60 bg-ivory px-4 py-2 text-sm font-medium text-navy"
                  >
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
