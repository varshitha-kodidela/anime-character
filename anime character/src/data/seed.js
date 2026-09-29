export const ROLES = ["Protagonist", "Antagonist", "Supporting"];

const mk = (id, name, anime, role, age, rating, tags, desc, fav = false) => ({
  id, name, anime, role, age, rating, tags, desc, fav,
});

export const SEED = [
  mk(1, "Monkey D. Luffy", "One Piece", "Protagonist", "19", 5, ["Rubber body", "Haki"], "Cheerful captain of the Straw Hat Pirates, sailing to become Pirate King.", true),
  mk(2, "Naruto Uzumaki", "Naruto", "Protagonist", "17", 5, ["Shadow clones", "Rasengan"], "An outcast ninja who earns the village's respect through sheer persistence."),
  mk(3, "Edward Elric", "Fullmetal Alchemist", "Protagonist", "15", 4, ["Alchemy", "Automail"], "A prodigy alchemist searching for a way to restore his and his brother's bodies.", true),
  mk(4, "Light Yagami", "Death Note", "Antagonist", "17", 4, ["Genius", "Manipulation"], "A top student who finds a notebook that kills and decides to remake the world."),
  mk(5, "Levi Ackerman", "Attack on Titan", "Supporting", "30", 5, ["ODM gear", "Swordsmanship"], "Humanity's strongest soldier: blunt, precise and obsessively clean."),
  mk(6, "Satoru Gojo", "Jujutsu Kaisen", "Supporting", "28", 5, ["Limitless", "Six Eyes"], "A playful teacher and the strongest sorcerer of his generation."),
  mk(7, "Frieren", "Sousou no Frieren", "Protagonist", "1000+", 5, ["Magic", "Long lifespan"], "An elf mage learning what her human companions meant to her after they're gone.", true),
  mk(8, "Anya Forger", "Spy x Family", "Supporting", "6", 4, ["Telepathy"], "A mind-reading child who holds a spy and an assassin together as a family."),
];
