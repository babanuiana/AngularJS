'use strict';

function MainController($scope, $http) {

    const key = 'fc298428bb77d2a10fb5e0bc411eb836';
    const API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
    const movieDetails = "https://api.themoviedb.org/3/movie/";
    const test = API + key;

    console.log('test', test);

    $scope.sendRequest = function() {
        $http.get(test)
            .then(function(response) {
                $scope.movies = response.data.results;
            }, function(reason) {
                // error
            });
    }

    $scope.movieDetails = function(movie) {

        const movieId = movie.id;
        const lang = '?api_key=fc298428bb77d2a10fb5e0bc411eb836&language=en-US';
        const url = movieDetails + movieId + lang;

        $http.get(url)
            .then(function(response) {
                console.log(response);
            });
    }
}

angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/movies', {
        templateUrl: 'moviesPage/index.html',
        controller: 'moviesCtrl'
    });
}])

.controller('moviesCtrl', [
    '$scope',
    '$http',
    MainController
]);