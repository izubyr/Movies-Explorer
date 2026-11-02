import { Link } from 'react-router-dom'
import MovieGrid from '../components/MovieGrid'
import StatusMessage from '../components/StatusMessage'

function SavedMovies({ title, eyebrow, movies, emptyMessage, watched = false, getStatus, onAdd, onMarkWatched }) {
    return (
        <main className="min-h-screen bg-[#0b1326] px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:px-10">
            <div className="mx-auto max-w-360">
                <section className="relative mb-10 overflow-hidden rounded-2xl border border-white/8 bg-linear-to-r from-[#060e20] via-[#131b2e] to-[#222a3d] p-6 shadow-xl shadow-black/20 sm:p-10">
                    <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full bg-[#f59e0b]/10 blur-3xl" />
                    <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffc174]"><span className="material-symbols-outlined text-base">{watched ? 'visibility' : 'bookmark'}</span>{eyebrow}</p>
                            <h1 className="mb-3 font-Plus_Jakarta_Sans] text-4xl font-extrabold tracking-tight text-[#dae2fd] sm:text-5xl">{title}</h1>
                            <p className="m-0 text-sm leading-6 text-[#d8c3ad]">{watched ? 'A little archive of the stories you have already seen.' : 'Keep the films you want to watch together in one place.'}</p>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0b1326]/55 px-4 py-3 backdrop-blur-md">
                            <span className="font-[Plus_Jakarta_Sans] text-3xl font-bold text-[#ffc174]">{movies.length.toString().padStart(2, '0')}</span>
                            <span className="text-[10px] font-bold uppercase leading-4 tracking-[0.15em] text-[#94a3b8]">{movies.length === 1 ? 'film' : 'films'}<br />{watched ? 'watched' : 'saved'}</span>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="mb-5 flex items-end justify-between gap-3">
                        <div>
                            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffc174]">Your collection</p>
                            <h2 className="m-0 font-[Plus_Jakarta_Sans] text-xl font-bold text-[#dae2fd] sm:text-2xl">{movies.length ? (watched ? 'Watched history' : 'Plan to watch') : 'A shelf with room to grow'}</h2>
                        </div>
                        <Link className="inline-flex items-center gap-1 text-xs font-bold text-[#ffc174] transition hover:text-[#ffddb8]" to="/search">
                            Find a film
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    </div>

                    {movies.length === 0 ? (
                        <StatusMessage>{emptyMessage}</StatusMessage>
                    ) : (
                        <MovieGrid movies={movies} getStatus={getStatus} onAdd={onAdd} onMarkWatched={onMarkWatched} />
                    )}
                </section>
            </div>
        </main>
    )
}

export default SavedMovies
