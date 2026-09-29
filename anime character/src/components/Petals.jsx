import { useMemo } from "react";

export default function Petals({ count = 16 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: `${Math.random() * 100}%`,
        s: `${10 + Math.random() * 10}px`,
        d: `${12 + Math.random() * 12}s`,
        l: `${-Math.random() * 20}s`,
        dx: `${Math.random() * 160 - 80}px`,
      })),
    [count]
  );
  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p, i) => (
        <span key={i} className="petal" style={{ "--x": p.x, "--s": p.s, "--d": p.d, "--l": p.l, "--dx": p.dx }} />
      ))}
    </div>
  );
}
