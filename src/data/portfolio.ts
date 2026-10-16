import type { PortfolioData } from "@/types/portfolio";

/**
 * Path of the hero portrait. To use the real photograph, drop it at
 * `public/images/vaishnav-profile.jpg` (or change this constant) — no component
 * changes are needed. The file currently in that location is a generated
 * placeholder illustration, not a photograph.
 */
export const PROFILE_IMAGE_SRC = "/images/vaishnav-profile.jpg";

export const PROFILE_IMAGE_ALT =
  "Portrait of Vaishnav M, Chemistry educator (placeholder image)";

export const portfolio: PortfolioData = {
  name: "Vaishnav M",
  shortName: "VM.",
  title: "Senior Lecturer – NEET Chemistry",
  tagline: "Curiosity leads to discovery.",
  baseLabel: "Based in Kerala, India",
  contact: {
    email: "vaishnavpics2021@gmail.com",
    phone: "+917907348153",
    phoneDisplay: "+91-7907348153",
    linkedin: "https://linkedin.com/in/vaishnav-m-675971245",
    location: "Malappuram, Kerala, India",
  },
  profileParagraphs: [
    "I am a chemistry educator with experience teaching in established educational institutions. I hold an integrated M.Sc. in Chemical Science from the University of Hyderabad, and my interests span chemistry education, science communication, and research.",
    "Strong communication, teamwork, and classroom teaching are at the centre of how I work — with the aim of helping students understand scientific concepts clearly and build a solid foundation in chemistry.",
  ],
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ],
  focusAreas: [
    {
      title: "Chemistry Education",
      description: "Classroom teaching across established institutions.",
      icon: "graduation",
    },
    {
      title: "NEET & JEE Preparation",
      description: "Teaching roles centred on NEET and JEE Chemistry.",
      icon: "target",
    },
    {
      title: "Science Communication",
      description: "An interest in explaining scientific ideas clearly.",
      icon: "megaphone",
    },
    {
      title: "Academic Research",
      description: "A master's thesis in coordination chemistry.",
      icon: "microscope",
    },
  ],
  experience: [
    {
      id: "narayana",
      title: "Senior Lecturer – NEET Chemistry",
      organization: "The Narayana Group",
      location: "Coimbatore, Tamil Nadu",
      period: "2026 – Present",
      isCurrent: true,
    },
    {
      id: "sri-chaitanya",
      title: "Faculty – Chemistry",
      organization: "Sri Chaitanya Institute",
      location: "Coimbatore, Tamil Nadu",
      period: "2024 – 2026",
      isCurrent: false,
    },
    {
      id: "xylem",
      title: "Faculty – Chemistry",
      organization: "Xylem Learning",
      location: "Calicut, Kerala",
      period: "2023 – 2024",
      isCurrent: false,
    },
    {
      id: "aakash",
      title: "Junior Faculty – JEE Chemistry",
      organization: "Aakash Educational Services Ltd.",
      location: "Calicut, Kerala",
      period: "2022 – 2023",
      isCurrent: false,
    },
  ],
  education: [
    {
      id: "msc",
      title: "M.Sc. in Chemical Science (Five-year Integrated)",
      institution: "University of Hyderabad",
      period: "2017 – 2022",
      highlights: [
        { label: "Result", value: "First Division" },
        { label: "CGPA", value: "6.8/10" },
      ],
      featured: true,
    },
    {
      id: "hse",
      title: "Higher Secondary Examination",
      institution: "Kerala State Board of Higher Secondary Examinations",
      period: "2014 – 2016",
      highlights: [{ label: "Score", value: "83%" }],
      featured: false,
    },
  ],
  research: {
    kind: "Master’s Thesis",
    institution: "University of Hyderabad",
    year: "2022",
    title:
      "Synthesis of Cd(II)-based coordination complexes using a nitrogen-donor ditopic ligand via liquid-diffusion crystallization.",
  },
  skills: [
    { label: "Teaching and classroom communication", icon: "message" },
    { label: "Leadership and teamwork", icon: "users" },
    { label: "Basic office software utilities", icon: "laptop" },
    { label: "Science laboratory work", icon: "flask" },
  ],
  languages: ["English", "Malayalam", "Tamil", "Hindi"],
};
