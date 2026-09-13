import { NavLink } from "react-router-dom";

const ITEMS = [
  { to: "/", label: "Accueil", end: true },
  { to: "/experiences", label: "Expérience" },
  { to: "/competences", label: "Compétences" },
  { to: "/certifications", label: "Certifications" },
  { to: "/projets", label: "Projets" },
];

export default function Nav() {
  return (
    <nav id="Navigation" className="site-nav">
      {ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
