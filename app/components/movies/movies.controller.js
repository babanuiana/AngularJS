'use strict';

function MainController($scope, MovieService) {

    $scope.sendRequest = function() {

        MovieService.getMovies().then(function(response) {
            $scope.movies = response;
        })
    }

}

angular.module('myApp.index', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/movies', {
        templateUrl: 'components/movies/movies.view.html',
        controller: 'moviesCtrl'
    });
}])

.controller('moviesCtrl', [
    '$scope',
    'MovieService',
    MainController
]);