(function() {
    angular
        .module('moviesApp')
        .config(['$routeProvider', ($routeProvider) => {
            $routeProvider
                .when('/movies', {
                    templateUrl: 'components/moviesPage/moviesPage.view.html',
                    controller: 'MoviesCtrl'
                })
                .when('/favourites', {
                    templateUrl: 'components/favouritesList/favouritesList.view.html',
                    controller: 'FavouritesCtrl',
                    controllerAs: "$ctrl",
                })
                .when('/login', {
                    templateUrl: 'components/loginPage/loginPage.view.html',
                    controller: 'LoginCtrl',
                    controllerAs: "$ctrl",
                })
                .otherwise({ redirectTo: '/login' });
        }])
        .run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {

            $rootScope.$on('$routeChangeStart', function(event) {

                if (!AuthService.isAuth()) {
                    $location.path('/login');
                }
            });
        }])
})()