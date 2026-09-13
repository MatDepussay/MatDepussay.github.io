import {
  Network,
  Bot,
  BarChart3,
  Database,
  Code,
  FileSpreadsheet,
  PenLine,
  Terminal,
  Users,
  BadgeCheck,
  Gamepad2,
  BookOpen,
  Briefcase,
} from "lucide-react";

const ICONS = {
  "diagram-project": Network,
  robot: Bot,
  "chart-simple": BarChart3,
  database: Database,
  code: Code,
  "file-excel": FileSpreadsheet,
  "pen-nib": PenLine,
  "laptop-code": Terminal,
  "user-group": Users,
  certificate: BadgeCheck,
  gamepad: Gamepad2,
  book: BookOpen,
  briefcase: Briefcase,
};

const LETTER_FALLBACK = { python: "Py", r: "R" };

export default function Icon({ name, className = "icon", size = 40 }) {
  const Cmp = ICONS[name];
  if (Cmp) return <Cmp className={className} size={size} strokeWidth={1.8} aria-hidden="true" />;
  const letters = LETTER_FALLBACK[name];
  if (letters) {
    return (
      <span className={`${className} icon-letters`} aria-hidden="true">
        {letters}
      </span>
    );
  }
  return null;
}
