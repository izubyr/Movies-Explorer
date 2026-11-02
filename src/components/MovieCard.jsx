function MovieCard({ movie, status, onAdd, onMarkWatched }) {
    const alreadySaved = status === 'watchlist' || status === 'watched'
    return (
        <article className="group overflow-hidden rounded-2xl border border-white/8 bg-white/3 transition duration-300 hover:-translate-y-1 hover:border-[#f59e0b]/40 hover:shadow-[0_12px_32px_-8px_rgba(245,158,11,0.15)]">
            <div className="relative aspect-2/3 overflow-hidden bg-[#131b2e]">
                {movie.posterUrl ? (
                    <img className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={movie.posterUrl} alt={`${movie.title} poster`} loading="lazy" />
                ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-3 bg-linear-to-br from-[#222a3d] text-center text-sm text-[#94a3b8]">
                        <span className="material-symbol-outlined text-4xl text-[#ffc174]">movie</span>
                        <span className="px-3">Poster unavailable</span>
                    </div>
                )}

                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-[#060e20] via-[#060e20]/60 to-transparent opacity-90" />
                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-[#0b1326]/85 px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#dae2fd] backdrop-blur-md">{movie.year}</span>
                {status === 'watched' && <span className="absolute right-3 top-3 rounded-full bg-[#f59e0b] px-2.5 py-1 text-[10px] font-bold text-[#472a00]">Watched</span>}

                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <h2 className="mb-2 line-clamp-2 font-[Plus_Jakarta_Sans] text-sm font-bold leading-snug text-white sm:text-base">{movie.title}</h2>
                    {movie.overview && <p className="mb-3 line-clamp-2 text-[11px] leading-relaxed text-[#dae2fd]/75">{movie.overview}</p>}
                    {onAdd && (
                        <button
                            className="flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg border-[#cc003c]/40 bg-[#cc003c]/15 px-3 py-2 text-[11px] font-bold text-[#ffb3b6] transition hover:bg-[#cc003c] hover:text-white disabled:cursor-default disabled:border-white/10 disabled:bg-white/10 disabled:text-[#94a3b8]"
                            type="button"
                            onClick={() => onAdd(movie)}
                            disabled={alreadySaved}
                        >
                            <span className="material-symbols-outlined text-[16px]">{status === 'watched' ? 'check_circle' : alreadySaved ? 'bookmark_added' : 'bookmark_add'}</span>
                            {status === 'watched' ? 'Already watched' : alreadySaved ? 'In your watchlist' : 'Add to watchlist'}
                        </button>
                    )}
                    {onMarkWatched && (
                        <button
                            className="flex min-h-9 w-full items-center justify-center gap-1.5 rounded-lg bg-[#f59e0b] px-3 py-2 text-[11px] font-bold text-[#472a00] transition hover:bg-[#ffc174]"
                            type="button"
                            onClick={() => onMarkWatched(movie.id)}
                        >
                            <span className="material-symbols-outlined text-[16px]">visibility</span>
                            Mark as watched
                        </button>
                    )}
                </div>
            </div>
        </article>
    )
}

export default MovieCard