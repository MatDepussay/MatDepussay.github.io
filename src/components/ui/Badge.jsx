export default function Badge({ variant = "public", children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
