import { useState } from "react"
import MovieGrid from "../components/MovieGrid"
import StatusMessage from "../components/StatusMessage"


function Search({ movies, loading, error, onSearch, getStatus, onAdd }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [hasSearched, setHasSearched] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    const query = searchTerm.trim()
    if (!query) return
    setHasSearched(true)
    await onSearch(query)
  }

  function clearSearch() {
    setSearchTerm('')
    setHasSearched(false)
    onSearch('')
  }


  return (
    <main className="min-h-screen bg-[#0b1326] px-4 pb-16 pt-24 sm:px-8 sm:pt-32 lg:px-10">
      <div className="relative mx-auto max-w-360">
        <div className="pointer-events-none absolute -left-10 -top-16 -z-10 h-72 w-72 rounded-full bg-[#f59e0b]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 top-40 -z-10 h-64 w-64 rounded-full bg-[#cc003c]/10 blur-3xl" />

        <section className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc174]"><span className="material-symbols-outlined text-base">movie_filter</span> Archive index &amp; global cinema query</p>
            <h1 className="mb-3 font-[Plus_Jakarat_Sans] text-3xl font-bold tracking-tight text-[#dae2fd] sm:text-4xl">Explore the archive</h1>
            <p className="m-0 max-w-xl text-sm leading-6 text-[#d8c3ad]">Search movies by title and find a film to add to your personal collection.</p>
          </div>
          {/* <span className="inline-flex w-fit items-center gap-2 rouunded-full bg-[#222a3d] px-4 py-2 text-xs font-semibold text-[#d8c3ad]"><span className="material-symbols-outlined text-base text-[#38bdf8]">database</span> Powered by TMDB </span> */}
        </section>

        <form className="mb-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#131b2e]/80 p-3 shadow-xl shadow-black/10 backdrop-blur-xl sm:flex-row sm:items-center sm:p-4" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="movie-search">Search movies by title</label>
          <div className="flex min-h-12 flex-1 items-center gap-3 rounded-xl border border-[#a08e7a]/25 bg-[#060e20]/70 px-4 focus-within:border-[#ddc174] focus-within:ring-2 focus-within:ring-[#f59e0b]/20">
            <span className="mterial-symbols-outlined text-[#d8c3ad]">Search</span>
            <input id="movie-search" className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#dae2fd] outline-none placeholder:text-[#94a3b8]" placeholder="Seaarch for a movie title..." type="search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
            {searchTerm && <button className="grid h-8 w-8 place-items-center rounded-full text-[#94a3b8] hover:bg-white/10 hover:text-white" type="button" aria-label="Clear search" onClick={clearSearch}><span className="material-symbols-outlined text-lg"></span></button>}
          </div>
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f59e0b] px-6 py-3 text-sm font-bold text-[#472a00]  transition hover:bg-[#ffc174] disabled:cursor-wait disabled:opacity-60" type="submit" disabled={loading || !searchTerm.trim()}>
            {loading ? 'Searching...' : 'Search movies'}
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </form>

        <section aria-live="polite">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#94a3b8]">{hasSearched ? 'Your search results' : 'Start with a title'}</p>
              <h2 className="mb-0 font-[Plus_Jakarta_Sans] text-xl font-bold text-[#dae2fd] sm:text-2xl">{hasSearched ? `Results for “${searchTerm.trim()}”` : 'What are you in the mood for?'}</h2>
            </div>
            {hasSearched && <button className="text-xs font-semibold text-[#ffc174] underline decoration-[#ffc174]/40 underline-offset-4 hover:text-[#ffddb8]" type="button" onClick={clearSearch}>Clear results</button>}
          </div>
          {error ? (
            <StatusMessage>{error}</StatusMessage>
          ) : loading ? (
            <StatusMessage>Looking through the movie archive...</StatusMessage>
          ) : hasSearched && movies.length === 0 ? (
            <StatusMessage> We could not find a movie with that title. Try another search.</StatusMessage>
          ) : hasSearched ? (
            <MovieGrid movies={movies} getStatus={getStatus} onAdd={onAdd} />
          ) : (
            <StatusMessage>Enter a movie title above to see matching movies.</StatusMessage>
          )}
        </section>
      </div>
    </main>
  )
}

export default Search