export type IconName =
  | "flask"
  | "graduation"
  | "target"
  | "megaphone"
  | "microscope"
  | "message"
  | "users"
  | "laptop"
  | "book";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  isCurrent: boolean;
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  /** Short label/value pairs, e.g. { label: "CGPA", value: "6.8/10" } */
  highlights: { label: string; value: string }[];
  featured: boolean;
}

export interface ResearchItem {
  kind: string;
  institution: string;
  year: string;
  title: string;
}

export interface FocusArea {
  title: string;
  description: string;
  icon: IconName;
}

export interface SkillItem {
  label: string;
  icon: IconName;
}

export interface ContactDetails {
  email: string;
  phone: string;
  /** Phone number formatted for display. */
  phoneDisplay: string;
  linkedin: string;
  location: string;
}

export interface PortfolioData {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  baseLabel: string;
  contact: ContactDetails;
  profileParagraphs: string[];
  navItems: NavItem[];
  focusAreas: FocusArea[];
  experience: ExperienceItem[];
  education: EducationItem[];
  research: ResearchItem;
  skills: SkillItem[];
  languages: string[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}
