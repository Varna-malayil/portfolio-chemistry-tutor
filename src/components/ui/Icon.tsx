import {
  BookOpen,
  FlaskConical,
  GraduationCap,
  Laptop,
  Megaphone,
  MessagesSquare,
  Microscope,
  Target,
  Users,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/types/portfolio";

const icons = {
  flask: FlaskConical,
  graduation: GraduationCap,
  target: Target,
  megaphone: Megaphone,
  microscope: Microscope,
  message: MessagesSquare,
  users: Users,
  laptop: Laptop,
  book: BookOpen,
} satisfies Record<IconName, React.ComponentType<LucideProps>>;

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component aria-hidden {...props} />;
}
