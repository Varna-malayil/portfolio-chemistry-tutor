import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import MolecularPattern from "@/components/ui/MolecularPattern";

export default function ResearchSection() {
  const { research } = portfolio;

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Research"
          title="Exploring Chemistry Beyond the Classroom"
          id="research-heading"
        />

        <Reveal className="mt-12">
          <article className="relative overflow-hidden rounded-3xl bg-navy p-8 text-white sm:p-12 lg:p-16">
            <MolecularPattern
              stroke="#C5A46D"
              className="pointer-events-none absolute -right-16 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 opacity-40 sm:-right-8 lg:right-6 lg:h-[30rem] lg:w-[30rem]"
            />

            <div className="relative max-w-2xl">
              <ul className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest">
                <li className="rounded-full border border-gold/60 px-3 py-1 text-gold">
                  {research.kind}
                </li>
                <li className="rounded-full border border-white/20 px-3 py-1 text-white/80">
                  {research.year}
                </li>
              </ul>

              <h3 className="mt-6 font-serif text-2xl font-medium italic leading-snug sm:text-3xl">
                “{research.title}”
              </h3>

              <p className="mt-6 text-base text-white/75">{research.institution}</p>

              <p className="mt-10 text-xs text-white/50">
                Decorative line art — not a depiction of the actual compounds studied.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
