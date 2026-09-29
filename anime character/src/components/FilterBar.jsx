import { ROLES } from "../data/seed";

export default function FilterBar({ filters, onChange, animes }) {
  const on = (k) => (e) => onChange({ ...filters, [k]: e.target.value });
  return (
    <div className="bar">
      <input type="search" placeholder="Search name, anime or ability" value={filters.q} onChange={on("q")} aria-label="Search" />
      <select value={filters.anime} onChange={on("anime")} aria-label="Filter by anime">
        <option value="All">All anime</option>
        {animes.map((a) => <option key={a}>{a}</option>)}
      </select>
      <select value={filters.role} onChange={on("role")} aria-label="Filter by role">
        <option value="All">All roles</option>
        {ROLES.map((r) => <option key={r}>{r}</option>)}
      </select>
      <select value={filters.sort} onChange={on("sort")} aria-label="Sort">
        <option value="name">Sort: name</option>
        <option value="anime">Sort: anime</option>
        <option value="rating">Sort: rating</option>
      </select>
      <button className={`btn${filters.favOnly ? " on" : ""}`} aria-pressed={filters.favOnly}
        onClick={() => onChange({ ...filters, favOnly: !filters.favOnly })}>
        ♥ Favorites
      </button>
    </div>
  );
}
