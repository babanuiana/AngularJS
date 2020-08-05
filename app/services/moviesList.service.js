(function() {
    angular
        .module('services.movies', [])
        .service('MovieService', function($http) {
            const imageURL = 'http://image.tmdb.org/t/p/original/';
            this.getMovies = (type) => {
                const MOVIES = `https://api.themoviedb.org/3/movie/${type}?api_key=fc298428bb77d2a10fb5e0bc411eb836`;
                return $http
                    .get(MOVIES)
                    .then((response) => response.data.results.map((movie) => ({
                        posterPath: `${imageURL}${movie.poster_path}`,
                    })))
                    .catch((response) => alert('Error:', response.status))

            }
        })
})()