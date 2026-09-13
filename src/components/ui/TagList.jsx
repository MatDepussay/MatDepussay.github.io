export default function TagList({ items, as = "pill" }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className={as === "pill" ? "tech-list" : "package-list"}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
