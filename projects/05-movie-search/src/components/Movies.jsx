
export function Movies({ movies }) {

    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMovies />
    )
}

function ListOfMovies({ movies }) {

    return (
        <ul className="movies">
            {
                movies.map(movie => (
                    <li className="movie" key={movie.id}>
                        <h3>{movie.title} </h3>
                        <p>{movie.year}</p>
                        <img src={movie.poster} alt={movie.Title} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMovies() {
    return (
        <p>No Movies were found</p>
    )
}

