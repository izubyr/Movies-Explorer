const API_URL = 'https://api.themoviedb.org/3'
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

function makeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.release_date ? movie.release_date.slice(0, 4) : 'Year unknown',
    posterUrl: movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : null,
    backdropUrl: movie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}` : null,
    overview: movie.overview || '',
  }
}

async function getMovies(path, searchTerm = '') {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY

  if (!apiKey) {
    throw new Error('Add your TMDB API Key to the .env file, then restart the app.')
  }

  const url = new URL(`${API_URL}${path}`)
  url.searchParams.set('language', 'en-US')
  url.searchParams.set('api_key', apiKey)
  if (searchTerm) url.searchParams.set('query', searchTerm)

  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
    },
  })

  if (!response.ok) {
    throw new Error('We could not load movies right now. Check your connection or TMDB API Key and try again.')
  }

  const data = await response.json()
  return data.results.map(makeMovie)
}

export function getPopularMovies() {
  return getMovies('/movie/popular')
}

export function searchMovies(searchTerm) {
  return getMovies('/search/movie', searchTerm)
}
