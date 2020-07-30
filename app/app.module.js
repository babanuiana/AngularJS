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

            console.log(AuthService.isAuth());
            // if (!AuthService.isAuth()) {
            //     event.preventDefault();
            //     $location.path('/login');
            // } else {
            //     $location.path('/movies');
            // }

        });
    }])


})()