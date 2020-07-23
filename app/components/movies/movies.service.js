angular.module('myApp.index')


.service('MovieService', function($http) {
    return {
        getMovies: function() {
            return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=fc298428bb77d2a10fb5e0bc411eb836')
                .then(function(response) {
                    console.log(response);
                    return response.data.results;
                })
        }
    }

})