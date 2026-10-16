import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import CurrentYear from "./CurrentYear";

export default function Footer() {
  const { contact } = portfolio;
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl font-semibold">
            Vaishnav M<span className="text-gold">.</span>
          </p>
          <p className="mt-1 text-sm text-white/70">Chemistry Educator</p>
          <p className="mt-5 font-serif text-base italic text-gold">{portfolio.tagline}</p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex items-center gap-5 text-sm">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" aria-hidden /> Email
            </a>
          </div>
          <p className="text-xs text-white/60">
            © <CurrentYear /> Vaishnav M. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
