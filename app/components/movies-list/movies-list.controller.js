'use strict';

class ListController {
    sendRequest() {
        movieService.getMovies()
            .then(function (response) {
                $scope.movies = response;
            })
    }

    $onInit() {
        console.log('type', this.type);
        sendRequest();
    }
}

angular.module('list', [])
    .component('list', {
        templateUrl: 'components/movies-list/movies-list.view.html',
        bindings: {
            type: '@',
        },
        controller: ListController
    });

// .directive('type', function($scope) {
//     return {
//         controller: function($attrs) {
//             $scope.type = $attrs.type
//         }
//     }
// })

// .controller('moviesCtrl', [
//     '$scope',
//     'MovieService',
//     MainController
// ]);