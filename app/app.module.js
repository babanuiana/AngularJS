(function() {

    angular
        .module('moviesApp', [
            'ngRoute',
            'list',
            'moviesPage',
            'login',
            'loginPage',
        ])
        .config(['$locationProvider', '$routeProvider', ($locationProvider, $routeProvider) => {
            $locationProvider.hashPrefix('!');

            $routeProvider.otherwise({ redirectTo: '/login' });
        }]);
})()