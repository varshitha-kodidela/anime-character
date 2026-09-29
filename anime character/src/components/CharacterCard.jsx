import { useState } from "react";

const hue = (s) => 320 + ([...s].reduce((a, c) => a + c.charCodeAt(0), 0) % 40);
const initials = (n) => n.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

export default function CharacterCard({ c, onFav, onEdit, onDelete }) {
  const [ask, setAsk] = useState(false);
  const h = hue(c.name);
  return (
    <article className={`card ${c.role}`}>
      <div className="top">
        <div className="av" style={{ background: `linear-gradient(135deg,hsl(${h} 75% 66%),hsl(${h + 20} 65% 48%))` }}>
          {initials(c.name)}
        </div>
        <div className="meta">
          <h3>{c.name}</h3>
          <p>{c.anime}</p>
        </div>
        <button className={`fav${c.fav ? " on" : ""}`} onClick={() => onFav(c.id)}
          aria-label={c.fav ? "Remove from favorites" : "Add to favorites"}>
          {c.fav ? "♥" : "♡"}
        </button>
      </div>
      <div className="row">
        <span className="badge">{c.role}</span>
        {c.age && <span className="badge plain">Age {c.age}</span>}
        <span className="stars" aria-label={`${c.rating} out of 5`}>{"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}</span>
      </div>
      <p className="desc">{c.desc || "No description yet."}</p>
      <div className="row">{c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
      <div className="act">
        {ask ? (
          <>
            <span>Delete {c.name}?</span>
            <button className="btn danger" onClick={() => onDelete(c.id)}>Delete</button>
            <button className="btn" onClick={() => setAsk(false)}>Keep</button>
          </>
        ) : (
          <>
            <button className="btn" onClick={() => onEdit(c)}>Edit</button>
            <button className="btn" onClick={() => setAsk(true)}>Delete</button>
          </>
        )}
      </div>
    </article>
  );
}
