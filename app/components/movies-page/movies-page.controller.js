function MainController($scope) {

    $scope.hello = function() {

        console.log('hello');
    }
}

angular.module('moviesPage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'components/movies-page/movies-page.view.html',
        controller: 'moviesPageController'
    });
}])

.controller('moviesPageController', [
    '$scope',
    MainController
]);