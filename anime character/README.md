# Anime Character Manager

React + Vite frontend with a sakura theme.

## Run
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Structure
```
src/
  App.jsx                    page layout, filtering and sorting
  hooks/useCharacters.js     data layer (localStorage) -- swap for API calls here
  data/seed.js               roles and sample characters
  components/
    CharacterCard.jsx  CharacterForm.jsx  FilterBar.jsx  Petals.jsx
  styles.css                 sakura theme (light + dark)
```

## Connecting a backend
Replace the body of `useCharacters.js` with fetch calls (GET/POST/PUT/DELETE
`/api/characters`). The components do not need to change.
