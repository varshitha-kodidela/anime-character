import { useState } from "react";
import { ROLES } from "../data/seed";

export default function CharacterForm({ init, animes, onSave, onClose }) {
  const [f, setF] = useState({
    name: "", anime: "", role: "Protagonist", age: "", desc: "", rating: 3,
    ...init,
    tags: (init.tags || []).join(", "),
  });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const ok = f.name.trim() && f.anime.trim();

  const submit = (e) => {
    e.preventDefault();
    if (!ok) return;
    onSave({
      ...f,
      name: f.name.trim(),
      anime: f.anime.trim(),
      age: String(f.age).trim(),
      tags: f.tags.split(",").map((t) => t.trim()).filter(Boolean),
      rating: Number(f.rating),
    });
  };

  return (
    <div className="back" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <form className="modal" onSubmit={submit}>
        <h2>{init.id ? "Edit character" : "Add character"}</h2>
        <label>Name<input value={f.name} onChange={set("name")} autoFocus required /></label>
        <label>Anime<input list="animes" value={f.anime} onChange={set("anime")} required /></label>
        <datalist id="animes">{animes.map((a) => <option key={a} value={a} />)}</datalist>
        <div className="two">
          <label>Role
            <select value={f.role} onChange={set("role")}>{ROLES.map((r) => <option key={r}>{r}</option>)}</select>
          </label>
          <label>Age<input value={f.age} onChange={set("age")} placeholder="e.g. 17" /></label>
        </div>
        <label>Abilities (comma separated)
          <input value={f.tags} onChange={set("tags")} placeholder="Swordsmanship, Fire magic" />
        </label>
        <label>Description<textarea rows="3" value={f.desc} onChange={set("desc")} /></label>
        <div>
          <div className="lbl">Rating</div>
          <div className="rate">
            {[1, 2, 3, 4, 5].map((n) => (
              <button type="button" key={n} aria-label={`${n} stars`} onClick={() => setF({ ...f, rating: n })}>
                {n <= f.rating ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>
        <div className="act end">
          <button type="button" className="btn" onClick={onClose}>Cancel</button>
          <button className="btn primary" disabled={!ok}>Save character</button>
        </div>
      </form>
    </div>
  );
}
