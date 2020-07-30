angular
    .module('list')
    .service('MovieService', function($http) {
        this.getMovies = (type) => {
            return $http
                .get(`https://api.themoviedb.org/3/movie/${type}?api_key=fc298428bb77d2a10fb5e0bc411eb836`)
                .then((response) => {
                    return response.data.results;
                })
        }

    })