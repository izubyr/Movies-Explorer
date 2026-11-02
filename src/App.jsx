import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import SavedMovies from './pages/SavedMovies'
import NotFound from './pages/NotFound'
import { getPopularMovies, searchMovies } from './app/movies'

const STORAGE_KEY = 'movies-explorer'

function getSavedMovies() {
  try {
    const savedMovies = localStorage.getItem(STORAGE_KEY)
    return savedMovies ? JSON.parse(savedMovies) : []
  } catch {
    return []
  }
}

function App() {
  const [movies, setMovies] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [savedMovies, setSavedMovies] = useState(getSavedMovies)
  const [loading, setLoading] = useState(true)
  const [searchLoading, setSearchLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchError, setSearchError] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedMovies))
  }, [savedMovies])

  async function loadPopularMovies() {
    setLoading(true)
    setError('')
    try {
      const popularMovies = await getPopularMovies()
      setMovies(popularMovies)
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let isActive = true

    getPopularMovies()
      .then((popularMovies) => {
        if (isActive) setMovies(popularMovies)
      })
      .catch((loadError) => {
        if (isActive) setError(loadError.message)
      })
      .finally(() => {
        if (isActive) setLoading(false)
      })

    return () => {
      isActive = false
    }
  }, [])

  async function handleSearch(searchTerm) {
    if (!searchTerm) {
      setSearchResults([])
      setSearchError('')
      setSearchLoading(false)
      return
    }

    setSearchLoading(true)
    setSearchError('')
    try {
      const results = await searchMovies(searchTerm)
      setSearchResults(results)
    } catch (searchProblem) {
      setSearchError(searchProblem.message)
    } finally {
      setSearchLoading(false)
    }
  }

  function addToWatchlist(movie) {
    setSavedMovies((currentMovies) => {
      if (currentMovies.some((savedMovie) => savedMovie.id === movie.id)) return currentMovies
      return [...currentMovies, { ...movie, status: 'watchlist' }]
    })
  }

  function markAsWatched(movieId) {
    setSavedMovies((currentMovies) => currentMovies.map((movie) => (
      movie.id === movieId ? { ...movie, status: 'watched' } : movie
    )))
  }

  function getStatus(movieId) {
    return savedMovies.find((movie) => movie.id === movieId)?.status
  }

  const watchlistMovies = savedMovies.filter((movie) => movie.status === 'watchlist')
  const watchedMovies = savedMovies.filter((movie) => movie.status === 'watched')

  return (
    <div className="min-h-screen bg-[#0b1326]">
      <Navbar watchlistCount={watchlistMovies.length} watchedCount={watchedMovies.length} />
      <Routes>
        <Route path="/" element={<Home movies={movies} loading={loading} error={error} onRetry={loadPopularMovies} getStatus={getStatus} onAdd={addToWatchlist} />} />
        <Route path="/search" element={<Search movies={searchResults} loading={searchLoading} error={searchError} onSearch={handleSearch} getStatus={getStatus} onAdd={addToWatchlist} />} />
        <Route path="/watchlist" element={<SavedMovies title="Watchlist" eyebrow="For a night in" movies={watchlistMovies} emptyMessage="Your watchlist is empty. Search for a movie and save it for later." getStatus={getStatus} onMarkWatched={markAsWatched} />} />
        <Route path="/watched" element={<SavedMovies title="Watched history" eyebrow="Already seen" movies={watchedMovies} emptyMessage="No watched movies yet. Mark one from your Watchlist as watched and it will show up here." watched getStatus={getStatus} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
