'use strict';

function MainController($scope, MovieService) {

    $scope.sendRequest = function() {

        MovieService.getMovies().then(function(response) {
            $scope.movies = response;
        })
    }
}

angular.module('list', [])

.component('list', {
    templateUrl: 'components/movies-list/movies-list.view.html',

})

.controller('moviesCtrl', [
    '$scope',
    'MovieService',
    MainController
]);