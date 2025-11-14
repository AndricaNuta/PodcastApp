## PodcastApp – React Native client (WIP)

This is the **mobile frontend** of a podcast discovery product, built with **React Native + TypeScript**.  
The goal of the project is to explore a realistic, product-style flow: getting personalized podcast
recommendations from a backend I control, browsing them, and searching the catalogue.

### What’s implemented so far

- **Typed navigation & screens**
  - `HomeScreen`, `SearchScreen`, `ProfileScreen` under `screens/`
  - Central navigation setup in `navigation/` using TypeScript types for safety

- **Recommendations feed (HomeScreen)**
  - Fetches podcast recommendations from the backend (`/podcasts/recommendations`) using `axios`
  - Loading state handled with `useState` + conditional rendering
  - Renders a list of recommendation cards via `FlatList` (proper keys, simple card layout)

- **Search experience (SearchScreen)**
  - Text input with submit handling
  - Calls `/podcasts/search?query=` on the backend and displays results in a list
  - Clear separation between UI state (`query`, `results`) and network logic

- **TypeScript-first setup**
  - Strict TS config (`tsconfig.json`)
  - Typed components and props for better DX and fewer runtime errors

- **Local development friendly**
  - API base URL currently targets `http://127.0.0.1:5002`, ideal for iterating with the Express backend

