'use strict';

// https://api.themoviedb.org/3/movie/now_playing?api_key=fc298428bb77d2a10fb5e0bc411eb836
angular.module('myApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/movies', {
        templateUrl: 'moviesPage/index.html',
        controller: 'moviesCtrl'
    });
}])

.controller('moviesCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.sendRequest = function() {
        $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=fc298428bb77d2a10fb5e0bc411eb836")
            .then(function(response) {
                $scope.movies = response.data.results;
                console.log(response.data.results);
            });
    }

}]);