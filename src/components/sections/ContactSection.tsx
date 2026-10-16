import { Mail, MapPin, Phone } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const { contact } = portfolio;

  const rows = [
    {
      label: "Email",
      icon: Mail,
      text: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      label: "Phone",
      icon: Phone,
      text: contact.phoneDisplay,
      href: `tel:${contact.phone}`,
    },
    {
      label: "LinkedIn",
      icon: LinkedInIcon,
      text: "linkedin.com/in/vaishnav-m-675971245",
      href: contact.linkedin,
      external: true,
    },
    {
      label: "Location",
      icon: MapPin,
      text: contact.location,
    },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Contact" title="Let's Connect" id="contact-heading" />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate sm:text-lg">
              For academic discussions, professional opportunities, or chemistry
              education-related conversations, feel free to get in touch.
            </p>

            <ul className="mt-10 space-y-5">
              {rows.map(({ label, icon: RowIcon, text, href, external }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-teal ring-1 ring-gold/50">
                    <RowIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        {...(external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="break-words font-medium text-navy underline-offset-4 transition-colors hover:text-teal hover:underline"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="font-medium text-navy">{text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-navy/10 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(20,43,59,0.35)] sm:p-9">
            <h3 className="mb-6 font-serif text-xl font-semibold text-navy">Send a message</h3>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
