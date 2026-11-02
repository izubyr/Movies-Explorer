# 🎬 Movies Explorer

A responsive movie discovery app for browsing popular films, searching by title, saving movies to a watchlist, and keeping track of what you have watched.

---

## 🍿 Overview

**Movies Explorer** uses data from The Movie Database (TMDB) to help you find something to watch and organize your personal movie list. Search results and saved movies are kept separate, so searching for another title does not replace your watchlist.

The interface uses a dark, cinema-inspired design with navy surfaces, amber highlights, movie posters, and responsive layouts for desktop and mobile screens.

### 🌟 Key Features

- **Popular movies:** Loads an initial collection of popular films from TMDB.
- **Title search:** Search the TMDB movie catalog by title and view matching results.
- **Personal watchlist:** Save movies to watch later. A movie cannot be added more than once.
- **Watched history:** Mark a watchlist movie as watched and see it in a separate view.
- **Persistent collection:** Saves watchlist and watched movies in the browser using `localStorage`.
- **Movie information:** Shows each movie’s title, release year when available, poster, and overview.
- **Fallback states:** Displays messages for loading, failed requests, missing posters, empty lists, and searches with no matches.
- **Responsive design:** Adapts the layout for narrow and wide screens.
- **Separate views:** Explore, Search, Watchlist, and Watched pages use React Router.

---

## 🧰 Built With

- **React** — builds the interface from reusable components.
- **JavaScript** — handles movie data and user interactions.
- **Vite** — runs the development server and creates production builds.
- **Tailwind CSS v4** — styles the interface with utility classes in the JSX.
- **React Router** — provides navigation between the app’s pages.
- **TMDB API** — supplies popular movie data, search results, posters, and backdrops.
- **Browser localStorage** — keeps the saved collection after a page refresh.

---


## 📂 Project Structure

```text
Movies-Explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   └── movies.js
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── Navbar.jsx
│   │   └── StatusMessage.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Search.jsx
│   │   ├── SavedMovies.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🚀 Run Locally

### Requirements

- Node.js 22.12 or newer
- A TMDB API Key (v3 auth)

### Setup

1. Clone the repository and open the project folder in a terminal.
2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your TMDB API key:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal.

Restart the Vite server after changing `.env`.

### Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm test         # Run the repository's current automated tests
```

---

## 🔐 API Key Notes

Vite exposes variables beginning with `VITE_` in the browser bundle. This makes the API key visible to people using the deployed app, so only use a TMDB key allowed for frontend use.

Keep your real `.env` file out of GitHub. Add a blank `.env.example` file to the repository as a setup template:

```env
VITE_TMDB_API_KEY=
```

Do not put your real API key in `.env.example`, screenshots, or README files.

---


## ⚠️ Known Limitations

- Saved movies are stored in one browser and do not sync across devices.
- Clearing browser storage removes the saved collection.
- The app does not have user accounts, a database, or a custom backend.
- Movie availability and images depend on the TMDB API and network connection.
- The app currently focuses on movie discovery, searching, watchlist management, and watched history.

---

## 🙏 Credits

Movie information and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

> This product uses the TMDB API but is not endorsed or certified by TMDB.

See TMDB’s [API attribution guidance](https://developer.themoviedb.org/docs/faq).

---

## 📸 Screenshots and Demo

Add a screenshot of the app and your deployed URL here before submitting.

- **Live demo:** Add your Vercel URL
- **GitHub repository:** Add your repository URL
