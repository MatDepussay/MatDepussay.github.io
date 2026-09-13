import useActiveSection from "../hooks/useActiveSection";

const ITEMS = [
  { id: "accueil", label: "Accueil" },
  { id: "apropos", label: "À propos" },
  { id: "experiences", label: "Expérience" },
  { id: "competences", label: "Compétences" },
  { id: "certifications", label: "Certifications" },
  { id: "projets", label: "Projets" },
];

export default function Nav() {
  const activeId = useActiveSection(ITEMS.map((item) => item.id));

  return (
    <nav id="Navigation" className="site-nav">
      {ITEMS.map((item) => (
        <a key={item.id} href={`#${item.id}`} className={activeId === item.id ? "active" : ""}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
