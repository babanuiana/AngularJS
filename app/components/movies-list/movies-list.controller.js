'use strict';

function MainController($scope, MovieService) {

    const $ctrl = this;
    console.log('type', $ctrl.type);

    $scope.sendRequest = function() {
        MovieService.getMovies().then(function(response) {
            $scope.movies = response;
        })
    }
}

angular.module('list', [])

.component('list', {
    templateUrl: 'components/movies-list/movies-list.view.html',
    bindings: {
        type: '<',
    }

})

// .directive('type', function($scope) {
//     return {
//         controller: function($attrs) {
//             $scope.type = $attrs.type
//         }
//     }
// })

.controller('moviesCtrl', [
    '$scope',
    'MovieService',
    MainController
]);