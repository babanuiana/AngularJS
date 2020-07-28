angular.module('moviesApp', [
    'ngRoute',
    'list',
    'moviesPage',
    'moviesApp.version'
]).

config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/movies' });
}]);