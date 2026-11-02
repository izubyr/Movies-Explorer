import MovieCard from './MovieCard'

function MovieGrid( {movies, getStatus, onAdd, onMarkWatched }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
            <MovieCard
            key={movie.id}
            movie={movie}
            status={getStatus ? getStatus(movie.id) : null}
            onAdd={onAdd}
            onMarkWatched={onMarkWatched}
            />
        ))}
    </div>
  )
}

export default MovieGrid