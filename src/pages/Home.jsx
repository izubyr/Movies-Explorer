import { Link } from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import StatusMessage from '../components/StatusMessage'

function Discover({ movies, loading, error, onRetry, getStatus, onAdd }) {
  const featuredMovie = movies[0]

  return (
    <main className="min-h-screen bg-[#0b1326] pt-16 sm:pt-20">
      <section className="relative isolate min-h-137.5 overflow-hidden bg-[#060e20] sm:min-h-155">
        {featuredMovie?.backdropUrl && (
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-50 transition duration-1000"
            style={{ backgroundImage: `url(${featuredMovie.backdropUrl})` }}
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#0b1326] via-[#0b1326]/65 to-[#060e20]/20" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#060e20]/95 via-[#060e20]/70 to-transparent" />
        <div className="pointer-events-none absolute -left-24 -top-24 -z-10 h-96 w-96 rounded-full bg-[#f59e0b]/10 blur-3xl" />

        <div className="mx-auto flex min-h-137.5 max-w-360 items-end px-4 pb-14 pt-12 sm:min-h-155 sm:px-8 sm:pb-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f59e0b] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#472a00]">
                <span className="material-symbols-outlined text-[15px]">local_fire_department</span>
                Popular spotlight
              </span>
              {featuredMovie?.year && <span className="rounded-full border border-white/20 bg-[#0b1326]/60 px-3 py-1.5 text-[10px] font-semibold text-[#dae2fd] backdrop-blur-md">{featuredMovie.year}</span>}
            </div>

            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ffc174]">Your personal movie archive</p>
            <h1 className="mb-5 max-w-3xl font-[Plus_Jakarta_Sans] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {featuredMovie?.title || 'Find your next great movie'}
            </h1>
            <p className="mb-7 max-w-2xl text-sm leading-7 text-[#dae2fd]/80 sm:text-base">
              {featuredMovie?.overview || 'Discover something worth watching, save it for later, and keep your own film history in one place.'}
            </p>

            <div className="flex flex-wrap gap-3">
              {featuredMovie && (
                <button
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#f59e0b] px-5 py-3 text-sm font-bold text-[#472a00] shadow-lg shadow-[#f59e0b]/15 transition hover:bg-[#ffc174] disabled:cursor-default disabled:bg-[#2d3449] disabled:text-[#94a3b8]"
                  type="button"
                  onClick={() => onAdd(featuredMovie)}
                  disabled={getStatus(featuredMovie.id) === 'watchlist' || getStatus(featuredMovie.id) === 'watched'}
                >
                  <span className="material-symbols-outlined text-[19px]">bookmark_add</span>
                  {getStatus(featuredMovie.id) ? 'Already in your collection' : 'Add to watchlist'}
                </button>
              )}
              <Link className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/20 bg-white/6 px-5 py-3 text-sm font-bold text-[#dae2fd] backdrop-blur-md transition hover:border-[#ffc174]/60 hover:text-[#ffc174]" to="/search">
                <span className="material-symbols-outlined text-[19px]">search</span>
                Search movies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-4 pb-16 pt-7 sm:px-8 sm:pt-10 lg:px-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc174]">A few good places to start</p>
            <h2 className="m-0 font-[Plus_Jakarta_Sans] text-2xl font-bold text-[#dae2fd] sm:text-3xl">Popular movies</h2>
          </div>
          <Link className="hidden items-center gap-1 text-xs font-bold text-[#ffc174] transition hover:text-[#ffddb8] sm:inline-flex" to="/search">Find a title <span className="material-symbols-outlined text-base">arrow_forward</span></Link>
        </div>

        {error ? (
          <StatusMessage action={<button className="rounded-lg bg-[#f59e0b] px-4 py-2 text-xs font-bold text-[#472a00]" type="button" onClick={onRetry}>Try again</button>}>{error}</StatusMessage>
        ) : loading ? (
          <StatusMessage>Loading popular movies…</StatusMessage>
        ) : movies.length === 0 ? (
          <StatusMessage>No movies are available right now. Please try again.</StatusMessage>
        ) : (
          <MovieGrid movies={movies.slice(0, 10)} getStatus={getStatus} onAdd={onAdd} />
        )}
      </section>
    </main>
  )
}

export default Discover
