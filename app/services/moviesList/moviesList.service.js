(function() {
    angular
        .module('services.movies', [])
        .service('MovieService', function($http) {
            this.getMovies = (type) => {
                const GET_MOVIES = `https://api.themoviedb.org/3/movie/${type}?api_key=fc298428bb77d2a10fb5e0bc411eb836`;
                return $http
                    .get(GET_MOVIES)
                    .then((response) => response.data.results.map((movie) => ({
                        posterPath: `${IMAGE_URL}${movie.poster_path}`,
                    })))
            }
        })
})()