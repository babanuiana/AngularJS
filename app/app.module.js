angular.module('moviesApp', [
    'ngRoute',
    'list',
    'moviesPage',
]).

config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/movies' });
}]);