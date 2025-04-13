const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {

    if (search === '') return null

    if (search) {
        return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(json => {
                const movies = json.Search
                return movies?.map(movie => (
                    {
                        id: movie.imdbID,
                        title: movie.Title,
                        year: movie.Year,
                        poster: movie.Poster
                    }
                ))
            }).catch(e => {
                throw new Error('Error searching movies: ' + e)
            })
    }
} 