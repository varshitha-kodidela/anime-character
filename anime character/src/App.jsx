import { useMemo, useState } from "react";
import useCharacters from "./hooks/useCharacters";
import Petals from "./components/Petals";
import FilterBar from "./components/FilterBar";
import CharacterCard from "./components/CharacterCard";
import CharacterForm from "./components/CharacterForm";

const DEFAULT_FILTERS = { q: "", anime: "All", role: "All", sort: "name", favOnly: false };

export default function App() {
  const { chars, save, remove, toggleFav, reset } = useCharacters();
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [editing, setEditing] = useState(null); // null | {} (new) | character

  const animes = useMemo(() => [...new Set(chars.map((c) => c.anime))].sort(), [chars]);

  const shown = useMemo(() => {
    const { q, anime, role, sort, favOnly } = filters;
    const s = q.toLowerCase();
    return chars
      .filter((c) =>
        (anime === "All" || c.anime === anime) &&
        (role === "All" || c.role === role) &&
        (!favOnly || c.fav) &&
        (!s || [c.name, c.anime, ...c.tags].join(" ").toLowerCase().includes(s)))
      .sort((a, b) =>
        sort === "rating" ? b.rating - a.rating
        : sort === "anime" ? a.anime.localeCompare(b.anime)
        : a.name.localeCompare(b.name));
  }, [chars, filters]);

  const handleSave = (c) => { save(c); setEditing(null); };

  return (
    <>
      <Petals />
      <div className="wrap">
        <header>
          <div>
            <h1>Anime Character Manager</h1>
            <p className="sub">A quiet garden for the characters you love.</p>
          </div>
          <button className="btn primary" onClick={() => setEditing({})}>Add character</button>
        </header>

        <div className="stats">
          <span><b>{chars.length}</b>characters</span>
          <span><b>{animes.length}</b>series</span>
          <span><b>{chars.filter((c) => c.fav).length}</b>favorites</span>
        </div>

        <FilterBar filters={filters} onChange={setFilters} animes={animes} />

        <div className="grid">
          {shown.length ? (
            shown.map((c) => (
              <CharacterCard key={c.id} c={c} onFav={toggleFav} onEdit={setEditing} onDelete={remove} />
            ))
          ) : (
            <div className="empty">No characters match. Clear the filters or add a new character.</div>
          )}
        </div>

        <footer><button onClick={reset}>Reset to sample data</button></footer>
      </div>

      {editing && (
        <CharacterForm init={editing} animes={animes} onSave={handleSave} onClose={() => setEditing(null)} />
      )}
    </>
  );
}
