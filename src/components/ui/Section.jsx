export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`glass-section ${className}`}>
      {title && <h1>{title}</h1>}
      {subtitle && <h4>{subtitle}</h4>}
      {children}
    </section>
  );
}
