(function() {

    angular
        .module('moviesApp', [
            'ngRoute',
            'list',
            'moviesPage',
            'login',
            'loginPage',
        ])
        .config(['$routeProvider', ($routeProvider) => {

            $routeProvider
                .when('/movies', {
                    templateUrl: 'components/moviesPage/moviesPage.view.html',
                    authenticated: true
                })
                .when('/login', {
                    templateUrl: 'components/loginPage/loginPage.view.html',
                })
                .otherwise({ redirectTo: '/login' });
        }])
        .run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {

            $rootScope.$on('$routeChangeStart', function(event) {

                if (!AuthService.isAuth()) {
                    $location.path('/login');
                } else {
                    $location.path('/movies');
                }
            });
        }])
})()