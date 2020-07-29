angular
    .module('moviesPage', ['ngRoute'])
    .component('moviesPage', {
        templateUrl: 'components/moviesPage/moviesPage.view.html',
        controller: () => {}

    })
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/movies', {
            templateUrl: 'components/moviesPage/moviesPage.view.html',
        });
    }])