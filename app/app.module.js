'use strict';

import moviesPage from 'app/components/movies-page/movies-page.controller.js';

angular.module('myApp', [
    'ngRoute',
    'list',
    moviesPage,
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/movies' });
}]);