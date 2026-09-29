import { useEffect, useState } from "react";
import { SEED } from "../data/seed";

const KEY = "anime-characters-v1";

const load = () => {
  try {
    const s = localStorage.getItem(KEY);
    return s ? JSON.parse(s) : SEED;
  } catch {
    return SEED;
  }
};

/**
 * Data layer for characters. Everything the UI needs goes through here,
 * so swapping localStorage for a REST API later only touches this file.
 */
export default function useCharacters() {
  const [chars, setChars] = useState(load);

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(chars)); } catch { /* storage unavailable */ }
  }, [chars]);

  const save = (c) =>
    setChars((p) =>
      c.id
        ? p.map((x) => (x.id === c.id ? { ...x, ...c } : x))
        : [{ ...c, id: Date.now(), fav: false }, ...p]
    );
  const remove = (id) => setChars((p) => p.filter((x) => x.id !== id));
  const toggleFav = (id) => setChars((p) => p.map((x) => (x.id === id ? { ...x, fav: !x.fav } : x)));
  const reset = () => setChars(SEED);

  return { chars, save, remove, toggleFav, reset };
}
