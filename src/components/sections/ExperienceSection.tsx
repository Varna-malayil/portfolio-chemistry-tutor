import { MapPin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="My Professional Journey"
          id="experience-heading"
        />

        <ol className="relative mt-14 ml-3 border-l border-navy/15 sm:ml-4">
          {portfolio.experience.map((job, i) => (
            <li key={job.id} className="relative pb-12 pl-8 last:pb-0 sm:pl-12">
              <span
                aria-hidden
                className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 ${
                  job.isCurrent
                    ? "border-teal bg-teal ring-4 ring-teal/20"
                    : "border-gold bg-ivory"
                }`}
              />
              <Reveal delay={0.1 * i}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-teal">
                    {job.period}
                  </p>
                  {job.isCurrent && (
                    <span className="w-fit rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white sm:order-last">
                      Current Role
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy sm:text-2xl">
                  {job.title}
                </h3>
                <p className="mt-1 text-base font-medium text-navy/90">{job.organization}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate">
                  <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden />
                  {job.location}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
