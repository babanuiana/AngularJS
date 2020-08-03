(function() {
    angular
        .module('moviesApp')
        .config(['$routeProvider', ($routeProvider, $locationProvider) => {
            $locationProvider.html5Mode(true);
            $routeProvider
                .when('/movies', {
                    templateUrl: 'components/moviesPage/moviesPage.view.html',
                    controller: 'MoviesCtrl',
                    resolve: {
                        //This function is injected with the AuthService where you'll put your authentication logic
                        'auth': function(AuthService) {
                            return AuthService.isAuth();
                        }
                    }
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

            $rootScope.$on('$routeChangeError', function(event, current, previous, rejection) {

                if (rejection === 'Not Authenticated') {
                    $location.path('/login');
                }
            });
        }])
})()