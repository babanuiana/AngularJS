'use strict';

// https://api.themoviedb.org/3/movie/now_playing?api_key=fc298428bb77d2a10fb5e0bc411eb836
angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
    });
}])

.controller('View1Ctrl', ['$scope', '$http', function($scope, $http) {

    $scope.sendRequest = function() {
        $http.get("https://api.themoviedb.org/3/movie/now_playing?api_key=fc298428bb77d2a10fb5e0bc411eb836")
            .then(function(response) {
                $scope.movies = response.data.results;
                console.log(response.data.results);
            });
    }

}]);