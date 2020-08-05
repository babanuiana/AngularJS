(function() {
    angular
        .module('moviesApp')
        .config(['$routeProvider', ($routeProvider) => {

            $routeProvider
                .when('/movies', {
                    templateUrl: 'components/moviesPage/moviesPage.view.html',
                    controller: 'MoviesCtrl',
                    controllerAs: "$ctrl",

                    resolve: {
                        access: ["AuthService", function(AuthService) { return AuthService.isAuth(); }],
                    }
                })
                .when('/favourites', {
                    templateUrl: 'components/favouritesList/favouritesList.view.html',
                    controller: 'FavouritesCtrl',
                    controllerAs: "$ctrl",
                    resolve: {
                        access: ["AuthService", function(AuthService) { return AuthService.isAuth(); }],
                    }
                })
                .when('/login', {
                    templateUrl: 'components/loginPage/loginPage.view.html',
                    controller: 'LoginCtrl',
                    controllerAs: "$ctrl",
                })
                .otherwise({ redirectTo: '/movies' });
        }])
        .run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {

            $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {
                if (rejection) {
                    $location.path("/login");

                } else {
                    // console.log(previous, current, event);
                }
            });
        }])
})()