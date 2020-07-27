angular
    .module('list')
    .service('MovieService', function($http) {
        this.getMovies = function(type) {
            return $http
                .get(`https://api.themoviedb.org/3/movie/${type}?api_key=fc298428bb77d2a10fb5e0bc411eb836`)
                .then(function(response) {
                    return response.data.results;
                })
        }

    })